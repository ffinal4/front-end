import React, { useState } from "react";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { StBasicButton } from "../styles/BasicButton";
import { useNavigate } from "react-router-dom";
import { StBasicInput } from "../styles/BasicInput";
import KakaoApi from "../components/common/KakaoApi";
import ProfileImageUpload from "../components/EditProfilePage/ProfileImageUpload";
import { patchProfileEditApi, postNicknameApi } from "../api/users";

interface EditForm {
  select: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  nickname: string;
  uploadImage: string;
  address: string;
}

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState(""); //주소
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);
  const [uploadImage, setUploadImage] = useState(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<EditForm>({ mode: "onBlur" });

  //닉네임 중복 확인 통신
  const checkNicknameAvailability = async (nickname: any) => {
    try {
      const res = await postNicknameApi(nickname);
      return res.data.isAvailable;
    } catch (error) {
      console.log(error);
    }
  };

  //변경사항 저장 통신
  const editprofileOnclick = async (data: EditForm) => {
    const userId = "";
    const newForm = {
      nickname: data.nickname,
      password: data.newPassword,
      location: data.address,
      userImg: data.uploadImage,
    };
    try {
      const res = await patchProfileEditApi(userId, newForm);
      if (res.status === 201) {
        console.log("개인정보수정완료", res);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <EditProfilePageContainer>
        <TitleContainer>
          <Title>
            MY ACCOUNT
            <SubTitle>개인정보 수정</SubTitle>
          </Title>
        </TitleContainer>
        <EditProfileForm
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            editprofileOnclick(getValues());
          }}
        >
          <ProfileImageContainer>
            <ProfileImageUpload
              uploadImage={uploadImage}
              setUploadImage={setUploadImage}
            />
          </ProfileImageContainer>
          <EmailContainer>
            <Label>이메일(아이디)</Label>
            <Email>peeppo@gmail.com</Email>
          </EmailContainer>
          <NickNameContainer>
            <CommonLabel>닉네임</CommonLabel>
            <NickNameInputContainer>
              <StBasicInput
                focusBorderColor="#EC0000"
                borderColor="#ADADAD"
                type="text"
                placeholder="닉네임을 입력해주세요."
                {...register("nickname", { required: true })}
                onBlur={checkNicknameAvailability}
              />
            </NickNameInputContainer>
          </NickNameContainer>
          {errors.nickname && <Content>* 이미 사용중인 닉네임입니다.</Content>}
          <PwContainer>
            <Label>현재 비밀번호</Label>
            <PwInputContainer>
              <StBasicInput
                focusBorderColor="#EC0000"
                borderColor="#ADADAD"
                type="password"
                placeholder="현재 비밀번호를 입력해주세요."
                {...register("currentPassword")}
              />
            </PwInputContainer>
          </PwContainer>
          <Content>* 비밀번호가 일치하지 않습니다.</Content>
          <CheckPwContainer>
            <Label>비밀번호 재설정</Label>
            <SetPwInputContainer>
              <NewInputContainer>
                <StBasicInput
                  focusBorderColor="#EC0000"
                  borderColor="#ADADAD"
                  type="password"
                  placeholder="새 비밀번호를 입력해주세요."
                  {...register("newPassword", {
                    required: "필수입력 항목입니다.",
                    minLength: {
                      value: 8,
                      message: "비밀번호는 8자 이상이어야 합니다.",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/,
                      message:
                        "영문, 숫자, 특수문자 각 1개 이상을 포함한 8자리 이상의 비밀번호를 작성해주세요.",
                    },
                  })}
                />
                <PwValidation>{errors?.newPassword?.message}</PwValidation>
                <PwContent>
                  영문, 숫자, 특수문자 각 1개 이상을 포함한 8자리 이상
                </PwContent>
              </NewInputContainer>

              <CheckPwInputContainer>
                <StBasicInput
                  focusBorderColor="#EC0000"
                  borderColor="#ADADAD"
                  type="password"
                  placeholder="비밀번호를 확인해주세요."
                  {...register("confirmPassword", {
                    required: "필수입력 항목입니다.",
                    validate: {
                      check: (value) => {
                        if (getValues("newPassword") !== value) {
                          return "* 비밀번호가 일치하지 않습니다.";
                        }
                      },
                    },
                  })}
                />
                <PwValidation>{errors?.confirmPassword?.message}</PwValidation>
              </CheckPwInputContainer>
            </SetPwInputContainer>
          </CheckPwContainer>
          <AddressLabelContainer>
            <AddressLabel>주거래지역</AddressLabel>
            <CurrentAddress>서울시 강남구</CurrentAddress>
          </AddressLabelContainer>
          <AddressContainer>
            <KakaoApi
              address={address}
              setAddress={setAddress}
              openPostcode={openPostcode}
              setOpenPostcode={setOpenPostcode}
            />
          </AddressContainer>
          <AddContent>
            입력된 주소는 나의 주거래 지역으로 표시됩니다.
          </AddContent>
        </EditProfileForm>
        <AssignButtonContainer>
          <StBasicButton
            buttonColor="#D9D9D9;"
            type="submit"
            onClick={handleSubmit(async (data: EditForm) => {
              const userId = "";
              const newForm = {
                nickname: data.nickname,
                password: data.newPassword,
                location: data.address,
                userImg: data.uploadImage,
              };
              try {
                const res = await patchProfileEditApi(userId, newForm);
                if (res.status === 201) {
                  console.log("개인정보수정완료", res);
                  navigate("/login");
                }
              } catch (error) {
                console.log(error);
              }
            })}
          >
            변경저장
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
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
  font-family: "Lemon/Milk", sans-serif;
  /* margin-bottom: 30px; */
`;
const SubTitle = styled.div`
  font-size: 32px;
  margin-top: 16px;
  margin-bottom: 16px;
  font-family: Pretendard;
`;
const EditProfileForm = styled.form`
  /* border: 1px solid black; */
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  width: 100%;
  height: 1135px;
  margin: auto;
`;
const ProfileImageContainer = styled.div`
  /* border: 3px solid green; */
`;
const EmailContainer = styled.div`
  /* border: 3px solid green; */
  display: flex;
  align-items: center;
  margin-top: 33px;
  margin-bottom: 33px;
`;
const Label = styled.div`
  /* border: 1px solid red; */
  font-size: 20px;
  font-family: Pretendard;
  width: 150px;
  font-weight: 700;
  display: flex;
  margin-right: 70px;
`;
const Email = styled.div`
  /* border: 1px solid red; */
  font-family: Pretendard;
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
  width: 150px;
  font-weight: 700;
  /* border: 1px solid red; */
  margin-right: 70px;
  font-family: Pretendard;
`;
const NickNameInputContainer = styled.div`
  width: 656px;
`;
const Content = styled.div`
  /* border: 1px solid blue; */
  font-family: Pretendard;
  width: 465px;
  height: 24px;
  margin-left: 220px;
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
  margin-bottom: 30px;
`;
const CheckPwContainer = styled.div`
  /* border: 3px solid green; */
  border-bottom: 1px solid gray;
  display: flex;

  /* align-items: center; */
  /* margin-bottom: 30px; */
`;
const PwValidation = styled.div`
  color: red;
  margin-top: 10px;

  font-size: 16px;
`;

const PwContent = styled.div`
  font-family: Pretendard;
  margin-bottom: 30px;
  color: #808080;
  font-size: 16px;
  font-weight: 400;
`;

const CurrentAddress = styled.div`
  /* border: 1px solid red; */
  font-family: Pretendard;

  font-size: 16px;
`;
const AddressLabelContainer = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  margin-top: 30px;
`;
const AddressLabel = styled.label`
  /* border: 1px solid red; */
  width: 150px;
  height: 33px;
  font-size: 20px;
  font-family: Pretendard;
  font-weight: bold;
  margin-right: 70px;
`;
const AddressContainer = styled.div`
  /* border: 3px solid green; */
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding-left: 220px;
  padding-right: 250px;
`;
const AddContent = styled.div`
  /* border: 1px solid red; */
  font-family: Pretendard;
  margin: 10px 0px 40px 220px;
  color: gray;
`;

const AssignButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
  padding: 20px 0px 20px 0px;
`;

export default EditProfilePage;
