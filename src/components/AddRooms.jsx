import React, { useState } from 'react';
import { db } from '../firebase';
import { v4 } from 'uuid';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import Sidebar from './Dashboard/Sidebar'

const AddRooms = () => {
  const storage = getStorage();
  const [roomName, setRoomName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [pictures, setPictures] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!pictures) return;

    var picname = pictures.name;
    var imageName = picname + v4();
    var imgref = ref(storage, 'Hotel/' + imageName);

    uploadBytes(imgref, pictures).then(() => {
      getDownloadURL(imgref).then((url) => {
        const roomData = {
          roomName,
          price: parseFloat(price),
          description,
          url: url,
          imageName: imageName,
        };

        var colRef = collection(db, 'Hotels');
        addDoc(colRef, roomData).then(() => {
          console.log('done');
        });
      });
    });

    try {
      // Add the room to Firestore
      const roomData = {
        roomName,
        price: parseFloat(price),
        description,
      };

      const roomRef = await db.collection('rooms').add(roomData);

      // Upload pictures to Firebase Storage
      const storageRef = storage.ref();

      for (let i = 0; i < pictures.length; i++) {
        const pictureFile = pictures[i];
        const pictureRef = storageRef.child(`room_pictures/${roomRef.id}/${pictureFile.name}`);
        await pictureRef.put(pictureFile);
      }

      console.log('Room and pictures added successfully!');
      // Reset the form fields
      setRoomName('');
      setPrice('');
      setDescription('');
      setPictures([]);
    } catch (error) {
      console.error('Error adding room and pictures: ', error);
    }
  };

  const handlePictureChange = (e) => {
    setPictures(e);
  };
  <Sidebar/>
  return (
   
    <div className="add-room-page">
      <h2 className="text-2xl font-bold mb-4">Add Room</h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label htmlFor="roomName" className="block">
            Room Name:
          </label>
          <input
            type="text"
            id="roomName"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="price" className="block">
            Price:
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="description" className="block">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          ></textarea>
        </div>
        <div>
          <label htmlFor="pictures" className="block">
            Pictures:
          </label>
          <input
            type="file"
            id="pictures"
            onChange={(e) => handlePictureChange(e.target.files[0])}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-teal-300"
        >
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRooms;
