import React from "react";
import { styled } from "styled-components";

const HorizontalLine = () => {
  return <RectangleContainer></RectangleContainer>;
};

const RectangleContainer = styled.div`
  width: 100%;
  height: 4px;
  background: var(--black, #181818);
`;
export default HorizontalLine;
