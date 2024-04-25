import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroImage from "../Components/HeroImage";
import PricingTag from "../Components/PricingTag";

const Pricing = () => {
  return (
    <div>
      <NavBar />
      <HeroImage heading="PRICING" text="Choose your Trip" />
      <PricingTag />
      <Footer />
    </div>
  );
};

export default Pricing;
