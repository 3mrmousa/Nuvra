/* eslint-disable @typescript-eslint/no-unused-vars */
import sun from "../../../public/dashboard/icons8-sun-100.png";
import moon from "../../../public/dashboard/icons8-new-moon-100.png";
import cloudNight from "../../../public/dashboard/icons8-night-100.png";
import cloudSun from "../../../public/dashboard/icons8-partly-cloudy-day-100.png";
import rain from "../../../public/dashboard/icons8-rain-100.png";
import snow from "../../../public/dashboard/icons8-snow-100.png";
import storm from "../../../public/dashboard/icons8-stormy-weather-100.png";
import Image from "next/image";

function ForecasrCards({
  time,
  max,
  min,
  weather_code,
}: {
  time?: number;
  max?: number;
  min?: number;
  weather_code: number;
}) {

  const date = new Date(time! * 1000);
  const day = date.toLocaleDateString("en-US", {
    weekday: "short",
  });
  

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
      className=" shadow-zinc-400 dark:shadow-zinc-800 
                   md:p-6  w-25 
                   min-h-70 h-70 rounded-4xl flex flex-col justify-center md:justify-between items-center
                   hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black 
                   transition-colors duration-300 cursor-pointer"
    >
      <div className="top flex items-center justify-between">
        <h4 className="text-3xl">{day}</h4>
      </div>
      <hr className="border w-full hidden md:block"/>
      <div className="relative w-15 md:w-20 h-15 md:h-20">
        <Image src={iconSrc} alt="Weather" />
      </div>
      <h3 className="text-2xl md:text-4xl font-semibold">
        {Number((max! + min!) / 2).toFixed()}°
      </h3>
    </div>
  );
}

export default ForecasrCards;
