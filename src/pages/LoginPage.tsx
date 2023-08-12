import React, { useState } from "react";

import { styled } from "styled-components";
import eyeImage from "../assets/images/eye.svg";
import { StBasicButton } from "../styles/BasicButton";
import { useNavigate } from "react-router-dom";
import { StBasicInput } from "../styles/BasicInput";
import { postLoginApi } from "../api/users";
import { BoxContainer } from "../components/common/Header";
import footer from "../assets/images/footer.png";
import vector from "../assets/images/vector.png";
import firstbox from "../assets/images/firstbox.png";
import secondbox from "../assets/images/secondbox.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailOnchange = (event: any) => {
    setEmail(event.target.value);
  };

  const passwordOnchange = (event: any) => {
    setPassword(event.target.value);
  };

  const loginOnclick = async (event: any) => {
    event.preventDefault();
    if (email === "" || password === "") {
      alert("아이디나 비밀번호를 입력해주세요.");
    }
    const body = { email: email, password: password };
    try {
      console.log(body);
      const res = await postLoginApi(body);
      if (res.status === 200) {
        console.log("로그인성공", res);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginPageContainer>
      <LoginContainer>
        <LogInForm onSubmit={loginOnclick}>
          <TitleContainer>
            <LogoContainer>
              <Logo src={eyeImage} />
            </LogoContainer>
            <Title>로그인</Title>
            <SubTitle>주머니 핍핑, 시작해볼까요?</SubTitle>
          </TitleContainer>
          <InputContainer>
            <EmailInputContainer>
              <StBasicInput
                borderColor="#222020"
                type="email"
                value={email}
                onChange={emailOnchange}
                placeholder="아이디를 입력해주세요."
              />
            </EmailInputContainer>
            <PwInputContainer>
              <StBasicInput
                borderColor="#222020"
                type="password"
                value={password}
                onChange={passwordOnchange}
                placeholder="비밀번호를 입력해주세요."
              />
            </PwInputContainer>
          </InputContainer>
          <SecondContainer>
            <SearchContainer>
              <SearchId>아이디찾기</SearchId>
              <BoxContainer />
              <SearchPw>비밀번호 찾기</SearchPw>
            </SearchContainer>
            <LoginStateContainer>
              <MaintainLogin>로그인 상태 유지</MaintainLogin>
              <CheckInput type="checkbox" />
            </LoginStateContainer>
          </SecondContainer>
          <ButtonContainer>
            <StBasicButton
              buttonColor="#FFCA64;"
              type="submit"
              onClick={loginOnclick}
            >
              로그인
            </StBasicButton>
          </ButtonContainer>
          <SignUpContainer>
            <Content>아직 핍포 회원이 아니신가요?</Content>
            <SignupLink onClick={() => navigate("/signup")}>
              회원가입
            </SignupLink>
          </SignUpContainer>
        </LogInForm>
      </LoginContainer>
      <FirstBoxContainer>
        <img src={firstbox} />
      </FirstBoxContainer>
      <SecondBoxConatiner>
        <img src={secondbox} />
      </SecondBoxConatiner>

      <FooterContainer>
        <FirstFooter>
          <FirstImg src={footer} />
          <SecondImg src={vector} />
        </FirstFooter>
      </FooterContainer>
    </LoginPageContainer>
  );
};
const LoginPageContainer = styled.div`
  /* border: 5px solid blue; */
  background-color: #fcf6e9;
  position: relative;
  padding-top: 240px;
`;

const LoginContainer = styled.div`
  z-index: 999;
  position: relative;
  max-width: 753px;
  height: 652px;
  border: 1px solid black;
  margin: 0 auto;
  /* margin-top: 240px; */
  background-color: white;
  box-shadow: black 0px 0px 0px 2px inset,
    rgb(255, 255, 255) 10px -10px 0px -3px, rgb(0, 0, 0) 10px -10px,
    rgb(255, 255, 255) 20px -20px 0px -3px, rgb(0, 0, 0) 20px -20px;
`;
const LogInForm = styled.form`
  /* border: 1px solid green; */
  padding: 56px 96px 56px 96px;
  margin: auto;
`;
const TitleContainer = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
const LogoContainer = styled.div`
  width: 66px;
  height: 54px;
  /* border: 1px solid red; */
  margin: 0 auto;
  margin-top: 56px;
`;

const Logo = styled.img`
  /* border: 1px solid blue; */
  width: 100%;
`;

const Title = styled.div`
  font-size: 32px;
  /* border: 1px solid red; */
  font-weight: 800;
  margin-top: 10px;
`;
const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  /* border: 1px solid red; */
`;
const InputContainer = styled.div`
  /* border: 1px solid red; */
  margin-top: 14px;
  margin-bottom: 12px;
`;
const EmailInputContainer = styled.div`
  /* border: 1px solid blue; */
  margin-bottom: 16px;
`;
const PwInputContainer = styled.div`
  /* border: 1px solid blue; */
`;

const SearchContainer = styled.div`
  /* border: 1px solid red; */
  height: 24px;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const SearchId = styled.span`
  /* border: 1px solid black; */
  height: 24px;
  cursor: pointer;
  font-size: 16px;
  font-family: Pretendard;
`;

const SearchPw = styled.span`
  /* border: 1px solid black; */
  cursor: pointer;
  padding-left: 16px;
  font-size: 16px;
  height: 24px;
`;
const MaintainLogin = styled.span`
  /* border: 1px solid black; */
`;

const SecondContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: space-between;
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
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
  margin-top: 30px;
`;
const SignUpContainer = styled.div`
  margin-top: 40px;
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
`;

const Content = styled.span`
  /* border: 1px solid blue; */
`;

const SignupLink = styled.button`
  cursor: pointer;
  font-size: 16px;
  font-weight: 1000;
  margin-left: 10px;
`;

const FirstBoxContainer = styled.div`
  margin: -380px 690.9px 119.2px 100px;
  transform: rotate(-8.96deg);
  position: absolute;
`;
const SecondBoxConatiner = styled.div`
  margin: -380px 195.4px 200px 1100px;
  transform: rotate(17.357deg);
  position: absolute;
`;
const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  position: absolute;
  top: 800px;
  z-index: 999;
`;
const FirstFooter = styled.div`
  position: relative;
  width: 100%;
  z-index: 999;
`;

const FirstImg = styled.img`
  width: 100%;
`;
const SecondImg = styled.img`
  position: absolute;
  width: 100%;
  z-index: 999;
  top: 0;
  left: 0px;
`;

export default LoginPage;
