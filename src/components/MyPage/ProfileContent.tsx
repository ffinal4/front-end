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
        <ImageWrapper>
          <ImageContainer
            src={
              data.data.info.image === null
                ? Defaultprofile
                : data.data.info.image
            }
          />
        </ImageWrapper>
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
          <HiddenLine>
            <TypeContainer>나의 포인트</TypeContainer>
            <TextContainer>{data.data.info.userPoint}p</TextContainer>
          </HiddenLine>
        </ContentInBox>
        <ButtonBox>
          <Button
            onClick={onclickAddEmailHandler}
            style={{ width: "81px" }}>프로필수정</Button>
          <Button
            onClick={() => navigate("/passwordchange")}
          >
            비밀번호변경
          </Button>
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
    height: 265px;
    display: grid;
    gap: 16px;
    justify-content: center;
    padding: 24px;
    border-bottom: 2px solid #222020;
    border-radius: 5px;
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

  @media screen and (max-width: 500px) {
    max-width: 70px;
    min-height: 70px;
  }
`;

const ContentInBox = styled.div`
  display: grid;
  gap: 16px;
  padding: 0px 0px 0px 40px;
  width: 80%;

  @media screen and (max-width: 1136px) {
    width: 100%;
    gap: 8px;
    padding: 0px;
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
    width: 107px;
    font-size: 14px;
    line-height: 140%;
  }
`;

const TextContainer = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;

  @media screen and (max-width: 1144px) {
    font-size: 14px;
    line-height: 140%;
  }
`;

const ButtonBox = styled.div`
  top: 20px;
  right: 20px;
  position: absolute;
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 1144px) {
    display: grid;
    justify-content: center;
    gap: 5px;
    top: 10px;
    right: 10px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 93px;
  height: 32px;
  color: #39373a;
  border-radius: 5px;
  background-color: #efefef;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  line-height: 140%;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
  }

  @media screen and (max-width: 1144px) {
    font-size: 12px;
    font-weight: 400;
    width: 81px;
  }
`;

const ImageWrapper = styled.div`
  @media screen and (max-width: 1144px) {
    display: flex;
    justify-content: center;
  }
`;

const HiddenLine = styled.div`
  display: none;
  align-items: center;

  @media screen and (max-width: 1144px) {
    display: flex;
  }
`;

export default ProfileContent;
