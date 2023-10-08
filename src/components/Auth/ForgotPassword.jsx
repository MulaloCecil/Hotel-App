import React, { useState } from 'react';
// import { useFirebaseAuth } from '../../firebase';

const ForgotPassword = () => {
  const { sendPasswordResetEmail } = useFirebaseAuth();
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(email);
      alert('Password reset email sent! Please check your email inbox.');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <p>Enter your email address to reset your password.</p>
      <form onSubmit={handleForgotPassword}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
