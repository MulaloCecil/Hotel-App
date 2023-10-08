import React, { useState } from 'react';
import { db } from '../firebase';
import { Formik, Form } from 'formik';
import { addDoc, collection } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const UserDashboard = () => {
  const { roomName, description, price } = useParams();
  const roomTypes = ['Single Room', 'Double Room', 'Suite'];
  const [successMessage, setSuccessMessage] = useState('');

  const initialValues = {
    roomName: '',
    description: '',
    price: '',
    Names: '',
    Email: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: '',
    adults: 1,
    children: 0,
  };

  const onSubmit = (values) => {
    if (!values || values === '') return;

    const roomData = {
      roomName: roomName,
      description: description,
      price: price,
      Names: values.Names,
      Email: values.Email,
      checkInDate: values.checkInDate,
      checkOutDate: values.checkOutDate,
      roomType: values.roomType,
      adults: 1,
      children: 0,
    };

    const colRef = collection(db, 'Bookings');
    addDoc(colRef, roomData)
      .then(() => {
        console.log('booked');
        setSuccessMessage('Booking submitted successfully!');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="flex flex-col items-center justify-center text-2xl font-bold mt-4 mb-2">Book Your Stay</h2>
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{successMessage}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setSuccessMessage('')}>
            <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title>
              <path
                fillRule="evenodd"
                d="M14.95 5.636a1 1 0 010 1.414L9.414 12l5.536 5.95a1 1 0 11-1.414 1.414L8 13.414l-5.95 5.536a1 1 0 11-1.414-1.414L6.586 12 .05 6.464a1 1 0 111.414-1.414L8 10.586l5.95-5.536a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      )}
      <Formik initialValues={initialValues} onSubmit={(e) => onSubmit(e)}>
        {({ values, handleChange }) => (
                <Formik initialValues={initialValues} onSubmit={(e)=>onSubmit(e)}>
                {({ values, handleChange, setFieldValue }) => (
                           <Form className="grid grid-cols-2 gap-4">
                             <div>
                             <label htmlFor="Names" className="block text-sm font-medium text-gray-700">
                                Room Name
                            <p>{roomName}</p>
                             </label>
                           </div>
        
                           <div>
                             <label htmlFor="Names" className="block text-sm font-medium text-gray-700">
                                Description
                            <p>{description}</p>
                             </label>
                           </div>
        
                           <div>
                             <label htmlFor="Names" className="block text-sm font-medium text-gray-700">
                                Price
                            <p>{price}</p>
                             </label>
                           </div>
        
                            <div>
                             <label htmlFor="Names" className="block text-sm font-medium text-gray-700">
                               Names
                             </label>
                             <input
                               type="text"
                               id="names"
                               name="Names"
                               value={values.Names}
                               onChange={handleChange}
                               className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring focus:ring-opacity-50 focus:ring-teal-500"
                             />
                           </div>
        
                           <div>
                             <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">
                               Email
                             </label>
                             <input
                               type="email"
                               id="email"
                               name="Email"
                               value={values.Email}
                               onChange={handleChange}
                               className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring focus:ring-opacity-50 focus:ring-teal-500"
                             />
                           </div>
        
        
                           <div>
                             <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">
                               Check-In Date
                             </label>
                             <input
                               type="date"
                               id="checkInDate"
                               name="checkInDate"
                               value={values.checkInDate}
                               onChange={handleChange}
                               className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring focus:ring-opacity-50 focus:ring-teal-500"
                             />
                           </div>
                           <div>
                             <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">
                               Check-Out Date
                             </label>
                             <input
                               type="date"
                               id="checkOutDate"
                               name="checkOutDate"
                               value={values.checkOutDate}
                               onChange={handleChange}
                               className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring focus:ring-opacity-50 focus:ring-teal-500"
                             />
                           </div>
                           <div className="col-span-2">
                             <label htmlFor="roomType" className="block text-sm font-medium text-gray-700">
                               Room Type
                             </label>
                             <select
                               id="roomType"
                               name="roomType"
                               value={values.roomType}
                               onChange={handleChange}
                               className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring focus:ring-opacity-50 focus:ring-teal-500"
                             >
                               <option value="">Select a room type</option>
                               {roomTypes.map((type) => (
                                 <option key={type} value={type}>
                                   {type}
                                 </option>
                               ))}
                             </select>
                           </div>
                           <div>
                             <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
                               Number of Adults
                             </label>
                             <input
                               type="number"
                               id="adults"
                               name="adults"
                               value={values.adults}
                               onChange={handleChange}
                               className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring focus:ring-opacity-50 focus:ring-teal-500"
                             />
                           </div>
                           <div>
                             <label htmlFor="children" className="block text-sm font-medium text-gray-700">
                               Number of Children
                             </label>
                             <input
                               type="number"
                               id="children"
                               name="children"
                               value={values.children}
                               onChange={handleChange}
                               className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring focus:ring-opacity-50 focus:ring-teal-500"
                             />
                           </div>
                           <button
                             type="submit"
                             className="col-span-2 w-full bg-teal-500 text-white p-3 rounded-md font-medium hover:bg-teal-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-teal-500"
                           >
                             Submit Booking
                           </button>
                         </Form>
                       )}
              </Formik>
        )}
      </Formik>
    </div>
  );
};

export default UserDashboard;