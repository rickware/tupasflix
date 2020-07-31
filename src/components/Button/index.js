import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  background-color: var(--frontEnd);
  border-radius: 5px;
  border: 1px solid var(--primary);
  box-sizing: border-box;
  color: var(--primary);
  cursor: pointer;
  display: block ruby;
  font-size: inherit;
  font-style: normal;
  font-weight: bold;
  height: 45px;
  margin: 1vw auto;
  outline: none;
  padding: 6px 19px 0 19px;
  text-align: center;
  text-decoration: none;
  transition: opacity .3s;
  width: min-content;

  &:hover,
  &:focus {
    opacity: .5;
  }
  
@media (max-width: 800px) {
  height: 32px;
  padding: 0 2vw;
}
`;

export default Button;
