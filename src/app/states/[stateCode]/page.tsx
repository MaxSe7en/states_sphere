// src/app/states/[stateCode]/page.tsx
import { notFound } from 'next/navigation';

// A simple mock list of valid state codes for demonstration
const validStateCodes = [
  'al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'de', 'fl', 'ga',
  'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'me', 'md',
  'ma', 'mi', 'mn', 'ms', 'mo', 'mt', 'ne', 'nv', 'nh', 'nj',
  'nm', 'ny', 'nc', 'nd', 'oh', 'ok', 'or', 'pa', 'ri', 'sc',
  'sd', 'tn', 'tx', 'ut', 'vt', 'va', 'wa', 'wv', 'wi', 'wy'
];

interface StatePageProps {
  params: {
    stateCode: string;
  };
}

export default function StatePage({ params }: StatePageProps) {
  const { stateCode } = params;

  // Basic validation to check if the state code is valid
  if (!validStateCodes.includes(stateCode.toLowerCase())) {
    notFound(); // This will show Next.js's 404 page
  }
  
  // We'll need a way to get the full state name from the code
  const fullStateName = stateCode.toUpperCase(); // Placeholder for now

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Legislation View (Left Side) */}
      <div className="flex-1 overflow-y-auto p-4 md:w-1/2 bg-white border-r border-gray-200">
        <h1 className="text-3xl font-bold mb-4">{fullStateName} Legislation</h1>
        <p className="text-gray-500">
          This is where the list of bills, votes, and politician info will go.
        </p>
        {/* Placeholder for the Bill Feed component */}
        <div className="mt-8 space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="font-semibold">Sample Bill 1</h3>
            <p className="text-sm text-gray-600">A brief summary of the bill...</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="font-semibold">Sample Bill 2</h3>
            <p className="text-sm text-gray-600">A brief summary of another bill...</p>
          </div>
          {/* ... more bills */}
        </div>
      </div>

      {/* Community View (Right Side) */}
      <div className="flex-1 overflow-y-auto p-4 md:w-1/2 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">{fullStateName} Community</h2>
        <p className="text-gray-500">
          This is the Reddit-style feed for the state community.
        </p>
        {/* Placeholder for the Community Feed component */}
        <div className="mt-8 space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold">Community Post 1</h3>
            <p className="text-sm text-gray-600">A discussion post about a local issue.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold">Community Post 2</h3>
            <p className="text-sm text-gray-600">A post linked to a bill.</p>
          </div>
          {/* ... more community posts */}
        </div>
      </div>
    </div>
  );
}