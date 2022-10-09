import styled, { keyframes } from "styled-components";
import { Link } from "./Utility";

export const Button = styled.button`
  background: ${(props) => (props.green ? "green" : "red")};
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: white;
    color: red;
  }
`;

export const PrimaryButton = styled(Button)`
  background: blue;
  color: white;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

export const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1rem"
}))`
  border: 1px solid red;
  padding: ${(props) => props.size};
`;

export const PassInput = styled(Input).attrs((props) => ({
  type: "password"
}))`
  border: 2px solid blue;
  font-size: ${(props) => props.size};
`;

const rotate = keyframes`
from{
  transform: rotate(0deg);
}

to{
  transform: rotate(360deg);
}
`;

export const Rotate = styled.div`
  animation: ${rotate} 2s linear infinite;
  padding: 20px;
  margin: 40px;
  font-size: 2rem;
  display: inline-block;
`;

export const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  text-decoration: ${(props) => props.decoration || null};
`;
