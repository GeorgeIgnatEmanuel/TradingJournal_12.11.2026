import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  seedTrades,
  type JournalFilter,
  type Trade,
  type ViewId,
} from "@/lib/journal/model";

type JournalState = {
  trades: Trade[];
  filter: JournalFilter;
  view: ViewId;
  setView: (view: ViewId) => void;
  setFilter: (filter: JournalFilter) => void;
  addTrade: (trade: Trade) => void;
  updateTrade: (trade: Trade) => void;
  removeTrade: (id: string) => void;
  replaceTrades: (trades: Trade[]) => void;
};

export const useJournal = create<JournalState>()(
  persist(
    (set) => ({
      trades: seedTrades,
      filter: { kind: "all" },
      view: "dashboard",
      setView: (view) => set({ view }),
      setFilter: (filter) => set({ filter }),
      addTrade: (trade) => set((state) => ({ trades: [trade, ...state.trades] })),
      updateTrade: (trade) =>
        set((state) => ({
          trades: state.trades.map((item) => (item.id === trade.id ? trade : item)),
        })),
      removeTrade: (id) =>
        set((state) => ({ trades: state.trades.filter((item) => item.id !== id) })),
      replaceTrades: (trades) => set({ trades, filter: { kind: "all" } }),
    }),
    {
      name: "jurnal-trading-v1",
      skipHydration: true,
      partialize: (state) => ({
        trades: state.trades,
        filter: state.filter,
        view: state.view,
      }),
    },
  ),
);
