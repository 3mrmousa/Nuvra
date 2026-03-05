"use client";

import {
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ComposedChart,
  Bar,
} from "recharts";
import { WeatherContext } from "../providers/WeatherProvider";
import { useContext } from "react";

function ChartsForRains() {
  const { todayRainCharts } = useContext(WeatherContext);

  const hours = todayRainCharts.hourly.time.map((t: string) => {
    const date = new Date(t);
    return `${date.getHours()}:00`;
  });

  const rain = todayRainCharts.hourly.rain.map((r: number) => r);

  const data = hours.map((h: string, i: number) => ({
    x: todayRainCharts.hourly.time[i],
    hour: h,
    rain: rain[i],
  }));

  return (
    <div className="w-full h-80 bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-6 shadow-lg">
      <h3 className="mb-4 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
        Rain Today
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
            
          {/* X Axis */}
          <XAxis
            dataKey="hour"
            interval={3}
            angle={-30}
            textAnchor="end"
            height={45}
            tick={{ fontSize: 12, fill: "#71717a" }}
            axisLine={false}
            tickLine={false}
          />

          {/* Y Axis */}
          <YAxis
            tick={{ fontSize: 12, fill: "#71717a" }}
            axisLine={false}
            tickLine={false}
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "black",
              borderRadius: "12px",
              border: "none",
              color: "white",
              fontSize: "12px",
            }}
          />

          {/* Bars */}
          <Bar
            dataKey="rain"
            fill="#3b82f6"
            radius={[8, 8, 0, 0]}
            barSize={10}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartsForRains;
