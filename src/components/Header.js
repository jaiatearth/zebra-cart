import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="home-link">Home</Link>
      <Link to="/login" className="login-link">Login</Link>
      <Link to="/signup" className="signup-link">Sign Up</Link>
      <Link to="/cart" className="cart-link">Cart</Link>
    </div>
  );
};

export default Header;
