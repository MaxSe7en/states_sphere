// components/RightPanel.js
'use client';

import { X, Calendar, MapPin, Clock, Share, Heart, Play } from 'lucide-react';

export default function RightPanel({ selectedEvent, onClose }) {
  if (!selectedEvent) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400">
        <div className="text-center">
          <Calendar className="w-16 h-16 mx-auto mb-4" />
          <p>Select an event or state to view details</p>
        </div>
      </div>
    );
  }

  // Handle state data display
  if (selectedEvent.type === 'state') {
    const stateData = selectedEvent.stateData;
    
    return (
      <div className="h-full flex flex-col bg-white">
        {/* Header */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-sm text-gray-600">State Information</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Share className="w-4 h-4 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Heart className="w-4 h-4 text-gray-500" />
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* State Header */}
          <div className="relative h-48 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600">
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-3xl font-bold mb-2">{stateData.name}</h1>
                <p className="text-blue-100">Discover events in {stateData.name}</p>
              </div>
            </div>
          </div>

          {/* State Details */}
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Capital</h3>
                <p className="text-gray-600">{stateData.capital || 'Loading...'}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Population</h3>
                <p className="text-gray-600">{stateData.population || 'Loading...'}</p>
              </div>
            </div>

            {/* Event Count */}
            <div className="bg-orange-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Available Events</h3>
                <span className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {stateData.eventCount || 0}
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                {stateData.description || `Explore events happening in ${stateData.name}`}
              </p>
            </div>

            {/* Events List */}
            {stateData.events && stateData.events.length > 0 ? (
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Upcoming Events</h3>
                <div className="space-y-3">
                  {stateData.events.map((event, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h4 className="font-medium text-gray-900 mb-1">{event.title}</h4>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      {event.price && (
                        <div className="mt-2 text-orange-500 font-medium">{event.price}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No events currently available</p>
                <button className="mt-3 text-orange-500 text-sm font-medium hover:text-orange-600">
                  Notify me when events are added
                </button>
              </div>
            )}

            {/* Action Button */}
            <div className="mt-6">
              <button className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors">
                Explore All Events in {stateData.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default event data for demonstration
  const eventData = {
    title: 'Electronic Sound with DJ ARMY ft Miss Lexa',
    date: '29',
    month: 'Mar',
    day: 'Tuesday',
    time: '10:00 PM - End',
    price: '$25.98 - $35.00',
    spotsLeft: '100 Spot left',
    description: "We're celebrating our 30th edition of the California Art Festival in CA this Spring so join us at the Building Park in California University from March 29 - 30, 2022 with our Private View opening on Saturday, March 26!",
    image: '/api/placeholder/400/300',
    category: 'Electronic Music'
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-sm text-gray-600">Live Event</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Share className="w-4 h-4 text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Heart className="w-4 h-4 text-gray-500" />
          </button>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Event Image */}
        <div className="relative h-64 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Play className="w-8 h-8 text-white" />
              </div>
              <button className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                Watch video
              </button>
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
            ELECTRONIC
          </div>
        </div>

        {/* Event Details */}
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-900 mb-4">
            {eventData.title}
          </h1>

          {/* Date and Time */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{eventData.date}</div>
                <div className="text-sm text-gray-500">{eventData.month}</div>
              </div>
              <div>
                <div className="font-medium text-gray-900">{eventData.day}</div>
                <div className="text-sm text-gray-500 flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {eventData.time}
                </div>
              </div>
            </div>
          </div>

          {/* About this events */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">About this events</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {eventData.description}
            </p>
            <button className="text-orange-500 text-sm font-medium mt-2 hover:text-orange-600">
              Show more
            </button>
          </div>

          {/* Pricing */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-gray-900">{eventData.price}</span>
              <span className="text-sm text-gray-500">{eventData.spotsLeft}</span>
            </div>
            <button className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors">
              Get a Ticket
            </button>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">Building Park</p>
              <p className="text-sm text-gray-500">California University, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}