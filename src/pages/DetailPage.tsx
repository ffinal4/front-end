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
            <FilterWrapper>
                Filter
                <ChoiceBox />
            </FilterWrapper>
            <FilterWrapper>
                Category
                <ChoiceBox />
            </FilterWrapper>
            <FilterWrapper>
                Category
                <ChoiceBox />
            </FilterWrapper>
        </FilterContainer>
        <PageContainer>
            <DetailContainer />
            <InfoContainer>
            {
            (giveTap === true && wantTap === false && feedbackTap === false)
            && <LayoutContainer>
                    <TapContainer>
                        <TapClickButton>제가드려요</TapClickButton>
                        <TapDefaultButton onClick={onClickWantHandler}>이걸원해요</TapDefaultButton>
                        <TapDefaultButton onClick={onClickFeedbackHandler}>유저평가</TapDefaultButton>
                    </TapContainer>
                    <GiveInfo />
                </LayoutContainer> 
            }
            {
            (giveTap === false && wantTap === true && feedbackTap === false)
            && <LayoutContainer>
                    <TapContainer>
                        <TapDefaultButton onClick={onClickGiveHandler}>제가드려요</TapDefaultButton>
                        <TapClickButton>이걸원해요</TapClickButton>
                        <TapDefaultButton onClick={onClickFeedbackHandler}>유저평가</TapDefaultButton>
                    </TapContainer>
                    <WantedInfo />
                </LayoutContainer> 
            }
            {
            (giveTap === false && wantTap === false && feedbackTap === true)
            && <LayoutContainer>
                    <TapContainer>
                        <TapDefaultButton onClick={onClickGiveHandler}>제가드려요</TapDefaultButton>
                        <TapDefaultButton onClick={onClickWantHandler}>이걸원해요</TapDefaultButton>
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
    align-items: center;
    margin: 0px 56px 20px 0px;
    gap: 20px;
    width: 100%;
`;

const FilterWrapper = styled.div`
    display: inline-flex;
    padding: 10px 20px;
    align-items: center;
    gap: 77px;
    border-bottom: 1px solid;
`;

const ChoiceBox = styled.div`
    width: 24px;
    height: 24px;
    background-color: #D9D9D9;
    cursor: pointer;
`;

const PageContainer = styled.div`
    border-top: 4px solid;
    width: 100%;
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
    justify-content: center;
    align-items: center;
    width: 177px;
    height: 44px;
    border: 4px solid #000;
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
    border-bottom: 4px solid #000;
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