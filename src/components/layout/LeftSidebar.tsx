'use client';

import { Search, Mail, Calendar, Users, Settings, X, Plus } from 'lucide-react';

export default function LeftSidebar({ onClose }) {
  const menuItems = [
    { icon: Search, label: 'Search Events', active: true, badge: null },
    { icon: Mail, label: 'Inbox', active: false, badge: null },
    { icon: Calendar, label: 'Invites', active: false, badge: 3 },
    { icon: Users, label: 'Standups', active: false, badge: null },
    { icon: Calendar, label: 'My Calendar', active: false, badge: null },
    { icon: Settings, label: 'Settings', active: false, badge: null }
  ];

  const favoriteLocations = [
    'XD Club, Toronto',
    'Avengers Club, LA',
    'Super Stay, Lahore'
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">AS</span>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">AR Shakir</h2>
              <p className="text-sm text-gray-500">Visual Designer</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="md:hidden p-1 hover:bg-gray-100 rounded"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 px-4 py-6">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Menu</h3>
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`
                flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors
                ${item.active 
                  ? 'bg-orange-50 text-orange-600 border-r-2 border-orange-400' 
                  : 'text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              <item.icon className="mr-3 h-4 w-4" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="ml-2 bg-orange-400 text-white text-xs rounded-full px-2 py-1">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Favorites Locations */}
        <div className="mt-8">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Favorites Locations</h3>
          <div className="space-y-2">
            {favoriteLocations.map((location, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-sm text-gray-600">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <button className="w-full flex items-center justify-center px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors">
          <Plus className="mr-2 h-4 w-4" />
          Add Location
        </button>
        <p className="text-xs text-gray-400 mt-4 text-center">
          Copyright 2022 by AR Shakir
        </p>
      </div>
    </div>
  );
}