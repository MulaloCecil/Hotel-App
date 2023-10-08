import React from 'react';
// import { useFirebaseAuth } from '../../firebase';
import RoomList from '../RoomList';
import Bookings from '../Bookings';
import UnbookedRooms from '../UnbookedRooms';
import Sidebar from './Sidebar'; // Update the path accordingly

const AdminDashboard = () => {
  // const { user } = useFirebaseAuth();

  return (
    <div className="flex">
      <div className="w-1/5">
        <Sidebar />
      </div>
      {/* <div className="w-4/5 p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.displayName} (Admin)</h1>
        <RoomList />
        <Bookings />
        <UnbookedRooms />
      </div> */}
    </div>
  );
};

export default AdminDashboard;
