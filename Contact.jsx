import React from "react";
import NavBar from "../Components/NavBar";
import HeroImage from "../Components/HeroImage";
import Footer from "../Components/Footer";
import Form from "../Components/Form";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImage
        heading="Contact Us"
        text="Contact us Where ever you are  we will give the best service"
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
