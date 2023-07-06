import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../components/images/signup.jpeg";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
export default function Signup() {
  const [name, setName] = useState()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const user= await createUserWithEmailAndPassword(auth, email, password)
      // User has successfully signed up
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="wrapper signUp">
      <div className="illustration">
        <img src={logo} alt="illustration" />
      </div>
      <div className="form">
        <div className="heading">SIGN UP</div>
        <form onSubmit={handleSignup}>
          <div>
            <label htmlFor="name">Name</label>
            <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
          </div>
          <div>
            <label htmlFor="e-mail">E-Mail</label>
            <input
          type="email"
          placeholder="Enter your mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          </div>
          <button type="submit">Signup</button>
          <h2 align="center" class="or">
            OR
          </h2>
        </form>
        <p>
          Have an account ? <Link to="/Login"> Login </Link>
        </p>
      </div>
    </div>
  );
}
