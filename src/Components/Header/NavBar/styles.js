import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
 
  height: ${(props) => (props.extendNavbar ? "100%" : "60px")};
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 60px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  padding: 10px;
  margin: 0 10px;
  font-size: 14px;
  color: #333;
  opacity: 0.7;

  @media (max-width: 925px) {
    margin: 0;
    padding: 5px;    
  }

  @media (max-width: 700px) {
    display: none;
  }

  &:hover{
    opacity: 1;
    border-bottom: 1px solid #0272AAC2;
    padding-bottom: 9px;

    @media (max-width: 925px) {
    margin: 0;
    padding-bottom: 4px;    
  }
  }

  @media (max-width: 780px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  margin: 15px;
  color:#fff;
  font-size: 12px;

  @media (max-width: 550px) {
    margin: 10px;
    font-size: 10px;
  }
  @media (max-width: 399px) {
    margin: 10px;
    font-size: 8px;
  }
`;

export const OpenLinksButton = styled.button`
  width: 50px;
  height: 30px;
  background: #333;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;

  @media (min-width: 780px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  right: 4%;
  margin-top: 45px;
  z-index: 2;
  background: #333; 
  border-radius: 10px 0px 10px 10px;


  @media (min-width: 780px) {
    display: none;
  }
  @media (max-width: 550px) {
    margin-top: 35px;
  }
  @media (max-width: 399px) {
    margin-top: 33px;
  }
`;