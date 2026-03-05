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

function ChartsForWeather() {
  const { todayWeatherCharts } = useContext(WeatherContext);

  const LEVEL_LABELS: { [key: number]: string } = {
    0: "Sunny",
    1: "Partly Cloudy",
    2: "Rainy",
    3: "Snowy",
    4: "Stormy",
  };

  function gerWeatherLevel(code: number): number {
    // Storm
    if ([95, 96, 99].includes(code)) return 4;

    // Snow
    if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) return 3;

    // Rain / Showers
    if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return 2;

    // Cloudy
    if (code >= 1 && code <= 3) return 1;

    // Sunny
    if (code === 0) return 0;

    // Fallback
    return 0;
  }

  const data = todayWeatherCharts.hourly.time.map((t: string, i: number) => {
    const d = new Date(t);

    return {
      x: t,
      hour: `${d.getHours()}`,
      level: gerWeatherLevel(todayWeatherCharts.hourly.weathercode[i]),
    };
  });

  return (
    <div className="w-full h-80 bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-6 shadow-lg">
      <h3 className="mb-4 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
        Weather Today
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>

          {/* X Axis */}
          <XAxis
            dataKey="hour"
            
            interval={2}
            angle={-30}
            textAnchor="end"
            height={45}
            tick={{ fontSize: 12, fill: "#71717a" }}
            axisLine={false}
            tickLine={false}
          />
          {/* Y Axis */}
          <YAxis
            width={50}
            ticks={[0, 1, 2, 3, 4]}
            tickFormatter={(value) => LEVEL_LABELS[value]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#71717a" }}
          />
          {/* Tooltip */}
          <Tooltip
            formatter={(_, __, { payload }) => LEVEL_LABELS[payload.level]}
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
            dataKey="level"
            fill="#3b82f6"
            radius={[8, 8, 0, 0]}
            barSize={10}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartsForWeather;
