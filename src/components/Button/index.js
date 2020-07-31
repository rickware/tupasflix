import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  color: var(--wine);
  border: 1px solid var(--wine);
  background-color: var(--orange);
  box-sizing: border-box;
  cursor: pointer;
  margin: 1vw 50vh;
  padding: 0 24px;
  height: 36px;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
}
  &:hover,
  &:focus {
  opacity: .5;
`;

export default Button;
