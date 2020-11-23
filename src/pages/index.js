import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Info from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Services from "../components/Services";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Services />
      <Info {...homeObjThree} />
    </>
  );
};

export default Home;
