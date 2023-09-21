import React from "react";
import { styled } from "styled-components";
import { StBasicButton } from "../../styles/BasicButton";
import samllPocketImage from "../../assets/images/smallPocket.svg";
import MasCotImage from "../../assets/images/mascot1.svg";
import { StTitle } from "../../styles/TitleFont";
import bannerBackground from "../../assets/images/bannerImage.png";
import bannerImage from "../../assets/images/bannerbackgroud.png";
import EmptyBanner from "../../assets/images/emptybanner.png"
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <BannerContainer>
      <FirstBg background={bannerBackground}>
        <ContentContainer src={bannerImage}>
          <MainStBasicButton
            buttonColor="#FFCA64"
            onClick={() => {
              navigate("/upload");
            }}
          >
            물건 등록하기
          </MainStBasicButton>
        </ContentContainer>
      </FirstBg>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  width: 100%;
  padding-top: 120px;
  position: relative;
  margin-bottom: 200px;
`;

const FirstBg = styled.div<{ background: string }>`
  width: 100%;
  height: 508px;
  background-size: 100% 508px;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.background});

  @media screen and (max-width: 1136px) {
    padding: 0 20px 0 20px;
  }
  @media screen and (max-width: 375px) {
    padding: 0px;
    height: 320px;
    background-image: url(${EmptyBanner});
  }
`;

const ContentContainer = styled.div<{ src : string }>`
  margin: 0 auto;
  max-width: 1023px;
  height: 513px;
  padding-top: 400px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: 1023px 513px;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1023px) {
    width: 100%;
    background-size: 100%;
    padding-top: 300px;
  }
  @media screen and (max-width: 375px) {
    width: 375px;
    height: 250px;
    background-size: 375px 250px;
    padding-top: 200px;
  }
`;

const MainStBasicButton = styled(StBasicButton)`
  border: 2px solid var(--black-white-black, #222020);
  font-size: 16px;
  padding: 10px 0 10px 0;
  font-style: normal;
  font-weight: 700;
  box-shadow: 1px 2px 5px 0px rgba(34, 32, 32, 0.1);
  line-height: 150%; /* 24px */
  color: #222020;

  @media screen and (max-width: 375px) {
    width: 80px;
    height: 30px;
    font-size: 10px;
    font-weight: 600;
    line-height: 140%;
    padding: 0px;
  }
`;

export default Banner;
