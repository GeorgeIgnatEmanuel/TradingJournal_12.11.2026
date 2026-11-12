import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { EquityPoint } from "@/lib/journal/stats";

export function EquityChart({ points }: { points: EquityPoint[] }) {
  const values = points.map((point) => point.equity);
  const minV = Math.min(...values);
  const maxV = Math.max(...values);
  const span = maxV - minV || 1;
  const min = minV >= 0 ? 0 : minV - span * 0.12;
  const max = maxV + span * 0.16;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={points} margin={{ top: 12, right: 8, left: 0, bottom: 4 }}>
        <defs>
          <linearGradient id="equity-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity={0.45} />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <XAxis dataKey="label" hide />
        <YAxis hide width={0} domain={[min, max]} />
        <Tooltip
          cursor={{ stroke: "var(--color-line)" }}
          contentStyle={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-line)",
            borderRadius: 12,
            color: "var(--color-fg)",
            fontSize: 13,
          }}
          formatter={(value) => {
            const n = typeof value === "number" ? value : Number(value);
            const text = Number.isFinite(n) ? `${n.toFixed(2)}%` : "—";
            return [text, "Profit cumulat"];
          }}
        />
        <Area
          type="linear"
          dataKey="equity"
          stroke="var(--color-accent)"
          strokeWidth={2}
          fill="url(#equity-fill)"
          dot={false}
          activeDot={{ r: 4, fill: "var(--color-accent)", stroke: "var(--color-bg)" }}
          isAnimationActive
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
