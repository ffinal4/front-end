import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeadContainer>
      <FirstContainer>
        <Logo
          onClick={() => {
            navigate("/");
          }}
        >
          로고
        </Logo>
        <SecondMenu>주머니핍핑</SecondMenu>
        <ThirdMenu>주변둘러보기</ThirdMenu>
      </FirstContainer>
      <SecondContainer>
        <div
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </div>
        <div
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </div>
        <div>내주머니</div>
      </SecondContainer>
    </HeadContainer>
  );
};

const HeadContainer = styled.div`
  width: 100%;
  height: 76px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 18px;
  border-bottom: 1px solid gray;
`;

const FirstContainer = styled.div`
  /* border: 2px solid red; */
  width: 540px;
  display: flex;
  justify-content: space-evenly;
`;

const SecondContainer = styled.div`
  /* border: 2px solid blue; */
  width: 300px;
  display: flex;
  justify-content: space-evenly;
`;

const Logo = styled.div``;

const SecondMenu = styled.div`
  cursor: pointer;
`;
const ThirdMenu = styled.div``;
export default Header;
