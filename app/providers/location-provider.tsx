"use client";

import { createContext } from "react";

export const LocationContext = createContext<null | {
  longtude: number;
  latitude: number;
}>(null);

export function LocationProvider({ children }: { children: React.ReactNode }) {

  return (
    <LocationContext.Provider value={{ longtude: 0, latitude: 0 }}>
      {children}
    </LocationContext.Provider>
  );
}
