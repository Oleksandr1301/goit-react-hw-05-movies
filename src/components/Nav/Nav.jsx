import { NavHeader, NavList, NavItem, LinkItem } from './Nav.styled';

const Nav = () => {
  return (
    <NavHeader>
      <NavList>
        <NavItem>
          <LinkItem to="/">Home</LinkItem>
        </NavItem>
        <NavItem>
          <LinkItem to="/movies">Movies</LinkItem>
        </NavItem>
      </NavList>
    </NavHeader>
  );
};

export default Nav;
