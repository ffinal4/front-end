import React, { useState, useRef } from "react";
import { styled } from "styled-components";

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

  return (
    <LineContainer>
      <RequiredText>프로필 사진</RequiredText>
      <InputStyleWrapper>
        {uploadImage ? (
          <UploadImage src={uploadImage} alt="Uploaded" />
        ) : (
          <InputLabel htmlFor="files">
            <InputStyleBox />
            <Text style={{ color: "#717171" }}>이미지등록</Text>
            <UploadInputBox
              type="file"
              accept="image/jpg, image/jpeg, image/png"
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
      <TextWrapper>
        <Text>* 상품 이미지는 112X112에 최적화되어 있습니다.</Text>
        <Text>- 이미지는 프로필 등록 시 원형으로 잘려서 등록됩니다.</Text>
        <Text>
          - 큰 이미지일 경우 이미지가 깨지는 경우가 발생할 수 있습니다.
        </Text>
      </TextWrapper>
    </LineContainer>
  );
};

const LineContainer = styled.div`
  display: flex;
  padding: 40px 0px 31px 0px;
  border-bottom: 1px solid gray;
`;

const RequiredText = styled.div`
  /* border: 1px solid red; */
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  margin-right: 70px;
  width: 150px;
`;

const InputLabel = styled.label`
  width: 272px;
  height: 272px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 16px 0px 0px;
  cursor: pointer;
  overflow: hidden;
`;

const InputStyleWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
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
  /* border: 1px solid black; */
  /* margin: 22px 0px 0px 0px; */
  padding-top: 190px;
`;

export default ProfileImageUpload;
