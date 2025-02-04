import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CartContext';  // Import CartProvider

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap App with CartProvider
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
