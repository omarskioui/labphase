import React, { useEffect, useState } from 'react';

function Header() {
  const [navbarActive, setNavbarActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const [topbarVisible, setTopbarVisible] = useState(true); // Track the visibility of the topbar
  const [position, setPosition] = useState(window.scrollY)
  console.log(position)
  // Effect hook to handle JS events and DOM manipulation
  useEffect(() => {
    const preloader = document.querySelector("[data-preaload]");
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const navbar = document.querySelector("[data-navbar]");
    const overlay = document.querySelector("[data-overlay]");
    const topbar = document.querySelector('.topbar'); // Topbar element

    // Handle preloader animation on window load
    window.addEventListener("load", function () {
      preloader.classList.add("loaded");
      document.body.classList.add("loaded");
    });

    // Toggle navbar and overlay classes
    const toggleNavbar = () => {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("nav-active");
    };

    // Attach event listeners to nav togglers
    navTogglers.forEach((toggler) => {
      toggler.addEventListener("click", toggleNavbar);
    });

    // Scroll event listener
    let lastScrollTop = 0; // Keeps track of last scroll position
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      setPosition(scrollPosition)
      // Hide topbar when scroll is > 50px
      if (position > 50) {
        setTopbarVisible(false);
        setHeaderActive(true); // Hide header when scrolling down
      } else {
        setTopbarVisible(true); // Show topbar when scroll is less than 50px
        setHeaderActive(false); // Show header when back at the top
      }

      // Check if scrolling up or down
      if (position > lastScrollTop) {
        // Scrolling down
        setHeaderActive(true);
      } else {
        // Scrolling up
        setHeaderActive(false);
      }
      lastScrollTop = position <= 0 ? 0 : position; // Prevent negative scroll value
    });

    // Clean up event listeners when component unmounts
    return () => {
      navTogglers.forEach((toggler) => {
        toggler.removeEventListener("click", toggleNavbar);
      });
      window.removeEventListener("scroll", () => {});
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const toggleNavbarState = () => {
    setNavbarActive((prev) => !prev);
  };

  return (
    <div>
      <div className={`preload ${navbarActive ? 'loaded' : ''}`} data-preaload="">
        <div className="circle"></div>
        <p className="text">Grilli</p>
      </div>

      {/* Topbar visibility based on scroll */}
      <div style={{display:position>=50 ?"none":"block"}} className={`topbar ${topbarVisible ? '' : 'hide'}`}>
        <div className="container">
          <address className="topbar-item">
            <div className="icon">
              <ion-icon name="location-outline" aria-hidden="true" />
            </div>
            <span className="span">Restaurant St, Delicious City,</span>
          </address>
          <div className="separator" />
          <div className="topbar-item item-2">
            <div className="icon">
              <ion-icon name="time-outline" aria-hidden="true" />
            </div>
            <span className="span">Daily : 8.00 am to 11.00 pm</span>
          </div>
          <a href="tel:+216 00 000 000" className="topbar-item link">
            <div className="icon">
              <ion-icon name="call-outline" aria-hidden="true" />
            </div>
            <span className="span">+216 00 000 000</span>
          </a>
          <div className="separator" />
          <a href="mailto:booking@restaurant.com" className="topbar-item link">
            <div className="icon">
              <ion-icon name="mail-outline" aria-hidden="true" />
            </div>
            <span className="span">booking@restaurant.com</span>
          </a>
        </div>
      </div>

      {/* Header visibility based on scroll */}
      <header style={{display:position>=80 ?"none":"block"}} className={`header ${headerActive ? 'hide' : ''}`} data-header="">
        <div className="container">
          <a href="/" className="logo">
            <img src="/assets/images/logo.svg" width={160} height={50} alt="Grilli - Home" />
          </a>
          <nav className="navbar" data-navbar="">
            <button className="close-btn" aria-label="close menu" data-nav-toggler="">
              <ion-icon name="close-outline" aria-hidden="true" />
            </button>
            <a href="/" className="logo">
              <img src="/assets/images/logo.svg" width={160} height={50} alt="Grilli - Home" />
            </a>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="/" className={`navbar-link ${navbarActive ? 'active' : ''}`}>
                  <div className="separator" />
                  <span className="span">Home</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="/Menu" className="navbar-link hover-underline">
                  <div className="separator" />
                  <span className="span">Menus</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="/About" className="navbar-link hover-underline">
                  <div className="separator" />
                  <span className="span">About Us</span>
                </a>
              </li>
             
              <li className="navbar-item">
                <a href="/Contact" className="navbar-link hover-underline">
                  <div className="separator" />
                  <span className="span">Contact</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="/Admin" className="navbar-link hover-underline">
                  <div className="separator" />
                  <span className="span">Admin</span>
                </a>
              </li>
            </ul>
            <div className="text-center">
              <p className="headline-1 navbar-title">Visit Us</p>
              <address className="body-4">
                Restaurant St, Delicious City, <br />
                
              </address>
              <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
              <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">
                booking@grilli.com
              </a>
              <div className="separator" />
              <p className="contact-label">Booking Request</p>
              <a href="tel:+216 00 000 000" className="body-1 contact-number hover-underline">
                +216 00 000 000
              </a>
            </div>
          </nav>
          <a href="/Reservation" className="btn btn-secondary">
            <span className="text text-1">Find A Table</span>
            <span className="text text-2" aria-hidden="true">
              Find A Table
            </span>
          </a>
          <button className="nav-open-btn" aria-label="open menu" data-nav-toggler="">
            <span className="line line-1" />
            <span className="line line-2" />
            <span className="line line-3" />
          </button>
          <div className="overlay" data-nav-toggler="" data-overlay="" />
        </div>
      </header>
    </div>
  );
}

export default Header;
