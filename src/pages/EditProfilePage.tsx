import React, { useState } from "react";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { StBasicButton } from "../styles/BasicButton";
import { useNavigate } from "react-router-dom";
import { StBasicInput } from "../styles/BasicInput";
import ProfileImageUpload from "../components/EditProfilePage/ProfileImageUpload";
import {
  getMypageApi,
  pathchProfileEditApi,
  postNicknameApi,
} from "../api/users";
import { useQuery } from "react-query";
import LoadingSpinner from "../components/common/LoadingSpinner";
import MainTradingAddress from "../components/EditProfilePage/MainTradingAddress";

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
  const location = data?.data.info.location;

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
      }
    } catch (error) {
      setIsAvailable(false);
      setNicknameError("중복된 닉네임 입니다.");
    }
  };
  const [address, setAddress] = useState(location || "");

  //변경사항 저장 통신
  const editprofileOnclick = handleSubmit(async (data: EditForm) => {
    const formData = new FormData();
    const request = {
      nickname: data.nickname || nicknameData,
    };
    const allRequest = {
      data: {
        ...request,
        location: address || location,
      },
    };

    console.log("주소, 닉네임", allRequest);
    console.log("이미지 업로드", uploadImage);

    try {
      if (uploadImage.length === 0 || uploadImage[0] === imageData) {
        formData.append("image", "");
        // formData.append('image', JSON.stringify([]));
        const imageForm = formData.get("image");
        console.log(imageForm, "확인");
      } else {
        uploadImage.forEach((blobImage: any, index: any) => {
          formData.append("image", blobImage, `image${index + 1}.jpg`);
        });
      }

      formData.append(
        "data",
        new Blob([JSON.stringify(allRequest.data)], {
          type: "application/json",
        })
      );

      formData.forEach(function (value, key) {
        console.log(key + ": " + value);
      });
      const res = await pathchProfileEditApi(formData);

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
          <MainTradingAddress
            openPostcode={openPostcode}
            setOpenPostcode={setOpenPostcode}
            address={address}
            setAddress={setAddress}
            data={data}
          />
        </EditProfileContainer>
        <AssignButtonContainer>
          <StButton
            buttonColor={"#FDD988"}
            style={{
              color: "black",
              border: "1px solid black",
              fontWeight: "700",
            }}
            onClick={editprofileOnclick}
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
