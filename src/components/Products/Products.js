import React from "react";
import { productData } from "./data";

import { Container, ButtonPrimary } from "../../styles/commonElements";
import {
  ProductsWrapper,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductCardInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
} from "./ProductsElements";

const Products = ({ heading }) => {
  return (
    <ProductsWrapper>
      <Container>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
          {productData.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt} />
                <ProductCardInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ButtonPrimary>{product.button}</ButtonPrimary>
                </ProductCardInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </Container>
    </ProductsWrapper>
  );
};

export default Products;
