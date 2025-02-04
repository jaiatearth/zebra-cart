import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Home.scss';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState('');

  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle adding product to the cart
  const handleAddToCart = (product) => {
    addToCart(product);
    setToast(`${product.title} has been added to your cart!`);
    setTimeout(() => setToast(''), 3000);
  };

  return (
    <div className="home">
      <h1>Welcome to Zebracart</h1>
      <p>Your one-stop destination for the best tech products!</p>

      {/* Navigation Links */}
      <div className="home-links">
        <Link to="/about-us" className="home-link">About Us</Link>
        <Link to="/cart" className="home-link">Cart</Link>
        <Link to="/policies" className="home-link">Policies</Link>
        <Link to="/contact" className="home-link">Contact</Link>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}

      {/* Display products */}
      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price} INR</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
