import React, { useState } from "react";
import Swal from "sweetalert2";
import { styled } from "styled-components";
import eyeImage from "../assets/icon/mobileeye.png";
import { StBasicInput } from "../styles/BasicInput";
import { StBasicButton } from "../styles/BasicButton";
import { useNavigate } from "react-router-dom";
import { postLoginApi } from "../api/users";

const MobileLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
        Swal.fire({
          icon: "warning",
          text: "아이디와 비밀번호를 한 번 더 확인해주세요.",
          confirmButtonColor: "#ffca64",
        });
      }
    }
  };
  return (
    <MobileLoginPageContainer>
      <LogoContainer>
        <Logo src={eyeImage} />
      </LogoContainer>
      <Title>로그인</Title>
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
      <SearchContainer>
        <SearchId>아이디찾기</SearchId>
        <BoxContainer />
        <SearchPw>비밀번호 찾기</SearchPw>
      </SearchContainer>
      <ButtonContainer>
        <StButton buttonColor="#FFCA64;" type="submit" onClick={loginOnclick}>
          로그인
        </StButton>
      </ButtonContainer>
      <SignUpContainer>
        <Content>아직 핍포 회원이 아니신가요?</Content>
        <SignupLink onClick={() => navigate("/signup")}>회원가입</SignupLink>
      </SignUpContainer>
    </MobileLoginPageContainer>
  );
};

const MobileLoginPageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #fcf6e9;
  padding-top: 167px;
  padding-bottom: 500px;
`;
const LogoContainer = styled.div`
  width: 36px;
  height: 36px;
  margin: 0 auto;
  margin-top: 56px;
`;

const Logo = styled.img`
  width: 100%;
`;

const Title = styled.div`
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 700;
  line-height: 140%;
  text-align: center;
`;

const InputContainer = styled.div`
  margin: 30px 16px 12px 16px;
`;

const EmailInputContainer = styled.div`
  margin-bottom: 10px;
`;
const PwInputContainer = styled.div``;

const SearchContainer = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-left: 16px;
`;

const SearchId = styled.span`
  height: 24px;
  cursor: pointer;
  font-size: 14px;
  font-family: "Pretendard";
  display: flex;
  align-items: center;
`;

const BoxContainer = styled.div`
  width: 2px;
  height: 16px;
  background-color: #f9b482;
  border-radius: 2px;
  margin-left: 8px;
  font-weight: 400;
`;

const SearchPw = styled.span`
  cursor: pointer;
  padding-left: 8px;
  font-size: 14px;
  height: 24px;
  font-family: "Pretendard";
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const StButton = styled(StBasicButton)`
  border: 2px solid #222020;
  color: #222020;
  font-family: "Pretendard";
  font-weight: 700;
  width: 104px;
`;

const SignUpContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`;

const SignupLink = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  margin-left: 10px;
  font-family: "Pretendard";
`;

const Content = styled.span`
  font-family: "Pretendard";
`;

export default MobileLoginPage;
