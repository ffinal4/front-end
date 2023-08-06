import React, { useEffect, useRef, useState } from 'react'
import { styled } from "styled-components";
import Image from '../../assets/images/pocket.png'
import Cute from '../../assets/images/ppapparo.jpg'
import Song from '../../assets/images/song.jpg'
import DetailInfo from './DetailInfo';

const DetailContainer = () => {

  const divRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState<number>(0);
  const imageWidth: number = 464;
  const SlideRange: number = currentImg * imageWidth;

  const slidePageBar : number[] = [1, 2, 3];

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.transition = "all 0.5s ease-in-out";
      divRef.current.style.transform = `translateX(-${SlideRange}px)`;
    }
  }, [SlideRange]);

  const moveToNextBtn = () => {
    if (currentImg === 2) return;
    setCurrentImg(currentImg + 1);
  };

  const moveToPrevBtn = () => {
    if (currentImg === 0) return;
    setCurrentImg(currentImg - 1);
  };

  return (
    <LayoutContainer>
      <ImageOutContainer>
        <SlideBtnWrapper>
          <SlideButton onClick={moveToPrevBtn}>◀</SlideButton>
          <SlideButton onClick={moveToNextBtn}>▶</SlideButton>
        </SlideBtnWrapper>
        <SlideWrapper ref={divRef}>
          <ImageBox src={Image}/>
          <ImageBox src={Cute}/>
          <ImageBox src={Song}/>
          {/* <EmptyBox src={Image}>사진등록</EmptyBox> */}
        </SlideWrapper>
        <SlidePageBarWrapper>
          {slidePageBar.map((item) =>
            (currentImg + 1 === item)
            ? <SlidePageBar height='10px' backgdcolor='#7D7D7D'></SlidePageBar>
            : <SlidePageBar height='8px' backgdcolor='#c7c7c7'></SlidePageBar>
          )}
        </SlidePageBarWrapper>
      </ImageOutContainer>
      <DetailInfo />
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
    padding: 60px 0px 87px 0px;
    display: flex;
    gap: 112px;
    width: 100%;
    @media screen and (max-width: 834px) {
      display: grid;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
`;

const EmptyBox = styled.div<{ src: string }>`
    width: 100%;
    height: 100%;
    background-color: #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SlideWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ImageBox = styled.img`
  width: 464px;
  height: 464px;
`;

const ImageOutContainer = styled.div`
  width: 464px;
  height: 464px;
  border: 4px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 834px) {
    margin: 0px;
  }
`;

const SlideBtnWrapper = styled.div`
    width: 464px;
    display: flex;
    position: absolute;
    justify-content: space-between;
    z-index: 200;
`;

const SlideButton = styled.div`
    width: 42px;
    height: 42px;
    background-color: #969696;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    z-index: 200;
    opacity: 0.2;
    box-shadow: 2px 2px 15px 0px #6e6e6e;
    cursor: pointer;

    &:hover {
        background-color: #b3b3b3;
        opacity: 0.7;  
    }
`;

const SlidePageBarWrapper = styled.div`
  display: flex;
  align-items: end;
  position: absolute;
  bottom: 20px;
  gap: 8px;
`;

const SlidePageBar = styled.div<{ height: string, backgdcolor: string }>`
  width: 24px;
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgdcolor};
  opacity: 0.4;
`;

export default DetailContainer;