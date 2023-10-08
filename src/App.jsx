import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import UserDashboard from './components/Dashboard/UserDashboard';
import ForgotPassword from './components/Auth/ForgotPassword'; 
import Footer from './components/Footer';
import Sidebar from './components/Dashboard/Sidebar';
import AddRooms from './components/AddRooms';
import EditRooms from './components/EditRooms';
import Book from './components/Book';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="sidebar" element={<Sidebar/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
        <Route path="/addrooms" element={<AddRooms/>} />
        <Route path="/editrooms" element={<EditRooms/>} />
        <Route path="/Book/:roomName/:description/:price" element={<Book/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
};

export default App;

