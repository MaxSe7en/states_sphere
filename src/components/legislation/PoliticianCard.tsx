export default function PoliticianCard({ politician }: { politician: any }) {
  return (
    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border">
      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
        {politician.initials}
      </div>
      <div>
        <p className="font-medium text-gray-900">{politician.name}</p>
        <p className="text-xs text-gray-500">{politician.party} • {politician.state}</p>
      </div>
    </div>
  );
}
