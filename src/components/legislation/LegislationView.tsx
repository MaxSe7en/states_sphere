"use client";
import { useState } from "react";
import BillCard from "./BillCard";
import BillDetail from "./BillDetail";

const demoBills = [
  {
    id: 1,
    title: "AB-123 Education Funding",
    status: "In Committee",
    date: "Jan 15, 2025",
    aiSummary: "This bill increases funding for public schools by 10% over the next 3 years.",
    impacts: ["Public schools", "Teachers", "State budget"],
    sponsors: [
      { name: "Jane Doe", party: "Democrat", state: "CA", initials: "JD" },
      { name: "John Smith", party: "Republican", state: "CA", initials: "JS" }
    ]
  },
  {
    id: 2,
    title: "SB-456 Healthcare Reform",
    status: "Passed Senate",
    date: "Feb 1, 2025",
    aiSummary: "This bill expands Medicaid eligibility and lowers prescription drug costs.",
    impacts: ["Low-income families", "Pharmaceutical companies"],
    sponsors: [
      { name: "Alice Brown", party: "Democrat", state: "CA", initials: "AB" }
    ]
  }
];

export default function LegislationView({ state }: { state: string | null }) {
  const [selectedBill, setSelectedBill] = useState<any | null>(null);

  if (selectedBill) {
    return <BillDetail bill={selectedBill} onBack={() => setSelectedBill(null)} />;
  }

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold text-gray-900">
        {state ? `${state} Bills` : "Select a state to view bills"}
      </h2>

      {demoBills.map((bill) => (
        <BillCard key={bill.id} bill={bill} onSelect={() => setSelectedBill(bill)} />
      ))}
    </div>
  );
}
