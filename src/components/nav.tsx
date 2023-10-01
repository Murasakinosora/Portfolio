import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
//importing hamburger menu
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [click, setClick] = useState(false);
  const clickHandler = () => setClick(!click);
  // changes the color of the navbar when scrolling down
  const [color, setColor] = useState(false);
  const colorChange = () => {
    if (window.scrollY >= 1) {
      setColor(true);
      console.log("here");
    } else {
      setColor(false);
    }
  };
  // event listener to check if the users scrolls down
  window.addEventListener("scroll", colorChange);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>

      <ul className={click ? "NavMenu active" : "NavMenu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={clickHandler}>
        {click ? (
          <FaTimes size={40} style={{ color: "#D3D3D3" }} />
        ) : (
          <FaBars size={40} style={{ color: "#D3D3D3" }} />
        )}
      </div>
    </div>
  );
};

export default Nav;
