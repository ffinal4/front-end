import React from "react";
import { styled } from "styled-components";
import eyeImage from "../../assets/images/eye.svg";
import userImage from "../../assets/images/defaultprofile.png";
import locationImage from "../../assets/icon/location.png";

const UserInfo = ({ data }: any) => {
  return (
    <UserInfoContainer>
      <UserImage src={userImage} />
      <NameContainer>
        <UserName>{data.info.nickName}</UserName>
        <Nim>님의 주머니를 훔쳐보는 중...</Nim>
        <ImageContainer>
          <EyeImage src={eyeImage} />
        </ImageContainer>
      </NameContainer>
      <LocationContainer>
        <LocationImage src={locationImage} />
        <UserLocation>{data.info.location}</UserLocation>
      </LocationContainer>
    </UserInfoContainer>
  );
};

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LocationImage = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 7px;
`;
const NameContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const Nim = styled.div`
  color: var(--black-white-white, #fcfcfc);
  /* WEB/KOR/Kor R 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
const EyeImage = styled.img`
  width: 18px;
  height: 15px;
`;

const ImageContainer = styled.div`
  margin-left: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserImage = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 112px;
  margin-bottom: 28px;
`;
const UserName = styled.div`
  color: var(--black-white-white, #fcfcfc);
  text-align: right;
  /* WEB/KOR/Kor B 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
`;
const UserLocation = styled.div`
  color: var(--black-white-gray-10, #efefef);
  /* WEB/KOR/Kor R 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

export default UserInfo;
