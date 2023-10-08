import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import 'firebase/firestore';
import { onSnapshot, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Fetch the list of rooms from Firestore
    const fetchRooms = async () => {
      const colRef = collection(db, 'Hotels');
      let rms = [];
      onSnapshot(colRef, (snapshot) => {
        snapshot.forEach((doc) => {
          rms.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log(rms);
        setRooms(rms);
      });
    };

    fetchRooms();
  }, []);

  return (
    <div className="room-list-page">
      <h2 className="text-2xl font-bold mb-4">Available Rooms</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">{room.roomName}</h3>
            <img src={room.url} alt={room.roomName} className="w-full h-48 object-cover mb-2 rounded-md" />
            <p className="mb-2">Price: ${room.price}</p>
            <p className="mb-2">Description: {room.description}</p>
            <Link to={`/Book/${room.roomName}/${room.description}/${room.price}`} className="w-full bg-teal-500 text-white p-3 rounded-md font-medium hover:bg-teal-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-teal-300">
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
