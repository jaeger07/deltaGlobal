import styled from "styled-components";
import { LiaSearchSolid } from 'react-icons/lia'

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 1450px;
  margin: 0 auto;

  @media (max-width: 780px) {
    justify-content: space-between;
    height: 60px;
  }
  @media (max-width: 550px) {
    height: 44px;
  }
`;
export const Logo = styled.img`
  max-width: 180px;
  height: auto;
  @media (max-width: 780px) {
    height: 60px;
  }
  @media (max-width: 550px) {
    height: 44px;
  }
`;
export const NavBar = styled.div`
  max-width: 200px;
  height: auto;
`;
export const Search = styled(LiaSearchSolid)`
  color: black;

  @media (max-width: 780px) {
    display: none;
  }
`;