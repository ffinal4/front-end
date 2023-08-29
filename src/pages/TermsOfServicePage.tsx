import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import firstuse from "../assets/images/firstuse.png";
import seconduse from "../assets/images/seconduse.png";
import thirduse from "../assets/images/thirduse.png";
import fouruse from "../assets/images/fouruse.png";
import fiveuse from "../assets/images/fiveuse.png";
import arrow from "../assets/icon/peeppoarrow.png";
import firstauction from "../assets/images/firstauction.png";
import secondauction from "../assets/images/secondauction.png";
import thirdauction from "../assets/images/thirdauction.png";
import fourauction from "../assets/images/fourauction.png";
import fiveauction from "../assets/images/fiveauction.png";
import leftarrow from "../assets/icon/leftarrow.png";
import auctionleft from "../assets/icon/auctionleftarrow.png";
import auctionright from "../assets/icon/auctionrightarrow.png";

const TermsOfServicePage = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState<number>(0);
  const imageWidth: number = 944;
  const slideRange: number = currentImg * imageWidth;

  const [filterTap, setFilterTap] = useState({
    peeppoTap: true,
    auctionTap: false,
  });
  const { peeppoTap, auctionTap } = filterTap;

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

  const peeppoOnclick = () => {
    setFilterTap({
      peeppoTap: true,
      auctionTap: false,
    });
    setCurrentImg(0);
  };

  const auctionServiceOnclick = () => {
    setFilterTap({
      peeppoTap: false,
      auctionTap: true,
    });
    setCurrentImg(0);
  };

  return (
    <div>
      {peeppoTap === true && auctionTap === false && (
        <PeeppoLayoutContainer>
          <PageLayout>
            <TabContainer>
              <PeepoServiceUse>핍포 알아보기</PeepoServiceUse>
              <AuctionServiceUse onClick={auctionServiceOnclick}>포켓경매</AuctionServiceUse>
            </TabContainer>
            <PeeppoContainer>
              <ButtonImg src={leftarrow} style={{ opacity: currentImg === 0 ? "0" : "1" }} onClick={moveToPrevBtn} />
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
            </PeeppoContainer>
          </PageLayout>
        </PeeppoLayoutContainer>
      )}
      {peeppoTap === false && auctionTap === true && (
        <AuctionLayoutContainer>
          <PageLayout>
            <TabContainer>
              <PeepoServiceUses onClick={peeppoOnclick}>핍포 알아보기</PeepoServiceUses>
              <AuctionServiceUses>포켓경매</AuctionServiceUses>
            </TabContainer>
            <PeeppoContainer>
              <ButtonImg src={auctionleft} style={{ opacity: currentImg === 0 ? "0" : "1" }} onClick={moveToPrevBtn} />
              <Wrapper>
                <SlideWrapper ref={slideRef}>
                  <Img src={firstauction} alt="" />
                  <Img src={secondauction} alt="" />
                  <Img src={thirdauction} alt="" />
                  <Img src={fourauction} alt="" />
                  <Img src={fiveauction} alt="" />
                </SlideWrapper>
              </Wrapper>
              <ButtonImg src={auctionright} onClick={moveToNextBtn} />
            </PeeppoContainer>
          </PageLayout>
        </AuctionLayoutContainer>
      )}
    </div>
  );
};
const PeeppoLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 250px 0px 190px 0px;
  background-color: #fcf6e9;
`;

const AuctionLayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 250px 0px 190px 0px;
  background-color: #ecf4fc;
`;

const PageLayout = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
  position: relative;
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
  position: absolute;
  top: -42px;
`;

const PeepoServiceUse = styled.div`
  cursor: pointer;
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  width: 176px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0px 0px;
  background-color: white;
  /* border-bottom: 1px solid white; */
  font-family: Pretendard;
`;

const AuctionServiceUse = styled.div`
  width: 176px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  border-bottom: 2px solid black;
  border-radius: 5px 5px 0px 0px;
  font-family: Pretendard;
  cursor: pointer;
`;

const PeepoServiceUses = styled.div`
  width: 176px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  border-bottom: 2px solid black;
  border-radius: 5px 5px 0px 0px;
  font-family: Pretendard;
  cursor: pointer;
`;

const AuctionServiceUses = styled.div`
  cursor: pointer;
  border: 2px solid black;
  border-bottom: 2px solid white;
  width: 176px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0px 0px;
  background-color: white;

  font-family: Pretendard;
`;

const PeeppoContainer = styled.div`
  border: 2px solid black;
  border-radius: 0px 10px 10px 10px;
  width: 100%;
  width: 1136px;
  height: 719px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
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
