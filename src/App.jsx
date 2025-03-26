import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import BrandPage from './pages/BrandPage';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/brands/:brand" element={<BrandPage />} />
      </Routes>
    </Router>
  );
};

export default App;