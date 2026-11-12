import { useMemo, useRef, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { fmtSignedPct } from "@/lib/journal/format";
import {
  applyFilter,
  demoTrades,
  mergeTrades,
  sanitizeTrade,
  seedTrades,
  sortTradesDesc,
  weekdayLabel,
  type Trade,
} from "@/lib/journal/model";
import { computeStats } from "@/lib/journal/stats";
import { useJournal } from "@/lib/journal/store";

function ResultPill({ result }: { result: Trade["result"] }) {
  const tone =
    result === "Win" ? "bg-accent/15 text-accent" : result === "Lose" ? "bg-danger/15 text-danger" : "bg-raised text-muted";
  return <span className={cn("rounded-full px-2 py-0.5 text-xs font-semibold", tone)}>{result}</span>;
}

export function Trades({
  onCreate,
  onEdit,
}: {
  onCreate: () => void;
  onEdit: (trade: Trade) => void;
}) {
  const trades = useJournal((state) => state.trades);
  const filter = useJournal((state) => state.filter);
  const removeTrade = useJournal((state) => state.removeTrade);
  const replaceTrades = useJournal((state) => state.replaceTrades);
  const visible = useMemo(() => sortTradesDesc(applyFilter(trades, filter)), [trades, filter]);
  const stats = useMemo(() => computeStats(visible), [visible]);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [pending, setPending] = useState<"demo" | "reset" | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function exportFile() {
    const blob = new Blob([JSON.stringify(trades, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "jurnal-trading.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  async function importFile(file: File) {
    try {
      const data: unknown = JSON.parse(await file.text());
      const list = Array.isArray(data) ? data : [data];
      const parsed = list.map(sanitizeTrade).filter((trade): trade is Trade => trade !== null);
      if (parsed.length === 0) {
        setMessage("Fișierul nu conține tranzacții valide.");
        return;
      }
      replaceTrades(mergeTrades(trades, parsed));
      setMessage(`Am importat ${parsed.length} tranzacții.`);
    } catch {
      setMessage("Nu am putut citi fișierul JSON.");
    }
  }

  const summary =
    stats.count === 0
      ? "Nicio tranzacție în filtrul curent."
      : `${stats.count} tranzacții · net ${fmtSignedPct(stats.total)} · winrate ${
          stats.winrate === null ? "—" : `${stats.winrate.toFixed(1)}%`
        }`;

  return (
    <div className="pb-6">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Tranzacții</h2>
          <p className="mt-1 text-sm text-muted">{summary}</p>
        </div>
        <button
          type="button"
          onClick={onCreate}
          className="min-h-11 rounded-control bg-accent px-4 text-sm font-semibold text-bg"
        >
          Tranzacție nouă
        </button>
      </div>

      {visible.length === 0 ? (
        <div className="rounded-card bg-surface px-5 py-10 text-center shadow-card">
          <p className="font-medium">Jurnalul filtrat este gol.</p>
          <p className="mt-1 text-sm text-muted">Adaugă o tranzacție sau încarcă exemplele.</p>
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {visible.map((trade) => {
            const positive = trade.profitPct > 0;
            const negative = trade.profitPct < 0;
            return (
              <li key={trade.id} className="rounded-card bg-surface p-4 shadow-card">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold">{trade.instrument}</span>
                      <span className="text-sm text-muted">{trade.direction}</span>
                      <ResultPill result={trade.result} />
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {weekdayLabel(trade.date)} · {trade.date} · {trade.time}
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      {trade.setup} · {trade.liquidity} · MSS {trade.mss}
                    </p>
                    <p className="mt-1 text-xs text-faint">
                      SL {trade.slPips} · FVG {trade.fvgPips} · dist. {trade.distLiquidity} · re-entry {trade.reentry} · BE {trade.movedToBe} · emoții {trade.emotions}
                    </p>
                    {trade.note ? <p className="mt-2 text-sm text-fg">{trade.note}</p> : null}
                  </div>
                  <p
                    className={cn(
                      "shrink-0 text-lg font-bold tabular-nums",
                      negative ? "text-danger" : positive ? "text-accent" : "text-muted",
                    )}
                  >
                    {fmtSignedPct(trade.profitPct)}
                  </p>
                </div>
                <div className="mt-3 flex justify-end gap-2">
                  {confirmId === trade.id ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setConfirmId(null)}
                        className="min-h-11 rounded-control px-3 text-sm text-muted"
                      >
                        Anulează
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          removeTrade(trade.id);
                          setConfirmId(null);
                        }}
                        className="min-h-11 rounded-control bg-danger/15 px-3 text-sm font-semibold text-danger"
                      >
                        Șterge
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => onEdit(trade)}
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-control px-3 text-sm text-muted hover:text-fg"
                      >
                        <Pencil className="size-4" />
                        Editează
                      </button>
                      <button
                        type="button"
                        onClick={() => setConfirmId(trade.id)}
                        className="inline-flex min-h-11 items-center gap-1.5 rounded-control px-3 text-sm text-muted hover:text-danger"
                      >
                        <Trash2 className="size-4" />
                        Șterge
                      </button>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        <button type="button" onClick={exportFile} className="min-h-11 rounded-control bg-raised px-3 text-sm text-fg">
          Exportă JSON
        </button>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="min-h-11 rounded-control bg-raised px-3 text-sm text-fg"
        >
          Importă JSON
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={(event) => {
            const file = event.target.files?.[0];
            event.target.value = "";
            if (file) void importFile(file);
          }}
        />
        {pending === "demo" ? (
          <button
            type="button"
            onClick={() => {
              replaceTrades(demoTrades);
              setPending(null);
              setMessage("Am încărcat setul de exemple.");
            }}
            className="min-h-11 rounded-control bg-accent/15 px-3 text-sm font-semibold text-accent"
          >
            Înlocuiește cu exemplele
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setPending("demo")}
            className="min-h-11 rounded-control px-3 text-sm text-muted hover:text-fg"
          >
            Încarcă exemple
          </button>
        )}
        {pending === "reset" ? (
          <button
            type="button"
            onClick={() => {
              replaceTrades(seedTrades);
              setPending(null);
              setMessage("Jurnalul a revenit la exemplul din poză.");
            }}
            className="min-h-11 rounded-control px-3 text-sm font-semibold text-danger"
          >
            Confirmă resetarea
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setPending("reset")}
            className="min-h-11 rounded-control px-3 text-sm text-muted hover:text-fg"
          >
            Resetează
          </button>
        )}
        {pending ? (
          <button type="button" onClick={() => setPending(null)} className="min-h-11 px-3 text-sm text-muted">
            Anulează
          </button>
        ) : null}
      </div>
      {message ? <p className="mt-3 text-sm text-muted">{message}</p> : null}
      <p className="mt-4 text-xs text-faint">Tranzacțiile rămân salvate în acest browser.</p>
    </div>
  );
}
