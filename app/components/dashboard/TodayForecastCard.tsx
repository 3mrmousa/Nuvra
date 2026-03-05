/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import sun from "../../../public/dashboard/icons8-sun-100.png";
import moon from "../../../public/dashboard/icons8-new-moon-100.png";
import cloudNight from "../../../public/dashboard/icons8-night-100.png";
import cloudSun from "../../../public/dashboard/icons8-partly-cloudy-day-100.png";
import rain from "../../../public/dashboard/icons8-rain-100.png";
import snow from "../../../public/dashboard/icons8-snow-100.png";
import storm from "../../../public/dashboard/icons8-stormy-weather-100.png";
import Image from "next/image";
import { WeatherContext } from "@/app/providers/WeatherProvider";
import { useContext } from "react";

function TodayForecastCard() {
  const weather = useContext(WeatherContext);

  const isoDate = weather.nextSevenDays.current.time;

  const time = new Date(isoDate).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const day = new Date(isoDate).toLocaleDateString("en-US", {
    weekday: "long",
  });

  const weather_code = weather.nextSevenDays.current.weather_code;

  const iconSrc =
    weather_code === 0
      ? sun
      : weather_code >= 1 && weather_code <= 3
        ? cloudSun
        : (weather_code >= 51 && weather_code <= 67) ||
            (weather_code >= 80 && weather_code <= 82)
          ? rain
          : (weather_code >= 71 && weather_code <= 77) ||
              (weather_code >= 85 && weather_code <= 86)
            ? snow
            : [95, 96, 99].includes(weather_code)
              ? storm
              : cloudSun;

  return (
    <div
      className="bg-indigo-300 shadow-2xl shadow-zinc-400 dark:shadow-zinc-800 text-black min-w-80
        max-h-120 rounded-4xl flex flex-col gap-7"
    >
      <div className="top flex flex-col lg:flex-row items-center justify-between bg-indigo-200 p-5 rounded-2xl border-b-4 border-indigo-400">
        <h4 className="text-3xl">{day}</h4>
        <p>{time}</p>
      </div>
      <div className="bottom flex-col items-center justify-between px-6 pb-6">
        <div className="relative flex flex-col lg:flex-row items-center justify-between">
          <h3 className="text-5xl font-semibold">
            {weather.nextSevenDays.current.temperature_2m}°
          </h3>
          <Image src={iconSrc} alt="Weather" width={80} />
        </div>
        <div className="grid grid-cols-2 mt-3 lg:mt-0 lg:gap-0 justify-between">
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-1">
              <p>Feels like:</p>
              <p>
                {Number(weather.nextSevenDays.current.temperature_2m).toFixed()}
                °
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p>Wind:</p>
              <p>{weather.nextSevenDays.current.wind_speed_10m} km/h</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-1">
              <p>uv:</p>
              <p>{weather.nextSevenDays.daily.uv_index_max[0]}:</p>
            </div>
            <div className="flex items-center gap-1">
              <p>Pressure:</p>
              <p>{weather.nextSevenDays.current.surface_pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayForecastCard;
