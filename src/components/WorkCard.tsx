import "./WorkCard.css";
import pro1 from "../assets/project-1.png";
import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="containers">
      <h1 className="pro-heading">Projects</h1>
      <div className="project-container">
        <div className="card">
          <img src={pro1} alt="VetCares" />
          <h2 className="title">Veterinary Clinic Website</h2>
          <div className="details">
            <p>content</p>
            <div className="btns">
              <NavLink
                to="https://vet-cares.000webhostapp.com/"
                className="btn"
              >
                View
              </NavLink>

              <NavLink
                to="https://github.com/Murasakinosora/VetCares.git"
                className="btn"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
