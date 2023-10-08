import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import 'firebase/firestore';
import { onSnapshot, collection } from 'firebase/firestore';

const EditRooms = () => {
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

  const handleUpdateRoom = async (roomId, updatedData) => {
    try {
      // Update the room in Firestore
      await db.collection('rooms').doc(roomId).update(updatedData);
      console.log('Room updated successfully!');
    } catch (error) {
      console.error('Error updating room: ', error);
    }
  };

  const handleDeleteRoom = async (roomId) => {
    try {
      // Delete the room from Firestore
      await db.collection('rooms').doc(roomId).delete();
      console.log('Room deleted successfully!');
    } catch (error) {
      console.error('Error deleting room: ', error);
    }
  };

  return (
    <div className="edit-room-page">
      <h2 className="text-2xl font-bold mb-4">Edit Room</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {rooms.map((room) => (
          <div className="room-item border border-gray-300 rounded-md p-4" key={room.id}>
            <h3 className="text-lg font-bold mb-2">{room.roomName}</h3>
            <p className="text-gray-600">Price: {room.price}</p>
            <p className="text-gray-600">Description: {room.description}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2 mr-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-300"
              onClick={() => {
                const updatedData = {
                  roomName: 'Updated Room Name',
                  price: 100,
                  description: 'Updated Room Description',
                };
                handleUpdateRoom(room.id, updatedData);
              }}
            >
              Update Room
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-red-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-red-300"
              onClick={() => handleDeleteRoom(room.id)}
            >
              Delete Room
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditRooms;
