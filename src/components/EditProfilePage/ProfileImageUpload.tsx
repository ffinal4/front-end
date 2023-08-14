import React, { useState, useRef } from "react";
import { styled } from "styled-components";
import removeIcon from "../../assets/images/remove.png";

const ProfileImageUpload = (props: any) => {
  const { uploadImage, setUploadImage } = props;
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadImage(imageUrl);
    }
  };

  const onClickRemoveHandler = () => {
    setUploadImage("");
  };

  return (
    <LineContainer>
      <RequiredText>프로필 사진</RequiredText>
      <InputStyleWrapper>
        {uploadImage ? (
          <UploadImageContainer>
            <UploadImage src={uploadImage} alt="Uploaded" />
          </UploadImageContainer>
        ) : (
          <InputLabel htmlFor="files">
            <InputStyleBox />
            <Text style={{ color: "#717171" }}>이미지등록</Text>
            <UploadInputBox
              type="file"
              accept="image/jpg, image/jpeg, image/png, image/gif"
              id="files"
              ref={fileInputRef}
              style={{ display: "none" }}
              multiple
              onChange={handleImageUpload}
            />
            <button
              onClick={() => {
                fileInputRef.current?.click();
              }}
            />
          </InputLabel>
        )}
      </InputStyleWrapper>
      <RightContainer>
        {uploadImage && (
          <RemoveBtnWrapper>
            <RemoveIcon
              src={removeIcon}
              alt=""
              onClick={onClickRemoveHandler}
            />
            등록이미지 전체 삭제
          </RemoveBtnWrapper>
        )}
        <TextWrapper>
          <Text>* 상품 이미지는 112X112에 최적화되어 있습니다.</Text>
          <Text>- 이미지는 프로필 등록 시 원형으로 잘려서 등록됩니다.</Text>
          <Text>
            - 큰 이미지일 경우 이미지가 깨지는 경우가 발생할 수 있습니다.
          </Text>
        </TextWrapper>
      </RightContainer>
    </LineContainer>
  );
};
const RightContainer = styled.div`
  width: 100%;
`;

const LineContainer = styled.div`
  display: flex;
  padding: 40px 0px 31px 0px;
  border-bottom: 1px solid gray;
`;

const RequiredText = styled.div`
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  margin-right: 70px;
  min-width: 150px;
`;

const InputLabel = styled.label`
  width: 272px;
  height: 272px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
// const ProfileImageContainer = styled.div`
//   border: 1px solid red;
// `;
const InputStyleWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const RemoveBtnWrapper = styled.div`
  gap: 10px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  display: flex;
  justify-content: end;
  /* border: 1px solid red; */
  width: 100%;
  height: 24px;

  @media screen and (max-width: 1136px) {
    margin: 0px;
  }
`;

const RemoveIcon = styled.img`
  width: 24px;
  height: 24px;
  border: 3px solid #000;
  border-radius: 5px;
  opacity: 0.7;
  cursor: pointer;
`;

const UploadImageContainer = styled.div`
  min-width: 272px;
  width: 272px;
  height: 272px;
  overflow: hidden;
  cursor: pointer;
`;

const InputStyleBox = styled.div`
  width: 48px;
  height: 48px;
  margin: 0px auto 13px auto;
  background-color: #acacac;
`;

const Text = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #717171;
`;

const UploadImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const UploadInputBox = styled.input`
  display: none;
`;

const TextWrapper = styled.div`
  margin-top: 190px;
  margin-left: 16px;
`;

export default ProfileImageUpload;
