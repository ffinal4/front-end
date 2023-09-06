import React, { useState } from "react";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { StBasicButton } from "../styles/BasicButton";
import { useNavigate } from "react-router-dom";
import { StBasicInput } from "../styles/BasicInput";
import KakaoApi from "../components/common/KakaoApi";
import ProfileImageUpload from "../components/EditProfilePage/ProfileImageUpload";
import {
  getMypageApi,
  patchProfileEditApi,
  postNicknameApi,
} from "../api/users";
import { useQuery } from "react-query";
import LoadingSpinner from "../components/common/LoadingSpinner";

interface EditForm {
  nickname: string;
  uploadImage: string;
  address: string;
  data: any;
}

const EditProfilePage = () => {
  const navigate = useNavigate();
  //주소
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [nicknameError, setNicknameError] = useState<string | null>(null);
  const [nicknameChecked, setNicknameChecked] = useState(false);
  const [isNicknameEditable, setNicknameEditable] = React.useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<EditForm>({ mode: "onBlur" });

  // 개인정보 가져오기
  const { isLoading, error, data }: any = useQuery("myPageData", getMypageApi, {
    refetchOnWindowFocus: false,
  });
  console.log("개인정보수정페이지", data);

  const imageData = data?.data.info.image;
  const nicknameData = data?.data.info.nickname;
  const location =  data?.data.info.location;

  const [uploadImage, setUploadImage] = useState<any>([]);

  //닉네임 중복 확인 통신
  const checkNicknameAvailability = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const formData = getValues();
    const newNick = formData.nickname || nicknameData;
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
  const [address, setAddress] = useState(location || "");

  //변경사항 저장 통신
  const editprofileOnclick = handleSubmit(async (data: EditForm) => {
    const formData = new FormData();
    const request = {
      nickname: data.nickname,
    };
    const allRequest = {
      data: {
        ...request,
        location: address || location,
      },
  };

    console.log("이미지,주소", allRequest);
    console.log("이미지 업로드", uploadImage);
    console.log("폼데이터", formData);

    

    try {
      if (uploadImage[0]) {
        if (uploadImage[0] === undefined
          || uploadImage[0] === imageData) {
          //   setUploadImage([imageData]);
          //   console.log("d", uploadImage);
          //   fetch(imageData)
          //     .then(response => response.blob())
          //     .then(blob => {
          //       console.log("성공", blob);
          //       setUploadImage([blob]);
          //       uploadImage.forEach((blobImage: any, index: any) => {
          //         formData.append("image", blobImage, `image${index + 1}.jpg`);
          //       });
          //     })
          //     .catch(error => {
          //       console.error('이미지를 가져오는 중 오류 발생: ', error);
          //       console.error('오류 유형:', error.name);
          //       console.error('오류 메시지:', error.message);
          //     });
            
          // // console.log("test", uploadImage);
        } else {
          uploadImage.forEach((blobImage: any, index: any) => {
            formData.append("image", blobImage, `image${index + 1}.jpg`);
          });
        }
      }
  
      formData.append(
        "data",
        new Blob([JSON.stringify(allRequest.data)], { type: "application/json" })
      );
  
      formData.forEach(function (value, key) {
        console.log(key + ": " + value);
      });
      const res = await patchProfileEditApi(formData);

      if (res.status === 200) {
        console.log("개인정보수정완료", res);
        navigate("/mypage");
      }
    } catch (error) {
      console.log("개인정보수정실패", error);
    }
  });

  const handleNicknameEdit = () => {
    setNicknameEditable(true);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error: {error.message}</p>;
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
              data={data}
            />
          </ProfileImageContainer>
          <EmailContainer>
            <Label>이메일(아이디)</Label>
            <Email>{data.data.info.email}</Email>
          </EmailContainer>
          <NickNameContainer>
            <CommonLabel>닉네임</CommonLabel>
            <NickNameInputContainer>
              {isNicknameEditable ? ( // 수정 가능 상태일 때
                <StBasicInput
                  focusBorderColor="#46A75B"
                  borderColor={errors.nickname ? "red" : "#ADADAD"}
                  type="text"
                  onFocus={handleNicknameEdit}
                  {...register("nickname")}
                />
              ) : (
                // 수정 불가능 상태일 때
                <StBasicInput
                  focusBorderColor="#46A75B"
                  borderColor={errors.nickname ? "red" : "#ADADAD"}
                  type="text"
                  value={data.data.info.nickname}
                  onClick={handleNicknameEdit}
                />
              )}
            </NickNameInputContainer>
            <StBasicButton
              buttonColor="#FDD988"
              style={{ marginLeft: "20px", border: "1px solid black" }}
              onClick={(event) => checkNicknameAvailability(event)}
            >
              중복확인
            </StBasicButton>
          </NickNameContainer>
          {nicknameError && (
            <Content fontcolor="red">* 중복된 닉네임입니다.</Content>
          )}
          {isAvailable && (
            <Content fontcolor="#46A75B">* 사용 가능한 닉네임입니다.</Content>
          )}
          <AddressLabelContainer>
            <AddressLabel>주거래지역</AddressLabel>
            <CurrentAddress>{data.data.info.location}</CurrentAddress>
          </AddressLabelContainer>
          <AddressContainer>
            <KakaoApi
              address={address}
              setAddress={setAddress}
              openPostcode={openPostcode}
              setOpenPostcode={setOpenPostcode}
              data={data}
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
            // disabled={!nicknameChecked}
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

export const Content = styled.div<{ fontcolor: string }>`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  width: 465px;
  height: 24px;
  margin-left: 220px;
  color: ${(props) => props.fontcolor};
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
  margin: 10px 0px 0px 220px;
  margin-bottom: 40px;
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
