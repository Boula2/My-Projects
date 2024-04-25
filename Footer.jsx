import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaSearchLocation,
  FaMailBulk,
} from "react-icons/fa";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
            <div>
              <p>123 acme St.</p>
              <h4>Houston, Tx</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              1-800-123-234
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
              Trips@galaxy.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h3>About The Company</h3>
          <p>
            Orbital space tourism is when the spacecraft reaches orbit and
            passengers can spend up to a week orbiting Earth. SpaceX and Space
            Adventures are the only companies currently offering orbital space
            tourism
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#ffffff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
