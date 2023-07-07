import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import "./login.css";
import "./LandingPage.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SignedIn from "./pages/SignedIn";


export default function App() {
  return(
    <BrowserRouter>
    <Navbar />
   <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/signedin" element={<SignedIn/>}/>
        <Route exact path="/rooms/" element={<Rooms/>} />
        <Route exact path="/rooms/:slug" element={<SingleRoom/>} />
        <Route exact path="/signup/" element={<Signup />} />
        <Route exact path="/login/" element={<Login />} />
        <Route element={<Error/>} />
   </Routes>
    </BrowserRouter>
    
  );
   
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);