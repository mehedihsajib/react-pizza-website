import React from "react";
import { ButtonSecondary, Container } from "../../styles/commonElements";
import { FeatureWrapper } from "./FeatureElements";

const Feature = () => {
  return (
    <FeatureWrapper>
      <Container>
        <h2>Pizza of the Day</h2>
        <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
        <ButtonSecondary>Order Now</ButtonSecondary>
      </Container>
    </FeatureWrapper>
  );
};

export default Feature;
