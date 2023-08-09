import React, { useState } from 'react'
import { styled } from 'styled-components';
import DetailContainer from '../components/DetailPage/DetailContainer';
import GiveInfo from '../components/DetailPage/GiveInfo';
import WantedInfo from '../components/DetailPage/WantedInfo';
import FeedbackInfo from '../components/DetailPage/FeedbackInfo';
import RecommendCard from '../components/DetailPage/RecommendCard';
import MyPickBar from '../components/common/MyPickBar';

const DetailPage = () => {

    const [detailTap, setDetailTap] = useState({
        giveTap: true,
        wantTap: false,
        feedbackTap: false,
    });

    const { giveTap, wantTap, feedbackTap} = detailTap;

    const onClickGiveHandler = () => {
        setDetailTap({
            giveTap: true,
            wantTap: false,
            feedbackTap: false,
        });
    };

    const onClickWantHandler = () => {
        setDetailTap({
            giveTap: false,
            wantTap: true,
            feedbackTap: false,
        });
    };

    const onClickFeedbackHandler = () => {
        setDetailTap({
            giveTap: false,
            wantTap: false,
            feedbackTap: true,
        });
    };

  return (
    <PageLayout>
        <FilterContainer>
            <FilterLeftWrapper>
                <FilterWrapper>
                    <ChoiceBox />
                    Home
                </FilterWrapper>
                <ChoiceBox />
                <FilterWrapper>
                    <ChoiceBox />
                    Category
                </FilterWrapper>
            </FilterLeftWrapper>
            <ModifyContainer>
                <ChoiceBox />
                수정하기
            </ModifyContainer>
        </FilterContainer>
        <PageContainer>
            <DetailContainer />
            <InfoContainer>
            {
            (giveTap === true && wantTap === false && feedbackTap === false)
            && <LayoutContainer>
                    <TapContainer>
                        <TapClickButton>드려요</TapClickButton>
                        <TapDefaultButton onClick={onClickWantHandler}>받아요</TapDefaultButton>
                        <TapDefaultButton onClick={onClickFeedbackHandler}>유저평가</TapDefaultButton>
                    </TapContainer>
                    <GiveInfo />
                </LayoutContainer> 
            }
            {
            (giveTap === false && wantTap === true && feedbackTap === false)
            && <LayoutContainer>
                    <TapContainer>
                        <TapDefaultButton onClick={onClickGiveHandler}>드려요</TapDefaultButton>
                        <TapClickButton>받아요</TapClickButton>
                        <TapDefaultButton onClick={onClickFeedbackHandler}>유저평가</TapDefaultButton>
                    </TapContainer>
                    <WantedInfo />
                </LayoutContainer> 
            }
            {
            (giveTap === false && wantTap === false && feedbackTap === true)
            && <LayoutContainer>
                    <TapContainer>
                        <TapDefaultButton onClick={onClickGiveHandler}>드려요</TapDefaultButton>
                        <TapDefaultButton onClick={onClickWantHandler}>받아요</TapDefaultButton>
                        <TapClickButton>유저평가</TapClickButton>
                    </TapContainer>
                    <FeedbackInfo />
                </LayoutContainer> 
            }
            </InfoContainer>
        </PageContainer>
        <RecommendCard />
        <MyPickBar />
    </PageLayout>
  )
}

const PageLayout = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px 0px 60px 0px;
`;

const FilterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px 20px 0px;
    gap: 20px;
    width: 100%;
`;

const FilterLeftWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const FilterWrapper = styled.div`
    display: inline-flex;
    padding: 10px 60px 10px 10px;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid;
`;

const ChoiceBox = styled.div`
    width: 24px;
    height: 24px;
    background-color: #D9D9D9;
    cursor: pointer;
`;

const ModifyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%
`;

const PageContainer = styled.div`
    border-top: 4px solid;
    width: 100%;

    @media screen and (max-width: 1136px) {
        padding: 0px 20px 0px 20px;        
    }
`;

const TapContainer = styled.div`
    display: flex;
    gap: 0px;
    position: absolute;
`;

const TapClickButton = styled.div`
    display: flex;
    padding: 10px auto;
    font-family: "Pretendard";
    font-weight: 700;
    justify-content: center;
    align-items: center;
    width: 177px;
    height: 44px;
    border: 2px solid #000;
    border-bottom: 4px solid #fff;
`;

const TapDefaultButton = styled.div`
    display: flex;
    padding: 10px auto;
    font-family: "Pretendard";
    justify-content: center;
    align-items: center;
    background-color: #D9D9D9;
    width: 177px;
    height: 44px;
    border: 1px solid #000;
    border-bottom: 2px solid #000;
    cursor: pointer;
`;

const LayoutContainer = styled.div`
    padding: 60px 0px 87px 0px;
    display: grid;
    width: 100%;
`;

const InfoContainer = styled.div`
    width: 100%;
`;

export default DetailPage