import React from "react";
import "./footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <div className="loc">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>house number street</p>
              <p>country</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              09xxxxxxxxx
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              Example@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <div>
            <h4>About the developer</h4>
            <p>wall of text</p>
            <div className="social">
              <FaFacebook
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              <FaLinkedin
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              <FaGithub
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
