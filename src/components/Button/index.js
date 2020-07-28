import styled from "styled-components";

const Button = styled.button`
  color: var(--wine);
  border: 1px solid var(--wine);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
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

