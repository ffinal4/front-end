import React from "react";
import { styled } from "styled-components";
import eyeImage from "../assets/images/eye.svg";
const LoginPage = () => {
  return (
    <div>
      <LoginContainer>
        <LogInFormContainer>
          <FirstContainer>
            <LogoContainer>
              <Logo src={eyeImage} />
            </LogoContainer>
            <Title>로그인</Title>
            <SubTitle>주머니 핍핑, 시작해볼까요?</SubTitle>
          </FirstContainer>
          <InputContainer>
            <Input type="email" placeholder="아이디를 입력해주세요" />
            <Input type="password" placeholder="비밀번호를 입력해주세요" />
          </InputContainer>
          <SecondContainer>
            <SearchContainer>
              <SearchId>아이디찾기</SearchId>
              <SearchPw>비밀번호 찾기</SearchPw>
            </SearchContainer>
            <LoginStateContainer>
              <MaintainLogin>로그인 상태 유지</MaintainLogin>
              <CheckInput type="checkbox" />
            </LoginStateContainer>
          </SecondContainer>
          <LoginButton>로그인</LoginButton>
          <SignUpContainer>
            <Content>아직 핍포 회원이 아니신가요?</Content>
            <SignUpLink>회원가입</SignUpLink>
          </SignUpContainer>
        </LogInFormContainer>
      </LoginContainer>
      <FooterContainer />
    </div>
  );
};

const LoginContainer = styled.div`
  width: 753px;
  height: 652px;
  border: 2px solid black;
  margin: 0 auto;
  margin-top: 120px;
  box-shadow: black 0px 0px 0px 2px inset,
    rgb(255, 255, 255) 10px -10px 0px -3px, rgb(0, 0, 0) 10px -10px,
    rgb(255, 255, 255) 20px -20px 0px -3px, rgb(0, 0, 0) 20px -20px;
`;
const LogInFormContainer = styled.div`
  /* border: 1px solid green; */
  width: 600px;
  margin: auto;
`;
const FirstContainer = styled.div`
  /* border: 1px solid blue; */
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
const LogoContainer = styled.div`
  width: 110px;
  height: 110px;
  /* border: 1px solid red; */
  margin: 0 auto;
  margin-top: 60px;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
`;
const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin-top: 20px;
`;
const Input = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const SearchId = styled.span`
  /* border: 1px solid black; */
`;
const SearchPw = styled.span`
  /* border: 1px solid black; */
  padding-left: 10px;
`;
const MaintainLogin = styled.span`
  /* border: 1px solid black; */
`;

const SecondContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  width: 562px;
  margin: auto;
  justify-content: space-between;
`;
const SearchContainer = styled.div`
  /* border: 1px solid red; */
  width: 200px;
`;
const LoginStateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CheckInput = styled.input`
  border: 1px solid black;
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;
const LoginButton = styled.div`
  cursor: pointer;
  width: 177px;
  height: 44px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 20px;
  font-size: 16px;
`;
const SignUpContainer = styled.div`
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Content = styled.span`
  /* border: 1px solid blue; */
`;

const SignUpLink = styled.div`
  /* border: 1px solid red; */
  cursor: pointer;
  font-size: 16px;
  font-weight: 1000;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 327px;
  background-color: lightgray;
`;
export default LoginPage;
