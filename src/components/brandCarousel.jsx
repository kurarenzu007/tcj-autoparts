import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import brand logos
import hyundai from "../assets/hyundai.png";
import honda from "../assets/honda.png";
import isuzu from "../assets/isuzu.png";
import kia from "../assets/kia.png";
import mitsubishi from "../assets/mitsubishi.png";
import suzuki from "../assets/suzuki.png";
import toyota from "../assets/toyota.png";
import daewoo from "../assets/daewoo.png";

const BrandCarousel = () => {
  const brands = [
    { name: "Hyundai", logo: hyundai },
    { name: "Toyota", logo: toyota },
    { name: "Suzuki", logo: suzuki },
    { name: "Mitsubishi", logo: mitsubishi },
    { name: "Isuzu", logo: isuzu },
    { name: "Daewoo", logo: daewoo },
    { name: "Kia", logo: kia },
    { name: "Honda", logo: honda },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleBrands = 5; // Number of brands to display at a time

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= brands.length - (visibleBrands - 1) ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? brands.length - visibleBrands : prevIndex - 1
    );
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Featured Brands</h3>
      <div className="bg-white p-4 shadow rounded">
      <div className="d-flex align-items-center justify-content-center">
        {/* Left Arrow */}
        <button
          className="btn btn-light mx-2"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          &#10094;
        </button>

        {/* Carousel Items */}
        <div className="d-flex overflow-hidden" style={{ width: "80%" }}>
          <div
            className="d-flex transition-transform"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleBrands)}%)`,
              width: `${(brands.length / visibleBrands) * 100}%`,
            }}
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className="text-center mx-2"
                style={{ flex: `0 0 ${100 / visibleBrands}%` }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="img-fluid mb-2"
                  style={{ maxWidth: "80px", height: "auto" }}
                />
                <div className="small">{brand.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="btn btn-light mx-2"
          onClick={nextSlide}
          disabled={currentIndex >= brands.length - visibleBrands}
        >
          &#10095;
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default BrandCarousel;
