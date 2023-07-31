import React from "react";
import { styled } from "styled-components";

const Header = () => {
  return (
    <HeadContainer>
      <FirstContainer>
        <Logo>로고</Logo>
        <div>주머니보기</div>
        <div>주변둘러보기</div>
      </FirstContainer>
      <SecondContainer>
        <div>로그인</div>
        <div>화가</div>
        <div>내주머니ddddd</div>
      </SecondContainer>
    </HeadContainer>
  );
};

const HeadContainer = styled.div`
  border: 3px solid #cadeed;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const FirstContainer = styled.div`
  border: 2px solid red;
  width: 540px;
  display: flex;
  justify-content: space-evenly;
`;

const SecondContainer = styled.div`
  border: 2px solid blue;
  width: 222px;
  display: flex;
  justify-content: space-evenly;
`;

const Logo = styled.img``;
export default Header;
