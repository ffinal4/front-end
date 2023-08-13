import { styled } from "styled-components";

export const StBasicButton = styled.button<{
  borderColor: string;
  buttonColor: string;
  fontWeight: string;
}>`
  display: flex;
  padding: 10px 46px;
  font-family: "Pretendard";
  font-size: 16px;
  justify-content: center;
  align-items: center;
  width: 176px;
  height: 44px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.buttonColor};
  font-weight: ${(props) => props.fontWeight};
  cursor: pointer;
`;
