import React, { useEffect, useRef, useState } from 'react'
import { styled } from "styled-components";
import ArrowLeft from '../../assets/images/arrowleft.png'
import ArrowRight from '../../assets/images/arrowright.png'
import DetailInfo from './DetailInfo';

const DetailContainer = ({ data }: any) => {

  const arrImages: string[] = data.data.info.goodsResponseDtoList.images;

  const divRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState<number>(0);
  const imageWidth = 100;
  const SlideRange: number = currentImg * imageWidth;

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.transition = "all 0.5s ease-in-out";
      divRef.current.style.transform = `translateX(-${SlideRange}%)`;
    }
  }, [SlideRange]);

  const moveToNextBtn = () => {
    if (currentImg === (arrImages.length - 1)) return;
    setCurrentImg(currentImg + 1);
  };

  const moveToPrevBtn = () => {
    if (currentImg === 0) return;
    setCurrentImg(currentImg - 1);
  };

  const RequestStatus = () => {
    if (data.data.info.goodsResponseDtoList.goodsStatus === "TRADING") {
      return <RequestCondition>
        <GoodsCondition>
          <Circle />
          거래중
        </GoodsCondition>
      </RequestCondition>
    } else if (data.data.info.goodsResponseDtoList.goodsStatus === "SOLDOUT") {
      return <Finished>거래완료</Finished>
    } else if (data.data.info.goodsResponseDtoList.goodsStatus === "ONAUCTION"
      || data.data.info.goodsResponseDtoList.goodsStatus === "BIDDING") {
      return <RequestCondition>
        <GoodsCondition>
          <Circle style={{ backgroundColor: "#58ABF7" }} />
          경매중
        </GoodsCondition>
      </RequestCondition>
    } else {
      return
    };
  };

  return (
    <LayoutContainer>
      <ImageOutContainer>
        {RequestStatus()}
        <SlideButton
          onClick={moveToPrevBtn}
          style={{
            opacity: `${(currentImg === 0 || arrImages.length === 1) ? "0" : "0.4"}`,
            cursor: `${(currentImg === 0 || arrImages.length === 1) ? "default" : "pointer"}`,
            left: "0"
          }}>
          <img src={ArrowLeft} alt='' />
        </SlideButton>
        <SlideButton
          onClick={moveToNextBtn}
          style={{
            opacity: `${(arrImages.length === 1 || currentImg === (arrImages.length - 1)) ? "0" : "0.4"}`,
            cursor: `${(arrImages.length === 1 || currentImg === (arrImages.length - 1)) ? "default" : "pointer"}`,
            right: "2px"
          }}>
          <img src={ArrowRight} alt='' />
        </SlideButton>
        <SlideWrapper ref={divRef}>
          {arrImages.map((item) => <ImageBox src={item} />)}
        </SlideWrapper>
        <SlidePageBarWrapper>
          {arrImages.map((item) =>
            (currentImg === arrImages.indexOf(item))
              ? <SlidePageBar backgroundcolor='#ffffffce'></SlidePageBar>
              : <SlidePageBar backgroundcolor='#9e9e9ece'></SlidePageBar>
          )}
        </SlidePageBarWrapper>
      </ImageOutContainer>
      <DetailInfo data={data} />
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
  padding: 60px 0px 87px 0px;
  display: flex;
  gap: 112px;
  width: 100%;

  @media screen and (max-width: 1136px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }

  @media screen and (max-width: 500px) {
    padding: 40px 0px 67px 0px;
  }   
`;

const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageBox = styled.div<{ src: string }>`
  min-width: 464px;
  height: 464px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  @media screen and (max-width: 500px) {
    min-width: 342px;
    height: 342px;
  }
`;

const ImageOutContainer = styled.div`
  width: 464px;
  height: 464px;
  border-radius: 10px;
  border: 1px solid #e9e9e9;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1136px) {
    width: 464px;
  }

  @media screen and (max-width: 500px) {
    width: 342px;
    height: 342px;
  }
`;

const SlideButton = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 208px;
  background-color: #222020;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 200;

  &:hover {
    background-color: #b3b3b3;
    opacity: 0.7;  
  }

  @media screen and (max-width: 500px) {
    width: 38px;
    height: 38px;
    top: 158px;
  }
`;

const SlidePageBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  position: absolute;
  bottom: 20px;
  gap: 16px;
  width: 100%;
`;

const SlidePageBar = styled.div<{ backgroundcolor: string }>`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${(props) => props.backgroundcolor};
  box-shadow: #222020 0 2px 5px 0;
`;

const RequestCondition = styled.div`
  width: 464px;
  height: 464px;
  position: absolute;
  border-radius: 10px;
  padding: 20px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.50) 13.54%, rgba(0, 0, 0, 0.20) 28.13%, rgba(0, 0, 0, 0.00) 39.06%);
  z-index: 198;

  @media screen and (max-width: 500px) {
    width: 343px;
    height: 343px;
  }
`;

const GoodsCondition = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  position: absolute;
  z-index: 199;
  color: #FCFCFC;
`;

const Circle = styled.div`
  background-color: #EC8D49;
  border-radius: 100%;
  width: 24px;
  height: 24px;
`;

const Finished = styled.div`
  width: 464px;
  height: 464px;
  border-radius: 10px;
  background-color: #00000080;
  position: absolute;
  z-index: 199;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  font-size: 32px;
  font-weight: 800;
  line-height: 150%;
  color: #FCFCFC;

  @media screen and (max-width: 500px) {
    width: 343px;
    height: 343px;
  }
`;

export default DetailContainer;