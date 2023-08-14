import React from "react";
import { styled } from "styled-components";
import { StBasicButton } from "../../styles/BasicButton";
import samllPocketImage from "../../assets/images/smallPocket.svg";
import MasCotImage from "../../assets/images/mascot1.svg";
import { StTitle } from "../../styles/TitleFont";

const Banner = () => {
  return (
    <BannerContainer>
      <FirstBg>
        <ContentContainer>
          <StTitle marginBottom={"20px"} textAlign="left">
            LET’s peeping pockets!
          </StTitle>
          <ExplainContainer>
            <Explain>혹시 처치 곤란이었던 물건이 있지는 않으신가요?</Explain>
            <Explain> 지금 핍포에서 내가 필요한 물건으로 교환해보세요!</Explain>
          </ExplainContainer>

          <MainStBasicButton buttonColor="#FCFCFC">핍포 알아보기</MainStBasicButton>
          <SmallPocketImage src={samllPocketImage} />
          <MascotImage src={MasCotImage} />
        </ContentContainer>
      </FirstBg>
      <SecondBg />
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  width: 100%;
  padding-top: 140px;
  position: relative;
  margin-bottom: 200px;
`;

const FirstBg = styled.div`
  width: 100%;
  height: 422px;
  background-color: #ffca64;
  @media screen and (max-width: 1136px) {
    padding: 0 20px 0 20px;
  }
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1136px;
  padding-top: 124px;
`;

const ExplainContainer = styled.div`
  margin-bottom: 40px;
`;

const Explain = styled.div`
  font-family: "Pretendard";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
`;
const SecondBg = styled.div`
  width: 0;
  height: 0;
  border-top: 86px solid #ffca64;
  border-right: 50vw solid transparent;
  border-left: 50vw solid transparent;
`;

const MainStBasicButton = styled(StBasicButton)`
  border: 2px solid var(--black-white-black, #222020);
  font-size: 16px;
  padding: 10px 0 10px 0;
  font-style: normal;
  font-weight: 700;
  box-shadow: 1px 2px 5px 0px rgba(34, 32, 32, 0.1);
  line-height: 150%; /* 24px */
`;

const SmallPocketImage = styled.img`
  width: 100px;
  position: absolute;
  top: 552px;
`;

const MascotImage = styled.img`
  width: 312px;
  position: absolute;
  top: 223px;
  right: 20%;
  @media screen and (max-width: 1000px) {
    width: 200px;
    top: 370px;
    right: 10%;
  }
  @media screen and (max-width: 600px) {
    top: 450px;
    width: 150px;
    right: 0;
  }
`;
export default Banner;
