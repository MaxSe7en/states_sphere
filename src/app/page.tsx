"use client"

import Layout from "@/components/layout/Layout";

// import React, { useState, createContext, useContext, useEffect } from 'react';

// // Sidebar Context to manage open/close state globally
// const SidebarContext = createContext({});

// // 1. Layout Component
// const Layout = ({ children }) => {
//   const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false);
//   const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

//   // Close sidebars if window resizes to desktop view
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) { // md breakpoint
//         setIsLeftSidebarOpen(false);
//         setIsRightSidebarOpen(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleLeftSidebar = () => {
//     setIsLeftSidebarOpen(!isLeftSidebarOpen);
//     if (isRightSidebarOpen) setIsRightSidebarOpen(false); // Close right if opening left
//   };

//   const toggleRightSidebar = () => {
//     setIsRightSidebarOpen(!isRightSidebarOpen);
//     if (isLeftSidebarOpen) setIsLeftSidebarOpen(false); // Close left if opening right
//   };

//   return (
//     <SidebarContext.Provider value={{ isLeftSidebarOpen, toggleLeftSidebar, isRightSidebarOpen, toggleRightSidebar }}>
//       <div className="flex h-screen overflow-hidden font-sans bg-gray-100 antialiased">
//         {/* Left Sidebar */}
//         <LeftSidebar />

//         {/* Main Content Area */}
//         <div className="flex-1 flex flex-col overflow-hidden">
//           <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
//             {/* Overlay for mobile when sidebars are open */}
//             {(isLeftSidebarOpen || isRightSidebarOpen) && (
//               <div
//                 className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//                 onClick={() => {
//                   if (isLeftSidebarOpen) toggleLeftSidebar();
//                   if (isRightSidebarOpen) toggleRightSidebar();
//                 }}
//               ></div>
//             )}
//             {children}
//           </main>
//         </div>

//         {/* Right Sidebar */}
//         <RightSidebar />
//       </div>
//     </SidebarContext.Provider>
//   );
// };

// // 2. LeftSidebar Component
// const LeftSidebar = () => {
//   const { isLeftSidebarOpen, toggleLeftSidebar } = useContext(SidebarContext);

//   return (
//     <aside
//       className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform 
//                   ${isLeftSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
//                   transition-transform duration-300 ease-in-out 
//                   md:relative md:translate-x-0 md:flex-shrink-0 md:z-auto md:w-64 md:rounded-r-lg`}
//     >
//       <div className="p-6 flex flex-col h-full">
//         {/* Profile Section */}
//         <div className="flex items-center space-x-3 mb-8">
//           <img
//             src="https://placehold.co/40x40/60a5fa/ffffff?text=AR"
//             alt="AR Shakir"
//             className="w-10 h-10 rounded-full border-2 border-blue-400"
//           />
//           <span className="text-gray-800 font-semibold text-lg">AR Shakir</span>
//           <span className="text-gray-500 text-sm ml-auto">Visual Designer</span>
//         </div>

//         {/* Menu Items */}
//         <nav className="space-y-4 flex-grow">
//           <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Menu</h3>
//           {[
//             { name: 'Search Events', icon: '🔍' },
//             { name: 'Inbox', icon: '✉️' },
//             { name: 'Invites', icon: '👥' },
//             { name: 'Standups', icon: '📝' },
//             { name: 'My Calendar', icon: '📅' },
//             { name: 'Settings', icon: '⚙️' },
//           ].map((item) => (
//             <a
//               key={item.name}
//               href="#"
//               className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors 
//                           ${item.name === 'Search Events' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'}`}
//             >
//               <span className="text-xl">{item.icon}</span>
//               <span>{item.name}</span>
//             </a>
//           ))}
//         </nav>

//         {/* Favorites Locations */}
//         <div className="mt-8">
//           <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
//             Favorites Locations
//           </h3>
//           <ul className="space-y-3">
//             {['XD Club, Toronto', 'Avengars Club, L.A', 'Super Stay, Lahore'].map((location) => (
//               <li key={location} className="flex items-center text-gray-700 text-sm">
//                 <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
//                 {location}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Add Event Button */}
//         <div className="mt-8 flex justify-center">
//           <button className="flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-colors">
//             <span className="text-2xl">+</span>
//           </button>
//         </div>

//         {/* Copyright */}
//         <p className="text-xs text-gray-400 mt-auto text-center">
//           Copyrights 2022 by Ar Shakir
//         </p>
//       </div>
//     </aside>
//   );
// };

// // 3. RightSidebar Component
// const RightSidebar = () => {
//   const { isRightSidebarOpen, toggleRightSidebar } = useContext(SidebarContext);

//   return (
//     <aside
//       className={`fixed inset-y-0 right-0 w-80 bg-white shadow-lg z-50 transform 
//                   ${isRightSidebarOpen ? 'translate-x-0' : 'translate-x-full'} 
//                   transition-transform duration-300 ease-in-out 
//                   md:relative md:translate-x-0 md:flex-shrink-0 md:z-auto md:w-80 md:rounded-l-lg`}
//     >
//       <div className="p-6 flex flex-col h-full overflow-y-auto">
//         {/* Top Controls */}
//         <div className="flex justify-between items-center mb-6">
//           <button
//             onClick={toggleRightSidebar}
//             className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//           <div className="flex space-x-3 ml-auto">
//             <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                 />
//               </svg>
//             </button>
//             <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Event Media */}
//         <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6 shadow-md">
//           <img
//             src="https://placehold.co/320x192/000000/ffffff?text=ELECTRONIC+SOUND"
//             alt="Electronic Sound Event"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-4">
//             <button className="flex items-center text-white text-sm bg-black bg-opacity-60 px-3 py-1 rounded-full">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 mr-1"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.027A2 2 0 0111.38 6h.002a2 2 0 011.838 1.027l2.844 5.688A2 2 0 0114.223 15H5.777a2 2 0 01-1.838-2.285l2.844-5.688zM10 11a1 1 0 100-2 1 1 0 000 2z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               Watch video
//             </button>
//           </div>
//         </div>

//         {/* Event Details */}
//         <h2 className="text-xl font-bold text-gray-800 mb-2">
//           Electronic Sound with DJ ARMY ft Miss Lexa
//         </h2>
//         <div className="flex items-center text-gray-500 text-sm mb-4">
//           <span className="mr-2">29</span>
//           <span className="font-semibold">Tuesday</span>
//           <span className="ml-2">Mar 10:00 PM - End</span>
//           <button className="ml-auto p-2 rounded-lg bg-blue-50 text-blue-600">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* About this event */}
//         <div className="mb-6">
//           <h3 className="text-md font-semibold text-gray-800 mb-2">About this event</h3>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             We're celebrating our 30th edition of the California Art Festival & at this Spring so join us under beautiful Park or in Fresno State. Everyone from March 29 - 30. Start with our Private View opening on Saturday, March 26!
//             <a href="#" className="text-blue-600 hover:underline ml-1">Show more</a>
//           </p>
//         </div>

//         {/* Price and Ticket Button */}
//         <div className="mt-auto pt-6 border-t border-gray-200 flex justify-between items-center">
//           <div>
//             <span className="text-sm text-gray-500">The Citizen Pub</span>
//             <p className="text-lg font-bold text-gray-800">$25.98 - $35.00</p>
//             <span className="text-sm text-gray-500">100 Spot left</span>
//           </div>
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 transition-colors">
//             Get a Ticket
//           </button>
//         </div>
//       </div>
//     </aside>
//   );
// };

// // Example Usage: HomePage Component (pages/index.js equivalent)
// const HomePage = () => {
//   const { toggleLeftSidebar, toggleRightSidebar } = useContext(SidebarContext);

//   return (
//     <div className="flex flex-col md:flex-row flex-1 p-6">
//       {/* Mobile Toggle Buttons for Sidebars */}
//       <div className="md:hidden flex justify-between items-center mb-6">
//         <button
//           onClick={toggleLeftSidebar}
//           className="p-3 rounded-full bg-blue-600 text-white shadow-md"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//         <h1 className="text-2xl font-bold text-gray-800">Find Events</h1>
//         <button
//           onClick={toggleRightSidebar}
//           className="p-3 rounded-full bg-blue-600 text-white shadow-md"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//           </svg>
//         </button>
//       </div>

//       {/* Main Content Header */}
//       <div className="flex flex-col flex-1 rounded-xl bg-white p-6 shadow-lg">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="hidden md:block text-2xl font-bold text-gray-800">Find Events</h1>
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search all events"
//                 className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//               />
//               <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
//             </div>
//             <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
//               <option>California</option>
//               <option>New York</option>
//             </select>
//             <div className="flex space-x-2">
//               {['All', 'Arts', 'Music', 'Sport'].map((cat) => (
//                 <button
//                   key={cat}
//                   className={`px-4 py-2 rounded-lg text-sm font-medium ${
//                     cat === 'All'
//                       ? 'bg-orange-500 text-white'
//                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Map Placeholder */}
//         <div className="w-full h-80 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-2xl mb-8">
//           Map Area
//           <img
//             src="https://placehold.co/700x320/cccccc/333333?text=Interactive+Map"
//             alt="Interactive Map Placeholder"
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </div>

//         {/* Popular Now Events */}
//         <div>
//           <h2 className="text-xl font-bold text-gray-800 mb-4">Popular Now</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Event Card 1 */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               <img
//                 src="https://placehold.co/300x150/f0b429/ffffff?text=UTAH+JAZZ"
//                 alt="Utah Jazz Event"
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-4">
//                 <p className="text-sm text-gray-500 mb-1">Mar 28, 2022 - 10:00 PM</p>
//                 <h3 className="font-semibold text-lg text-gray-800 mb-2">
//                   Utah Jazz - Comman Strange
//                 </h3>
//                 <div className="flex justify-between items-center text-sm text-gray-600">
//                   <span>📍 California, CA</span>
//                   <span className="font-bold text-blue-600">$27.99</span>
//                 </div>
//               </div>
//             </div>

//             {/* Event Card 2 */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               <img
//                 src="https://placehold.co/300x150/6b46c1/ffffff?text=CALIFORNIA+PARTY"
//                 alt="California Public Party Event"
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-4">
//                 <p className="text-sm text-gray-500 mb-1">Apr 01, 2022 - 06:00 PM</p>
//                 <h3 className="font-semibold text-lg text-gray-800 mb-2">
//                   The California Public Party
//                 </h3>
//                 <div className="flex justify-between items-center text-sm text-gray-600">
//                   <span>📍 Los Angeles</span>
//                   <span className="font-bold text-blue-600">$55.99</span>
//                 </div>
//               </div>
//             </div>

//             {/* Event Card 3 */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               <img
//                 src="https://placehold.co/300x150/000000/ffffff?text=ELECTRONIC+SOUND"
//                 alt="Electronic Sound Event"
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-4">
//                 <p className="text-sm text-gray-500 mb-1">Apr 01, 2022 - 06:00 PM</p>
//                 <h3 className="font-semibold text-lg text-gray-800 mb-2">
//                   Cloverfield
//                 </h3>
//                 <div className="flex justify-between items-center text-sm text-gray-600">
//                   <span>📍 The Citizen Pub</span>
//                   <span className="font-bold text-blue-600">$25.98 - $35.00</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// This is the equivalent of _app.js in a Next.js project.
// In a real project, you would export `Layout` as a component and use it like this:
// export default function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }
// For this immersive, we'll just render the HomePage inside Layout.
export default function App() {
  return (
    <Layout />
  );
}
