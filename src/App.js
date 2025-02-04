// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';  // Assuming you created this
import Contact from './components/Contact';  // Assuming you created this
import Policies from './components/Policies';  // Assuming you created this
import Header from './components/Header'; // Assuming you created this

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />  {/* Assuming Header contains Home link */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
