import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.scss';

const Checkout = () => {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the phone number (numeric and 10 digits)
    if (!/^\d{10}$/.test(phone)) {
      setError('Phone number must be 10 digits and numeric only.');
      return;
    }

    // Validate pincode (numeric and 6 digits)
    if (!/^\d{6}$/.test(pincode)) {
      setError('Pincode must be exactly 6 digits and numeric only.');
      return;
    }

    // Clear any error messages on valid input
    setError('');
    
    // Show success message
    setSuccessMessage('Your order has been placed successfully!');
    
    // Navigate to home or order summary page after submission
    setTimeout(() => navigate('/'), 2000);
  };

  // Prevent non-numeric input for phone and pincode
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) { // Allow only numbers and limit to 10 digits
      setPhone(value);
    }
  };

  const handlePincodeChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) { // Allow only numbers and limit to 6 digits
      setPincode(value);
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Enter your phone number"
            maxLength="10"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            id="pincode"
            value={pincode}
            onChange={handlePincodeChange}
            placeholder="Enter your pincode"
            maxLength="6"
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
