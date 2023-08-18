import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components';
import ArrowLeft from '../../assets/images/arrowleft.png'
import ArrowRight from '../../assets/images/arrowright.png'
import RedTimer from '../../assets/icon/redtimer.png'
import DetailContent from './DetailContent';

const AucDetailImage = ({ data }: any) => {

  const imagesArr = data.data.info.goodsResponseDto.images;
  const newLeftTime = data.data.info.leftTime;
  console.log("newLeftTime", newLeftTime);

  const [bidTimeSeconds, setBidTimeSeconds] = useState<number>(newLeftTime.seconds);
  const [bidTimeMinutes, setBidTimeMinutes] = useState<number>(newLeftTime.minutes);
  const [bidTimeHours, setBidTimeHours] = useState<number>(newLeftTime.hours);
  const divRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState<number>(0);
  const imageWidth: number = 464;
  const SlideRange: number = currentImg * imageWidth;

  useEffect(() => {
    const interVal = setInterval(() => {
      if (newLeftTime.days > 0 || bidTimeHours > 0 || bidTimeMinutes > 0 || bidTimeSeconds > 0) {
        if (bidTimeSeconds > 0) {
          setBidTimeSeconds((seconds) => (seconds - 1));
        } else {
          setBidTimeMinutes((minutes) => (minutes - 1));
          setBidTimeSeconds((seconds) => (seconds + 59));
        };
        if (bidTimeSeconds === 0 && bidTimeMinutes === 0) {
          setBidTimeMinutes((minutes) => (minutes + 59));
          setBidTimeSeconds((seconds) => (seconds + 59));
          setBidTimeHours((hours) => (hours - 1));
        };
      };
    }, 1000);
    if (newLeftTime.days <= 0 && newLeftTime.hours <= 0 && bidTimeMinutes <= 0 && bidTimeSeconds <= 0) {
      clearInterval(interVal);
    };
    return () => clearInterval(interVal);
  }, [bidTimeSeconds]);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.transition = "all 0.5s ease-in-out";
      divRef.current.style.transform = `translateX(-${SlideRange}px)`;
    }
  }, [SlideRange]);

  const moveToNextBtn = () => {
    if (currentImg === (imagesArr.length - 1)) return;
    setCurrentImg(currentImg + 1);
  };

  const moveToPrevBtn = () => {
    if (currentImg === 0) return;
    setCurrentImg(currentImg - 1);
  };

  return (
    <LayoutContainer>
      <ImageOutContainer>
          {(newLeftTime.days <= 0
            && bidTimeHours <= 0
            && bidTimeMinutes <= 0
            && bidTimeSeconds <= 0)
            ? <FinishContainer>
              <FinishText>경매종료</FinishText>
            </FinishContainer>
            : <TimerContainer>
              <BidTimer src={RedTimer}/>
              <TimerText>
                마감까지 00 : 0{bidTimeHours} : {(bidTimeMinutes < 10) ? `0${bidTimeMinutes}` : bidTimeMinutes} : {(bidTimeSeconds < 10) ? `0${bidTimeSeconds}` : bidTimeSeconds}
              </TimerText>
            </TimerContainer>
          }
        <SlideBtnWrapper>
          <SlideButton onClick={moveToPrevBtn}>
            <img src={ArrowLeft} alt='' />
          </SlideButton>
          <SlideButton onClick={moveToNextBtn}>
            <img src={ArrowRight} alt='' />
          </SlideButton>
        </SlideBtnWrapper>
        <SlideWrapper ref={divRef}>
          {imagesArr.map((item: string) => {
            return <ImageBox src={item} />
          })}
        </SlideWrapper>
        <SlidePageBarWrapper>
          {imagesArr.map((item: string) =>
            (currentImg === imagesArr.indexOf(item))
              ? <SlidePageBar backgdcolor='#fff'></SlidePageBar>
              : <SlidePageBar backgdcolor='#9e9e9e'></SlidePageBar>
          )}
        </SlidePageBarWrapper>
      </ImageOutContainer>
      <DetailContent data={data} />
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
      padding: 60px 0px 87px 0px;
      display: flex;
      gap: 112px;
      width: 100%;
      @media screen and (max-width: 1136px) {
        display: grid;
        justify-content: center;
        align-items: center;
        gap: 20px;
      }
  `;

const SlideWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `;

const ImageBox = styled.div<{ src: string }>`
    min-width: 464px;
    height: 464px;
    background-image: ${(props) => `url(${props.src})`};
    background-size: cover;
  `;

const ImageOutContainer = styled.div`
    min-width: 464px;
    height: 464px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  
    @media screen and (max-width: 1136px) {
      margin: 0px;
      width: 464px;
    }
  `;

const SlideBtnWrapper = styled.div`
      width: 100%;
      display: flex;
      position: absolute;
      justify-content: space-between;
      z-index: 1000;
  `;

const SlideButton = styled.div`
      width: 48px;
      height: 48px;
      background-color: #222020;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      z-index: 200;
      opacity: 0.2;
      cursor: pointer;
  
      &:hover {
          background-color: #b3b3b3;
          opacity: 0.7;  
      }
  `;

const SlidePageBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    position: absolute;
    bottom: 20px;
    gap: 16px;
    z-index: 999;
  `;

const SlidePageBar = styled.div<{ backgdcolor: string }>`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${(props) => props.backgdcolor};
    opacity: 0.8;
  `;

const TimerContainer = styled.div`
  width: 100%;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.80);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 12px 10px 12px 10px;
  display: flex;
  gap: 10px;
`;

const BidTimer = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const TimerText = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  color: #E32E2E;
`;

const FinishContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 464px;
  height: 464px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.70) 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const FinishText = styled.div`
  color: #FFF;
  font-family: "Pretendard";
  font-size: 32px;
  font-weight: 800;
  line-height: 150%;
`;

export default AucDetailImage;