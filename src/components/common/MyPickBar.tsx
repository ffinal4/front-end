import React from 'react'
import { styled } from 'styled-components';
import Image from '../../assets/images/pocket.png'

const MyPickBar = () => {
  return (
    <PickBarContainer>
        <TitleContainer>
            <Title>찜한물건</Title>
            <CountWrapper>
                <Box />
                <Count>00</Count>
            </CountWrapper>
        </TitleContainer>
        <PickImageContainer>
            <ImageBox src={Image}/>
            <ImageBox src={Image}/>
            <ImageBox src={Image}/>
        </PickImageContainer>
        <TopMoveButton>TOP</TopMoveButton>
    </PickBarContainer>
  )
};

const PickBarContainer = styled.div`
    position: fixed;
    top: 290px;
    right: 8%;
    display: grid;
    gap: 10px;
    z-index: 500;
    
    @media screen and (max-width: 1680px) {
        top: 200px;
        right: 0%;
    }

    @media screen and (max-width: 360px) {
        top: 1480px;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    width: 150px;
    padding: 15px 40px;
    flex-direction: column;
    align-items: center;
    border: 1px solid #000;
    gap: 4px;
    background-color: #fff;
    box-shadow: 3px 3px 8px 0px #929292;

    @media screen and (max-width: 1500px) {
        display: none;
    }
`;

const Title = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
`;

const CountWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const ImageBox = styled.div<{ src: string }>`
    width: 118px;
    height: 118px;
    background-image: ${(props) => `url(${props.src})`};
    background-size: cover;
    cursor: pointer;
`;

const Box = styled.div`
    width: 24px;
    height: 24px;
    background-color: #D9D9D9;
`;

const Count = styled.div`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
`;

const PickImageContainer = styled.div`
    width: 150px;
    height: 418px;
    border: 1px solid #000;
    padding: 16px;
    gap: 16px;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    box-shadow: 3px 3px 5px 0px #a0a0a0;

    @media screen and (max-width: 1500px) {
        display: none;
    }
`;

const TopMoveButton = styled.div`
    display: inline-flex;
    padding: 16px 29px;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    font-family: "Lemon/Milk", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background-color: #fff;
    box-shadow: 3px 3px 8px 0px #929292;
    cursor: pointer;
`;

export default MyPickBar;