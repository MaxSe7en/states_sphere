"use client";
import { ChevronRight } from "lucide-react";

export default function BillCard({ bill, onSelect }: { bill: any; onSelect: () => void }) {
  return (
    <div
      className="p-4 bg-white rounded-lg shadow hover:bg-orange-50 cursor-pointer flex items-center justify-between"
      onClick={onSelect}
    >
      <div>
        <h3 className="font-semibold text-gray-900">{bill.title}</h3>
        <p className="text-sm text-gray-500">{bill.status} • {bill.date}</p>
      </div>
      <ChevronRight size={18} className="text-gray-400" />
    </div>
  );
}
