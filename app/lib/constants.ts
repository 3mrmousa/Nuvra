export const API =
  "https://api.open-meteo.com/v1/forecast?&current=temperature_2m,relative_humidity_2m,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m,surface_pressure&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,rain_sum,showers_sum,snowfall_sum,precipitation_sum,wind_speed_10m_max&timeformat=unixtime";

export const RAINAPI =
  "https://api.open-meteo.com/v1/forecast?&hourly=precipitation_probability,rain,showers,snowfall";
