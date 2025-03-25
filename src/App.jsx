import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import Checkout from "./checkout";
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
    
  );
};

export default App;