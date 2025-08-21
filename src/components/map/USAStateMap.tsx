"use client";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function USAStateMap({ onSelectState }: { onSelectState: (state: string) => void }) {
  return (
    <ComposableMap projection="geoAlbersUsa" className="w-full h-full">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onClick={() => onSelectState(geo.properties.name)}
              className="cursor-pointer"
              style={{
                default: { fill: "#FDE68A", outline: "none" },  // yellow-200
                hover: { fill: "#FB923C", outline: "none" },    // orange-400
                pressed: { fill: "#F97316", outline: "none" },  // orange-500
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
}
