import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
  background-color: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
`;

export const NavLogo = styled(Link)`
  font-family: "Charm", cursive;
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: bold;
  font-size: ${({ theme }) => theme.headings.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
`;

export const NavIcon = styled.div`
  color: #fff;
  position: absolute;
  top: 29px;
  right: 70px;
  cursor: pointer;
  display: flex;

  @media (max-width: 575px) {
    right: 40px;
  }

  p {
    font-size: ${({ theme }) => theme.bodyFonts.medium};
    color: #fff;
    margin-right: 10px;

    @media (max-width: 400px) {
      display: none;
    }
  }
`;

export const Hamburger = styled(FaPizzaSlice)`
  font-size: ${({ theme }) => theme.bodyFonts.medium};
  color: ${({ theme }) => theme.colors.yellow};
`;
