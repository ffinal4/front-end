import React from 'react'
import { styled } from 'styled-components';
import Image from '../../assets/images/pocket.png'

const PocketContent = () => {
  return (
    <RightContainer>
      <TitleContainer>MY POCKET</TitleContainer>
      <RightContentContainer>
        <RightImgWrapper>
          <ImageCard src={Image} />
          <ImageCard src={Image} />
          <ImageCard src={Image} />
          <ImageCard src={Image} />
          <ImageCard src={Image} />
          <ImageCard src={Image} />
        </RightImgWrapper>
      </RightContentContainer>
    </RightContainer>
  )
};

const RightContainer = styled.div`
  width: 368px;
`;

const TitleContainer = styled.div`
  width: 100%;
  font-family: "Lemon/Milk", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  padding: 0px 0px 10px 0px;
`;

const RightContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 204px;
  align-items: center;
  padding: 17px 20px 16px 20px;
  border: 1px solid #000;
  overflow: hidden;
`;

const RightImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

const ImageCard = styled.div<{ src: string }>`
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.src});
  background-color: #D9D9D9;
  background-size: cover;
  cursor: pointer;
`;

export default PocketContent;