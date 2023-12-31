import { styled } from "styled-components";

export const StBasicInput = styled.input<{
  borderColor: string;
  focusBorderColor: string;
}>`
  width: 100%;
  height: 44px;
  padding: 10px 0px 10px 20px;
  font-family: Pretendard;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.borderColor};
  &:focus {
    outline: none !important;
    border-color: ${(props) => props.focusBorderColor};
  }
  &:error {
    border-color: red !important;
  }
`;
