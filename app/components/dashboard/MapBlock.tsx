"use client";

import dynamic from "next/dynamic";
import { setCoords } from "./setCoords";

const MapPicker = dynamic(() => import("./MapPicker"), { ssr: false });

export default  function MapBlock() {


  return (
    <MapPicker
      onPick={async (lat, lng) => {
        await setCoords(lat, lng);
      }}
    />
  );
}
