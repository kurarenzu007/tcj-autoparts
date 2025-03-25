import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import BrandCarousel from './components/brandCarousel';
import { FiShoppingCart } from 'react-icons/fi'; // Cart icon
import { Trash2 } from 'lucide-react'; // ✅ Import Trash2 icon
import bnc from './assets/brake_caliper.jpg';
import tarub from './assets/images.jpg';
import sparkPlug from './assets/spark_plug.jpg';
import oilFilter from './assets/oilFilter.jpg';
import airFilter from './assets/air_filter.jpg';
import battery from './assets/battery.jpg';
import alternator from './assets/alternator.jpeg';
import radiator from './assets/radiator.jpg';
import clutch_kit from './assets/clutch_kit.jpg';
import belt from './assets/belt.jpg';
import headlight from './assets/headlight.jpg';
import shock_absorber from './assets/shock_absorber.jpg';
import exhaust from './assets/exhaust.jpg';
import steering_pump from './assets/steering_pump.jpg';
import fuel_injector from './assets/fuel_injector.png';
import turbocharger from './assets/turbocharger.jpg';
import './App.css';

const HomePage = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems } });
  };
  
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Brake Disc & Caliper Set",
      brand: "Brembo",
      price: 10000.00,
      image: bnc
    },
    {
      id: 2,
      name: "Spark Plug Set",
      brand: "NGK",
      price: 1500.00,
      image: sparkPlug
    },
    {
      id: 3,
      name: "Oil Filter",
      brand: "Bosch",
      price: 800.00,
      image: oilFilter
    },
    {
      id: 4,
      name: "Air Filter",
      brand: "K&N",
      price: 2200.00,
      image: airFilter
    },
    {
      id: 5,
      name: "Battery 12V 60Ah",
      brand: "Motolite",
      price: 7500.00,
      image: battery
    },
    {
      id: 6,
      name: "Alternator",
      brand: "Denso",
      price: 14000.00,
      image: alternator
    },
    {
      id: 7,
      name: "Radiator",
      brand: "Mishimoto",
      price: 18500.00,
      image: radiator
    },
    {
      id: 8,
      name: "Clutch Kit",
      brand: "Exedy",
      price: 12000.00,
      image: clutch_kit
    },
    {
      id: 9,
      name: "Timing Belt Kit",
      brand: "Gates",
      price: 9500.00,
      image: belt
    },
    {
      id: 10,
      name: "Headlight Assembly",
      brand: "Philips",
      price: 7200.00,
      image: headlight
    },
    {
      id: 11,
      name: "Shock Absorbers",
      brand: "KYB",
      price: 8700.00,
      image: shock_absorber
    },
    {
      id: 12,
      name: "Exhaust System",
      brand: "Borla",
      price: 23500.00,
      image: exhaust
    },
    {
      id: 13,
      name: "Power Steering Pump",
      brand: "ACDelco",
      price: 11000.00,
      image: steering_pump
    },
    {
      id: 14,
      name: "Fuel Injector",
      brand: "Bosch",
      price: 6800.00,
      image: fuel_injector
    },
    {
      id: 15,
      name: "Turbocharger",
      brand: "Garrett",
      price: 45000.00,
      image: turbocharger
    }
  ];
  

  // Add product to cart
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Remove product from cart
  const handleRemoveFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  // Toggle cart popover
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  // ✅ Move totalPrice calculation here, before the return statement
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="app-container">
      <Header cartItems={cartItems.length} onCartClick={toggleCart} />

      {/* Cart Popover */}
      {showCart && (
        <div className="cart-popover">
          <h4>Shopping Cart</h4>
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <strong>{item.name}</strong>
                    <p>₱ {item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                  </div>
                  {/* ✅ Fix: Add remove button */}
                  <button className="remove-item-button" onClick={() => handleRemoveFromCart(index)}>
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}

              {/* ✅ Fix: Show Total Price */}
              <div className="cart-total">
                <strong>Total: ₱ {totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong>
              </div>

              {/* ✅ Fix: Checkout Button */}
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>

            </>
          )}
        </div>
      )}

      {/* BRAND CAROUSEL */}
      <div>
        <BrandCarousel />
        <br /><br />
      </div>

      {/* Main Content */}
      <main className="main-content">
        {/* Products Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="brand-name">{product.brand}</div>
              <div className="product-name">{product.name}</div>
              <div className="product-price">₱ {product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
