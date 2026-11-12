import {
  monthName,
  tradeFieldValue,
  type FilterField,
  type Trade,
} from "@/lib/journal/model";

export type JournalStats = {
  total: number;
  winrate: number | null;
  count: number;
  average: number | null;
  profitFactor: number | null;
  avgSl: number | null;
  avgFvg: number | null;
  avgDist: number | null;
  wins: number;
  losses: number;
  bes: number;
};

export type BreakdownRow = {
  label: string;
  value: string;
  profit: number;
  count: number;
  wins: number;
  winrate: number;
};

export type Breakdown = {
  title: string;
  field: FilterField;
  rows: BreakdownRow[];
};

export type EquityPoint = {
  label: string;
  equity: number;
};

function round(n: number, digits: number): number {
  const p = 10 ** digits;
  return Math.round(n * p) / p;
}

const emptyStats: JournalStats = {
  total: 0,
  winrate: null,
  count: 0,
  average: null,
  profitFactor: null,
  avgSl: null,
  avgFvg: null,
  avgDist: null,
  wins: 0,
  losses: 0,
  bes: 0,
};

export function computeStats(trades: Trade[]): JournalStats {
  const count = trades.length;
  if (count === 0) return emptyStats;
  const wins = trades.filter((trade) => trade.result === "Win").length;
  const losses = trades.filter((trade) => trade.result === "Lose").length;
  const bes = trades.filter((trade) => trade.result === "BE").length;
  const raw = trades.reduce((sum, trade) => sum + trade.profitPct, 0);
  const grossWin = trades.reduce((sum, trade) => sum + (trade.profitPct > 0 ? trade.profitPct : 0), 0);
  const grossLoss = Math.abs(
    trades.reduce((sum, trade) => sum + (trade.profitPct < 0 ? trade.profitPct : 0), 0),
  );
  return {
    total: round(raw, 2),
    winrate: round((wins / count) * 100, 1),
    count,
    average: round(raw / count, 2),
    profitFactor: grossLoss > 0 ? round(grossWin / grossLoss, 2) : null,
    avgSl: round(trades.reduce((sum, trade) => sum + trade.slPips, 0) / count, 1),
    avgFvg: round(trades.reduce((sum, trade) => sum + trade.fvgPips, 0) / count, 1),
    avgDist: round(trades.reduce((sum, trade) => sum + trade.distLiquidity, 0) / count, 1),
    wins,
    losses,
    bes,
  };
}

function group(
  trades: Trade[],
  field: FilterField,
  labelOf: (trade: Trade) => string,
): BreakdownRow[] {
  const buckets = new Map<string, Trade[]>();
  for (const trade of trades) {
    const value = tradeFieldValue(trade, field);
    const list = buckets.get(value) ?? [];
    list.push(trade);
    buckets.set(value, list);
  }
  const rows: BreakdownRow[] = [];
  for (const [value, list] of buckets) {
    const wins = list.filter((trade) => trade.result === "Win").length;
    const profit = round(
      list.reduce((sum, trade) => sum + trade.profitPct, 0),
      2,
    );
    rows.push({
      label: labelOf(list[0] as Trade),
      value,
      profit,
      count: list.length,
      wins,
      winrate: list.length ? (wins / list.length) * 100 : 0,
    });
  }
  rows.sort(
    (a, b) => b.count - a.count || b.profit - a.profit || a.label.localeCompare(b.label, "ro"),
  );
  return rows;
}

export function buildBreakdowns(trades: Trade[]): Breakdown[] {
  const years = new Set(trades.map((trade) => trade.date.slice(0, 4)));
  const multi = years.size > 1;
  const specs: { title: string; field: FilterField }[] = [
    { title: "Setup", field: "setup" },
    { title: "Lichiditate", field: "liquidity" },
    { title: "Ziua săptămânii", field: "weekday" },
    { title: "Ora", field: "hour" },
    { title: "Luna", field: "month" },
    { title: "Direcție", field: "direction" },
    { title: "MSS", field: "mss" },
    { title: "Re-entry", field: "reentry" },
    { title: "Mutat la BE", field: "movedToBe" },
    { title: "Emoții", field: "emotions" },
    { title: "Instrument", field: "instrument" },
  ];
  return specs.map((spec) => ({
    title: spec.title,
    field: spec.field,
    rows: group(trades, spec.field, (trade) => {
      const value = tradeFieldValue(trade, spec.field);
      return spec.field === "month" ? monthName(value, multi) : value;
    }),
  }));
}

export function equitySeries(trades: Trade[]): EquityPoint[] {
  const sorted = [...trades].sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
  let run = 0;
  const points: EquityPoint[] = [{ label: "Start", equity: 0 }];
  for (const trade of sorted) {
    run += trade.profitPct;
    const [, m, d] = trade.date.split("-");
    points.push({
      label: `${trade.instrument} · ${d}.${m}`,
      equity: round(run, 2),
    });
  }
  return points;
}

export function uniqueValues(trades: Trade[], field: FilterField): string[] {
  return [...new Set(trades.map((trade) => tradeFieldValue(trade, field)))].sort((a, b) =>
    a.localeCompare(b, "ro"),
  );
}
