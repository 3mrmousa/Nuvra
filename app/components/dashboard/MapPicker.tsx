"use client";

import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useState } from "react";

type Props = {
  onPick: (lat: number, lng: number) => void;
};

export default function MapPicker({ onPick }: Props) {
  const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(
    null,
  );

  return (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-black dark:shadow-zinc-800">
      <Map
        initialViewState={{
          latitude: 30.0444,
          longitude: 31.2357,
          zoom: 1,
        }}
        minZoom={1}
        maxZoom={16}
        renderWorldCopies={false}
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
        onClick={(e) => {
          const { lat, lng } = e.lngLat;
          setMarker({ lat, lng });
          onPick(lat, lng);
        }}
      >
        {marker && <Marker latitude={marker.lat} longitude={marker.lng} />}
      </Map>
    </div>
  );
}
