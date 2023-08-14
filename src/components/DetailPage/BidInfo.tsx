import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import BidCard from './BidCard';

const FeedbackInfo = () => {

    return (
        <InfoContainer>
            <InfoTextContainer>
                <CardListContainer>
                    <BidCard />
                    <BidCard />
                    <BidCard />
                    <BidCard />
                    <BidCard />
                    <BidCard />
                    <BidCard />
                    <BidCard />
                    <BidCard />
                    <BidCard />
                </CardListContainer>
            </InfoTextContainer>
        </InfoContainer>
    )
};

const PointContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0px 0px 60px 0px;
`;

const InfoContainer = styled.div`
    width: 100%;
    border-top: 2px solid #000;
    border-bottom: 2px solid #D9D9D9;
    margin: 42px 0px 60px 0px;
    padding: 0px 0px 93px 0px;
    display: grid;
`;

const InfoTextContainer = styled.div`
    padding: 60px 0px 0px 0px;
    width: 100%;
`;

const CardListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;

const InfoTextTitle = styled.div`
    font-family: "Pretendard";
    font-size: 26px;
    font-weight: 800;
    line-height: 150%;
`;


const GaugeBar = styled.div`
    width: 40%;
    background-color: #c7c7c7;
    border-radius: 10px;
    margin: 0px 16px 0px 20px;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0px 0px 40px 0px;
`;

const AllViewTextWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const AllViewText = styled.div`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
`;

const FeedbackContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const FeedbackBox = styled.div`
    display: flex;
    width: 50%;
    padding: 0px 0px 16px 0px;
`;

const FeedbackContentContainer = styled.div`
    display: grid;
    padding: 20px;
    gap: 8px;
`;

const CommentContainer = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    display: flex;
    flex-wrap: wrap;
`;


const ImageBox = styled.img`
    min-width: 80px;
    height: 80px;
    border-radius: 100%;
    object-fit: contain;
`;

export default FeedbackInfo;