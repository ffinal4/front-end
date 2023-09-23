import { styled } from "styled-components";

export const StBasicButton = styled.button<{
  buttonColor: string;
}>`
  display: flex;
  padding: 10px 0px;
  font-family: "Pretendard";
  font-size: 16px;
  justify-content: center;
  align-items: center;
  width: 176px;
  height: 44px;
  border-radius: 5px;
  background-color: ${(props) => props.buttonColor};
  user-select: none;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 104px;
    height: 40px;
  }
`;
