import "./FooterStyle.css";
import React from "react";
import {
  FaHome,
  FaMailBulk,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

/**
 * Pass a `page` prop to Footer:
 *   <Footer page="home" />
 *   <Footer page="contact" />
 *   <Footer page="projects" />
 *   <Footer page="about" />
 *
 * The CSS will make the footer fixed only for Home & Contact on mobile.
 */
const Footer = ({ page }) => {
  return (
    <div className={`footer ${page ? `${page}-page` : ""}`}>
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "10px" }} />
            <p>Tiruppur, India</p>
          </div>

          <div className="phone">
            <FaPhoneAlt
              size={20}
              style={{ color: "#fff", marginRight: "10px" }}
            />
            <p>+91 8220864495</p>
          </div>

          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "10px" }}
            />
            <p>sarnish449@gmail.com</p>
          </div>
        </div>

        <div className="right">
          <div className="social">
            <a
              href="https://www.linkedin.com/in/sarnish-c-7a63a5255/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/sarnish29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://leetcode.com/u/sarnish449/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
