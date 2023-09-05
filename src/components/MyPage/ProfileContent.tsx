import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Pocket from "./Pocket";
import Setting from "../../assets/icon/setting.png";
import { useNavigate } from "react-router";
import Defaultprofile from "../../assets/images/defaultprofile.png";
import { useRecoilState } from "recoil";
import { userEmail } from "../../store/userEmail";

const ProfileContent = ({ data }: any) => {
  const [email, setEmail] = useRecoilState(userEmail);
  const navigate = useNavigate();

  const onclickAddEmailHandler = () => {
    setEmail(data.data.info.email);
    navigate("/editprofile");
  };

  return (
    <LeftContainer>
      <LeftContentContainer>
        <ImageContainer
          src={data.data.info.image === null ? Defaultprofile : data.data.info.image}
        />
        <ContentInBox>
          <ContentLine>
            <TypeContainer>이메일(아이디)</TypeContainer>
            <TextContainer>{data.data.info.email}</TextContainer>
          </ContentLine>
          <ContentLine>
            <TypeContainer>닉네임</TypeContainer>
            <TextContainer>{data.data.info.nickname}</TextContainer>
          </ContentLine>
          <ContentLine>
            <TypeContainer>주거래지역</TypeContainer>
            <TextContainer>{data.data.info.location}</TextContainer>
          </ContentLine>
        </ContentInBox>
        <ButtonBox>
          <Button onClick={onclickAddEmailHandler}>프로필수정</Button>
          <Button style={{width: "93px"}} onClick={onclickAddEmailHandler}>비밀번호변경</Button>
        </ButtonBox>
      </LeftContentContainer>
    </LeftContainer>
  );
};

const LeftContainer = styled.div`
  width: 944px;
  height: 204px;

  @media screen and (max-width: 1136px) {
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  font-family: "Lemon/Milk", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  padding: 0px 0px 10px 0px;
`;

const LeftContentContainer = styled.div`
  display: flex;
  height: 204px;
  align-items: center;
  padding: 30px 20px 30px 40px;
  border-top: 2px solid #222020;
  border-left: 2px solid #222020;
  border-right: 2px solid #222020;
  border-radius: 5px 5px 0px 0px;
  position: relative;
  background-color: #fcfcfc;

  @media screen and (max-width: 1136px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div<{ src: string }>`
  min-width: 113px;
  height: 113px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-size: cover;
  background-image: ${(props) => `url(${props.src})`};
`;

const ContentInBox = styled.div`
  display: grid;
  gap: 16px;
  padding: 0px 0px 0px 40px;
  width: 80%;
  
  @media screen and (max-width: 1136px) {
    width: 100%;
  }
`;

const ContentLine = styled.div`
  display: flex;
  align-items: center;
`;

const TypeContainer = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  width: 192px;

  @media screen and (max-width: 1144px) {
    width: 130px;
  }
`;

const TextContainer = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
`;

const ButtonBox = styled.div`
  top: 20px;
  right: 20px;
  position: absolute;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 81px;
  height: 32px;
  color: #39373A;
  border-radius: 5px;
  background-color: #EFEFEF;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  line-height: 140%;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
  }
`;

export default ProfileContent;
