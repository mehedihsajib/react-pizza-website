import React, { useState } from "react";
import Nav from "../Navbar";
import { Container } from "../../styles/commonElements";
import {
  HeroWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ButtonHero,
} from "./HeroElements";
import SideMenu from "../Sidemenu";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle hangler
  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroWrapper>
      <Container>
        <SideMenu isOpen={isOpen} toggle={toggleHandler} />
        <Nav toggle={toggleHandler} />
        <HeroContent>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 30 Secods</HeroP>
          <ButtonHero>Place Order</ButtonHero>
        </HeroContent>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
