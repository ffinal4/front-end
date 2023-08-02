import { styled } from "styled-components";

export const StBasicButton = styled.div<{ buttonColor: string }>`
  display: flex;
  padding: 10px 46px;
  font-family: "Pretendard";
  justify-content: center;
  align-items: center;
  width: 177px;
  height: 44px;
  border: 1px solid #000;
  background-color: ${(props) => props.buttonColor};
  cursor: pointer;
`;