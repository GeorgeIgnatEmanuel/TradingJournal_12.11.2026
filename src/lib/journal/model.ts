export type Result = "Win" | "Lose" | "BE";
export type Direction = "Buy" | "Sell";
export type YesNo = "Da" | "Nu";
export type ViewId = "dashboard" | "trades";

export type FilterField =
  | "instrument"
  | "setup"
  | "liquidity"
  | "weekday"
  | "hour"
  | "month"
  | "direction"
  | "mss"
  | "reentry"
  | "movedToBe"
  | "emotions";

export type JournalFilter = { kind: "all" } | { kind: "field"; field: FilterField; value: string };

export type Trade = {
  id: string;
  instrument: string;
  direction: Direction;
  result: Result;
  profitPct: number;
  date: string;
  time: string;
  setup: string;
  liquidity: string;
  mss: string;
  reentry: YesNo;
  movedToBe: YesNo;
  emotions: YesNo;
  slPips: number;
  fvgPips: number;
  distLiquidity: number;
  note: string;
};

export const WEEKDAYS = [
  "Duminică",
  "Luni",
  "Marți",
  "Miercuri",
  "Joi",
  "Vineri",
  "Sâmbătă",
] as const;

export const MONTHS = [
  "Ianuarie",
  "Februarie",
  "Martie",
  "Aprilie",
  "Mai",
  "Iunie",
  "Iulie",
  "August",
  "Septembrie",
  "Octombrie",
  "Noiembrie",
  "Decembrie",
] as const;

export const INSTRUMENTS = [
  "DE40",
  "EURUSD",
  "GBPUSD",
  "USDJPY",
  "XAUUSD",
  "NAS100",
  "US30",
  "UK100",
] as const;

export const SETUPS = ["3G", "OTE", "Breaker", "FVG", "OB", "CHoCH"] as const;
export const LIQUIDITY = ["Minora", "Majora", "Egala"] as const;
export const MSS = ["Normal", "Shift", "Inversat"] as const;

const screenshotTrade: Trade = {
  id: "seed-de40",
  instrument: "DE40",
  direction: "Buy",
  result: "Win",
  profitPct: 2,
  date: "2026-11-06",
  time: "15:00",
  setup: "3G",
  liquidity: "Minora",
  mss: "Normal",
  reentry: "Nu",
  movedToBe: "Nu",
  emotions: "Da",
  slPips: 35.2,
  fvgPips: 2,
  distLiquidity: 45,
  note: "",
};

export const seedTrades: Trade[] = [screenshotTrade];

export const demoTrades: Trade[] = [
  screenshotTrade,
  {
    id: "demo-eurusd",
    instrument: "EURUSD",
    direction: "Sell",
    result: "Win",
    profitPct: 1.4,
    date: "2026-11-02",
    time: "09:30",
    setup: "OTE",
    liquidity: "Majora",
    mss: "Shift",
    reentry: "Nu",
    movedToBe: "Da",
    emotions: "Nu",
    slPips: 12,
    fvgPips: 1.5,
    distLiquidity: 22,
    note: "Sweep pe Londra, intrare după confirmare.",
  },
  {
    id: "demo-xau",
    instrument: "XAUUSD",
    direction: "Buy",
    result: "Lose",
    profitPct: -0.8,
    date: "2026-11-03",
    time: "10:15",
    setup: "3G",
    liquidity: "Minora",
    mss: "Normal",
    reentry: "Da",
    movedToBe: "Nu",
    emotions: "Da",
    slPips: 18,
    fvgPips: 3.2,
    distLiquidity: 30,
    note: "",
  },
  {
    id: "demo-nas",
    instrument: "NAS100",
    direction: "Buy",
    result: "Win",
    profitPct: 1.1,
    date: "2026-11-04",
    time: "16:00",
    setup: "Breaker",
    liquidity: "Majora",
    mss: "Inversat",
    reentry: "Nu",
    movedToBe: "Nu",
    emotions: "Nu",
    slPips: 40,
    fvgPips: 4,
    distLiquidity: 55,
    note: "",
  },
  {
    id: "demo-gbp",
    instrument: "GBPUSD",
    direction: "Sell",
    result: "BE",
    profitPct: 0,
    date: "2026-11-05",
    time: "08:00",
    setup: "3G",
    liquidity: "Egala",
    mss: "Normal",
    reentry: "Nu",
    movedToBe: "Da",
    emotions: "Nu",
    slPips: 15,
    fvgPips: 1.2,
    distLiquidity: 18,
    note: "Mutat la BE înainte de news.",
  },
  {
    id: "demo-us30",
    instrument: "US30",
    direction: "Buy",
    result: "Lose",
    profitPct: -1.2,
    date: "2026-11-09",
    time: "14:00",
    setup: "Breaker",
    liquidity: "Majora",
    mss: "Shift",
    reentry: "Da",
    movedToBe: "Nu",
    emotions: "Da",
    slPips: 50,
    fvgPips: 5,
    distLiquidity: 60,
    note: "",
  },
  {
    id: "demo-eur-2",
    instrument: "EURUSD",
    direction: "Buy",
    result: "Win",
    profitPct: 0.9,
    date: "2026-11-10",
    time: "09:00",
    setup: "3G",
    liquidity: "Minora",
    mss: "Normal",
    reentry: "Nu",
    movedToBe: "Da",
    emotions: "Nu",
    slPips: 10,
    fvgPips: 1.8,
    distLiquidity: 16,
    note: "",
  },
  {
    id: "demo-de-2",
    instrument: "DE40",
    direction: "Sell",
    result: "Win",
    profitPct: 1.75,
    date: "2026-11-11",
    time: "11:30",
    setup: "OTE",
    liquidity: "Minora",
    mss: "Normal",
    reentry: "Nu",
    movedToBe: "Nu",
    emotions: "Da",
    slPips: 28,
    fvgPips: 2.4,
    distLiquidity: 40,
    note: "",
  },
];

export function parseTradeDate(date: string, time = "12:00"): Date {
  const [y, m, d] = date.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  return new Date(y || 1970, (m || 1) - 1, d || 1, hh || 0, mm || 0, 0, 0);
}

export function weekdayLabel(date: string): string {
  return WEEKDAYS[parseTradeDate(date).getDay()] ?? "—";
}

export function hourLabel(time: string): string {
  const h = time.slice(0, 2);
  return `${h}:00`;
}

export function monthName(ym: string, withYear: boolean): string {
  const [y, m] = ym.split("-");
  const name = MONTHS[(Number(m) || 1) - 1] ?? ym;
  return withYear ? `${name} ${y}` : name;
}

export function tradeFieldValue(trade: Trade, field: FilterField): string {
  switch (field) {
    case "setup":
      return trade.setup;
    case "liquidity":
      return trade.liquidity;
    case "weekday":
      return weekdayLabel(trade.date);
    case "hour":
      return hourLabel(trade.time);
    case "month":
      return trade.date.slice(0, 7);
    case "direction":
      return trade.direction;
    case "mss":
      return trade.mss;
    case "reentry":
      return trade.reentry;
    case "movedToBe":
      return trade.movedToBe;
    case "emotions":
      return trade.emotions;
    case "instrument":
      return trade.instrument;
  }
}

export function applyFilter(trades: Trade[], filter: JournalFilter): Trade[] {
  if (filter.kind === "all") return trades;
  return trades.filter((trade) => tradeFieldValue(trade, filter.field) === filter.value);
}

export function filterLabel(filter: JournalFilter): string {
  if (filter.kind === "all") return "Toate";
  if (filter.field === "month") return monthName(filter.value, true);
  return filter.value;
}

export function sortTradesDesc(trades: Trade[]): Trade[] {
  return [...trades].sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time));
}

export function bucharestClock(date = new Date()): { time: string; dateLabel: string } {
  const timeParts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Bucharest",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const pick = (type: Intl.DateTimeFormatPartTypes) =>
    timeParts.find((part) => part.type === type)?.value ?? "00";
  const time = `${pick("hour")}:${pick("minute")}:${pick("second")}`;
  const weekday = new Intl.DateTimeFormat("ro-RO", {
    timeZone: "Europe/Bucharest",
    weekday: "long",
  }).format(date);
  const day = new Intl.DateTimeFormat("ro-RO", {
    timeZone: "Europe/Bucharest",
    day: "numeric",
  }).format(date);
  const month = new Intl.DateTimeFormat("ro-RO", {
    timeZone: "Europe/Bucharest",
    month: "long",
  }).format(date);
  return { time, dateLabel: `${weekday}, ${day} ${month}` };
}

export function todayBucharest(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Bucharest",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `t-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function normalizeProfit(result: Result, profit: number): number {
  if (result === "BE") return 0;
  const abs = Math.abs(profit);
  return result === "Win" ? abs : -abs;
}

function isYesNo(value: unknown): value is YesNo {
  return value === "Da" || value === "Nu";
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

export function sanitizeTrade(input: unknown): Trade | null {
  if (!input || typeof input !== "object") return null;
  const t = input as Partial<Trade>;
  if (typeof t.id !== "string" || !t.id) return null;
  if (typeof t.instrument !== "string" || !t.instrument.trim()) return null;
  if (t.direction !== "Buy" && t.direction !== "Sell") return null;
  if (t.result !== "Win" && t.result !== "Lose" && t.result !== "BE") return null;
  if (!isFiniteNumber(t.profitPct)) return null;
  if (typeof t.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(t.date)) return null;
  if (typeof t.time !== "string" || !/^\d{2}:\d{2}$/.test(t.time)) return null;
  if (typeof t.setup !== "string" || typeof t.liquidity !== "string" || typeof t.mss !== "string") {
    return null;
  }
  if (!isYesNo(t.reentry) || !isYesNo(t.movedToBe) || !isYesNo(t.emotions)) return null;
  if (!isFiniteNumber(t.slPips) || !isFiniteNumber(t.fvgPips) || !isFiniteNumber(t.distLiquidity)) {
    return null;
  }
  return {
    id: t.id,
    instrument: t.instrument.trim().toUpperCase(),
    direction: t.direction,
    result: t.result,
    profitPct: normalizeProfit(t.result, t.profitPct),
    date: t.date,
    time: t.time,
    setup: t.setup.trim() || "—",
    liquidity: t.liquidity.trim() || "—",
    mss: t.mss.trim() || "—",
    reentry: t.reentry,
    movedToBe: t.movedToBe,
    emotions: t.emotions,
    slPips: Math.abs(t.slPips),
    fvgPips: Math.abs(t.fvgPips),
    distLiquidity: Math.abs(t.distLiquidity),
    note: typeof t.note === "string" ? t.note.slice(0, 500) : "",
  };
}

export function mergeTrades(current: Trade[], incoming: Trade[]): Trade[] {
  const map = new Map(current.map((trade) => [trade.id, trade]));
  for (const trade of incoming) map.set(trade.id, trade);
  return [...map.values()];
}
