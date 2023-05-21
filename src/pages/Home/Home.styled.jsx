import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkItem = styled(NavLink)`
  width: 400px;
  // color: white;
  background-color: black;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-decoration: none;
  margin-bottom: 40px;
  transition: scale 250ms linear, box-shadow 250ms linear;
  border-radius: 5px;
  &:hover {
    scale: calc(1.02);
    box-shadow: 0px 0px 20px 8px gray;
  }
  &:nth-last-child(-n + 4) {
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const HomeList = styled.ul`
  display: flex;

  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const HomeItem = styled.li`
  list-style-type: none;
  width: 400px;
  height: 100%;
`;

export const ImageItem = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 5px;

  &:hover {
    cursor: zoom-in;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  }
`;

export const MovieItemTitle = styled.p`
  height: 50px;
  color: white;
  font-size: 20px;
  padding: 10px;
`;
