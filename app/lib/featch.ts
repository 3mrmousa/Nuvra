import { API, RAINAPI } from "./constants";

export async function featch(
  longitude: string,
  latitude: string,
  days: number = 4,
) {
  const res = await fetch(
    API + `&latitude=${latitude}&longitude=${longitude}&days=${days}`,
    {
      cache: "no-store",
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function featchStateByLanandLon(
  longitude: string,
  latitude: string,
) {
  const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${process.env.GEOAPIFY_API_KEY}`;

  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Geoapify failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
}



export async function fetchCitiesByCountry(countryCode: string) {
  const res = await fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${countryCode}/regions/CA/places`,
    {
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY!,
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to fetch cities: ${res.status} ${text}`);
  }

  const json = await res.json();

  return json.data;
}

export async function fetchRainData(
  longitude: string,
  latitude: string,
  days: number = 1,
) {
  const res = await fetch(
    RAINAPI +
      `&latitude=${latitude}&longitude=${longitude}&forecast_days=${days}`,
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to fetch rain data: ${res.status} ${text}`);
  }

  return res.json();
}

export async function fetchWeatherHourly(
  longitude: string,
  latitude: string,
  days: number = 1,
) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&forecast_days=${days}&hourly=weathercode`,
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `Failed to fetch hourly weather data: ${res.status} ${text}`,
    );
  }

  return res.json();
}


export async function fetchSun(longitude: string, latitude: string) {
  const rest = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&forecast_days=1&daily=sunrise,sunset` );

  if (!rest.ok) {
    const text = await rest.text();
    throw new Error(
      `Failed to fetch sun data: ${rest.status} ${text}`,
    );
  }

  return rest.json();
}