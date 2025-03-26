import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Trash2 } from 'lucide-react';
import '../styles/App.css';
import '../styles/ProductDetails.css';

// Import product images
import air_filter from '../assets/air_filter.jpg';
import alternator from '../assets/alternator.jpeg';
import battery from '../assets/battery.jpg';
import belt from '../assets/belt.jpg';
import brake_caliper from '../assets/brake_caliper.jpg';
import clutch_kit from '../assets/clutch_kit.jpg';
import exhaust from '../assets/exhaust.jpg';
import fuel_injector from '../assets/fuel_injector.png';
import headlight from '../assets/headlight.jpg';
import oilFilter from '../assets/oilFilter.jpg';
import radiator from '../assets/radiator.jpg';
import shock_absorber from '../assets/shock_absorber.jpg';
import spark_plug from '../assets/spark_plug.jpg';
import steering_pump from '../assets/steering_pump.jpg';
import turbocharger from '../assets/turbocharger.jpg';

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: product?.brand, link: '/' },
    { label: product?.name }
  ];

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const handleUpdateQuantity = (index, change) => {
    const newCart = [...cartItems];
    newCart[index] = {
      ...newCart[index],
      quantity: Math.max(1, newCart[index].quantity + change)
    };
    setCartItems(newCart);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems } });
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="app-container">
      <Header cartItems={cartItems.length} onCartClick={toggleCart} />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Cart Popover */}
      {showCart && (
        <div className="cart-popover">
          <h4>Shopping Cart</h4>
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <>
              <div className="cart-items-container">
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-details">
                      <strong>{item.name}</strong>
                      <p>₱ {item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="cart-item-actions">
                      <div className="cart-item-quantity">
                        <button 
                          className="quantity-btn"
                          onClick={() => handleUpdateQuantity(index, -1)}
                        >
                          <FiMinus />
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button 
                          className="quantity-btn"
                          onClick={() => handleUpdateQuantity(index, 1)}
                        >
                          <FiPlus />
                        </button>
                      </div>
                      <button className="remove-item-button" onClick={() => handleRemoveFromCart(index)}>
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Total: ₱ {totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong>
                </div>
                <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
              </div>
            </>
          )}
        </div>
      )}

      <main className="product-details-container">
        <div className="product-details-content">
          {/* Left side - Image */}
          <div className="product-image-container">
            <img src={product.image} alt={product.name} className="product-detail-image" />
          </div>

          {/* Right side - Product Info */}
          <div className="product-info-container">
            <h1 className="product-name2">{product.name}</h1>
            <div className="brand-container">
              <span className="brand-name">{product.brand}</span>
              <hr className="brand-divider" />
            </div>
            
            <div className="price-container">
              <span className="price">₱ {product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
            </div>

            <div className="quantity-container">
              <h3>Quantity</h3>
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(-1)}
                >
                  <FiMinus />
                </button>
                <span className="quantity-value">{quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(1)}
                >
                  <FiPlus />
                </button>
              </div>
              <p className="stock-info">10 units available</p>
            </div>

            <div className="action-buttons">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="buy-now-btn" onClick={handleCheckout}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* You May Also Like Section */}
      <section className="related-products-section">
        <h2>You may also like</h2>
        <div className="related-products-grid">
          {products.slice(0, 6).map((relatedProduct) => (
            <div 
              key={relatedProduct.id} 
              className="related-product-card"
              onClick={() => navigate('/product-details', { state: { product: relatedProduct } })}
            >
              <img src={relatedProduct.image} alt={relatedProduct.name} className="related-product-image" />
              <div className="related-product-info">
                <div className="related-product-brand">{relatedProduct.brand}</div>
                <div className="related-product-name">{relatedProduct.name}</div>
                <div className="related-product-price">₱ {relatedProduct.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Description Section */}
      <section className="product-description-section">
        <h2>Description</h2>
        <div className="product-description-container">
          <h3 className="description-title">{product.name}</h3>
          <div className="description-content">
            <p>
              Description Description Description Description Description Description Description Description Description
              Description Description Description Description Description Description Description Description Description
              Description Description Description Description Description Description Description Description Description
              Description Description Description Description Description Description Description Description Description
              Description Description Description Description Description Description Description Description Description
              Description Description Description Description Description Description Description Description Description
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Add products data at the top of the file
const products = [
  {
    id: 1,
    name: "Brake Disc & Caliper Set",
    brand: "Brembo",
    price: 10000.00,
    image: brake_caliper
  },
  {
    id: 2,
    name: "Spark Plug Set",
    brand: "NGK",
    price: 1500.00,
    image: spark_plug
  },
  // ... add more products as needed
];

export default ProductDetails; 