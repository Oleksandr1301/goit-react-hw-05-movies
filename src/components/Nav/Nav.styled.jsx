import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkItem = styled(NavLink)`
  padding: 4px 5px;
  text-decoration: none;
  color: black;
  font-size: 25px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  background-color: #d1e6e1;
  border-radius: 5px;
  &.active {
    background-color: #07f22b;
    border-radius: 5px;
    color: black;
  }
  &:hover {
    background-color: #06941b;
    transform: scale(1.05);
  }
`;
export const NavHeader = styled.nav`
  background-color: #e3facf;
  margin-bottom: 20px;
`;

export const NavList = styled.ul`
  display: flex;

  padding: 20px;
  gap: 25px;
`;

export const NavItem = styled.li`
  list-style-type: none;
  // border: 2px solid #000;
  // padding: 5px;
  // border-radius: 4px;
`;
