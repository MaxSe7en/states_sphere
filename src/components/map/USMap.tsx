// src/components/USMap.tsx
'use client';

import { ComposableMap, Geographies, Geography, Annotation } from 'react-simple-maps';
import { useRouter } from 'next/navigation';
import { geoCentroid } from 'd3-geo';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const states = {
    "Alabama": "AL", "Alaska": "AK", "Arizona": "AZ", "Arkansas": "AR",
    "California": "CA", "Colorado": "CO", "Connecticut": "CT", "Delaware": "DE",
    "Florida": "FL", "Georgia": "GA", "Hawaii": "HI", "Idaho": "ID",
    "Illinois": "IL", "Indiana": "IN", "Iowa": "IA", "Kansas": "KS",
    "Kentucky": "KY", "Louisiana": "LA", "Maine": "ME", "Maryland": "MD",
    "Massachusetts": "MA", "Michigan": "MI", "Minnesota": "MN", "Mississippi": "MS",
    "Missouri": "MO", "Montana": "MT", "Nebraska": "NE", "Nevada": "NV",
    "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM", "New York": "NY",
    "North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH", "Oklahoma": "OK",
    "Oregon": "OR", "Pennsylvania": "PA", "Rhode Island": "RI", "South Carolina": "SC",
    "South Dakota": "SD", "Tennessee": "TN", "Texas": "TX", "Utah": "UT",
    "Vermont": "VT", "Virginia": "VA", "Washington": "WA", "West Virginia": "WV",
    "Wisconsin": "WI", "Wyoming": "WY"
};

const USMap = () => {
    const router = useRouter();

    const handleStateClick = (stateName: string) => {
        const stateCode = states[stateName as keyof typeof states];
        console.log(`State clicked: ${stateName} (${stateCode})`);
        if (stateCode) {
            router.push(`/states/${stateCode.toLowerCase()}`);
        }
    };

    return (
        <div className="flex justify-center w-[1/2] h-[200px] max-w-4xl p-4 bg-white rounded-lg shadow-lg">
            <ComposableMap projection="geoAlbersUsa" projectionConfig={{ scale: 1000 }}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const centroid = geoCentroid(geo);
                            const stateName = geo.properties.name;
                            const stateCode = states[stateName as keyof typeof states];

                            return (
                                <g key={geo.rsmKey}>
                                    <Geography
                                        geography={geo}
                                        onClick={() => handleStateClick(stateName)}
                                        className="cursor-pointer transition-all duration-200"
                                        style={{
                                            default: {
                                                fill: '#A0AEC0', // A nice, neutral gray
                                                stroke: '#FFFFFF',
                                                strokeWidth: 1,
                                                outline: 'none',
                                            },
                                            hover: {
                                                fill: '#4C51BF', // A vibrant purple
                                                outline: 'none',
                                            },
                                            pressed: {
                                                fill: '#312E81', // A darker purple
                                                outline: 'none',
                                            },
                                        }}
                                    />
                                    {/* Conditionally render labels for larger states to avoid clutter */}
                                    {stateCode && centroid[0] > -160 && centroid[0] < -60 && (
                                        <Annotation
                                            subject={centroid}
                                            dx={0}
                                            dy={0}
                                            connectorProps={{
                                                stroke: '#FF0000',
                                                strokeWidth: 0,
                                                strokeLinecap: 'round'
                                            }}
                                        >
                                            <text
                                                textAnchor="middle"
                                                fontSize="8"
                                                fill="#FFF"
                                                fontFamily="Arial, sans-serif"
                                                className="pointer-events-none"
                                            >
                                                {stateCode}
                                            </text>
                                        </Annotation>
                                    )}
                                </g>
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
};

export default USMap;