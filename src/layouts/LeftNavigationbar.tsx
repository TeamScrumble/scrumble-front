import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const LeftNavigationbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white p-4 transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-0 overflow-hidden'
        }`}
      >
        <div className="whitespace-nowrap">LeftNavigationbar</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 relative">
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded shadow"
        >
          {isOpen ? "close" : "open"}
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default LeftNavigationbar