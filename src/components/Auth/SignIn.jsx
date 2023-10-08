import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import backgroundImage from '../../assets/login.jpeg';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;


      if (email === 'admin@hayani.com' && password === '@Admin123') {
        setLoginStatus('success');
        navigate('/admin');
      } else {
        setLoginStatus('success');
        navigate('/user');
      }
    } catch (error) {
      console.error(error);
      setLoginStatus('error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h2 className="flex flex-col items-center justify-center text-2xl font-bold mb-6 ">LOGIN</h2>
        {loginStatus === 'success' && (
          <p className="text-green-600 mb-4">You have been logged in successfully!</p>
        )}
        {loginStatus === 'error' && (
          <p className="text-red-600 mb-4">Wrong email or password. Please try again.</p>
        )}
        <form onSubmit={handleSignIn} className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring focus:ring-opacity-50 focus:ring-teal-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring focus:ring-opacity-50 focus:ring-teal-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white p-3 rounded-md font-medium hover:bg-teal-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-teal-500"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <Link to="/forgot-password" className="text-sm text-blue-500">
              Forgot Password?
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-500">
                Sign Up
              </Link>
            </p>
          </div>
          <div>
            <button
              className="w-full bg-red-500 text-white p-3 rounded-md font-medium hover:bg-red-600 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-red-500"
              onClick={() => console.log('Continue with Google clicked')}
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
