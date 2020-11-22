import React from "react";
import {
  MobileIcon,
  Nav,
  NavbarContiner,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContiner>
          <NavLogo to="/">AKS</NavLogo>
          <MobileIcon onClick={() => toggle()}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContiner>
      </Nav>
    </>
  );
}

export default Navbar;
