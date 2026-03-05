import { cache } from "react";
import {
  featchStateByLanandLon,
  featch,
  fetchRainData,
  fetchSun,
  fetchWeatherHourly,
} from "./featch";

export const getLocationByState = cache(async (lon: string, lat: string) => {
  return featchStateByLanandLon(lon, lat);
});

export const getNextDays = cache(async (lon: string, lat: string, days: number) => {
  return featch(lon, lat, days);
});

export const getTodayRainCharts = cache(async (lon: string, lat: string) => {
  return fetchRainData(lon, lat, 1);
});

export const getTodayWeatherCharts = cache(async (lon: string, lat: string) => {
  return fetchWeatherHourly(lon, lat, 1);
});

export const getTodaySun = cache(async (lon: string, lat: string) => {
  return fetchSun(lon, lat);
});