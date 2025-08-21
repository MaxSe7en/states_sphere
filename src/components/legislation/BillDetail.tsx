"use client";
import PoliticianCard from "./PoliticianCard";

export default function BillDetail({ bill, onBack }: { bill: any; onBack: () => void }) {
  return (
    <div className="p-6 bg-white h-full overflow-y-auto">
      <button
        className="text-orange-600 text-sm mb-4 hover:underline"
        onClick={onBack}
      >
        ← Back to bills
      </button>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">{bill.title}</h2>
      <p className="text-sm text-gray-600 mb-4">Introduced: {bill.date}</p>

      {/* AI Explanation */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-2">AI Explanation</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          {bill.aiSummary}
        </p>
      </div>

      {/* Impact */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-2">Impact</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {bill.impacts.map((impact: string, idx: number) => (
            <li key={idx}>{impact}</li>
          ))}
        </ul>
      </div>

      {/* Sponsors */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-2">Sponsors</h3>
        <div className="space-y-3">
          {bill.sponsors.map((s: any, idx: number) => (
            <PoliticianCard key={idx} politician={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
