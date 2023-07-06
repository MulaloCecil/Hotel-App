import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../components/images/login.jpeg";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth,email, password);
      console.log(user);
      navigate('/SignedIn');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="wrapper signIn">
      <div className="illustration">
        <img src={logo} alt="illustration" />
      </div>
      <div className="form">
        <div className="heading">LOGIN</div>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="e-mail">E-Mail</label>
            <input
          type="email"
          placeholder=" Enter your email"
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

          <button type="submit">Login</button>
        </form>
        <p>Forgot <Link to="/ForgotPass"> Password?</Link></p>
        <p>
          Don't have an account ? <Link to="/Signup"> Sign Up </Link>
        </p>
      </div>
    </div>
  );
}
