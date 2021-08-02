import styled from "styled-components";
import heroBg from "../../images/pizza-3.jpg";
import { ButtonPrimary } from "../../styles/commonElements";

export const HeroWrapper = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${heroBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-width: 100%;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 15px;
`;

export const ButtonHero = styled(ButtonPrimary)`
  align-self: flex-start;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: clamp(25px, 10vw, 60px);
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.margin.sm};
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  text-transform: uppercase;

  @media (max-width: 575px) {
    box-shadow: none;
  }
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: clamp(20px, 2.5vw, 30px);
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.margin.md};
  text-transform: uppercase;
`;
