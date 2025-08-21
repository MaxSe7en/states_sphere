"use client";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="bg-white border-b px-4 py-4 flex items-center space-x-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search all events"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      </div>
      <button className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium">California</button>
      <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg font-medium">All</button>
    </div>
  );
}
