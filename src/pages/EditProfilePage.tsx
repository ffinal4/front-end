import React, { useState } from "react";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { StBasicButton } from "../styles/BasicButton";
import { useNavigate } from "react-router-dom";
import { StBasicInput } from "../styles/BasicInput";
import KakaoApi from "../components/common/KakaoApi";
import ProfileImageUpload from "../components/EditProfilePage/ProfileImageUpload";
import { patchProfileEditApi, postNicknameApi } from "../api/users";
import { useRecoilValue } from "recoil";
import { userEmail } from "../store/userEmail";

interface EditForm {
  password: string;
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
  const [uploadImage, setUploadImage] = useState<any>([]);
  const [isAvailable, setIsAvailable] = useState(false);
  const [nicknameError, setNicknameError] = useState<string | null>(null);
  const [nicknameChecked, setNicknameChecked] = useState(false);
  const myEmail = useRecoilValue(userEmail);
  const locationData = localStorage.getItem("location");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<EditForm>({ mode: "onBlur" });

  //닉네임 중복 확인 통신
  const checkNicknameAvailability = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const formData = getValues();
    const newNick = formData.nickname;
    const nickData = { nickname: newNick };
    console.log(nickData, "nick");
    try {
      const res = await postNicknameApi(nickData);
      console.log(res);
      if (res.status === 200) {
        setNicknameChecked(true);
        setIsAvailable(true);
        setNicknameError(null);
        console.log("사용가능한 닉네임 입니다.", res);
      }
    } catch (error) {
      setIsAvailable(false);
      setNicknameError("중복된 닉네임 입니다.");
      console.log("중복된 닉네임 입니다.", error);
    }
  };

  //변경사항 저장 통신
  const editprofileOnclick = handleSubmit(async (data: EditForm) => {
    const formData = new FormData();
    const request = {
      nickname: data.nickname,
      originPassword: data.currentPassword,
      password: data.newPassword,
    };
    const allRequest = {
      data: {
        ...request,
        location: address,
      },
    };

    console.log("allRequest", allRequest, "uploadImage", uploadImage);

    if (uploadImage) {
      uploadImage.forEach((blobImage: any, index: any) => {
        formData.append("image", blobImage, `image${index + 1}.jpg`);
      });
    }
    formData.append(
      "data",
      new Blob([JSON.stringify(allRequest.data)], { type: "application/json" })
    );

    formData.forEach(function (value, key) {
      console.log(key + ": " + value);
    });

    try {
      const res = await patchProfileEditApi(formData);

      if (res.status === 200) {
        console.log("개인정보수정완료", res);
        navigate("/mypage");
      }
    } catch (error) {
      console.log("개인정보수정실패", error);
    }
  });

  return (
    <div>
      <EditProfilePageContainer>
        <TitleContainer>
          <Title>
            MY ACCOUNT
            <SubTitle>개인정보 수정</SubTitle>
          </Title>
        </TitleContainer>
        <EditProfileContainer>
          <ProfileImageContainer>
            <ProfileImageUpload
              uploadImage={uploadImage}
              setUploadImage={setUploadImage}
            />
          </ProfileImageContainer>
          <EmailContainer>
            <Label>이메일(아이디)</Label>
            <Email>{myEmail}</Email>
          </EmailContainer>
          <NickNameContainer>
            <CommonLabel>닉네임</CommonLabel>
            <NickNameInputContainer>
              <StBasicInput
                focusBorderColor="#EC0000"
                borderColor="#ADADAD"
                type="text"
                placeholder="닉네임을 입력해주세요."
                {...register("nickname")}
              />
            </NickNameInputContainer>
            <StBasicButton
              buttonColor="#FDD988"
              style={{ marginLeft: "20px", border: "1px solid black" }}
              onClick={(event) => checkNicknameAvailability(event)}
            >
              중복확인
            </StBasicButton>
          </NickNameContainer>
          {nicknameError && <Content>* 중복된 닉네임입니다.</Content>}
          {isAvailable && <Content>* 사용 가능한 닉네임입니다.</Content>}
          <AddressLabelContainer>
            <AddressLabel>주거래지역</AddressLabel>
            <CurrentAddress>{locationData}</CurrentAddress>
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
            - 입력된 주소는 나의 주거래 지역으로 표시됩니다.
          </AddContent>
        </EditProfileContainer>
        <AssignButtonContainer>
          <StButton
            buttonColor={nicknameChecked ? "#FDD988" : "#D5D4D4"}
            style={{
              color: nicknameChecked ? "black" : "white",
              border: nicknameChecked ? "1px solid black" : "none",
              fontWeight: nicknameChecked ? "700" : "400",
            }}
            onClick={editprofileOnclick}
            disabled={!nicknameChecked}
          >
            변경사항 저장
          </StButton>
        </AssignButtonContainer>
      </EditProfilePageContainer>
    </div>
  );
};

const EditProfilePageContainer = styled.div``;

export const TitleContainer = styled.div`
  width: 100%;
  margin: auto;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
  font-family: "Lemon/Milk", sans-serif;
`;

export const SubTitle = styled.div`
  font-size: 32px;
  margin-top: 16px;
  margin-bottom: 16px;
  font-family: "Pretendard";
`;

const EditProfileContainer = styled.div`
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  width: 100%;
  height: 771px;
  margin: auto;
`;
const ProfileImageContainer = styled.div``;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 33px;
  margin-bottom: 33px;
`;

export const Label = styled.div`
  font-size: 20px;
  font-family: "Pretendard";
  width: 150px;
  font-weight: 700;
  display: flex;
  margin-right: 70px;
`;

const Email = styled.div`
  font-family: "Pretendard";
`;

const NickNameContainer = styled.div`
  border-top: 1px solid gray;
  padding-top: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const CommonLabel = styled.div`
  font-size: 20px;
  width: 150px;
  font-weight: 700;
  margin-right: 70px;
  font-family: "Pretendard";
`;

const NickNameInputContainer = styled.div`
  width: 464px;
`;

export const Content = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  width: 465px;
  height: 24px;
  margin-left: 220px;
  color: red;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const CurrentAddress = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
`;
const AddressLabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  border-top: 1px solid gray;
  padding-top: 30px;
`;

const AddressLabel = styled.label`
  width: 150px;
  height: 33px;
  font-size: 20px;
  font-family: "Pretendard";
  font-weight: bold;
  margin-right: 70px;
`;

const AddressContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding-left: 220px;
  padding-right: 250px;
`;

const AddContent = styled.div`
  font-family: "Pretendard";
  margin: 10px 0px 40px 220px;
  color: #39373a;
`;

export const AssignButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 60px 0px 20px 0px;
`;

export const StButton = styled(StBasicButton)`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
`;

export default EditProfilePage;
