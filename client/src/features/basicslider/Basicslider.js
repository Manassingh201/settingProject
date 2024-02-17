import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // CSS file for styling

const images=[
  'https://www.shutterstock.com/image-photo/show-regard-symbol-wooden-blocks-260nw-2325604615.jpg',
  'https://medcitynews.com/uploads/2023/03/GettyImages-1465456623.jpg',
    'https://www.shutterstock.com/image-photo/show-regard-symbol-wooden-blocks-260nw-2325604615.jpg'
]

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
 
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-rotate every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div
            className={index === currentSlide ? "slide active" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <img src={image} alt={`Slide ${index + 1}`} />
            )}
          </div>
        ))}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="slider-nav">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
