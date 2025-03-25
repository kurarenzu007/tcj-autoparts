import React from 'react';
import './checkoutHeader.css';

const checkoutHeader = () => {
  return (
    <div className="checkout-header d-flex align-items-center p-3 bg-warning text-dark">
      <img src={`${process.env.PUBLIC_URL}/tcj_logo.png`} alt="TCJ Auto Supply" className="logo-image me-3" />

      {/* Vertical Line */}
      <div className="vr mx-3"></div>  

      <span className="fs-5 fw-semibold">Checkout</span>
    </div>
  );
};

export default checkoutHeader;
