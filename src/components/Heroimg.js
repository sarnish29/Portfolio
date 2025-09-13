import "./HeroimgStyle.css";
import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Intro" />
      </div>

      <div className="content">
        <p>
          Hi, I'm <span className="bounce">SARNISH C</span>
        </p>
        <h1>Full Stack Developer</h1>
        <h3>
          I design intuitive code and innovative solutions that turn concepts
          into reality.
        </h3>
        <h3>
          Driven by curiosity and creativity, I craft meaningful digital
          experiences that leave a lasting impact.
        </h3>
        <div>
          <Link to="/Project" className="btn">
            Project
          </Link>
          <a href="/resume.pdf" className="btn" download>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
