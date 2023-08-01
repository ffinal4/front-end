import React from "react";
import { styled } from "styled-components";

const SignupPage = () => {
  return (
    <SignUpPageContainer>
      <TitleContainer>
        <Title>
          ARE YOU READY <br />
          TO PEEP THE POCKETS?
        </Title>
      </TitleContainer>
      <SignUpForm>
        <EmailContainer>
          <Label>이메일(아이디)</Label>
          <Input type="email" placeholder="이메일을 입력해주세요" />
        </EmailContainer>
        <PwContainer>
          <Label>비밀번호</Label>
          <Input type="password" placeholder="비밀번호를 입력해주세요." />
        </PwContainer>
        <CheckPwContainer>
          <Label>비밀번호 확인</Label>
          <Input type="password" placeholder="비밀번호를 입력해주세요." />
        </CheckPwContainer>
        <AddressContainer>
          <SecondLabel>주소</SecondLabel>
          <SecondInput type="text" placeholder="주소를 입력해주세요." />
          <Button>주소 찾기</Button>
        </AddressContainer>
        <Content>입력한 주소는 나의 주거래 지역으로 표시됩니다.</Content>
        <NickNameContainer>
          <SecondLabel>닉네임</SecondLabel>
          <SecondInput type="text" placeholder="닉네임을 입력해주세요." />
          <Button>중복 확인</Button>
        </NickNameContainer>
        <Content>닉네임이 중복됩니다.</Content>
      </SignUpForm>
      <SignUpButton>회원가입</SignUpButton>
    </SignUpPageContainer>
  );
};
const SignUpPageContainer = styled.div`
  /* border: 1px solid blue; */
`;
const TitleContainer = styled.div`
  /* border: 1px solid red; */
  width: 1200px;
  margin: auto;
  margin-top: 80px;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
`;
const SignUpForm = styled.form`
  /* border: 1px solid black; */
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  width: 1200px;
  height: 750px;
  margin: auto;
  padding-top: 50px;
`;
const EmailContainer = styled.div`
  border-bottom: 2px solid gray;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Label = styled.div`
  font-size: 20px;
  width: 200px;
  font-weight: 700;
  /* border: 1px solid red; */
  display: flex;
  margin-right: 50px;
  margin-bottom: 50px;
`;
const Input = styled.input`
  border: 1px solid black;
  width: 658px;
  height: 44px;
  font-size: 16px;
  margin-bottom: 50px;
  padding: 10px;
`;
const PwContainer = styled.div`
  /* border: 3px solid green; */
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const CheckPwContainer = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;
const AddressContainer = styled.div`
  /* border: 3px solid green; */
  display: flex;
  align-items: center;
`;
const SecondLabel = styled.div`
  font-size: 20px;
  width: 200px;
  font-weight: 700;
  /* border: 1px solid red; */
  margin-right: 50px;
`;
const SecondInput = styled.input`
  border: 1px solid black;
  width: 465px;
  height: 44px;
  font-size: 16px;
`;
const Button = styled.div`
  cursor: pointer;
  border: 1px solid black;
  width: 177px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;
const Content = styled.div`
  /* border: 1px solid blue; */
  width: 465px;
  height: 24px;
  margin-left: 250px;
  margin-bottom: 40px;
`;
const NickNameContainer = styled.div`
  border-top: 1px solid gray;
  padding-top: 50px;
  display: flex;
  align-items: center;
`;
const SignUpButton = styled.div`
  cursor: pointer;
  border: 1px solid black;
  width: 177px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 50px;
`;
export default SignupPage;
