"use client";
import { Search, Inbox, Calendar, Users, Settings } from "lucide-react";
// import UserAvatar from "@/components/shared/UserAvatar";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-xl flex flex-col">
      {/* Profile */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          {/* <UserAvatar initials="AS" bgColor="bg-orange-500" /> */}
          <div>
            <h3 className="font-semibold text-gray-900">AR Shakir</h3>
            <p className="text-sm text-gray-500">Visual Designer</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        <h4 className="text-sm font-medium text-gray-900 mb-4">Menu</h4>
        <a className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-orange-100 text-orange-700">
          <Search size={20} /> <span>Search Events</span>
        </a>
        <a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
          <Inbox size={20} /> <span>Inbox</span>
        </a>
        <a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
          <Calendar size={20} /> <span>Invites</span>
        </a>
        <a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
          <Users size={20} /> <span>Standups</span>
        </a>
        <a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
          <Settings size={20} /> <span>Settings</span>
        </a>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t text-xs text-gray-400">© 2025 BillTracker</div>
    </aside>
  );
}
