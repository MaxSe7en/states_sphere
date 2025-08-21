"use client";
import React, { use, useState } from 'react';
import { Search, MapPin, Calendar, Settings, Inbox, Users, Menu, X, Play, Heart, Share, ArrowLeft } from 'lucide-react';

const EventDiscoveryUI = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events: any = [
    {
      id: 1,
      title: "Utah Jazz - Comman Strange",
      date: "Mar 29, 2022",
      time: "10:00 PM",
      location: "California, CA",
      price: "$27.99",
      image: "/api/placeholder/280/160"
    },
    {
      id: 2,
      title: "The California Public Party",
      date: "Apr 01, 2022", 
      time: "06:00 PM",
      location: "Los Angeles",
      price: "$56.99",
      image: "/api/placeholder/280/160"
    },
    {
      id: 3,
      title: "Electronic Sound with DJ ARMY ft Miss Lexa",
      date: "Tuesday Mar 29",
      time: "10:00 PM - End",
      location: "California",
      price: "$25.98 - $35.00",
      image: "/api/placeholder/280/160",
      featured: true
    }
  ];

  const mapMarkers = [
    { id: 1, x: 20, y: 30, distance: "15 km" },
    { id: 2, x: 60, y: 45, distance: "12 km" },
    { id: 3, x: 45, y: 65, distance: "5 km" },
    { id: 4, x: 75, y: 25, distance: "10 km" },
    { id: 5, x: 85, y: 80, distance: "82 km" },
    { id: 6, x: 35, y: 85, distance: "51 km" },
  ];

  const handleMarkerClick = (marker: any) => {
    setSelectedEvent(events[0]); // For demo, always show first event
    setRightPanelOpen(true);
  };

  return (
    <div className="h-screen bg-rose-50 flex overflow-hidden">
      {/* Left Sidebar Overlay */}
      {leftSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setLeftSidebarOpen(false)}
        />
      )}
      
      {/* Left Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white shadow-xl
        transform transition-transform duration-300 ease-in-out
        ${leftSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* User Profile */}
          <div className="p-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">AS</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">AR Shakir</h3>
                <p className="text-sm text-gray-500">Visual Designer</p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Menu</h4>
              
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-orange-100 text-orange-700">
                <Search size={20} />
                <span>Search Events</span>
              </a>
              
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
                <Inbox size={20} />
                <span>Inbox</span>
              </a>
              
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
                <Calendar size={20} />
                <span>Invites</span>
              </a>
              
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
                <Users size={20} />
                <span>Standups</span>
              </a>
              
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
                <Calendar size={20} />
                <span>My Calendar</span>
                <span className="ml-auto bg-orange-500 text-white text-xs px-2 py-1 rounded-full">5</span>
              </a>
              
              <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">
                <Settings size={20} />
                <span>Settings</span>
              </a>
            </div>

            {/* Favorites */}
            <div className="mt-8">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Favorites Locations</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">XD Club, Toronto</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-600">Avengers Club, LA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-600">Super Stay, Lahore</span>
                </div>
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <button className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white">
              <span className="text-lg">+</span>
            </button>
            <p className="text-xs text-gray-400 mt-2">Copyrights 2022 by AR Shakir</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="bg-white border-b px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setLeftSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Find Events</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">🇺🇸</span>
            <span className="text-sm font-medium">$3,456.20</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white border-b px-4 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search all events"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium">
                California
              </button>
              <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg font-medium">
                All
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                Arts
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                Music
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                Sports
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Map Area */}
          <div className="flex-1 relative bg-gray-100">
            {/* Map Container */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100">
              {/* Simulated Map */}
              <div className="w-full h-full relative overflow-hidden">
                {/* Map markers */}
                {mapMarkers.map((marker) => (
                  <button
                    key={marker.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-orange-600 transition-colors shadow-lg"
                    style={{ 
                      left: `${marker.x}%`, 
                      top: `${marker.y}%` 
                    }}
                    onClick={() => handleMarkerClick(marker)}
                  >
                    {marker.distance}
                  </button>
                ))}
                
                {/* Simulated streets */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full">
                    <path d="M0,200 Q400,150 800,300" stroke="#666" strokeWidth="2" fill="none" />
                    <path d="M200,0 Q300,400 400,800" stroke="#666" strokeWidth="2" fill="none" />
                    <path d="M0,400 L800,450" stroke="#666" strokeWidth="2" fill="none" />
                    <path d="M300,0 L350,800" stroke="#666" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Popular Events Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg p-4 max-w-4xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Popular Now</h3>
                <button className="text-orange-500 text-sm font-medium">See All</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {events.map((event: any) => (
                  <div key={event.id} className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="h-32 bg-gradient-to-br from-orange-400 to-purple-600 relative">
                      {event.featured && (
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-purple-600">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                              <div className="text-2xl font-bold">ELECTRONIC</div>
                              <div className="text-xl">SOUND</div>
                              <div className="text-sm opacity-80">with DJ ARMY</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-3">
                      <div className="text-xs text-gray-500 mb-1">{event.date} • {event.time}</div>
                      <h4 className="font-medium text-gray-900 text-sm mb-1">{event.title}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 flex items-center">
                          <MapPin size={12} className="mr-1" />
                          {event.location}
                        </span>
                        <span className="text-sm font-semibold text-orange-600">{event.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel Overlay */}
      {rightPanelOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setRightPanelOpen(false)}
        />
      )}

      {/* Right Event Details Panel */}
      <div className={`
        fixed lg:static inset-y-0 right-0 z-50
        w-80 bg-white shadow-xl
        transform transition-transform duration-300 ease-in-out
        ${rightPanelOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        ${!rightPanelOpen ? 'lg:w-0 lg:overflow-hidden' : ''}
      `}>
        {selectedEvent && (
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <button 
                onClick={() => setRightPanelOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Share size={20} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Heart size={20} />
                </button>
              </div>
            </div>

            {/* Event Image */}
            <div className="relative h-48 bg-gradient-to-br from-teal-400 to-purple-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">ELECTRONIC</div>
                  <div className="text-2xl">SOUND</div>
                  <div className="text-sm opacity-80">ARTIST NAME</div>
                  <div className="mt-4">
                    <button className="bg-black bg-opacity-30 px-4 py-2 rounded-lg flex items-center space-x-2 mx-auto">
                      <Play size={16} />
                      <span>Watch video</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="flex-1 p-6 overflow-y-auto">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Electronic Sound with DJ ARMY ft Miss Lexa
              </h2>
              
              <div className="mb-4">
                <div className="text-sm text-gray-600">Tuesday</div>
                <div className="text-lg font-semibold">29 Mar</div>
                <div className="text-sm text-gray-500">10:00 PM - End</div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">About this events</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We're celebrating our 30th edition of the California Art Festival in CA this Spring so join us at the Building Park in California University from March 29 - 30, 2022 with our Private View opening on Sunday, March 29!
                </p>
                <button className="text-orange-500 text-sm font-medium mt-2">Show more</button>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-lg font-bold text-gray-900">$25.98 - $35.00</div>
                    <div className="text-sm text-gray-500">100 Spot left</div>
                  </div>
                </div>
                
                <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-colors">
                  Get a Ticket
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDiscoveryUI;