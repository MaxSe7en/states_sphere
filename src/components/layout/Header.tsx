"use client";
import { Menu } from "lucide-react";

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="bg-white border-b px-4 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg" onClick={onMenuClick}>
          <Menu size={20} />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">Find Events</h1>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500">🇺🇸</span>
        <span className="text-sm font-medium">$3,456.20</span>
      </div>
    </header>
  );
}
