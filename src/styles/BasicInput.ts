import { styled } from "styled-components";

export const StBasicInput = styled.input<{
  borderColor: string;
  focusBorderColor: string;
}>`
  width: 100%;
  height: 44px;
  padding: 10px 0px 10px 20px;
  font-size: 16px;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 5px;
  &:focus {
    outline: none !important;
    border-color: ${(props) => props.focusBorderColor};
  }
`;
