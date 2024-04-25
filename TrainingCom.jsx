import React from "react";

import Pod from "../Assets/man2-unsplash.jpg";
import Moon from "../Assets/man-unsplash.jpg";
import { Link } from "react-router-dom/dist";
import "./TrainingStyle.css";

const TrainingCom = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          Orbital space tourism is when the spacecraft reaches orbit and
          passengers can spend up to a week orbiting Earth.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Moon} className="img" alt="" />
          </div>
          <div className="image-stack bottom">
            <img src={Pod} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCom;
