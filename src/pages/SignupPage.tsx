import React, { useState } from "react";
import { styled } from "styled-components";
import { StBasicButton } from "../styles/BasicButton";
import { useNavigate } from "react-router-dom";
import { StBasicInput } from "../styles/BasicInput";

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [address, setAddress] = useState("");
  const [nickname, setNickName] = useState("");

  const emailOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const pwOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const checkPwOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(event.target.value);
  };

  const addressOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const nicknameOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(event.target.value);
  };

  return (
    <SignUpPageContainer>
      <TitleContainer>
        <Title>READY TO PEEPO</Title>
      </TitleContainer>
      <SignUpForm>
        <EmailContainer>
          <Label>이메일(아이디)</Label>
          <EmailInputContainer>
            <StBasicInput
              type="email"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={emailOnchange}
            />
          </EmailInputContainer>

          <AtContainer>@</AtContainer>
          <EmailSelect>
            <option>naver.com</option>
            <option>hanmail.net</option>
            <option>daum.net</option>
            <option>gmail.com</option>
            <option>nate.com</option>
            <option>hotmail.com</option>
            <option>outlook.com</option>
            <option>icloud.com</option>
          </EmailSelect>
        </EmailContainer>
        <Content>* 이미 사용중인 이메일입니다.</Content>
        <PwContainer>
          <Label>비밀번호</Label>
          <PwInputContainer>
            <StBasicInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={pwOnchange}
            />
          </PwInputContainer>
        </PwContainer>
        <CheckPwContainer>
          <Label>비밀번호 확인</Label>
          <CheckPwInputContainer>
            <StBasicInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={checkPassword}
              onChange={checkPwOnchange}
            />
          </CheckPwInputContainer>
        </CheckPwContainer>
        <AddressContainer>
          <Label>주소</Label>
          <AddressInputContainer>
            <StBasicInput
              type="text"
              placeholder="주소를 입력해주세요."
              value={address}
              onChange={addressOnchange}
            />
          </AddressInputContainer>

          <StBasicButton buttonColor="#D9D9D9;" style={{ marginLeft: "20px" }}>
            주소찾기
          </StBasicButton>
        </AddressContainer>
        <AddressContent>
          입력한 주소는 나의 주거래 지역으로 표시됩니다.
        </AddressContent>
        <NickNameContainer>
          <SecondLabel>닉네임</SecondLabel>
          <NickNameInputContainer>
            <StBasicInput
              type="text"
              placeholder="닉네임을 입력해주세요."
              value={nickname}
              onChange={nicknameOnchange}
            />
          </NickNameInputContainer>

          <StBasicButton buttonColor="#D9D9D9;" style={{ marginLeft: "20px" }}>
            중복 확인
          </StBasicButton>
        </NickNameContainer>
        <Content>닉네임이 중복됩니다.</Content>
      </SignUpForm>
      <AssignButtonContainer>
        <StBasicButton
          buttonColor="#D9D9D9;"
          onClick={() => {
            navigate("/login");
          }}
        >
          회원가입
        </StBasicButton>
      </AssignButtonContainer>
    </SignUpPageContainer>
  );
};
const SignUpPageContainer = styled.div`
  /* border: 1px solid blue; */
  /* width: 100%; */
`;
const TitleContainer = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  margin: auto;
  margin-top: 80px;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 30px;
`;
const SignUpForm = styled.form`
  /* border: 5px solid yellow; */
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  width: 1136px;
  height: 626px;
  margin: auto;
`;
const EmailInputContainer = styled.div`
  width: 272px;
`;

const EmailContainer = styled.div`
  /* border: 3px solid green; */
  display: flex;
  align-items: center;
  margin-top: 44px;
`;
const Label = styled.div`
  /* border: 1px solid red; */
  font-size: 20px;
  width: 180px;
  font-weight: 700;

  display: flex;
  margin-right: 70px;
`;

const AtContainer = styled.div`
  /* border: 1px solid red; */
  padding: 0px 16px 0px 16px;
`;
const EmailSelect = styled.select`
  width: 337px;
  height: 44px;
  padding: 10px;
  font-size: 16px;
`;

const Content = styled.div`
  /* border: 1px solid blue; */
  width: 465px;
  height: 24px;
  margin-left: 250px;
  color: red;
  margin-top: 10px;
`;

const PwContainer = styled.div`
  /* border: 3px solid green; */
  border-top: 1px solid gray;
  display: flex;
  align-items: center;
  padding-top: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const PwInputContainer = styled.div`
  /* border: 1px solid red; */
  width: 656px;
`;
const CheckPwInputContainer = styled.div`
  width: 656px;
`;

const CheckPwContainer = styled.div`
  /* border: 3px solid green; */
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const AddressContainer = styled.div`
  /* border: 3px solid green; */
  border-top: 1px solid gray;
  padding-top: 30px;
  display: flex;
  align-items: center;
`;
const AddressInputContainer = styled.div`
  width: 464px;
`;
const SecondLabel = styled.div`
  font-size: 20px;
  width: 200px;
  font-weight: 700;
  /* border: 1px solid red; */
  margin-right: 50px;
`;
const NickNameInputContainer = styled.div`
  width: 464px;
`;
const AddressContent = styled.div`
  /* border: 1px solid blue; */
  width: 465px;
  height: 24px;
  margin-left: 250px;
  color: gray;
  margin-bottom: 30px;
  margin-top: 10px;
`;

const NickNameContainer = styled.div`
  /* border: 3px solid green; */
  border-top: 1px solid gray;
  padding-top: 30px;
  display: flex;
  align-items: center;
`;
const AssignButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
  padding: 20px 0px 20px 0px;
`;

export default SignupPage;
