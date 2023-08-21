import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components';
import Image from '../../assets/icon/profile.png'

const RakingSystem = () => {

    // const divRef = useRef<HTMLDivElement>(null);
    // const [refCurrent, setRefCurrent] = useState(0);
    // const pageWidth = 1920;
    // const numberOfSlides = 100;
    // const slideWidth = refCurrent * (pageWidth / numberOfSlides);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //     setRefCurrent((index) => (index + 1) % numberOfSlides);
    //     }, 100);

    //     return () => clearInterval(intervalId);
    // }, []);

    // useEffect(() => {
    //     if (divRef.current) {
    //     divRef.current.style.transition = 'all 2s';
    //     divRef.current.style.transform = `translateX(-${refCurrent * (100 / numberOfSlides)}%)`;
    //     }
    // }, [refCurrent, numberOfSlides]);

  return (
    <AllContainer>
        <RakingWrapper>
            <RakingContainer style={{border: "4px solid #EC8D49"}}>
                <RakingNumber>1</RakingNumber>
                <ProfileImg src={Image} />
                <Nickname>구스구스덕게임을하고싶은지원A님</Nickname>
                <SuccessPoint style={{color: "#EC8D49"}}>23</SuccessPoint>
            </RakingContainer>
            <RakingContainer>
                <RakingNumber>2</RakingNumber>
                <ProfileImg src={Image} />
                <Nickname>밥먹으러가는준영님</Nickname>
                <SuccessPoint>18</SuccessPoint>
            </RakingContainer>
            <RakingContainer>
                <RakingNumber>3</RakingNumber>
                <ProfileImg src={Image} />
                <Nickname>자다깬명진님</Nickname>
                <SuccessPoint>10</SuccessPoint>
            </RakingContainer>
            <RakingContainer>
                <RakingNumber style={{color: "#ADADAD"}}>4</RakingNumber>
                <ProfileImg src={Image} />
                <Nickname style={{color: "#ADADAD"}}>보드게임싫어하는승재님</Nickname>
                <SuccessPoint style={{color: "#ADADAD"}}>8</SuccessPoint>
            </RakingContainer>
            <RakingContainer>
                <RakingNumber style={{color: "#ADADAD"}}>5</RakingNumber>
                <ProfileImg src={Image} />
                <Nickname style={{color: "#ADADAD"}}>운동하러가는지훈님</Nickname>
                <SuccessPoint style={{color: "#ADADAD"}}>5</SuccessPoint>
            </RakingContainer>
            {/* <RakingContainer style={{border: "4px solid #EC8D49"}}>
                <RakingNumber>1</RakingNumber>
                <ProfileImg src={Image} />
                <Nickname>구스구스덕게임을하고싶은지원A님</Nickname>
                <SuccessPoint style={{color: "#EC8D49"}}>23</SuccessPoint>
            </RakingContainer>
            <RakingContainer>
                <RakingNumber>2</RakingNumber>
                <ProfileImg src={Image} />
                <Nickname>밥먹으러가는준영님</Nickname>
                <SuccessPoint>18</SuccessPoint>
            </RakingContainer>
            <RakingContainer>
                <RakingNumber>3</RakingNumber>
                <ProfileImg src={Image} />
                <Nickname>자다깬명진님</Nickname>
                <SuccessPoint>10</SuccessPoint>
            </RakingContainer>
            <RakingContainer>
                <RakingNumber style={{color: "#ADADAD"}}>4</RakingNumber>
                <ProfileImg src={Image} />
                <Nickname style={{color: "#ADADAD"}}>보드게임싫어하는승재님</Nickname>
                <SuccessPoint style={{color: "#ADADAD"}}>8</SuccessPoint>
            </RakingContainer>
            <RakingContainer>
                <RakingNumber style={{color: "#ADADAD"}}>5</RakingNumber>
                <ProfileImg src={Image} />
                <Nickname style={{color: "#ADADAD"}}>운동하러가는지훈님</Nickname>
                <SuccessPoint style={{color: "#ADADAD"}}>5</SuccessPoint>
            </RakingContainer> */}
        </RakingWrapper>
    </AllContainer>
  )
};

const AllContainer = styled.div`
    width: screen;
    height: 140px;
    background-color: #EFEFEF; 
    position: relative;
    overflow: hidden;
`;

const RakingWrapper = styled.div`
    height: 100%;
    padding: 30px ;
    display: flex;
    gap: 16px;
`;

const RakingContainer = styled.div`
    display: flex;
    align-items: center;
    width: 368px;
    padding: 16px 30px;
    height: 80px;
    gap: 16px;
    border-radius: 56px;
    background-color: #FCFCFC;
`;

const RakingNumber = styled.div`
    font-family: "Lemon/Milk", "sans-serif";
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    color: #39373A;
`;

const ProfileImg = styled.img`
    width: 48px;
    height: 48px;
    object-fit: contain;
    border-radius: 100%;
`;

const Nickname = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    color: #222020;
    width: 175px;
`;

const SuccessPoint = styled.div`
    font-family: "Lemon/Milk", "sans-serif";
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
`;

export default RakingSystem;