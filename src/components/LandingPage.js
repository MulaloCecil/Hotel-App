import React from 'react';
import "../"
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="booking-container">
        
        <p>Book your stay now:</p>
        <form className="booking-form">
          <div className="form-group">
            <label className="form-group label" htmlFor="checkInDate">Check-in:</label>
            <input className="form-group input" type="date" id="checkInDate" required />
          </div>
          <div className="form-group">
            <label className="form-group label" htmlFor="checkOutDate">Check-out:</label>
            <input className="form-group input"  type="date" id="checkOutDate" required />
          </div>
          <div className="form-group">
            <label className="form-group label" htmlFor="numAdults">Adults:</label>
            <input className="form-group input"  type="number" id="numAdults" min="1" required />
          </div>
          <div className="form-group">
            <label className="form-group label" htmlFor="numChildren">Children:</label>
            <input className="form-group input"  type="number" id="numChildren" min="0" required />
          </div>
          <div className="form-group">
            <label className="form-group label" htmlFor="roomType">Room Type:</label>
            <select className="form-group select " id="roomType" required>
              <option value="">Select Room Type</option>
              <option value="standard">Standard Room</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="suite">Suite</option>
            </select>
          </div>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
