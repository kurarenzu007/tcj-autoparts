import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './checkout.css';
import CheckoutHeader from './checkoutHeader';
const checkout = () => {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: 'Spareparts Name', 
      brand: 'Car Brand', 
      price: 10000.00,
      image: '/path/to/spare-part-1.jpg' 
    },
    { 
      id: 2, 
      name: 'Spareparts Name', 
      brand: 'Car Brand', 
      price: 10000.00,
      image: '/path/to/spare-part-2.jpg' 
    },
    { 
      id: 3, 
      name: 'Spareparts Name', 
      brand: 'Car Brand', 
      price: 10000.00,
      image: '/path/to/spare-part-3.jpg' 
    }
  ]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    region: '',
    province: '',
    city: '',
    barangay: '',
    postalCode: '',
    streetAddress: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const removeCartItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    
    
    <div className="container-fluid checkout-page">
      <CheckoutHeader/>
      <div className="row">
        <div className="col-md-7 checkout-form">
          <h4 className="mb-4">Have an account? <a href="#" className="text-primary">Login</a> (Optional)</h4>
          
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <div className="form-outline">
                <input 
                  type="text" 
                  className="form-control form-control-outlined" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <div className="form-outline">
                <input 
                  type="text" 
                  className="form-control form-control-outlined" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email or Contact Number</label>
            <div className="form-outline">
              <input 
                type="text" 
                className="form-control form-control-outlined" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="abc@gmail.com or 09051234567"
              />
            </div>
          </div>

          <h5 className="mt-4 mb-3">Address</h5>
          
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Region</label>
              <div className="form-outline">
                <input 
                  type="text" 
                  className="form-control form-control-outlined" 
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  placeholder="Region, Province, City, Barangay"
                />
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Postal Code</label>
              <div className="form-outline">
                <input 
                  type="text" 
                  className="form-control form-control-outlined" 
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  placeholder="Postal Code"
                />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Street Name, Building, House No.</label>
            <div className="form-outline">
              <input 
                type="text" 
                className="form-control form-control-outlined" 
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                placeholder="Street Address"
              />
            </div>
          </div>

          <div className="form-check mb-3">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="saveDetails"
            />
            <label className="form-check-label" htmlFor="saveDetails">
              Save this information for next time
            </label>
          </div>

          <button className="btn btn-primary w-100">Next</button>
        </div>

        <div className="col-md-5 cart-section">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item d-flex align-items-center mb-3">
              <img 
                src={item.image} 
                alt={item.name} 
                className="cart-item-image mr-3" 
              />
              <div className="cart-item-details flex-grow-1">
                <h6>{item.brand}</h6>
                <p>{item.name}</p>
                <p className="text-muted">₱ {item.price.toLocaleString()}.00</p>
              </div>
              <div className="cart-item-actions">
                <button 
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => removeCartItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default checkout;