import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from '../../Assets/Logos/logo.jpg';
import { Menu, Logo, Search } from './styles'

export default function Header() {
  return (
  <Menu>
    <Logo src={logo}></Logo>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/" />
        <Route path="/" />
        <Route path="/" />
      </Routes>
    </Router>
    <Search size={28} className='Search' />
  </Menu>
  );
}