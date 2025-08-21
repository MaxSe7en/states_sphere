"use client";
import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import USAStateMap from "@/components/map/USAStateMap";
import LegislationView from "@/components/legislation/LegislationView";
import CommunityView from "@/components/community/CommunityView";
import BillDetail from "@/components/legislation/BillDetail";
import EventDiscoveryUI from "@/components/event-discovery-ui";

export default function HomePage() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedBill, setSelectedBill] = useState<any | null>(null);

  return (
    <>
      <div className="flex h-screen bg-rose-50">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="px-6 py-4 border-b bg-white flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">
              {selectedState
                ? `Legislation in ${selectedState}`
                : "Select a state"}
            </h1>
            <div className="text-sm text-gray-500">BillTracker + Community</div>
          </header>

          {/* Map */}
          <div className="h-72 border-b relative">
            <USAStateMap onSelectState={setSelectedState} />
          </div>

          {/* Content Split */}
          <div className="flex flex-1 overflow-hidden">
            {/* Left side → Bills list OR detail */}
            <div className="w-1/2 border-r overflow-y-auto bg-gradient-to-b from-orange-50 to-rose-50">
              {selectedBill ? (
                <BillDetail
                  bill={selectedBill}
                  onBack={() => setSelectedBill(null)}
                />
              ) : (
                <LegislationView
                  state={selectedState}
                  onSelectBill={setSelectedBill}
                />
              )}
            </div>

            {/* Right side → Community */}
            <div className="w-1/2 overflow-y-auto bg-white">
              <CommunityView state={selectedState} />
            </div>
          </div>
        </div>
      </div>
      <EventDiscoveryUI />
    </>
  );
}
