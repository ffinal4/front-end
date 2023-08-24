import { styled } from "styled-components";

export const StRequestCard = styled.div<{
  borderpx: string;
  bordercolor: string;
}>`
  width: 368px;
  height: 520px;
  border-radius: 10px;
  position: relative;
  margin-bottom: 24px;
  border: ${(props) => props.borderpx} solid ${(props) => props.bordercolor};
`;
