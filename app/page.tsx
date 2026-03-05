import ForecasrCards from "./components/dashboard/ForecastCards";
import MapBlock from "./components/dashboard/MapBlock";
import TodayForecastCard from "./components/dashboard/TodayForecastCard";
import { featch, fetchSun } from "./lib/featch";
import ChartsForWeather from "./components/ChartsForWeather";

import { cookies } from "next/headers";
import { getLocationByState } from "./lib/serverData";

export async function generateMetadata() {
  const c = await cookies();
  const myLat = c.get("lat")?.value || "29.987075";
  const myLon = c.get("lon")?.value || "31.211806";

  const locationByState = await getLocationByState(myLon, myLat);

  const city =
    locationByState.features[0].properties.city ||
    locationByState.features[0].properties.state ||
    "Unknown Location";

  const countryRaw =
    locationByState.features[0].properties.country || "Unknown Country";
  const country = countryRaw === "Israel" ? "Palestine" : countryRaw;

  return {
    title: `Dashboard - ${city}, ${country}`,
    description: "Your Personal Weather Companion",
  };
}

export default async function Dashboard() {
  const c = await cookies();
  const myLat = c.get("lat")?.value || "29.987075";
  const myLon = c.get("lon")?.value || "31.211806";

  const nextSevenDays = await featch(String(myLon), String(myLat), 7);

  const todaySun = await fetchSun(myLon, myLat);

  const sunrise = new Date(todaySun.daily.sunrise[0]);
  const sunset = new Date(todaySun.daily.sunset[0]);

  return (
    <section className="mt-25 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-10 py-5 gap-y-10 gap-x-5 min-h-screen">
      <div className="md:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-center gap-5">
        <TodayForecastCard />
        <div className="flex gap-5 overflow-x-auto min-w-0 w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <ForecasrCards
              key={i}
              time={nextSevenDays.daily.time[i + 1]}
              max={nextSevenDays.daily.temperature_2m_max[i + 1]}
              min={nextSevenDays.daily.temperature_2m_min[i + 1]}
              weather_code={nextSevenDays.daily.weather_code[i + 1]}
            />
          ))}
        </div>
      </div>

      <div className="my-auto">
        <ChartsForWeather />
      </div>

      <div className="md:col-span-2 lg:col-span-3 h-80">
        <MapBlock />
      </div>

      <div>
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
      </div>
    </section>
  );
}
