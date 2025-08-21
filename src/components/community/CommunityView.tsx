export default function CommunityView({ state }: { state: string | null }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-900">
        {state ? `${state} Community` : "Select a state to view discussions"}
      </h2>
      <div className="mt-4 space-y-3">
        <div className="p-3 bg-white rounded-lg shadow">
          <p className="font-medium">Why this bill matters for small businesses</p>
          <p className="text-sm text-gray-500">32 upvotes • 12 comments</p>
        </div>
        <div className="p-3 bg-white rounded-lg shadow">
          <p className="font-medium">Healthcare bill discussion</p>
          <p className="text-sm text-gray-500">15 upvotes • 4 comments</p>
        </div>
      </div>
    </div>
  );
}
