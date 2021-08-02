import styled from "styled-components";
import FeaturePic from "../../images/featured3.jpg";

export const FeatureWrapper = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  padding: 120px 0px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;

  h2 {
    font-size: clamp(30px, 5vw, 50px);
    padding: 0px 30px;
  }
  p {
    margin-bottom: ${({ theme }) => theme.margin.sm};
    font-size: clamp(16px, 3vw, 30px);
    padding: 0px 30px;
  }
`;
