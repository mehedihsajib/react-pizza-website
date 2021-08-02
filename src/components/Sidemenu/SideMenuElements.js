import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../styles/commonElements";
export const SideMenuWrapper = styled.aside`
  width: 350px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.yellow};
  position: fixed;
  z-index: 99;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
  display: grid;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

export const MenuIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 40px;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
  font-size: ${({ theme }) => theme.bodyFonts.large};
`;

export const MenuItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;
`;

export const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.bodyFonts.medium};
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;
  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;

export const MenuBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const MenuBtn = styled(ButtonPrimary)`
  &:hover {
    background-color: #fff;
  }
`;
