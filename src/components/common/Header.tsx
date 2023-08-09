import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import CategoryHeader from "./CategoryHeader";
import CategorySelect from "./CategorySelect";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderLayout>
      <HeaderContainer>
        <LogoContainer>
          <Button />
          {/* <CategorySelect /> */}
          <LogoImage>PEEPPO</LogoImage>
        </LogoContainer>
        <Container>
          <InputContainer>
            <SearchInput type="search" placeholder="Search" />
          </InputContainer>
          <LinkContainer>
            <Button />
            <LoginLink
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </LoginLink>
            <SignupLink onClick={() => navigate("/signup")}>
              회원가입
            </SignupLink>
          </LinkContainer>
        </Container>
      </HeaderContainer>
      <CategoryHeader />
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
  border-bottom: 1px solid gray;
`;
const HeaderContainer = styled.div`
  max-width: 1920px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  border-bottom: 1px solid gray;
  padding: 0 160px 0 160px;
  /* border: 1px solid red; */
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  width: 174px;
  height: 41px;
`;

const Button = styled.div`
  width: 36px;
  height: 36px;
  background-color: #d9d9d9;
  cursor: pointer;
  margin-left: 20px;
`;

const LogoImage = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-left: 10px;
`;

const Container = styled.div`
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
`;

const InputContainer = styled.div`
  border: 2px solid black;
  width: 340px;
  display: flex;
`;

const SearchInput = styled.input`
  border: 1px solid #d9d9d9;
  background-color: #d9d9d9;
  width: 100%;
  height: 44px;
  font-size: 16px;
  padding: 10px;
`;

const LinkContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
`;

const LoginLink = styled.div`
  cursor: pointer;
  margin-left: 20px;
  font-size: 16px;
`;

const SignupLink = styled.div`
  cursor: pointer;
  margin-left: 20px;
  font-size: 16px;
`;
