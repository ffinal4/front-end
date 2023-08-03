import React from 'react'
import { styled } from "styled-components";
import Image from '../../assets/images/pocket.png'
import DetailInfo from './DetailInfo';

const DetailContainer = () => {
  return (
    <LayoutContainer>
      <ImageOutContainer>
        <SlideBtnWrapper>
          <SlideButton>◀</SlideButton>
          <SlideButton>▶</SlideButton>
        </SlideBtnWrapper>
        <SlidePageBarWrapper>
          <SlidePageBar height='10px' backgdcolor='#7D7D7D'></SlidePageBar>
          <SlidePageBar height='8px' backgdcolor='#c7c7c7'></SlidePageBar>
          <SlidePageBar height='8px' backgdcolor='#c7c7c7'></SlidePageBar>
        </SlidePageBarWrapper>
        <ImageBox src={Image}>사진등록</ImageBox>
      </ImageOutContainer>
      <DetailInfo />
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
    padding: 60px 0px 87px 0px;
    display: flex;
    width: 100%;
    @media screen and (max-width: 834px) {
      display: grid;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
`;

const ImageBox = styled.div<{ src: string }>`
    width: 100%;
    height: 100%;
    background-image: ${(props) => `url(${props.src})`};
    background-size: cover;
    background-color: #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageOutContainer = styled.div`
  width: 464px;
  height: 464px;
  border: 4px solid;
  margin: 0px 112px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 834px) {
    margin: 0px;
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