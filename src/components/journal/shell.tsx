import { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { BarChart3, ChevronDown, List, Plus } from "lucide-react";
import { Dashboard } from "@/components/journal/dashboard";
import { TradeDialog } from "@/components/journal/trade-dialog";
import { Trades } from "@/components/journal/trades";
import { cn } from "@/lib/cn";
import { filterLabel, monthName, type Trade, type ViewId } from "@/lib/journal/model";
import { uniqueValues } from "@/lib/journal/stats";
import { useJournal } from "@/lib/journal/store";

const NAV: { id: ViewId; label: string; icon: typeof BarChart3 }[] = [
  { id: "dashboard", label: "Analiză", icon: BarChart3 },
  { id: "trades", label: "Jurnal", icon: List },
];

function FilterMenu() {
  const trades = useJournal((state) => state.trades);
  const filter = useJournal((state) => state.filter);
  const setFilter = useJournal((state) => state.setFilter);
  const instruments = uniqueValues(trades, "instrument");
  const months = uniqueValues(trades, "month").sort((a, b) => b.localeCompare(a));

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="inline-flex h-11 min-w-28 items-center justify-between gap-3 rounded-control bg-surface px-3 text-sm font-medium shadow-card outline-none">
        <span className="truncate">{filterLabel(filter)}</span>
        <ChevronDown className="size-4 shrink-0 text-muted" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 max-h-80 min-w-52 overflow-y-auto rounded-control bg-surface p-1 shadow-card"
        >
          <DropdownMenu.Item
            onSelect={() => setFilter({ kind: "all" })}
            className={cn(
              "cursor-pointer rounded-lg px-3 py-2 text-sm outline-none data-highlighted:bg-raised",
              filter.kind === "all" && "text-accent",
            )}
          >
            Toate
          </DropdownMenu.Item>
          {instruments.length > 0 ? (
            <>
              <DropdownMenu.Label className="px-3 pb-1 pt-2 text-xs text-faint">Instrument</DropdownMenu.Label>
              {instruments.map((instrument) => (
                <DropdownMenu.Item
                  key={instrument}
                  onSelect={() => setFilter({ kind: "field", field: "instrument", value: instrument })}
                  className={cn(
                    "cursor-pointer rounded-lg px-3 py-2 text-sm outline-none data-highlighted:bg-raised",
                    filter.kind === "field" && filter.field === "instrument" && filter.value === instrument && "text-accent",
                  )}
                >
                  {instrument}
                </DropdownMenu.Item>
              ))}
            </>
          ) : null}
          {months.length > 0 ? (
            <>
              <DropdownMenu.Separator className="my-1 h-px bg-line" />
              <DropdownMenu.Label className="px-3 pb-1 pt-2 text-xs text-faint">Lună</DropdownMenu.Label>
              {months.map((month) => (
                <DropdownMenu.Item
                  key={month}
                  onSelect={() => setFilter({ kind: "field", field: "month", value: month })}
                  className={cn(
                    "cursor-pointer rounded-lg px-3 py-2 text-sm outline-none data-highlighted:bg-raised",
                    filter.kind === "field" && filter.field === "month" && filter.value === month && "text-accent",
                  )}
                >
                  {monthName(month, true)}
                </DropdownMenu.Item>
              ))}
            </>
          ) : null}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function JournalApp() {
  const view = useJournal((state) => state.view);
  const setView = useJournal((state) => state.setView);
  const [editing, setEditing] = useState<{ mode: "create" } | { mode: "edit"; trade: Trade } | null>(null);

  useEffect(() => {
    void useJournal.persist.rehydrate();
  }, []);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl">
        <nav className="sticky top-0 hidden h-screen w-16 shrink-0 flex-col items-center gap-1 pt-5 lg:flex" aria-label="Secțiuni">
          {NAV.map((item) => {
            const Icon = item.icon;
            const active = view === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-current={active ? "page" : undefined}
                aria-label={item.label}
                onClick={() => setView(item.id)}
                className={cn(
                  "relative flex size-11 items-center justify-center rounded-xl text-muted hover:text-fg",
                  active && "text-fg",
                )}
              >
                {active ? <span className="absolute left-0 h-5 w-0.5 rounded-full bg-fg" /> : null}
                <Icon className="size-5" strokeWidth={1.75} />
              </button>
            );
          })}
        </nav>

        <div className="min-w-0 flex-1 px-4 sm:px-6">
          <header className="flex flex-wrap items-center justify-between gap-3 py-5">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full shadow-card" aria-hidden="true">
                <span className="size-4 rounded-full border-2 border-muted" />
              </span>
              <h1 className="text-base font-semibold tracking-tight">Jurnal trading</h1>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Tranzacție nouă"
                onClick={() => setEditing({ mode: "create" })}
                className="inline-flex size-11 items-center justify-center rounded-control bg-accent text-bg"
              >
                <Plus className="size-5" />
              </button>
              <FilterMenu />
            </div>
          </header>
          <main className="pb-24 lg:pb-10">
            {view === "dashboard" ? (
              <Dashboard />
            ) : (
              <Trades onCreate={() => setEditing({ mode: "create" })} onEdit={(trade) => setEditing({ mode: "edit", trade })} />
            )}
          </main>
        </div>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-30 flex border-t border-line bg-bg/95 px-3 py-2 backdrop-blur lg:hidden" aria-label="Secțiuni">
        {NAV.map((item) => {
          const Icon = item.icon;
          const active = view === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setView(item.id)}
              className={cn(
                "flex min-h-11 flex-1 flex-col items-center justify-center gap-0.5 text-xs text-muted",
                active && "text-fg",
              )}
            >
              <Icon className="size-5" strokeWidth={1.75} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <TradeDialog editing={editing} onClose={() => setEditing(null)} />
    </div>
  );
}
