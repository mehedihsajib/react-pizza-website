import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Button = styled.a`
  display: inline-block;
  font-size: ${({ theme }) => theme.bodyFonts.medium};
  padding: 10px 30px;
  border: none;
  transition: all 0.2s ease-out;
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${({ theme }) => theme.colors.red};
  color: #fff;
  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    cursor: pointer;
    color: #000;
  }
`;

export const ButtonSecondary = styled(Button)`
  background-color: ${({ theme }) => theme.colors.yellow};
  color: #000;

  :hover {
    background-color: ${({ theme }) => theme.colors.red};
    cursor: pointer;
    color: #fff;
  }
`;
