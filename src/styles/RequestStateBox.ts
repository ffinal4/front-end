import { styled } from "styled-components";

export const StRequestState = styled.div<{
  backgroundcolor: string;
  color: string;
  border: string;
}>`
  width: 110px;
  height: 44px;
  border-radius: 0px 7px;
  position: absolute;
  right: 0;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundcolor};
  border: 2px solid ${(props) => props.border};
  color: ${(props) => props.color};
`;
