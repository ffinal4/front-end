import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components';
import ArrowLeft from '../../assets/images/arrowleft.png'
import ArrowRight from '../../assets/images/arrowright.png'
import Pocket from '../../assets/images/pocket.png'
import DetailContent from './DetailContent';

const AucDetailImage = ({ data } : any) => {

    const imagesArr = data.data.info.goodsResponseDto.images;
  
    const divRef = useRef<HTMLDivElement>(null);
    const [currentImg, setCurrentImg] = useState<number>(0);
    const imageWidth: number = 464;
    const SlideRange: number = currentImg * imageWidth;
  
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
            <SlideBtnWrapper>
              <SlideButton onClick={moveToPrevBtn}>
                <img src={ArrowLeft} alt=''/>
              </SlideButton>
              <SlideButton onClick={moveToNextBtn}>
                <img src={ArrowRight} alt=''/>
              </SlideButton>
            </SlideBtnWrapper>
            <SlideWrapper ref={divRef}>
              {imagesArr.map((item : string) => {
                return <ImageBox src={item}/>
              })}
            </SlideWrapper>
            <SlidePageBarWrapper>
              {imagesArr.map((item : string) =>
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
  
  // const EmptyBox = styled.div<{ src: string }>`
  //     width: 100%;
  //     height: 100%;
  //     background-color: #D9D9D9;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  // `;
  
  const SlideWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
  `;
  
  const ImageBox = styled.div<{ src : string }>`
    min-width: 464px;
    height: 464px;
    background-image: ${(props) => `url(${props.src})`};
    background-size: cover;
  `;
  
  const ImageOutContainer = styled.div`
    min-width: 464px;
    height: 464px;
    border: 4px solid;
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
      z-index: 200;
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
  `;
  
  const SlidePageBar = styled.div<{ backgdcolor: string }>`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${(props) => props.backgdcolor};
    opacity: 0.8;
  `;

export default AucDetailImage;