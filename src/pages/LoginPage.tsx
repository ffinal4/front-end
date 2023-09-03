import React, { useState } from "react";
import Swal from "sweetalert2";
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
      Swal.fire({
        icon: "warning",
        text: "아이디나 비밀번호를 입력해주세요.",
        confirmButtonColor: "#ffca64",
      });

      return;
    }
    const body = { email: email, password: password };
    try {
      console.log(body);
      const res = await postLoginApi(body);
      if (res.status === 200) {
        localStorage.setItem("location", res.data);
        console.log("로그인성공", res);
        navigate("/");
      }
    } catch (error: any) {
      if (error.response.data) {
        alert(error.response.data);
      }
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
                focusBorderColor="#222020"
                borderColor="#222020"
                type="email"
                value={email}
                onChange={emailOnchange}
                placeholder="아이디를 입력해주세요."
              />
            </EmailInputContainer>
            <PwInputContainer>
              <StBasicInput
                focusBorderColor="#222020"
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
            <StButton
              buttonColor="#FFCA64;"
              type="submit"
              onClick={loginOnclick}
            >
              로그인
            </StButton>
          </ButtonContainer>
          <SignUpContainer>
            <Content>아직 핍포 회원이 아니신가요?</Content>
            <SignupLink onClick={() => navigate("/signup")}>
              회원가입
            </SignupLink>
          </SignUpContainer>
        </LogInForm>
      </LoginContainer>
      <Box>
        <img src={firstbox} alt="" />
        <SecondDiv>
          <img src={secondbox} alt="" />
        </SecondDiv>
      </Box>
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
  background-color: white;
  box-shadow: black 0px 0px 0px 2px inset,
    rgb(255, 255, 255) 10px -10px 0px -3px, rgb(0, 0, 0) 10px -10px,
    rgb(255, 255, 255) 20px -20px 0px -3px, rgb(0, 0, 0) 20px -20px;
`;

const LogInForm = styled.form`
  padding: 56px 96px 56px 96px;
  margin: auto;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  width: 66px;
  height: 54px;
  margin: 0 auto;
  margin-top: 56px;
`;

const Logo = styled.img`
  width: 100%;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  margin-top: 10px;
  font-family: "Pretendard";
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  font-family: "Pretendard";
`;

const InputContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 12px;
`;

const EmailInputContainer = styled.div`
  margin-bottom: 16px;
`;
const PwInputContainer = styled.div``;

const SearchContainer = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const SearchId = styled.span`
  height: 24px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Pretendard";
  display: flex;
  align-items: center;
`;

const SearchPw = styled.span`
  cursor: pointer;
  padding-left: 16px;
  font-size: 16px;
  height: 24px;
  font-family: "Pretendard";
  display: flex;
  align-items: center;
`;
const MaintainLogin = styled.span`
  font-family: "Pretendard";
`;

const SecondContainer = styled.div`
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

const StButton = styled(StBasicButton)`
  border: 1px solid #222020;
  color: #222020;
  font-family: Pretendard;
  font-weight: 700;
`;

const CheckInput = styled.input`
  border: 1px solid black;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  accent-color: #ffca64;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const SignUpContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const Content = styled.span`
  font-family: "Pretendard";
`;

const SignupLink = styled.button`
  cursor: pointer;
  font-size: 16px;
  font-weight: 1000;
  margin-left: 10px;
  font-family: "Pretendard";
`;

const Box = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: center;
  gap: 680px;

  @media screen and (max-width: 1300px) {
    gap: 0px;
    display: flex;
    justify-content: space-between;
  }
`;

const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  position: absolute;
  top: 830px;
  background-color: #ffca64;
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
  top: 0px;
  left: 0px;
`;

const SecondDiv = styled.div`
  position: relative;
  z-index: 999;

  @media screen and (max-width: 1300px) {
    position: relative;
    z-index: 777;
  }
`;

export default LoginPage;
