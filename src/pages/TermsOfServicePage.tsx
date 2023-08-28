import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import firstuse from "../assets/images/firstuse.png";
import seconduse from "../assets/images/seconduse.png";
import thirduse from "../assets/images/thirduse.png";
import fouruse from "../assets/images/fouruse.png";
import fiveuse from "../assets/images/fiveuse.png";
import arrow from "../assets/icon/peeppoarrow.png";
import leftarrow from "../assets/icon/leftarrow.png";

const TermsOfServicePage = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState<number>(0);
  const imageWidth: number = 944;
  const slideRange: number = currentImg * imageWidth;

  const [filterTap, setFilterTap] = useState({
    peeppoTap: true,
    auctionTap: false,
    ratingTap: false,
  });
  const { peeppoTap, auctionTap, ratingTap } = filterTap;

  const auctionServiceOnclick = () => {
    setFilterTap({
      peeppoTap: false,
      auctionTap: true,
      ratingTap: false,
    });
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${slideRange}px)`;
    }
  }, [slideRange]);

  const moveToNextBtn = () => {
    if (currentImg === 4) return;
    setCurrentImg(currentImg + 1);
  };

  const moveToPrevBtn = () => {
    if (currentImg === 0) return;
    setCurrentImg(currentImg - 1);
  };

  return (
    <LayoutContainer>
      <PageLayout>
        <TabContainer>
          <PeepoServiceUse>핍포 알아보기</PeepoServiceUse>
          <AuctionServiceUse onClick={auctionServiceOnclick}>
            포켓경매
          </AuctionServiceUse>
          <RatingServiceUse>레이팅</RatingServiceUse>
        </TabContainer>
        <PeepoContainer>
          <ButtonImg
            src={leftarrow}
            style={{ opacity: currentImg === 0 ? "0" : "1" }}
            onClick={moveToPrevBtn}
          />
          <Wrapper>
            <SlideWrapper ref={slideRef}>
              <Img src={firstuse} alt="" />
              <Img src={seconduse} alt="" />
              <Img src={thirduse} alt="" />
              <Img src={fouruse} alt="" />
              <Img src={fiveuse} alt="" />
            </SlideWrapper>
          </Wrapper>
          <ButtonImg src={arrow} onClick={moveToNextBtn} />
        </PeepoContainer>
      </PageLayout>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 220px 0px 190px 0px;
  background-color: #fcf6e9;
`;

const PageLayout = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  width: 944px;
  overflow: hidden;
`;

const SlideWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const TabContainer = styled.div`
  display: flex;
`;

const PeepoServiceUse = styled.div`
  cursor: pointer;
  border: 2px solid black;
  border-bottom: 1px solid white;
  width: 176px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid white;
  border-radius: 5px 5px 0px 0px;
  background-color: white;
  font-family: Pretendard;
`;

const AuctionServiceUse = styled.div`
  width: 176px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  border-bottom: 2px solid #efefef;
  border-radius: 5px 5px 0px 0px;
  font-family: Pretendard;
  cursor: pointer;
`;
const RatingServiceUse = styled.div`
  width: 176px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  border-bottom: 2px solid #efefef;
  border-radius: 5px 5px 0px 0px;
  font-family: Pretendard;
  cursor: pointer;
`;
const PeepoContainer = styled.div`
  width: 1136px;
  height: 719px;
  border: 2px solid black;
  border-radius: 0px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Img = styled.img`
  width: 944px;
`;

const ButtonImg = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;
export default TermsOfServicePage;
