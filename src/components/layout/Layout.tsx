'use client';

import { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import CenterContent from "./CenterContent";
import RightPanel from "./RightPanel";
import { Menu } from "lucide-react";

export default function Layout() {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleLeft = () => setLeftOpen(!leftOpen);
  const toggleRight = () => setRightOpen(!rightOpen);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setRightOpen(true);
  };

  return (
    <div className="flex h-screen bg-gray-50 relative overflow-hidden">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-sm z-40 px-4 py-3 flex items-center justify-between">
        <button 
          onClick={toggleLeft}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu size={20} />
        </button>
        <h1 className="font-semibold text-gray-800">Find Events</h1>
        <button 
          onClick={toggleRight}
          className="p-2 hover:bg-gray-100 rounded-lg"
          disabled={!selectedEvent}
        >
          <div className="w-5 h-5 bg-orange-400 rounded flex items-center justify-center text-white text-xs">
            i
          </div>
        </button>
      </div>

      {/* Left Sidebar */}
      <div className={`
        fixed md:relative z-30 h-full
        transform transition-transform duration-300 ease-in-out
        ${leftOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        w-64 md:w-72 bg-white shadow-lg
      `}>
        <LeftSidebar onClose={() => setLeftOpen(false)} />
      </div>

      {/* Center Content */}
      <div className="flex-1 relative pt-16 md:pt-0">
        <CenterContent onEventSelect={handleEventSelect} />
      </div>

      {/* Right Panel */}
      <div className={`
        fixed md:relative z-20 h-full right-0
        transform transition-transform duration-300 ease-in-out
        ${selectedEvent ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
        w-80 md:w-96 bg-white shadow-lg
        ${!selectedEvent ? 'md:hidden' : ''}
      `}>
        <RightPanel 
          selectedEvent={selectedEvent} 
          onClose={() => setRightOpen(false)} 
        />
      </div>

      {/* Mobile Overlays */}
      {leftOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setLeftOpen(false)}
        />
      )}
      {rightOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setRightOpen(false)}
        />
      )}
    </div>
  );
}