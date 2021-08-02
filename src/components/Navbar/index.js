import React from "react";
import { Nav, NavLogo, NavIcon, Hamburger } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLogo to="./">Pizza</NavLogo>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Hamburger />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
