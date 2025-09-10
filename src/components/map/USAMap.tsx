// components/USAMap.js
'use client';

import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from 'react-simple-maps';

const USAMap = ({ onStateClick, selectedState }) => {
  const [hoveredState, setHoveredState] = useState(null);

  // USA TopoJSON URL from react-simple-maps
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-110m.json";

  const handleStateClick = (geo) => {
    const stateCode = geo.properties.STUSPS;
    const stateName = geo.properties.NAME;
    
    if (onStateClick) {
      onStateClick({ code: stateCode, name: stateName });
    }
  };

  const getStateColor = (geo) => {
    const stateCode = geo.properties.STUSPS;
    
    if (selectedState === stateCode) {
      return '#fb923c'; // orange-400
    }
    if (hoveredState === stateCode) {
      return '#fed7aa'; // orange-200
    }
    return '#e5e7eb'; // gray-200
  };

  const getStrokeColor = (geo) => {
    const stateCode = geo.properties.STUSPS;
    return selectedState === stateCode ? '#ea580c' : '#ffffff'; // orange-600 or white
  };

  // Sample event markers (replace with real data)
  const eventMarkers = [
    { id: 1, coordinates: [-118.2437, 34.0522], count: 12, city: "Los Angeles" },
    { id: 2, coordinates: [-74.0059, 40.7128], count: 18, city: "New York" },
    { id: 3, coordinates: [-87.6298, 41.8781], count: 8, city: "Chicago" },
    { id: 4, coordinates: [-95.3698, 29.7604], count: 15, city: "Houston" },
    { id: 5, coordinates: [-122.4194, 37.7749], count: 22, city: "San Francisco" }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="w-full max-w-6xl relative">
        <ComposableMap
          projection="geoAlbersUsa"
          projectionConfig={{
            scale: 1000,
          }}
          width={975}
          height={610}
          className="w-full h-auto drop-shadow-sm"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getStateColor(geo)}
                  stroke={getStrokeColor(geo)}
                  strokeWidth={selectedState === geo.properties.STUSPS ? 2 : 0.5}
                  className="cursor-pointer transition-all duration-200 hover:drop-shadow-md"
                  onMouseEnter={() => setHoveredState(geo.properties.STUSPS)}
                  onMouseLeave={() => setHoveredState(null)}
                  onClick={() => handleStateClick(geo)}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Event Markers */}
          {eventMarkers.map((marker) => (
            <Marker
              key={marker.id}
              coordinates={marker.coordinates}
              className="cursor-pointer"
            >
              <circle
                r={8}
                fill="#fb923c"
                stroke="#ffffff"
                strokeWidth={2}
                className="hover:scale-110 transition-transform drop-shadow-sm"
              />
              <text
                textAnchor="middle"
                dy={4}
                fontSize={10}
                fill="#ffffff"
                fontWeight="600"
              >
                {marker.count}
              </text>
            </Marker>
          ))}

          {/* Optional: State Labels for better UX */}
          {hoveredState && (
            <Annotation
              subject={[-96, 40]} // Center of US
              dx={0}
              dy={-30}
              connectorProps={{
                stroke: 'transparent'
              }}
            >
              <rect
                x={-30}
                y={-15}
                width={60}
                height={20}
                rx={4}
                fill="#000000"
                fillOpacity={0.8}
              />
              <text
                textAnchor="middle"
                dy={-2}
                fontSize={12}
                fill="#ffffff"
                fontWeight="500"
              >
                {hoveredState}
              </text>
            </Annotation>
          )}
        </ComposableMap>

        {/* State tooltip */}
        {hoveredState && (
          <div className="absolute top-4 left-4 bg-black bg-opacity-80 text-white px-3 py-2 rounded-lg text-sm pointer-events-none z-10">
            <div className="font-medium">
              {hoveredState}
            </div>
            <div className="text-xs text-gray-300">
              Click to view events
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-3 z-10">
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-200 rounded border border-white"></div>
              <span>Available States</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-400 rounded border border-orange-600"></div>
              <span>Selected State</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-400 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xs text-white font-semibold">12</span>
              </div>
              <span>Event Locations</span>
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-2 z-10">
          <div className="flex flex-col space-y-1">
            <button className="p-2 hover:bg-gray-100 rounded text-gray-600 text-sm font-medium">
              Reset View
            </button>
            <div className="border-t border-gray-200"></div>
            <div className="text-xs text-gray-500 px-2 py-1">
              {selectedState ? `Selected: ${selectedState}` : 'Select a state'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USAMap;