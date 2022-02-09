import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  NavbarLinkExtended,
  NavbarTitle,
  OpenLinksButton,
  NavbarExtendedContainer,
} from "../styles/Navbar.style";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarTitle>TECNOSTORE</NavbarTitle>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/productos">Productos</NavbarLink>
            <NavbarLink to="/contacto">Contacto</NavbarLink>
            <NavbarLink to="/about">Conocenos</NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((prev) => !prev);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/productos">Productos</NavbarLinkExtended>
          <NavbarLinkExtended to="/contacto">Contacto</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">Conocenos</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
