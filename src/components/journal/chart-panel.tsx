import { useEffect, useState } from "react";
import type { EquityPoint } from "@/lib/journal/stats";

export function ChartPanel({ points }: { points: EquityPoint[] }) {
  const [Chart, setChart] = useState<null | typeof import("./equity-chart").EquityChart>(null);

  useEffect(() => {
    let live = true;
    void import("./equity-chart").then((mod) => {
      if (live) setChart(() => mod.EquityChart);
    });
    return () => {
      live = false;
    };
  }, []);

  return (
    <div className="h-56 w-full">
      {Chart ? <Chart points={points} /> : <div className="h-full" />}
    </div>
  );
}
