import React from "react";
import { Link } from "react-router-dom/dist";
import "./Pricing.css";

const PricingTag = () => {
  return (
    <div>
      <div className="pricing">
        <div className="card-container">
          <div className="card">
            <h3>Basic</h3>
            <span className="bar"></span>
            <p className="btc">1 BTC</p>
            <p>- 3 Days</p>
            <p>- Views</p>
            <p>- Featured</p>
            <p>- Private Quaters</p>
            <Link to="/contact" className="btn">
              Book
            </Link>
          </div>
          <div className="card">
            <h3>Class A</h3>
            <span className="bar"></span>
            <p className="btc">4 BTC</p>
            <p>- 5 Days</p>
            <p>- Extra Views</p>
            <p>- More Featured</p>
            <p>- Private Quaters</p>
            <Link to="/contact" className="btn">
              Book
            </Link>
          </div>
          <div className="card">
            <h3>VIP Clints</h3>
            <span className="bar"></span>
            <p className="btc">8 BTC</p>
            <p>- 7 Days</p>
            <p>- Espical Views</p>
            <p>- Alot of Featured</p>
            <p>- Private Quaters</p>
            <Link to="/contact" className="btn">
              Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTag;
