import React from 'react'
import { styled } from 'styled-components';
import Location from '../../assets/icon/location.png'

const BidCard = () => {
  return (
    <CardContainer>
        <CardImgContainer>
            <CardLocationContainer />
            <LocatinoWrapper>
                <LocationIcon src={Location} alt=''/>
                <LocationText>경기도 용인시 기흥구</LocationText>
            </LocatinoWrapper>
        </CardImgContainer>
        <TitleContainer>물건이름</TitleContainer>
        <ContentContainer>유저레이팅</ContentContainer>
    </CardContainer>
  )
};

const CardContainer = styled.div`
    width: 272px;
    height: 333px;
    cursor: pointer;
`;

const CardImgContainer = styled.div`
    width: 272px;
    height: 272px;
    border-radius: 10px;
    background-color: #D5D4D4;
    position: relative;
`;

const CardLocationContainer = styled.div`
    width: 100%;
    height: 44px;
    border-radius: 10px 10px 0px 0px;
    color: #fff;
    background-color: #222020;
    opacity: 0.2;
    display: flex;
    align-items: center;
    
`;

const LocatinoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    top: 10px;
    left: 20px;
    position: absolute;
    z-index: 20;
`;

const LocationText = styled.div`
    color: #fff;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

const LocationIcon = styled.img`
    width: 18px;
    height: 18px;
`;

const TitleContainer = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    padding: 10px 0px 0px 0px;
`;

const ContentContainer = styled.div`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    color: #ADADAD;
`;

export default BidCard;