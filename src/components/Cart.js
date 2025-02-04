import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Cart.scss';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();  // useNavigate hook for Back button

  const handleQuantityChange = (e, productId) => {
    const quantity = parseInt(e.target.value);
    if (!isNaN(quantity)) {
      updateQuantity(productId, quantity);
    }
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(e, item.id)}
                  className="quantity-input"
                />
                <button onClick={() => removeFromCart(item.id)} className="remove-button">
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-summary">
        <h3>Total: ₹{totalPrice}</h3>
        <Link to="/checkout">
          <button className="checkout-button">Proceed to Checkout</button>
        </Link>
      </div>

      {/* Navigation buttons */}
      <div className="navigation-buttons">
        {/* Link to Home page */}
        <Link to="/">
          <button className="home-button">Go to Home</button>
        </Link>
        
        {/* Back Button to previous page */}
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Cart;
