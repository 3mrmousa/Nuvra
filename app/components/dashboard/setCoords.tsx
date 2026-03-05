"use server";

import { cookies } from "next/headers";

export async function setCoords(lat: number, lon: number) {
  const c = cookies();

  const nextLat = lat.toFixed(6);
  const nextLon = lon.toFixed(6);

  const currentLat = (await c).get("lat")?.value;
  const currentLon = (await c).get("lon")?.value;

  if (currentLat === nextLat && currentLon === nextLon) {
    return { changed: false };
  }

  (await c).set("lat", nextLat, { path: "/", sameSite: "lax" });
  (await c).set("lon", nextLon, { path: "/", sameSite: "lax" });

  return { changed: true };
}
