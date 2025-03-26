import React, { useState } from 'react';
import { Search, ShoppingCart, ChevronDown } from 'lucide-react';
import tcjLogo from "../assets/tcj_logo.png"; // Use correct relative path
import { useNavigate } from 'react-router-dom';

const Header = ({ cartItems, onCartClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const categories = ["Brakes", "Suspension", "Engine", "Transmission", "Electrical", "Exhaust", "Cooling"];

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src={tcjLogo} alt="TCJ Auto Supply" className="logo-image" />
        </div>
        
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button">
            <Search size={20} />
          </button>
        </div>
        
        {/* User and Cart */}
        <div className="user-cart">
          <div className="account">
            <div><a href="/login" className="account-link">Login / Signup</a></div>
            <div><a href="/account" className="account-link">My account</a></div>
          </div>
          {/* Make the cart clickable */}
          <div className={`cart ${cartItems > 0 ? 'has-items' : ''}`} onClick={onCartClick}>
            <ShoppingCart size={24} />
            {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-content">
          {categories.map((category, index) => (
            <div key={index} className="nav-item">
              <span>{category}</span>
              <ChevronDown size={16} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;

