import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroImage from "../Components/HeroImage";
import TrainingCom from "../Components/TrainingCom";

const Training = () => {
  return (
    <div>
      <NavBar />
      <HeroImage heading="Training" text="Pry-Flight & in-Flight Training" />
      <TrainingCom />
      <Footer />
    </div>
  );
};

export default Training;
