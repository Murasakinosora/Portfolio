import { Link } from "react-router-dom";
import "./hero.css";
import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <div className="content">
          <p>Hi, I am an aspiring Developer</p>
          <div>
            <Link to="/projects" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
