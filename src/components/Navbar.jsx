import "./NavbarStyle.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Track scroll for header background
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // >>> NEW: add/remove class on body to hide footer when menu is open
  useEffect(() => {
    if (menuVisible) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuVisible]);
  // <<< END NEW

  return (
    <div className={scrolled ? "header header-bg" : "header"}>
      <Link to="/" className="logo" onClick={closeMenu}>
        <h1>Portfolio</h1>
      </Link>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuVisible ? (
          <FaTimes size={26} color="#fff" />
        ) : (
          <FaBars size={26} color="#fff" />
        )}
      </div>

      {/* Desktop navigation */}
      <ul className="nav-menu desktop-menu">
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/project" onClick={closeMenu}>Project</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>

      {/* Mobile overlay menu */}
      {menuVisible && (
        <div className="overlay-menu">
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/project" onClick={closeMenu}>Project</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
