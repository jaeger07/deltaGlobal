import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./styles";



    export default function NavBar() {
        const [extendNavbar, setExtendNavbar] = useState(false);

        return (
          <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
              <LeftContainer>
                <NavbarLinkContainer>
                  <NavbarLink to="/">Primeiro&nbsp;Menu</NavbarLink>
                  <NavbarLink to="/">Segundo&nbsp;Menu</NavbarLink>
                  <NavbarLink to="/">Terceiro&nbsp;Menu</NavbarLink>
                  <NavbarLink to="/">Quarto&nbsp;Menu</NavbarLink>
                  <OpenLinksButton
                    onClick={() => {
                      setExtendNavbar((curr) => !curr);
                    }}
                  >
                    {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                  </OpenLinksButton>
                </NavbarLinkContainer>
              </LeftContainer>
              <RightContainer>
              </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
              <NavbarExtendedContainer>
                <NavbarLinkExtended to="/">Primeiro&nbsp;Menu</NavbarLinkExtended>
                <NavbarLinkExtended to="/">Segundo&nbsp;Menu</NavbarLinkExtended>
                <NavbarLinkExtended to="/">Terceiro&nbsp;Menu</NavbarLinkExtended>
                <NavbarLinkExtended to="/">Quarto&nbsp;Menu</NavbarLinkExtended>
              </NavbarExtendedContainer>
            )}
          </NavbarContainer>
        );
      }