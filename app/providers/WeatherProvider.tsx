/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { createContext } from "react";

export const WeatherContext = createContext<any>(null!);

export function WeatherProvider({
  children,
  nextSevenDays,
  locationByState,
  todayRainCharts,
  todayWeatherCharts,
  todaySun,
}: {
  children: React.ReactNode;
  nextSevenDays: any;
  locationByState: any;
  todayRainCharts: any;
  todayWeatherCharts: any;
  todaySun: any;
}) {
  return (
    <WeatherContext.Provider
      value={{
        nextSevenDays,
        locationByState,
        todayRainCharts,
        todayWeatherCharts,
        todaySun,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
