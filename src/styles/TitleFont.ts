import { styled } from "styled-components";

export const StTitle = styled.div<{ marginbottom: string; textalign: string }>`
  color: var(--black-white-black, #222020);
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 44px */
  margin-bottom: ${(props) => props.marginbottom};
  text-align: ${(props) => props.textalign};

  @media screen and (max-width: 500px) {
    text-indent: 40px;
  }
`;

export const StSubTitle = styled.div<{ marginbottom: string; textalign: string }>`
  color: var(--black-white-gray-100, #39373a);
  /* KOR/Kor R 20 */
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  margin-bottom: ${(props) => props.marginbottom};
  text-align: ${(props) => props.textalign};

  @media screen and (max-width: 500px) {
    text-indent: 40px;
  }
`;
