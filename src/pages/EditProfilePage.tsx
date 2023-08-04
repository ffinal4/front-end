import React from "react";
import { styled } from "styled-components";
import { StBasicButton } from "../styles/BasicButton";
import { useNavigate } from "react-router-dom";
import { StBasicInput } from "../styles/BasicInput";
import ImageUpload from "../components/UploadPage/ImageUpload";

const EditProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <EditProfilePageContainer>
        <TitleContainer>
          <Title>
            MY ACCOUNT
            <SubTitle>개인정보 수정</SubTitle>
          </Title>
        </TitleContainer>
        <EditProfileForm>
          <ProfileImageContainer>
            {/* <Label>프로필 사진</Label> */}
            <ImageUpload />
          </ProfileImageContainer>
          <EmailContainer>
            <Label>이메일(아이디)</Label>
            <Email>peeppo@gmail.com</Email>
          </EmailContainer>
          <NickNameContainer>
            <CommonLabel>닉네임</CommonLabel>
            <NickNameInputContainer>
              <StBasicInput type="text" placeholder="닉네임을 입력해주세요." />
            </NickNameInputContainer>
          </NickNameContainer>
          <Content>* 이미 사용중인 이메일입니다.</Content>
          <PwContainer>
            <Label>현재 비밀번호</Label>
            <PwInputContainer>
              <StBasicInput
                type="password"
                placeholder="현재 비밀번호를 입력해주세요."
              />
            </PwInputContainer>
          </PwContainer>
          <Content>* 비밀번호가 일치하지 않습니다.</Content>
          <CheckPwContainer>
            <Label>비밀번호 재설정</Label>
            <SetPwInputContainer>
              <NewInputContainer>
                <StBasicInput
                  type="password"
                  placeholder="새 비밀번호를 입력해주세요."
                />
                <PwValidation>
                  * 영문, 숫자, 특수문자 각 1개 이상을 포함한 8자리 이상의
                  비밀번호를 작성해주세요.
                </PwValidation>
              </NewInputContainer>

              <CheckPwInputContainer>
                <StBasicInput
                  type="password"
                  placeholder="비밀번호를 확인해주세요."
                />
                <PwValidation>* 비밀번호가 일치하지 않습니다.</PwValidation>
              </CheckPwInputContainer>
            </SetPwInputContainer>
          </CheckPwContainer>
          <AddressContainer>
            <Label>주거래지역</Label>

            <AddressLabelContainer>
              <Address>서울시 강남구</Address>
            </AddressLabelContainer>
            <AddressInputContainer>
              <StBasicInput
                type="text"
                placeholder="수정할 주소를 입력해주세요."
              />
            </AddressInputContainer>
            <StBasicButton
              buttonColor="#D9D9D9;"
              style={{ marginLeft: "20px" }}
            >
              주소찾기
            </StBasicButton>
          </AddressContainer>
        </EditProfileForm>
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
      </EditProfilePageContainer>
    </div>
  );
};

const EditProfilePageContainer = styled.div`
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
  /* margin-bottom: 30px; */
`;
const SubTitle = styled.div`
  font-size: 32px;
  margin-top: 16px;
  margin-bottom: 16px;
`;
const EditProfileForm = styled.form`
  /* border: 1px solid black; */
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  width: 100%;
  height: 1343px;
  margin: auto;
`;
const ProfileImageContainer = styled.div``;
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

const NickNameContainer = styled.div`
  /* border: 3px solid green; */
  border-top: 1px solid gray;
  padding-top: 30px;
  display: flex;
  align-items: center;
`;
const CommonLabel = styled.div`
  font-size: 20px;
  width: 200px;
  font-weight: 700;
  /* border: 1px solid red; */
  margin-right: 50px;
`;
const NickNameInputContainer = styled.div`
  width: 656px;
`;
const Content = styled.div`
  /* border: 1px solid blue; */
  width: 465px;
  height: 24px;
  margin-left: 250px;
  color: red;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const PwContainer = styled.div`
  /* border: 3px solid green; */
  border-top: 1px solid gray;
  display: flex;
  align-items: center;
  padding-top: 30px;
  margin-top: 30px;
  /* margin-bottom: 30px; */
`;
const PwInputContainer = styled.div`
  /* border: 1px solid red; */
  width: 656px;
`;
const SetPwInputContainer = styled.div`
  /* border: 1px solid red; */
  width: 656px;
`;
const NewInputContainer = styled.div`
  /* border: 1px solid green; */
`;
const CheckPwInputContainer = styled.div`
  /* border: 1px solid green; */
`;
const CheckPwContainer = styled.div`
  /* border: 3px solid green; */
  display: flex;

  align-items: center;
  /* margin-bottom: 30px; */
`;
const PwValidation = styled.div`
  color: red;
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 16px;
`;
const Address = styled.div`
  border: 1px solid red;
`;
const AddressInputContainer = styled.div`
  width: 464px;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

const AddressLabelContainer = styled.div`
  border: 1px solid red;
  display: flex;
`;
const AddressContainer = styled.div`
  border: 3px solid green;
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
