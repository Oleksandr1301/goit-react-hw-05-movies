import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmDetails = styled.div`
  display: flex;
`;
export const LinkItem = styled(Link)`
  margin-top: 0;
`;

export const ButtonGoBack = styled.button`
  padding: 5px 5px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #9df2aa;
  width: 90px;
  &:hover {
    scale: 1.03;
    background-color: #06941b;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  }
`;
export const GoBack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding: 15px;
  margin-bottom: 25px;
`;

export const Details = styled.div`
  width: 500px;
  padding: 15px;
`;

export const Information = styled.div`
  margin-top: 25px;
`;

export const InformationList = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 25px;
`;

export const InformationItem = styled.li`
  list-style-type: none;
`;

export const Cast = styled(Link)`
  display: flex;
  justify-content: center;
  color: black;
  padding: 5px 5px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #9df2aa;
  width: 90px;
  text-decoration: none;
  &:hover {
    scale: 1.03;
    background-color: #06941b;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  }
`;
