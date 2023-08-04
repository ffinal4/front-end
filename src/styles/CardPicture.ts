import { styled } from "styled-components";

export const StCardPicture = styled.div<{ image: string }>`
  width: 100%;
  height: 273px;
  background-repeat: no-repeat;
  background-image: ${(props) => props.image};
  background-color: #d9d9d9;
`;