import React, { useState, useEffect } from "react";
import {images} from "./Images"; 
const SlideshowWithOverlay = ({ heading, subtitle }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Image URLs for the slideshow

  useEffect(() => {
    // Function to handle automatic slideshow progression
    const handleSlideshow = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length ? 1 : prevSlide + 1
      );
    };

    // Set an interval to automatically change slides every 3 seconds
    const interval = setInterval(handleSlideshow, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {/* Slideshow */}
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            display: currentSlide === index + 1 ? "block" : "none",
          }}
        >
          <img src={img.url} alt={`Slide ${index + 1}`} />
        </div>
      ))}

      {/* Overlay */}
      <div className="slider__overlay">
        <div>
          <div className="container mx-auto">
            <div className="w-full md:w-1/2">
              <h1 style={{ color: "#fff" }}>{heading}</h1>
              <p style={{ color: "#fff" }}>{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideshowWithOverlay;