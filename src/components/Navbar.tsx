import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background: #555;
`;

const NavLogo = styled.div`
  color: #fff;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 1em;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLogo>Logo</NavLogo>
      <NavMenu>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/coins" >Coins</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
