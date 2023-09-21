import { styled } from "styled-components";

export const StCardPicture = styled.div<{ image: string }>`
  width: 100%;
  height: 272px;
  background-repeat: no-repeat;
  background-size: 100% 272px;
  background-position: center center;
  background-image: url(${(props) => props.image});
  background-color: #d9d9d9;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-size: 103% 280px;
  }
`;
