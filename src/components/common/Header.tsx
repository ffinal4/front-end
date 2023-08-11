import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../../assets/logo/logo.png";
import title from "../../assets/logo/logo_title.png";
import search from "../../assets/icon/search.png";
import Navbar from "./Navbar";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderLayout>
      <HeaderOutContainer>
      <HeaderContainer>
        <LogoContainer>
          <Logo src={logo} />
          <LogoTitle src={title} />
        </LogoContainer>
        <InputContainer>
          <SearchButton>
            <img src={search} />
          </SearchButton>
          <SearchInput type="search" placeholder="Search" />
        </InputContainer>
        <LinkContainer>
          <LoginLink
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </LoginLink>
          <BoxContainer />
          <SignupLink onClick={() => navigate("/signup")}>회원가입</SignupLink>
        </LinkContainer>
      </HeaderContainer>
      </HeaderOutContainer>
      <Navbar />
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  border-bottom: 1px solid #222020;
`;

const HeaderOutContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #d5d4d4;
`;

const HeaderContainer = styled.div`
  width: 1136px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  /* border: 1px solid red; */
  margin: 0 auto;
  @media screen and (max-width: 1136px) {
    width: 100%;
  }
`;

const LogoContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  width: 174px;
  height: 41px;
`;

const Logo = styled.img`
  margin-right: 10px;
`;

const LogoTitle = styled.img``;

export const BoxContainer = styled.div`
  width: 2px;
  height: 16px;
  background-color: #d8bda3;
  border-radius: 2px;
  margin-left: 20px;
  font-weight: 400;
`;

const InputContainer = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchButton = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  margin-left: 20px;
`;
const SearchInput = styled.input`
  border: 1px solid #efefef;
  border-radius: 10px;
  background-color: #efefef;
  width: 100%;
  height: 44px;
  font-size: 16px;
  padding-left: 50px;
`;

const LinkContainer = styled.div`
  /* border: 1px solid red; */
  /* width: 140px; */
  display: flex;
  align-items: center;
`;

const LoginLink = styled.div`
  cursor: pointer;
  /* border: 1px solid blue; */
  margin-left: 20px;
  font-size: 16px;
  /* width: 100%; */
  height: 24px;
  font-family: Pretendard;
`;

const SignupLink = styled.div`
  cursor: pointer;
  /* border: 1px solid blue; */
  margin-left: 20px;
  font-size: 16px;
  /* width: 100%; */
  height: 24px;
`;
