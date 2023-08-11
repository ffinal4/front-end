import { styled } from "styled-components";

export const StBasicButton = styled.button<{ buttonColor: string }>`
  display: flex;
  padding: 10px 46px;
  font-family: "Pretendard";
  justify-content: center;
  align-items: center;
  width: 176px;
  height: 44px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.buttonColor};
  cursor: pointer;
`;
