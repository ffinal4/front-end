import React from 'react'
import { styled } from 'styled-components';
import Location from '../../assets/icon/location.png'

const AucBidCard = ({ item } : any) => {
    return (
        <CardContainer>
            <CardImg src={item.goodsImg}>
                <SellerChoice>SELLER'S PICK</SellerChoice>
            </CardImg>
            <TitleContainer>{item.title}</TitleContainer>
            <ContentContainer>110,000PP</ContentContainer>
        </CardContainer>
    )
};

const CardContainer = styled.div`
        width: 272px;
        height: 333px;
        cursor: pointer;
    `;

const CardImg = styled.div<{ src : string }>`
        width: 272px;
        height: 272px;
        border-radius: 10px;
        background-image: ${(props) => `url(${props.src})`};
        background-size: cover;
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
        position: absolute;
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

const SellerChoice = styled.div`
    background-color: #58ABF7;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 44px;
    font-family: "Lemon/Milk", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    color: #FCFCFC;
    bottom: 0;
    position: absolute;
    border-radius: 0px 0px 10px 10px;
`;

export default AucBidCard;