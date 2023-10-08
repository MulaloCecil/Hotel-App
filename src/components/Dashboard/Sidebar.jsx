import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="sidebar bg-gray-200 p-4 sticky top-0 h-screen">
      <Link
        to="/addrooms"
        className={`block text-blue-600 hover:text-blue-700 mb-2 ${
          selectedButton === 'addrooms' ? 'font-bold' : ''
        }`}
        onClick={() => handleButtonClick('addrooms')}
      >
        Add Rooms
      </Link>
      <Link
        to="/editrooms"
        className={`block text-blue-600 hover:text-blue-700 mb-2 ${
          selectedButton === 'editrooms' ? 'font-bold' : ''
        }`}
        onClick={() => handleButtonClick('editrooms')}
      >
        Edit Rooms
      </Link>
      <Link
        to="/admin/room-list"
        className={`block text-blue-600 hover:text-blue-700 mb-2 ${
          selectedButton === 'roomlist' ? 'font-bold' : ''
        }`}
        onClick={() => handleButtonClick('roomlist')}
      >
        Room List
      </Link>
      <Link
        to="/admin/bookings"
        className={`block text-blue-600 hover:text-blue-700 mb-2 ${
          selectedButton === 'bookings' ? 'font-bold' : ''
        }`}
        onClick={() => handleButtonClick('bookings')}
      >
        Bookings
      </Link>
      <Link
        to="/admin/free-rooms"
        className={`block text-blue-600 hover:text-blue-700 ${
          selectedButton === 'freerooms' ? 'font-bold' : ''
        }`}
        onClick={() => handleButtonClick('freerooms')}
      >
        Free Rooms
      </Link>
    </div>
  );
};

export default Sidebar;
