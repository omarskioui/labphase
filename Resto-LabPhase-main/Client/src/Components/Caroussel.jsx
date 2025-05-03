import React, { useEffect, useState } from 'react'

function Caroussel() {
  const [slidePos, setSlidePos] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);
  
useEffect(() => {
   // Auto slide for the hero slider
   const interval = setInterval(() => {
    setSlidePos((prevPos) => (prevPos + 1) % 3); // Loop through 3 slides
  }, 7000);

  setAutoSlideInterval(interval);

  return () => clearInterval(interval); // Cleanup the interval
}, [])

const slideNext = () => {
  setSlidePos((prevPos) => (prevPos + 1) % 3); // Loop through 3 slides
};

const slidePrev = () => {
  setSlidePos((prevPos) => (prevPos === 0 ? 2 : prevPos - 1)); // Loop through 3 slides
};

  return (
    <div style={{height:"800px"}}>
      
      <section className="hero text-center" aria-label="home" id="home">
        <ul className="hero-slider" data-hero-slider="">
          {[1, 2, 3].map((item, index) => (
            <li
              key={index}
              className={`slider-item ${index === slidePos ? 'active' : ''}`}
              data-hero-slider-item=""
            >
              <div className="slider-bg">
                <img
                  width="1880"
                  height="950"
                  alt=""
                  className="img-cover"
                  src={`/assets/images/hero-slider-${item}.jpg`}
                />
              </div>
              <p className="label-2 section-subtitle slider-reveal">Tradational & Hygine</p>
              <h1 className="display-1 hero-title slider-reveal">For the love of delicious food</h1>
              <p className="body-2 hero-text slider-reveal">
                Come with family &amp; feel the joy of mouthwatering food
              </p>
              <a href="/menu" className="btn btn-primary slider-reveal">
                <span className="text text-1">View Our Menu</span>
                <span className="text text-2" aria-hidden="true">
                  View Our Menu
                </span>
              </a>
            </li>
          ))}
        </ul>
  
      </section>
  </div>
  )
}

export default Caroussel