import { useEffect, useMemo, useState } from "react";
import { ChartPanel } from "@/components/journal/chart-panel";
import { cn } from "@/lib/cn";
import { fmtFactor, fmtNum, fmtPct, fmtWinrate } from "@/lib/journal/format";
import { applyFilter, bucharestClock, filterLabel, type FilterField, type JournalFilter } from "@/lib/journal/model";
import { buildBreakdowns, computeStats, equitySeries, type BreakdownRow } from "@/lib/journal/stats";
import { useJournal } from "@/lib/journal/store";

function useClock() {
  const [clock, setClock] = useState(() => bucharestClock());
  useEffect(() => {
    const id = window.setInterval(() => setClock(bucharestClock()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return clock;
}

function Ring({ value }: { value: number }) {
  const radius = 38;
  const circ = 2 * Math.PI * radius;
  const pct = Math.max(0, Math.min(100, value));
  const dash = (pct / 100) * circ;
  return (
    <svg viewBox="0 0 100 100" className="size-28 shrink-0" aria-hidden="true">
      <circle cx="50" cy="50" r={radius} fill="none" stroke="var(--color-raised)" strokeWidth="8" />
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ - dash}`}
        transform="rotate(-90 50 50)"
      />
    </svg>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-card bg-surface px-4 py-3 shadow-card">
      <p className="text-xl font-bold tracking-tight tabular-nums">{value}</p>
      <p className="mt-1 text-xs text-muted">{label}</p>
    </div>
  );
}

function BreakdownCard({
  title,
  field,
  rows,
  filter,
  onPick,
}: {
  title: string;
  field: FilterField;
  rows: BreakdownRow[];
  filter: JournalFilter;
  onPick: (value: string) => void;
}) {
  return (
    <section className="rounded-card bg-surface p-4 shadow-card">
      <h3 className="text-sm text-muted">{title}</h3>
      {rows.length === 0 ? (
        <p className="mt-3 text-sm text-faint">—</p>
      ) : (
        <ul className="mt-2">
          {rows.map((row) => {
            const active =
              filter.kind === "field" && filter.field === field && filter.value === row.value;
            const positive = row.profit > 0;
            const negative = row.profit < 0;
            return (
              <li key={row.value}>
                <button
                  type="button"
                  onClick={() => onPick(row.value)}
                  className={cn(
                    "flex min-h-11 w-full items-center gap-3 rounded-control px-1 text-left",
                    active && "bg-raised",
                  )}
                >
                  <span className="w-20 shrink-0 truncate text-sm font-medium">{row.label}</span>
                  <span className="h-1.5 min-w-8 flex-1 overflow-hidden rounded-full bg-raised">
                    <span
                      className={cn(
                        "block h-full rounded-full",
                        negative ? "bg-danger" : positive ? "bg-accent" : "bg-faint",
                      )}
                      style={{ width: `${Math.max(0, Math.min(100, row.winrate))}%` }}
                    />
                  </span>
                  <span
                    className={cn(
                      "shrink-0 text-xs font-medium tabular-nums",
                      negative ? "text-danger" : "text-accent",
                    )}
                  >
                    {fmtPct(row.profit)} · {row.count} · {Math.round(row.winrate)}% win
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

function Legend({
  count,
  label,
  tone,
}: {
  count: number;
  label: string;
  tone: "accent" | "danger" | "faint";
}) {
  const active = count > 0;
  const text =
    !active ? "text-muted" : tone === "accent" ? "text-accent" : tone === "danger" ? "text-danger" : "text-fg";
  const dot = tone === "accent" ? "bg-accent" : tone === "danger" ? "bg-danger" : "bg-faint";
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-sm", text)}>
      <span className={cn("size-2 rounded-full", active ? dot : "bg-line")} />
      {count} {label}
    </span>
  );
}

export function Dashboard() {
  const clock = useClock();
  const trades = useJournal((state) => state.trades);
  const filter = useJournal((state) => state.filter);
  const setFilter = useJournal((state) => state.setFilter);
  const visible = useMemo(() => applyFilter(trades, filter), [trades, filter]);
  const stats = useMemo(() => computeStats(visible), [visible]);
  const breakdowns = useMemo(() => buildBreakdowns(visible), [visible]);
  const points = useMemo(() => equitySeries(visible), [visible]);
  const winShare = stats.count ? (stats.wins / stats.count) * 100 : 0;
  const loseShare = stats.count ? (stats.losses / stats.count) * 100 : 0;
  const beShare = stats.count ? (stats.bes / stats.count) * 100 : 0;

  return (
    <div className="flex flex-col gap-3 pb-4">
      <div className="grid gap-3 lg:grid-cols-2">
        <section className="rounded-card bg-surface px-6 py-7 shadow-card">
          <p className="text-sm text-muted">Ora României</p>
          <p
            suppressHydrationWarning
            className="mt-2 text-4xl font-bold tracking-tight tabular-nums sm:text-5xl"
          >
            {clock.time}
          </p>
          <p suppressHydrationWarning className="mt-2 text-sm text-muted">
            {clock.dateLabel}
          </p>
        </section>
        <section className="flex items-center justify-center gap-6 rounded-card bg-surface px-6 py-7 shadow-card">
          <Ring value={stats.winrate ?? 0} />
          <div>
            <p className="text-4xl font-bold tracking-tight tabular-nums sm:text-5xl">
              {fmtWinrate(stats.winrate)}
            </p>
            <p className="mt-1 text-sm text-muted">Winrate / tranzacții</p>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <Stat value={fmtPct(stats.total)} label="Total" />
        <Stat value={fmtWinrate(stats.winrate)} label="Winrate" />
        <Stat value={String(stats.count)} label="Tranzacții" />
        <Stat value={stats.average === null ? "—" : fmtPct(stats.average)} label="Medie/tranzacție" />
        <Stat value={fmtFactor(stats.profitFactor)} label="Profit factor" />
        <Stat value={fmtNum(stats.avgSl)} label="Medie SL (pips)" />
        <Stat value={fmtNum(stats.avgFvg)} label="Media FVG (pips)" />
        <Stat value={fmtNum(stats.avgDist)} label="Medie dist. lichiditate" />
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        <section className="rounded-card bg-surface p-5 shadow-card lg:col-span-2">
          <h2 className="text-sm font-medium text-muted">Profit cumulat (%)</h2>
          {visible.length === 0 ? (
            <p className="flex h-56 items-center text-sm text-faint">
              Nicio tranzacție pentru filtrul curent.
            </p>
          ) : (
            <ChartPanel points={points} />
          )}
        </section>
        <section className="rounded-card bg-surface p-5 shadow-card">
          <h2 className="text-sm font-medium text-muted">Rezultate</h2>
          <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-raised">
            <span className="bg-accent" style={{ width: `${winShare}%` }} />
            <span className="bg-danger" style={{ width: `${loseShare}%` }} />
            <span className="bg-faint" style={{ width: `${beShare}%` }} />
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            <Legend count={stats.wins} label="Win" tone="accent" />
            <Legend count={stats.losses} label="Lose" tone="danger" />
            <Legend count={stats.bes} label="BE" tone="faint" />
          </div>
          {filter.kind !== "all" ? (
            <button
              type="button"
              onClick={() => setFilter({ kind: "all" })}
              className="mt-6 text-sm text-muted underline-offset-2 hover:text-fg hover:underline"
            >
              Scoate filtrul „{filterLabel(filter)}”
            </button>
          ) : null}
        </section>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {breakdowns.map((block) => (
          <BreakdownCard
            key={block.title}
            title={block.title}
            field={block.field}
            rows={block.rows}
            filter={filter}
            onPick={(value) => {
              const active = filter.kind === "field" && filter.field === block.field && filter.value === value;
              setFilter(active ? { kind: "all" } : { kind: "field", field: block.field, value });
            }}
          />
        ))}
      </div>
    </div>
  );
}
