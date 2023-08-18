import React from "react";
import { styled } from "styled-components";
import leftArrow from "../../assets/images/LeftArrow.svg";
import rightArrow from "../../assets/images/RightArrow.svg";
import SlideContent from "./SlideContent";
import mascotImage from "../../assets/images/howtomascot.svg";

const HowToTrade = () => {
  return (
    <HowToTradeContainer>
      <MascotImage src={mascotImage} />
      <TitleContainer>
        <Title>HOW TO TRADE SAFELY?</Title>
        <SubTitleContainer>
          <SubTitle>안전한 물물교환을 위한 4단계!</SubTitle>
          <div>
            <LeftSlideBtn src={leftArrow} />
            <RightSlideBtn src={rightArrow} />
          </div>
        </SubTitleContainer>
      </TitleContainer>
      <SlideContent />
    </HowToTradeContainer>
  );
};

const HowToTradeContainer = styled.div`
  width: 100%;
  height: 482px;
  background: var(--orange-orange-100, #ec8d49);
  padding-top: 60px;
  margin-bottom: 303px;
  position: relative;
`;

const MascotImage = styled.img`
  width: 25%;
  position: absolute;
  bottom: 0;
  left: 70px;
`;

const TitleContainer = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  margin-bottom: 40px;
`;
const Title = styled.div`
  color: var(--black-white-white, #fcfcfc);
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 44px */
  margin-bottom: 16px;
`;

const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SubTitle = styled.div`
  color: var(--black-white-gray-10, #efefef);
  /* KOR/Kor R 18 */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
`;

const LeftSlideBtn = styled.img`
  width: 36px;
  margin-right: 80px;
  cursor: pointer;
`;
const RightSlideBtn = styled.img`
  width: 36px;
  cursor: pointer;
`;
export default HowToTrade;
