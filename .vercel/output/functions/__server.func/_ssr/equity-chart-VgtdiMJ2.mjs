import { a as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as ResponsiveContainer, i as Area, n as YAxis, o as Tooltip, r as XAxis, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/equity-chart-VgtdiMJ2.js
var import_jsx_runtime = require_jsx_runtime();
function EquityChart({ points }) {
	const values = points.map((point) => point.equity);
	const minV = Math.min(...values);
	const maxV = Math.max(...values);
	const span = maxV - minV || 1;
	const min = minV >= 0 ? 0 : minV - span * .12;
	const max = maxV + span * .16;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
			data: points,
			margin: {
				top: 12,
				right: 8,
				left: 0,
				bottom: 4
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "equity-fill",
					x1: "0",
					y1: "0",
					x2: "0",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "var(--color-accent)",
						stopOpacity: .45
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "var(--color-accent)",
						stopOpacity: .02
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "label",
					hide: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					hide: true,
					width: 0,
					domain: [min, max]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
					cursor: { stroke: "var(--color-line)" },
					contentStyle: {
						background: "var(--color-surface)",
						border: "1px solid var(--color-line)",
						borderRadius: 12,
						color: "var(--color-fg)",
						fontSize: 13
					},
					formatter: (value) => {
						const n = typeof value === "number" ? value : Number(value);
						return [Number.isFinite(n) ? `${n.toFixed(2)}%` : "—", "Profit cumulat"];
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
					type: "linear",
					dataKey: "equity",
					stroke: "var(--color-accent)",
					strokeWidth: 2,
					fill: "url(#equity-fill)",
					dot: false,
					activeDot: {
						r: 4,
						fill: "var(--color-accent)",
						stroke: "var(--color-bg)"
					},
					isAnimationActive: true
				})
			]
		})
	});
}
//#endregion
export { EquityChart };
