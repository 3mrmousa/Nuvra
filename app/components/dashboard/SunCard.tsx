"use client";

import { WeatherContext } from "@/app/providers/WeatherProvider";
import { useContext } from "react";

function SunCard() {
  const todaySun = useContext(WeatherContext);

  const sunrise = new Date(todaySun.todaySun.daily.sunrise[0]);
  const sunset = new Date(todaySun.todaySun.daily.sunset[0]);

  return (
    <div
      className="w-full h-80 bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-6 shadow-lg 
    flex flex-col gap-6 items-center justify-center"
    >
      <h2 className="text-2xl font-bold mb-4">Sunrise and Sunset</h2>

      <div className="text-lg flex flex-col gap-1 items-center text-black bg-amber-200 p-4 rounded-2xl">
        <p className="text-lg">Sunrise</p>
        <p className="text-lg font-semibold">
          {sunrise.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
      <div className="text-lg flex flex-col gap-1 items-center text-black bg-indigo-200 p-4 rounded-2xl">
        <p className="text-lg">Sunset</p>
        <p className="text-lg font-semibold">
          {sunset.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}

export default SunCard;
