// components/CenterContent.js
'use client';

import { Search, Filter, MapPin } from 'lucide-react';
import { useState } from 'react';
import USAMap from '../map/USAMap';

export default function CenterContent({ onEventSelect }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedState, setSelectedState] = useState(null);
  const [stateData, setStateData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch state data from backend
  const fetchStateData = async (stateInfo) => {
    setLoading(true);
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`/api/states/${stateInfo.code}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setStateData({
          ...stateInfo,
          events: data.events || [],
          population: data.population || 'N/A',
          capital: data.capital || 'N/A',
          eventCount: data.eventCount || 0,
          description: data.description || `Explore events in ${stateInfo.name}`
        });
        
        // Trigger the right panel to open with state data
        onEventSelect({
          id: `state-${stateInfo.code}`,
          title: `Events in ${stateInfo.name}`,
          type: 'state',
          stateData: {
            ...stateInfo,
            ...data
          }
        });
      }
    } catch (error) {
      console.error('Error fetching state data:', error);
      // Fallback data for demo purposes
      setStateData({
        ...stateInfo,
        events: [],
        population: 'Loading...',
        capital: 'Loading...',
        eventCount: 0,
        description: `Explore events in ${stateInfo.name}`
      });
      
      onEventSelect({
        id: `state-${stateInfo.code}`,
        title: `Events in ${stateInfo.name}`,
        type: 'state',
        stateData: stateInfo
      });
    } finally {
      setLoading(false);
    }
  };

  const handleStateClick = (stateInfo) => {
    setSelectedState(stateInfo.code);
    fetchStateData(stateInfo);
  };
  
  const filters = ['All', 'Arts', 'Music', 'Sports'];
  
  const events = [
    {
      id: 1,
      title: 'Utah Jazz - Comman Strange',
      date: 'Mar 29, 2022',
      time: '10:00 PM',
      location: 'California, CA',
      price: '$27.99',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'The California Public Party',
      date: 'Apr 01, 2022',
      time: '06:00 PM',
      location: 'Los Angeles',
      price: '$56.99',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'The Citizen Pub',
      date: 'Apr 01, 2022',
      time: '06:00 PM',
      location: 'Cloverfield',
      price: '$45.00',
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Search Header */}
      <div className="bg-white p-4 border-b border-gray-100">
        <div className="flex flex-col space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search all events"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            />
          </div>
          
          {/* Location and Filters */}
          <div className="flex items-center space-x-2">
            {/* Location Indicator */}
            <div className="flex items-center bg-orange-50 px-3 py-1 rounded-full">
              <MapPin className="w-4 h-4 text-orange-500 mr-1" />
              <span className="text-sm text-orange-600 font-medium">
                {selectedState ? stateData?.name || 'Loading...' : 'United States'}
              </span>
            </div>
            
            {/* Filter Buttons */}
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-orange-400 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* USA Map Area */}
      <div className="flex-1 relative bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
          <USAMap 
            onStateClick={handleStateClick}
            selectedState={selectedState}
          />
          
          {/* Loading overlay */}
          {loading && (
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="bg-white rounded-lg p-4 flex items-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-400"></div>
                <span className="text-gray-700">Loading state data...</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Popular Events */}
      <div className="bg-white p-4 border-t border-gray-100 max-h-64 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">
            {selectedState ? `Popular in ${stateData?.name || 'Selected State'}` : 'Popular Now'}
          </h3>
          <button className="text-orange-500 text-sm font-medium hover:text-orange-600">
            See All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              onClick={() => onEventSelect(event)}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="h-32 bg-gradient-to-r from-orange-400 to-red-400"></div>
              <div className="p-3">
                <h4 className="font-medium text-gray-900 text-sm mb-1 truncate">
                  {event.title}
                </h4>
                <p className="text-xs text-gray-500 mb-2">
                  {event.date} • {event.time}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span className="truncate">{event.location}</span>
                  </div>
                  <span className="font-medium text-orange-500 text-sm">
                    {event.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}