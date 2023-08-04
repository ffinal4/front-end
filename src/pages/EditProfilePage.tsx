import React from "react";
import { styled } from "styled-components";
import { StBasicButton } from "../styles/BasicButton";
import { useNavigate } from "react-router-dom";

const EditProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <SignUpPageContainer>
        <TitleContainer>
          <Title>
            MY ACCOUNT
            <br />내 계정
          </Title>
        </TitleContainer>
        <SignUpForm>
          <EmailContainer>
            <Label>이메일(아이디)</Label>
            <Email>peeppo@gmail.com</Email>
          </EmailContainer>
          <NickNameContainer>
            <SecondLabel>닉네임</SecondLabel>
            <SecondInput type="text" placeholder="닉네임을 입력해주세요." />
          </NickNameContainer>
          <Content>* 이미 사용중인 이메일입니다.</Content>
          <PwContainer>
            <Label>비밀번호 확인</Label>
            <Input
              type="password"
              placeholder="현재 비밀번호를 입력해주세요."
            />
          </PwContainer>
          <CheckPwContainer>
            <Label>비밀번호 재설정</Label>
            <InputContainer>
              <Input
                type="password"
                placeholder="새 비밀번호를 입력해주세요."
              />
              <Input type="password" placeholder="비밀번호를 확인해주세요." />
            </InputContainer>
          </CheckPwContainer>
          <AddressContainer>
            <Label>주거래지역</Label>
            <SecondInput type="text" placeholder="주소를 입력해주세요." />
            <StBasicButton
              buttonColor="#D9D9D9;"
              style={{ marginLeft: "20px" }}
            >
              주소찾기
            </StBasicButton>
          </AddressContainer>
        </SignUpForm>
        <AssignButtonContainer>
          <StBasicButton
            buttonColor="#D9D9D9;"
            onClick={() => {
              navigate("/login");
            }}
          >
            변경사항 저장
          </StBasicButton>
        </AssignButtonContainer>
      </SignUpPageContainer>
    </div>
  );
};

const SignUpPageContainer = styled.div`
  /* border: 1px solid blue; */
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
  /* border: 1px solid black; */
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  width: 100%;
  height: 626px;
  margin: auto;
`;
const EmailContainer = styled.div`
  /* border: 3px solid green; */
  display: flex;
  align-items: center;
  margin-top: 44px;
  margin-bottom: 44px;
`;
const Label = styled.div`
  /* border: 1px solid red; */
  font-size: 20px;
  width: 180px;
  font-weight: 700;
  display: flex;
  margin-right: 70px;
`;
const Email = styled.div`
  /* border: 1px solid red; */
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
const InputContainer = styled.div`
  /* border: 1px solid red; */
  width: 656px;
`;
const Input = styled.input`
  border: 1px solid black;
  width: 656px;
  height: 44px;
  font-size: 16px;
  padding: 10px;
  margin-top: 10px;
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
const SecondLabel = styled.div`
  font-size: 20px;
  width: 200px;
  font-weight: 700;
  /* border: 1px solid red; */
  margin-right: 50px;
`;
const SecondInput = styled.input`
  border: 1px solid black;
  width: 452px;
  height: 44px;
  font-size: 16px;
  padding: 10px;
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

export default EditProfilePage;
