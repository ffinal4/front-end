import React from "react";
import { styled } from "styled-components";

const UserInfo = ({ data }: any) => {
  return (
    <UserInfoContainer>
      <UserImage />
      <InfoContainer>
        <UserName>{data.info.nickName}</UserName>
        <UserLocation>{data.info.location}</UserLocation>
      </InfoContainer>
    </UserInfoContainer>
  );
};

const UserInfoContainer = styled.div`
  width: 464px;
  height: 174px;
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  display: flex;
  padding: 31px 40px;
`;

const UserImage = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 112px;
  background-color: black;
  margin-right: 40px;
`;
const UserName = styled.div`
  color: #000;
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  margin-bottom: 6px;
`;
const UserLocation = styled.div`
  color: #000;
  /* KOR/Kor R 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const InfoContainer = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default UserInfo;
