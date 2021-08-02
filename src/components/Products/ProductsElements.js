import styled from "styled-components";

export const ProductsWrapper = styled.div`
  padding: 120px 0px;
  background: #150f0f;
  color: #fff;
`;

export const ProductsHeading = styled.h2`
  font-size: clamp(24px, 2.5vw, 30px);
  text-align: center;
  margin-bottom: ${({ theme }) => theme.margin.xl};
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;

  @media (max-width: 575px) {
    width: 250px;
  }
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;

  @media (max-width: 575px) {
    height: 250px;
    min-width: 250px;
  }
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: ${({ theme }) => theme.bodyFonts.medium};
`;

export const ProductCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: ${({ theme }) => theme.margin.sm};
`;

export const ProductPrice = styled.p`
  margin-bottom: ${({ theme }) => theme.margin.sm};
  font-size: ${({ theme }) => theme.bodyFonts.large};
`;
