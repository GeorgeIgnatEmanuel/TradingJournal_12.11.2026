import { useEffect, useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  INSTRUMENTS,
  LIQUIDITY,
  MSS,
  SETUPS,
  newId,
  normalizeProfit,
  todayBucharest,
  type Direction,
  type Result,
  type Trade,
  type YesNo,
} from "@/lib/journal/model";
import { useJournal } from "@/lib/journal/store";

type Draft = {
  id: string | null;
  instrument: string;
  direction: Direction;
  result: Result;
  profit: string;
  date: string;
  time: string;
  setup: string;
  liquidity: string;
  mss: string;
  reentry: YesNo;
  movedToBe: YesNo;
  emotions: YesNo;
  sl: string;
  fvg: string;
  dist: string;
  note: string;
};

function blankDraft(): Draft {
  return {
    id: null,
    instrument: "DE40",
    direction: "Buy",
    result: "Win",
    profit: "1.00",
    date: todayBucharest(),
    time: "15:00",
    setup: "3G",
    liquidity: "Minora",
    mss: "Normal",
    reentry: "Nu",
    movedToBe: "Nu",
    emotions: "Nu",
    sl: "10",
    fvg: "2",
    dist: "20",
    note: "",
  };
}

function fromTrade(trade: Trade): Draft {
  return {
    id: trade.id,
    instrument: trade.instrument,
    direction: trade.direction,
    result: trade.result,
    profit: Math.abs(trade.profitPct).toFixed(2),
    date: trade.date,
    time: trade.time,
    setup: trade.setup,
    liquidity: trade.liquidity,
    mss: trade.mss,
    reentry: trade.reentry,
    movedToBe: trade.movedToBe,
    emotions: trade.emotions,
    sl: String(trade.slPips),
    fvg: String(trade.fvgPips),
    dist: String(trade.distLiquidity),
    note: trade.note,
  };
}

function parseDecimal(raw: string): number | null {
  const n = Number(raw.trim().replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted">{label}</span>
      {children}
    </label>
  );
}

function Segmented<T extends string>({
  value,
  options,
  onChange,
  columns,
}: {
  value: T;
  options: readonly T[];
  onChange: (value: T) => void;
  columns: 2 | 3;
}) {
  return (
    <div className={cn("grid gap-1 rounded-control bg-bg p-1", columns === 3 ? "grid-cols-3" : "grid-cols-2")}>
      {options.map((option) => {
        const selected = option === value;
        const tone =
          option === "Win"
            ? "bg-accent/15 text-accent"
            : option === "Lose"
              ? "bg-danger/15 text-danger"
              : option === "Buy"
                ? "bg-accent/15 text-accent"
                : option === "Sell"
                  ? "bg-danger/15 text-danger"
                  : "bg-raised text-fg";
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={cn(
              "min-h-11 rounded-lg text-sm font-semibold",
              selected ? tone : "text-muted",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export function TradeDialog({
  editing,
  onClose,
}: {
  editing: { mode: "create" } | { mode: "edit"; trade: Trade } | null;
  onClose: () => void;
}) {
  const addTrade = useJournal((state) => state.addTrade);
  const updateTrade = useJournal((state) => state.updateTrade);
  const [draft, setDraft] = useState<Draft>(blankDraft);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!editing) return;
    setError(null);
    setDraft(editing.mode === "edit" ? fromTrade(editing.trade) : blankDraft());
  }, [editing]);

  function patch(partial: Partial<Draft>) {
    setDraft((current) => ({ ...current, ...partial }));
  }

  function save() {
    const instrument = draft.instrument.trim().toUpperCase();
    const profit = parseDecimal(draft.profit);
    const sl = parseDecimal(draft.sl);
    const fvg = parseDecimal(draft.fvg);
    const dist = parseDecimal(draft.dist);
    if (!instrument) {
      setError("Scrie instrumentul.");
      return;
    }
    if (!draft.date || !draft.time) {
      setError("Alege data și ora.");
      return;
    }
    if (!draft.setup.trim() || !draft.liquidity.trim() || !draft.mss.trim()) {
      setError("Completează setup, lichiditate și MSS.");
      return;
    }
    if (profit === null || sl === null || fvg === null || dist === null) {
      setError("Câmpurile numerice trebuie să fie numere. Poți folosi și virgulă.");
      return;
    }
    const trade: Trade = {
      id: draft.id ?? newId(),
      instrument,
      direction: draft.direction,
      result: draft.result,
      profitPct: normalizeProfit(draft.result, profit),
      date: draft.date,
      time: draft.time,
      setup: draft.setup.trim(),
      liquidity: draft.liquidity.trim(),
      mss: draft.mss.trim(),
      reentry: draft.reentry,
      movedToBe: draft.movedToBe,
      emotions: draft.emotions,
      slPips: Math.abs(sl),
      fvgPips: Math.abs(fvg),
      distLiquidity: Math.abs(dist),
      note: draft.note.trim().slice(0, 500),
    };
    if (draft.id) updateTrade(trade);
    else addTrade(trade);
    onClose();
  }

  return (
    <Dialog.Root open={editing !== null} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-bg/75" />
        <Dialog.Content className="fixed inset-x-3 top-6 z-50 max-h-[calc(100vh-3rem)] overflow-y-auto rounded-card bg-surface p-5 shadow-card outline-none sm:inset-x-auto sm:left-1/2 sm:w-full sm:max-w-xl sm:-translate-x-1/2">
          <div className="flex items-start justify-between gap-3">
            <div>
              <Dialog.Title className="text-lg font-semibold">
                {editing?.mode === "edit" ? "Editează tranzacția" : "Tranzacție nouă"}
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-muted">
                Profitul, winrate-ul și defalcările se recalculează imediat.
              </Dialog.Description>
            </div>
            <Dialog.Close
              aria-label="Închide"
              className="inline-flex size-11 items-center justify-center rounded-control text-muted hover:text-fg"
            >
              <X className="size-5" />
            </Dialog.Close>
          </div>

          <form
            className="mt-5 flex flex-col gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              save();
            }}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Instrument">
                <input
                  className="field"
                  list="instruments"
                  value={draft.instrument}
                  onChange={(event) => patch({ instrument: event.target.value })}
                  maxLength={16}
                  required
                />
                <datalist id="instruments">
                  {INSTRUMENTS.map((item) => (
                    <option key={item} value={item} />
                  ))}
                </datalist>
              </Field>
              <Field label="Direcție">
                <Segmented
                  value={draft.direction}
                  options={["Buy", "Sell"] as const}
                  columns={2}
                  onChange={(direction) => patch({ direction })}
                />
              </Field>
              <Field label="Rezultat">
                <Segmented
                  value={draft.result}
                  options={["Win", "Lose", "BE"] as const}
                  columns={3}
                  onChange={(result) => patch({ result, profit: result === "BE" ? "0" : draft.profit })}
                />
              </Field>
              <Field label="Profit %">
                <input
                  className="field"
                  inputMode="decimal"
                  value={draft.profit}
                  onChange={(event) => patch({ profit: event.target.value })}
                  disabled={draft.result === "BE"}
                />
              </Field>
              <Field label="Data">
                <input
                  className="field"
                  type="date"
                  value={draft.date}
                  onChange={(event) => patch({ date: event.target.value })}
                  required
                />
              </Field>
              <Field label="Ora">
                <input
                  className="field"
                  type="time"
                  value={draft.time}
                  onChange={(event) => patch({ time: event.target.value })}
                  required
                />
              </Field>
              <Field label="Setup">
                <input
                  className="field"
                  list="setups"
                  value={draft.setup}
                  onChange={(event) => patch({ setup: event.target.value })}
                />
                <datalist id="setups">
                  {SETUPS.map((item) => (
                    <option key={item} value={item} />
                  ))}
                </datalist>
              </Field>
              <Field label="Lichiditate">
                <input
                  className="field"
                  list="liquidity"
                  value={draft.liquidity}
                  onChange={(event) => patch({ liquidity: event.target.value })}
                />
                <datalist id="liquidity">
                  {LIQUIDITY.map((item) => (
                    <option key={item} value={item} />
                  ))}
                </datalist>
              </Field>
              <Field label="MSS">
                <input
                  className="field"
                  list="mss"
                  value={draft.mss}
                  onChange={(event) => patch({ mss: event.target.value })}
                />
                <datalist id="mss">
                  {MSS.map((item) => (
                    <option key={item} value={item} />
                  ))}
                </datalist>
              </Field>
              <Field label="Re-entry">
                <Segmented
                  value={draft.reentry}
                  options={["Da", "Nu"] as const}
                  columns={2}
                  onChange={(reentry) => patch({ reentry })}
                />
              </Field>
              <Field label="Mutat la BE">
                <Segmented
                  value={draft.movedToBe}
                  options={["Da", "Nu"] as const}
                  columns={2}
                  onChange={(movedToBe) => patch({ movedToBe })}
                />
              </Field>
              <Field label="Emoții">
                <Segmented
                  value={draft.emotions}
                  options={["Da", "Nu"] as const}
                  columns={2}
                  onChange={(emotions) => patch({ emotions })}
                />
              </Field>
              <Field label="SL (pips)">
                <input
                  className="field"
                  inputMode="decimal"
                  value={draft.sl}
                  onChange={(event) => patch({ sl: event.target.value })}
                />
              </Field>
              <Field label="FVG (pips)">
                <input
                  className="field"
                  inputMode="decimal"
                  value={draft.fvg}
                  onChange={(event) => patch({ fvg: event.target.value })}
                />
              </Field>
              <Field label="Distanță lichiditate">
                <input
                  className="field"
                  inputMode="decimal"
                  value={draft.dist}
                  onChange={(event) => patch({ dist: event.target.value })}
                />
              </Field>
            </div>
            <Field label="Notă">
              <textarea
                className="field min-h-20 resize-y"
                value={draft.note}
                maxLength={500}
                onChange={(event) => patch({ note: event.target.value })}
              />
            </Field>
            {error ? (
              <p role="alert" className="text-sm text-danger">
                {error}
              </p>
            ) : null}
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="min-h-11 rounded-control px-4 text-sm font-medium text-muted hover:text-fg"
              >
                Renunță
              </button>
              <button
                type="submit"
                className="min-h-11 rounded-control bg-accent px-4 text-sm font-semibold text-bg"
              >
                Salvează
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
