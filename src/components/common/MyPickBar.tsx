import React from 'react'
import { styled } from 'styled-components';
import Image from '../../assets/images/pocket.png'

const MyPickBar = () => {

    const onClickScrollButton = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

  return (
    <PickBarContainer>
        <TitleContainer>
            <Title>최근본물건</Title>
        </TitleContainer>
        <PickImageContainer>
            <ImageBox src={Image}/>
            <ImageBox src={Image}/>
            <ImageBox src={Image}/>
            <ImageBox src={Image}/>
        </PickImageContainer>
        <TopMoveButton onClick={onClickScrollButton} id='scrollToTopButton'>TOP</TopMoveButton>
    </PickBarContainer>
  )
};

const PickBarContainer = styled.div`
    position: fixed;
    width: 112px;
    height: 520px;
    top: 224px;
    right: 11%;
    display: grid;
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
    width: 100%;
    padding: 10px 20px;
    flex-direction: column;
    align-items: center;
    background-color: #EFEFEF;
    border-radius: 5px 5px 0px 0px;
    border-top: 1px solid #D5D4D4;
    border-left: 1px solid #D5D4D4;
    border-right: 1px solid #D5D4D4;

    @media screen and (max-width: 1500px) {
        display: none;
    }
`;

const Title = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #222020;
`;

const ImageBox = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 3px;
    object-fit: contain;
    cursor: pointer;
`;

const PickImageContainer = styled.div`
    width: 120px;
    height: 419px;
    border-bottom: 1px solid #D5D4D4;
    border-left: 1px solid #D5D4D4;
    border-right: 1px solid #D5D4D4;
    padding: 20px;
    gap: 20px;
    display: grid;
    justify-content: center;
    background-color: #fff;
    border-radius: 0px 0px 5px 5px;

    @media screen and (max-width: 1500px) {
        display: none;
    }
`;

const TopMoveButton = styled.div`
    display: inline-flex;
    margin-top: 16px;
    padding: 16px 29px;
    justify-content: center;
    align-items: center;
    border: 1px solid #39373A;
    border-radius: 40px;
    color: #fff;
    font-family: "Lemon/Milk", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    background-color: #222020;
    height: 60px;
    cursor: pointer;
`;

export default MyPickBar;