import { i as __toESM, n as __exportAll } from "../_runtime.mjs";
import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { a as Pencil, c as ChartColumn, i as Plus, o as List, r as Trash2, s as ChevronDown, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as DropdownMenuPortal, i as DropdownMenuLabel, n as DropdownMenuContent, o as DropdownMenuSeparator, r as DropdownMenuItem, s as DropdownMenuTrigger, t as DropdownMenu } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DlwMn3hL.js
var routes_DlwMn3hL_exports = /* @__PURE__ */ __exportAll({ component: () => SplitComponent });
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ChartPanel({ points }) {
	const [Chart, setChart] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let live = true;
		import("./equity-chart-VgtdiMJ2.mjs").then((mod) => {
			if (live) setChart(() => mod.EquityChart);
		});
		return () => {
			live = false;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-56 w-full",
		children: Chart ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart, { points }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full" })
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function fmtPct(n, digits = 2) {
	return `${n.toFixed(digits)}%`;
}
function fmtSignedPct(n) {
	return `${n > 0 ? "+" : ""}${n.toFixed(2)}%`;
}
function fmtNum(n, digits = 1) {
	if (n === null || !Number.isFinite(n)) return "—";
	return n.toFixed(digits);
}
function fmtWinrate(n) {
	if (n === null || !Number.isFinite(n)) return "—";
	return `${n.toFixed(1)}%`;
}
function fmtFactor(n) {
	if (n === null || !Number.isFinite(n)) return "—";
	return n.toFixed(2);
}
var WEEKDAYS = [
	"Duminică",
	"Luni",
	"Marți",
	"Miercuri",
	"Joi",
	"Vineri",
	"Sâmbătă"
];
var MONTHS = [
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
	"Decembrie"
];
var INSTRUMENTS = [
	"DE40",
	"EURUSD",
	"GBPUSD",
	"USDJPY",
	"XAUUSD",
	"NAS100",
	"US30",
	"UK100"
];
var SETUPS = [
	"3G",
	"OTE",
	"Breaker",
	"FVG",
	"OB",
	"CHoCH"
];
var LIQUIDITY = [
	"Minora",
	"Majora",
	"Egala"
];
var MSS = [
	"Normal",
	"Shift",
	"Inversat"
];
var screenshotTrade = {
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
	note: ""
};
var seedTrades = [screenshotTrade];
var demoTrades = [
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
		note: "Sweep pe Londra, intrare după confirmare."
	},
	{
		id: "demo-xau",
		instrument: "XAUUSD",
		direction: "Buy",
		result: "Lose",
		profitPct: -.8,
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
		note: ""
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
		note: ""
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
		note: "Mutat la BE înainte de news."
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
		note: ""
	},
	{
		id: "demo-eur-2",
		instrument: "EURUSD",
		direction: "Buy",
		result: "Win",
		profitPct: .9,
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
		note: ""
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
		note: ""
	}
];
function parseTradeDate(date, time = "12:00") {
	const [y, m, d] = date.split("-").map(Number);
	const [hh, mm] = time.split(":").map(Number);
	return new Date(y || 1970, (m || 1) - 1, d || 1, hh || 0, mm || 0, 0, 0);
}
function weekdayLabel(date) {
	return WEEKDAYS[parseTradeDate(date).getDay()] ?? "—";
}
function hourLabel(time) {
	return `${time.slice(0, 2)}:00`;
}
function monthName(ym, withYear) {
	const [y, m] = ym.split("-");
	const name = MONTHS[(Number(m) || 1) - 1] ?? ym;
	return withYear ? `${name} ${y}` : name;
}
function tradeFieldValue(trade, field) {
	switch (field) {
		case "setup": return trade.setup;
		case "liquidity": return trade.liquidity;
		case "weekday": return weekdayLabel(trade.date);
		case "hour": return hourLabel(trade.time);
		case "month": return trade.date.slice(0, 7);
		case "direction": return trade.direction;
		case "mss": return trade.mss;
		case "reentry": return trade.reentry;
		case "movedToBe": return trade.movedToBe;
		case "emotions": return trade.emotions;
		case "instrument": return trade.instrument;
	}
}
function applyFilter(trades, filter) {
	if (filter.kind === "all") return trades;
	return trades.filter((trade) => tradeFieldValue(trade, filter.field) === filter.value);
}
function filterLabel(filter) {
	if (filter.kind === "all") return "Toate";
	if (filter.field === "month") return monthName(filter.value, true);
	return filter.value;
}
function sortTradesDesc(trades) {
	return [...trades].sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time));
}
function bucharestClock(date = /* @__PURE__ */ new Date()) {
	const timeParts = new Intl.DateTimeFormat("en-GB", {
		timeZone: "Europe/Bucharest",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hourCycle: "h23"
	}).formatToParts(date);
	const pick = (type) => timeParts.find((part) => part.type === type)?.value ?? "00";
	return {
		time: `${pick("hour")}:${pick("minute")}:${pick("second")}`,
		dateLabel: `${new Intl.DateTimeFormat("ro-RO", {
			timeZone: "Europe/Bucharest",
			weekday: "long"
		}).format(date)}, ${new Intl.DateTimeFormat("ro-RO", {
			timeZone: "Europe/Bucharest",
			day: "numeric"
		}).format(date)} ${new Intl.DateTimeFormat("ro-RO", {
			timeZone: "Europe/Bucharest",
			month: "long"
		}).format(date)}`
	};
}
function todayBucharest() {
	return new Intl.DateTimeFormat("en-CA", {
		timeZone: "Europe/Bucharest",
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	}).format(/* @__PURE__ */ new Date());
}
function newId() {
	if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
	return `t-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
function normalizeProfit(result, profit) {
	if (result === "BE") return 0;
	const abs = Math.abs(profit);
	return result === "Win" ? abs : -abs;
}
function isYesNo(value) {
	return value === "Da" || value === "Nu";
}
function isFiniteNumber(value) {
	return typeof value === "number" && Number.isFinite(value);
}
function sanitizeTrade(input) {
	if (!input || typeof input !== "object") return null;
	const t = input;
	if (typeof t.id !== "string" || !t.id) return null;
	if (typeof t.instrument !== "string" || !t.instrument.trim()) return null;
	if (t.direction !== "Buy" && t.direction !== "Sell") return null;
	if (t.result !== "Win" && t.result !== "Lose" && t.result !== "BE") return null;
	if (!isFiniteNumber(t.profitPct)) return null;
	if (typeof t.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(t.date)) return null;
	if (typeof t.time !== "string" || !/^\d{2}:\d{2}$/.test(t.time)) return null;
	if (typeof t.setup !== "string" || typeof t.liquidity !== "string" || typeof t.mss !== "string") return null;
	if (!isYesNo(t.reentry) || !isYesNo(t.movedToBe) || !isYesNo(t.emotions)) return null;
	if (!isFiniteNumber(t.slPips) || !isFiniteNumber(t.fvgPips) || !isFiniteNumber(t.distLiquidity)) return null;
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
		note: typeof t.note === "string" ? t.note.slice(0, 500) : ""
	};
}
function mergeTrades(current, incoming) {
	const map = new Map(current.map((trade) => [trade.id, trade]));
	for (const trade of incoming) map.set(trade.id, trade);
	return [...map.values()];
}
function round(n, digits) {
	const p = 10 ** digits;
	return Math.round(n * p) / p;
}
var emptyStats = {
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
	bes: 0
};
function computeStats(trades) {
	const count = trades.length;
	if (count === 0) return emptyStats;
	const wins = trades.filter((trade) => trade.result === "Win").length;
	const losses = trades.filter((trade) => trade.result === "Lose").length;
	const bes = trades.filter((trade) => trade.result === "BE").length;
	const raw = trades.reduce((sum, trade) => sum + trade.profitPct, 0);
	const grossWin = trades.reduce((sum, trade) => sum + (trade.profitPct > 0 ? trade.profitPct : 0), 0);
	const grossLoss = Math.abs(trades.reduce((sum, trade) => sum + (trade.profitPct < 0 ? trade.profitPct : 0), 0));
	return {
		total: round(raw, 2),
		winrate: round(wins / count * 100, 1),
		count,
		average: round(raw / count, 2),
		profitFactor: grossLoss > 0 ? round(grossWin / grossLoss, 2) : null,
		avgSl: round(trades.reduce((sum, trade) => sum + trade.slPips, 0) / count, 1),
		avgFvg: round(trades.reduce((sum, trade) => sum + trade.fvgPips, 0) / count, 1),
		avgDist: round(trades.reduce((sum, trade) => sum + trade.distLiquidity, 0) / count, 1),
		wins,
		losses,
		bes
	};
}
function group(trades, field, labelOf) {
	const buckets = /* @__PURE__ */ new Map();
	for (const trade of trades) {
		const value = tradeFieldValue(trade, field);
		const list = buckets.get(value) ?? [];
		list.push(trade);
		buckets.set(value, list);
	}
	const rows = [];
	for (const [value, list] of buckets) {
		const wins = list.filter((trade) => trade.result === "Win").length;
		const profit = round(list.reduce((sum, trade) => sum + trade.profitPct, 0), 2);
		rows.push({
			label: labelOf(list[0]),
			value,
			profit,
			count: list.length,
			wins,
			winrate: list.length ? wins / list.length * 100 : 0
		});
	}
	rows.sort((a, b) => b.count - a.count || b.profit - a.profit || a.label.localeCompare(b.label, "ro"));
	return rows;
}
function buildBreakdowns(trades) {
	const multi = new Set(trades.map((trade) => trade.date.slice(0, 4))).size > 1;
	return [
		{
			title: "Setup",
			field: "setup"
		},
		{
			title: "Lichiditate",
			field: "liquidity"
		},
		{
			title: "Ziua săptămânii",
			field: "weekday"
		},
		{
			title: "Ora",
			field: "hour"
		},
		{
			title: "Luna",
			field: "month"
		},
		{
			title: "Direcție",
			field: "direction"
		},
		{
			title: "MSS",
			field: "mss"
		},
		{
			title: "Re-entry",
			field: "reentry"
		},
		{
			title: "Mutat la BE",
			field: "movedToBe"
		},
		{
			title: "Emoții",
			field: "emotions"
		},
		{
			title: "Instrument",
			field: "instrument"
		}
	].map((spec) => ({
		title: spec.title,
		field: spec.field,
		rows: group(trades, spec.field, (trade) => {
			const value = tradeFieldValue(trade, spec.field);
			return spec.field === "month" ? monthName(value, multi) : value;
		})
	}));
}
function equitySeries(trades) {
	const sorted = [...trades].sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
	let run = 0;
	const points = [{
		label: "Start",
		equity: 0
	}];
	for (const trade of sorted) {
		run += trade.profitPct;
		const [, m, d] = trade.date.split("-");
		points.push({
			label: `${trade.instrument} · ${d}.${m}`,
			equity: round(run, 2)
		});
	}
	return points;
}
function uniqueValues(trades, field) {
	return [...new Set(trades.map((trade) => tradeFieldValue(trade, field)))].sort((a, b) => a.localeCompare(b, "ro"));
}
var useJournal = create()(persist((set) => ({
	trades: seedTrades,
	filter: { kind: "all" },
	view: "dashboard",
	setView: (view) => set({ view }),
	setFilter: (filter) => set({ filter }),
	addTrade: (trade) => set((state) => ({ trades: [trade, ...state.trades] })),
	updateTrade: (trade) => set((state) => ({ trades: state.trades.map((item) => item.id === trade.id ? trade : item) })),
	removeTrade: (id) => set((state) => ({ trades: state.trades.filter((item) => item.id !== id) })),
	replaceTrades: (trades) => set({
		trades,
		filter: { kind: "all" }
	})
}), {
	name: "jurnal-trading-v1",
	skipHydration: true,
	partialize: (state) => ({
		trades: state.trades,
		filter: state.filter,
		view: state.view
	})
}));
function useClock() {
	const [clock, setClock] = (0, import_react.useState)(() => bucharestClock());
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setClock(bucharestClock()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	return clock;
}
function Ring({ value }) {
	const radius = 38;
	const circ = 2 * Math.PI * radius;
	const dash = Math.max(0, Math.min(100, value)) / 100 * circ;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 100 100",
		className: "size-28 shrink-0",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "50",
			cy: "50",
			r: radius,
			fill: "none",
			stroke: "var(--color-raised)",
			strokeWidth: "8"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "50",
			cy: "50",
			r: radius,
			fill: "none",
			stroke: "var(--color-accent)",
			strokeWidth: "8",
			strokeLinecap: "round",
			strokeDasharray: `${dash} ${circ - dash}`,
			transform: "rotate(-90 50 50)"
		})]
	});
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card bg-surface px-4 py-3 shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xl font-bold tracking-tight tabular-nums",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted",
			children: label
		})]
	});
}
function BreakdownCard({ title, field, rows, filter, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-card bg-surface p-4 shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-sm text-muted",
			children: title
		}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-faint",
			children: "—"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2",
			children: rows.map((row) => {
				const active = filter.kind === "field" && filter.field === field && filter.value === row.value;
				const positive = row.profit > 0;
				const negative = row.profit < 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onPick(row.value),
					className: cn("flex min-h-11 w-full items-center gap-3 rounded-control px-1 text-left", active && "bg-raised"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-20 shrink-0 truncate text-sm font-medium",
							children: row.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-1.5 min-w-8 flex-1 overflow-hidden rounded-full bg-raised",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("block h-full rounded-full", negative ? "bg-danger" : positive ? "bg-accent" : "bg-faint"),
								style: { width: `${Math.max(0, Math.min(100, row.winrate))}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: cn("shrink-0 text-xs font-medium tabular-nums", negative ? "text-danger" : "text-accent"),
							children: [
								fmtPct(row.profit),
								" · ",
								row.count,
								" · ",
								Math.round(row.winrate),
								"% win"
							]
						})
					]
				}) }, row.value);
			})
		})]
	});
}
function Legend({ count, label, tone }) {
	const active = count > 0;
	const text = !active ? "text-muted" : tone === "accent" ? "text-accent" : tone === "danger" ? "text-danger" : "text-fg";
	const dot = tone === "accent" ? "bg-accent" : tone === "danger" ? "bg-danger" : "bg-faint";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5 text-sm", text),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", active ? dot : "bg-line") }),
			count,
			" ",
			label
		]
	});
}
function Dashboard() {
	const clock = useClock();
	const trades = useJournal((state) => state.trades);
	const filter = useJournal((state) => state.filter);
	const setFilter = useJournal((state) => state.setFilter);
	const visible = (0, import_react.useMemo)(() => applyFilter(trades, filter), [trades, filter]);
	const stats = (0, import_react.useMemo)(() => computeStats(visible), [visible]);
	const breakdowns = (0, import_react.useMemo)(() => buildBreakdowns(visible), [visible]);
	const points = (0, import_react.useMemo)(() => equitySeries(visible), [visible]);
	const winShare = stats.count ? stats.wins / stats.count * 100 : 0;
	const loseShare = stats.count ? stats.losses / stats.count * 100 : 0;
	const beShare = stats.count ? stats.bes / stats.count * 100 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 pb-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-card bg-surface px-6 py-7 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Ora României"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							suppressHydrationWarning: true,
							className: "mt-2 text-4xl font-bold tracking-tight tabular-nums sm:text-5xl",
							children: clock.time
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							suppressHydrationWarning: true,
							className: "mt-2 text-sm text-muted",
							children: clock.dateLabel
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex items-center justify-center gap-6 rounded-card bg-surface px-6 py-7 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ring, { value: stats.winrate ?? 0 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-4xl font-bold tracking-tight tabular-nums sm:text-5xl",
						children: fmtWinrate(stats.winrate)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Winrate / tranzacții"
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: fmtPct(stats.total),
						label: "Total"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: fmtWinrate(stats.winrate),
						label: "Winrate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: String(stats.count),
						label: "Tranzacții"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: stats.average === null ? "—" : fmtPct(stats.average),
						label: "Medie/tranzacție"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: fmtFactor(stats.profitFactor),
						label: "Profit factor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: fmtNum(stats.avgSl),
						label: "Medie SL (pips)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: fmtNum(stats.avgFvg),
						label: "Media FVG (pips)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: fmtNum(stats.avgDist),
						label: "Medie dist. lichiditate"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-card bg-surface p-5 shadow-card lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-medium text-muted",
						children: "Profit cumulat (%)"
					}), visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "flex h-56 items-center text-sm text-faint",
						children: "Nicio tranzacție pentru filtrul curent."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartPanel, { points })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-card bg-surface p-5 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-medium text-muted",
							children: "Rezultate"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex h-2 overflow-hidden rounded-full bg-raised",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-accent",
									style: { width: `${winShare}%` }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-danger",
									style: { width: `${loseShare}%` }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-faint",
									style: { width: `${beShare}%` }
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap gap-x-4 gap-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
									count: stats.wins,
									label: "Win",
									tone: "accent"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
									count: stats.losses,
									label: "Lose",
									tone: "danger"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
									count: stats.bes,
									label: "BE",
									tone: "faint"
								})
							]
						}),
						filter.kind !== "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setFilter({ kind: "all" }),
							className: "mt-6 text-sm text-muted underline-offset-2 hover:text-fg hover:underline",
							children: [
								"Scoate filtrul „",
								filterLabel(filter),
								"”"
							]
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: breakdowns.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreakdownCard, {
					title: block.title,
					field: block.field,
					rows: block.rows,
					filter,
					onPick: (value) => {
						const active = filter.kind === "field" && filter.field === block.field && filter.value === value;
						setFilter(active ? { kind: "all" } : {
							kind: "field",
							field: block.field,
							value
						});
					}
				}, block.title))
			})
		]
	});
}
function blankDraft() {
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
		note: ""
	};
}
function fromTrade(trade) {
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
		note: trade.note
	};
}
function parseDecimal(raw) {
	const n = Number(raw.trim().replace(",", "."));
	return Number.isFinite(n) ? n : null;
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-xs font-medium text-muted",
			children: label
		}), children]
	});
}
function Segmented({ value, options, onChange, columns }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("grid gap-1 rounded-control bg-bg p-1", columns === 3 ? "grid-cols-3" : "grid-cols-2"),
		children: options.map((option) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onChange(option),
				className: cn("min-h-11 rounded-lg text-sm font-semibold", option === value ? option === "Win" ? "bg-accent/15 text-accent" : option === "Lose" ? "bg-danger/15 text-danger" : option === "Buy" ? "bg-accent/15 text-accent" : option === "Sell" ? "bg-danger/15 text-danger" : "bg-raised text-fg" : "text-muted"),
				children: option
			}, option);
		})
	});
}
function TradeDialog({ editing, onClose }) {
	const addTrade = useJournal((state) => state.addTrade);
	const updateTrade = useJournal((state) => state.updateTrade);
	const [draft, setDraft] = (0, import_react.useState)(blankDraft);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!editing) return;
		setError(null);
		setDraft(editing.mode === "edit" ? fromTrade(editing.trade) : blankDraft());
	}, [editing]);
	function patch(partial) {
		setDraft((current) => ({
			...current,
			...partial
		}));
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
		const trade = {
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
			note: draft.note.trim().slice(0, 500)
		};
		if (draft.id) updateTrade(trade);
		else addTrade(trade);
		onClose();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: editing !== null,
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-40 bg-bg/75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed inset-x-3 top-6 z-50 max-h-[calc(100vh-3rem)] overflow-y-auto rounded-card bg-surface p-5 shadow-card outline-none sm:inset-x-auto sm:left-1/2 sm:w-full sm:max-w-xl sm:-translate-x-1/2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-lg font-semibold",
					children: editing?.mode === "edit" ? "Editează tranzacția" : "Tranzacție nouă"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "mt-1 text-sm text-muted",
					children: "Profitul, winrate-ul și defalcările se recalculează imediat."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
					"aria-label": "Închide",
					className: "inline-flex size-11 items-center justify-center rounded-control text-muted hover:text-fg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-5 flex flex-col gap-4",
				onSubmit: (event) => {
					event.preventDefault();
					save();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
								label: "Instrument",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field",
									list: "instruments",
									value: draft.instrument,
									onChange: (event) => patch({ instrument: event.target.value }),
									maxLength: 16,
									required: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
									id: "instruments",
									children: INSTRUMENTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: item }, item))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Direcție",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
									value: draft.direction,
									options: ["Buy", "Sell"],
									columns: 2,
									onChange: (direction) => patch({ direction })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Rezultat",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
									value: draft.result,
									options: [
										"Win",
										"Lose",
										"BE"
									],
									columns: 3,
									onChange: (result) => patch({
										result,
										profit: result === "BE" ? "0" : draft.profit
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Profit %",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field",
									inputMode: "decimal",
									value: draft.profit,
									onChange: (event) => patch({ profit: event.target.value }),
									disabled: draft.result === "BE"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Data",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field",
									type: "date",
									value: draft.date,
									onChange: (event) => patch({ date: event.target.value }),
									required: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Ora",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field",
									type: "time",
									value: draft.time,
									onChange: (event) => patch({ time: event.target.value }),
									required: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
								label: "Setup",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field",
									list: "setups",
									value: draft.setup,
									onChange: (event) => patch({ setup: event.target.value })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
									id: "setups",
									children: SETUPS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: item }, item))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
								label: "Lichiditate",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field",
									list: "liquidity",
									value: draft.liquidity,
									onChange: (event) => patch({ liquidity: event.target.value })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
									id: "liquidity",
									children: LIQUIDITY.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: item }, item))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
								label: "MSS",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field",
									list: "mss",
									value: draft.mss,
									onChange: (event) => patch({ mss: event.target.value })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
									id: "mss",
									children: MSS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: item }, item))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Re-entry",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
									value: draft.reentry,
									options: ["Da", "Nu"],
									columns: 2,
									onChange: (reentry) => patch({ reentry })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Mutat la BE",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
									value: draft.movedToBe,
									options: ["Da", "Nu"],
									columns: 2,
									onChange: (movedToBe) => patch({ movedToBe })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Emoții",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Segmented, {
									value: draft.emotions,
									options: ["Da", "Nu"],
									columns: 2,
									onChange: (emotions) => patch({ emotions })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "SL (pips)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field",
									inputMode: "decimal",
									value: draft.sl,
									onChange: (event) => patch({ sl: event.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "FVG (pips)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field",
									inputMode: "decimal",
									value: draft.fvg,
									onChange: (event) => patch({ fvg: event.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Distanță lichiditate",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field",
									inputMode: "decimal",
									value: draft.dist,
									onChange: (event) => patch({ dist: event.target.value })
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Notă",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "field min-h-20 resize-y",
							value: draft.note,
							maxLength: 500,
							onChange: (event) => patch({ note: event.target.value })
						})
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "alert",
						className: "text-sm text-danger",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "min-h-11 rounded-control px-4 text-sm font-medium text-muted hover:text-fg",
							children: "Renunță"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "min-h-11 rounded-control bg-accent px-4 text-sm font-semibold text-bg",
							children: "Salvează"
						})]
					})
				]
			})]
		})] })
	});
}
function ResultPill({ result }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("rounded-full px-2 py-0.5 text-xs font-semibold", result === "Win" ? "bg-accent/15 text-accent" : result === "Lose" ? "bg-danger/15 text-danger" : "bg-raised text-muted"),
		children: result
	});
}
function Trades({ onCreate, onEdit }) {
	const trades = useJournal((state) => state.trades);
	const filter = useJournal((state) => state.filter);
	const removeTrade = useJournal((state) => state.removeTrade);
	const replaceTrades = useJournal((state) => state.replaceTrades);
	const visible = (0, import_react.useMemo)(() => sortTradesDesc(applyFilter(trades, filter)), [trades, filter]);
	const stats = (0, import_react.useMemo)(() => computeStats(visible), [visible]);
	const [confirmId, setConfirmId] = (0, import_react.useState)(null);
	const [pending, setPending] = (0, import_react.useState)(null);
	const [message, setMessage] = (0, import_react.useState)(null);
	const fileRef = (0, import_react.useRef)(null);
	function exportFile() {
		const blob = new Blob([JSON.stringify(trades, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "jurnal-trading.json";
		link.click();
		URL.revokeObjectURL(url);
	}
	async function importFile(file) {
		try {
			const data = JSON.parse(await file.text());
			const parsed = (Array.isArray(data) ? data : [data]).map(sanitizeTrade).filter((trade) => trade !== null);
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
	const summary = stats.count === 0 ? "Nicio tranzacție în filtrul curent." : `${stats.count} tranzacții · net ${fmtSignedPct(stats.total)} · winrate ${stats.winrate === null ? "—" : `${stats.winrate.toFixed(1)}%`}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-lg font-semibold",
					children: "Tranzacții"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: summary
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCreate,
					className: "min-h-11 rounded-control bg-accent px-4 text-sm font-semibold text-bg",
					children: "Tranzacție nouă"
				})]
			}),
			visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-card bg-surface px-5 py-10 text-center shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: "Jurnalul filtrat este gol."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Adaugă o tranzacție sau încarcă exemplele."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-3",
				children: visible.map((trade) => {
					const positive = trade.profitPct > 0;
					const negative = trade.profitPct < 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card bg-surface p-4 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold",
												children: trade.instrument
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm text-muted",
												children: trade.direction
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultPill, { result: trade.result })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted",
										children: [
											weekdayLabel(trade.date),
											" · ",
											trade.date,
											" · ",
											trade.time
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm text-muted",
										children: [
											trade.setup,
											" · ",
											trade.liquidity,
											" · MSS ",
											trade.mss
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs text-faint",
										children: [
											"SL ",
											trade.slPips,
											" · FVG ",
											trade.fvgPips,
											" · dist. ",
											trade.distLiquidity,
											" · re-entry ",
											trade.reentry,
											" · BE ",
											trade.movedToBe,
											" · emoții ",
											trade.emotions
										]
									}),
									trade.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-fg",
										children: trade.note
									}) : null
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("shrink-0 text-lg font-bold tabular-nums", negative ? "text-danger" : positive ? "text-accent" : "text-muted"),
								children: fmtSignedPct(trade.profitPct)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex justify-end gap-2",
							children: confirmId === trade.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setConfirmId(null),
								className: "min-h-11 rounded-control px-3 text-sm text-muted",
								children: "Anulează"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									removeTrade(trade.id);
									setConfirmId(null);
								},
								className: "min-h-11 rounded-control bg-danger/15 px-3 text-sm font-semibold text-danger",
								children: "Șterge"
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onEdit(trade),
								className: "inline-flex min-h-11 items-center gap-1.5 rounded-control px-3 text-sm text-muted hover:text-fg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" }), "Editează"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setConfirmId(trade.id),
								className: "inline-flex min-h-11 items-center gap-1.5 rounded-control px-3 text-sm text-muted hover:text-danger",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), "Șterge"]
							})] })
						})]
					}, trade.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: exportFile,
						className: "min-h-11 rounded-control bg-raised px-3 text-sm text-fg",
						children: "Exportă JSON"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => fileRef.current?.click(),
						className: "min-h-11 rounded-control bg-raised px-3 text-sm text-fg",
						children: "Importă JSON"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: fileRef,
						type: "file",
						accept: "application/json,.json",
						className: "hidden",
						onChange: (event) => {
							const file = event.target.files?.[0];
							event.target.value = "";
							if (file) importFile(file);
						}
					}),
					pending === "demo" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							replaceTrades(demoTrades);
							setPending(null);
							setMessage("Am încărcat setul de exemple.");
						},
						className: "min-h-11 rounded-control bg-accent/15 px-3 text-sm font-semibold text-accent",
						children: "Înlocuiește cu exemplele"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setPending("demo"),
						className: "min-h-11 rounded-control px-3 text-sm text-muted hover:text-fg",
						children: "Încarcă exemple"
					}),
					pending === "reset" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							replaceTrades(seedTrades);
							setPending(null);
							setMessage("Jurnalul a revenit la exemplul din poză.");
						},
						className: "min-h-11 rounded-control px-3 text-sm font-semibold text-danger",
						children: "Confirmă resetarea"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setPending("reset"),
						className: "min-h-11 rounded-control px-3 text-sm text-muted hover:text-fg",
						children: "Resetează"
					}),
					pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setPending(null),
						className: "min-h-11 px-3 text-sm text-muted",
						children: "Anulează"
					}) : null
				]
			}),
			message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: message
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs text-faint",
				children: "Tranzacțiile rămân salvate în acest browser."
			})
		]
	});
}
var NAV = [{
	id: "dashboard",
	label: "Analiză",
	icon: ChartColumn
}, {
	id: "trades",
	label: "Jurnal",
	icon: List
}];
function FilterMenu() {
	const trades = useJournal((state) => state.trades);
	const filter = useJournal((state) => state.filter);
	const setFilter = useJournal((state) => state.setFilter);
	const instruments = uniqueValues(trades, "instrument");
	const months = uniqueValues(trades, "month").sort((a, b) => b.localeCompare(a));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuTrigger, {
		className: "inline-flex h-11 min-w-28 items-center justify-between gap-3 rounded-control bg-surface px-3 text-sm font-medium shadow-card outline-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate",
			children: filterLabel(filter)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-muted" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		sideOffset: 8,
		className: "z-50 max-h-80 min-w-52 overflow-y-auto rounded-control bg-surface p-1 shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onSelect: () => setFilter({ kind: "all" }),
				className: cn("cursor-pointer rounded-lg px-3 py-2 text-sm outline-none data-highlighted:bg-raised", filter.kind === "all" && "text-accent"),
				children: "Toate"
			}),
			instruments.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
				className: "px-3 pb-1 pt-2 text-xs text-faint",
				children: "Instrument"
			}), instruments.map((instrument) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onSelect: () => setFilter({
					kind: "field",
					field: "instrument",
					value: instrument
				}),
				className: cn("cursor-pointer rounded-lg px-3 py-2 text-sm outline-none data-highlighted:bg-raised", filter.kind === "field" && filter.field === "instrument" && filter.value === instrument && "text-accent"),
				children: instrument
			}, instrument))] }) : null,
			months.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, { className: "my-1 h-px bg-line" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
					className: "px-3 pb-1 pt-2 text-xs text-faint",
					children: "Lună"
				}),
				months.map((month) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
					onSelect: () => setFilter({
						kind: "field",
						field: "month",
						value: month
					}),
					className: cn("cursor-pointer rounded-lg px-3 py-2 text-sm outline-none data-highlighted:bg-raised", filter.kind === "field" && filter.field === "month" && filter.value === month && "text-accent"),
					children: monthName(month, true)
				}, month))
			] }) : null
		]
	}) })] });
}
function JournalApp() {
	const view = useJournal((state) => state.view);
	const setView = useJournal((state) => state.setView);
	const [editing, setEditing] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		useJournal.persist.rehydrate();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex min-h-screen w-full max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "sticky top-0 hidden h-screen w-16 shrink-0 flex-col items-center gap-1 pt-5 lg:flex",
					"aria-label": "Secțiuni",
					children: NAV.map((item) => {
						const Icon = item.icon;
						const active = view === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-current": active ? "page" : void 0,
							"aria-label": item.label,
							onClick: () => setView(item.id),
							className: cn("relative flex size-11 items-center justify-center rounded-xl text-muted hover:text-fg", active && "text-fg"),
							children: [active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 h-5 w-0.5 rounded-full bg-fg" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: 1.75
							})]
						}, item.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex flex-wrap items-center justify-between gap-3 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-9 items-center justify-center rounded-full shadow-card",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-4 rounded-full border-2 border-muted" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-base font-semibold tracking-tight",
								children: "Jurnal trading"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Tranzacție nouă",
								onClick: () => setEditing({ mode: "create" }),
								className: "inline-flex size-11 items-center justify-center rounded-control bg-accent text-bg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterMenu, {})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "pb-24 lg:pb-10",
						children: view === "dashboard" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trades, {
							onCreate: () => setEditing({ mode: "create" }),
							onEdit: (trade) => setEditing({
								mode: "edit",
								trade
							})
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-30 flex border-t border-line bg-bg/95 px-3 py-2 backdrop-blur lg:hidden",
				"aria-label": "Secțiuni",
				children: NAV.map((item) => {
					const Icon = item.icon;
					const active = view === item.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setView(item.id),
						className: cn("flex min-h-11 flex-1 flex-col items-center justify-center gap-0.5 text-xs text-muted", active && "text-fg"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-5",
							strokeWidth: 1.75
						}), item.label]
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TradeDialog, {
				editing,
				onClose: () => setEditing(null)
			})
		]
	});
}
var SplitComponent = JournalApp;
//#endregion
export { SplitComponent as component, routes_DlwMn3hL_exports as t };
