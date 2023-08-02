import React from 'react'
import { styled } from 'styled-components';

const RecommendCard = () => {
  return (
    <LayoutContainer>
        <HeadLineContainer>
            <HeaderText>이런 물건은 어떠세요?</HeaderText>
            <TitleText>1/5</TitleText>
        </HeadLineContainer>
        <RecommendList>
            <SlideBtnWrapper>
                <SlideButton>◀</SlideButton>
                <SlideButton>▶</SlideButton>
            </SlideBtnWrapper>
            <CardListContainer>
                <CardContainer>
                    <CardImage>
                        <LikeButton>♥</LikeButton>
                    </CardImage>
                    <ContentContainer>
                        <TitleText>물건이름</TitleText>
                        <UserInfo>사용자정보</UserInfo>
                    </ContentContainer>
                    <Content>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</Content>
                </CardContainer>
                <CardContainer>
                    <CardImage>
                        <LikeButton></LikeButton>
                    </CardImage>
                    <ContentContainer>
                        <TitleText>물건이름</TitleText>
                        <UserInfo>사용자정보</UserInfo>
                    </ContentContainer>
                    <Content>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</Content>
                </CardContainer>
                <CardContainer>
                    <CardImage>
                        <LikeButton></LikeButton>
                    </CardImage>
                    <ContentContainer>
                        <TitleText>물건이름</TitleText>
                        <UserInfo>사용자정보</UserInfo>
                    </ContentContainer>
                    <Content>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</Content>
                </CardContainer>
                <CardContainer>
                    <CardImage>
                        <LikeButton></LikeButton>
                    </CardImage>
                    <ContentContainer>
                        <TitleText>물건이름</TitleText>
                        <UserInfo>사용자정보</UserInfo>
                    </ContentContainer>
                    <Content>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</Content>
                </CardContainer>
            </CardListContainer>
        </RecommendList>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
    display: grid;
    gap: 30px;
    width: 100%;
`;

const HeadLineContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const HeaderText = styled.div`
    font-family: "Pretendard";
    font-size: 26px;
    font-weight: 800;
    line-height: 150%;
`;

const TitleText = styled.div`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
`;

const RecommendList = styled.div`
    display: flex;
    width: 100%;
    position: relative;
`;

const CardListContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 16px;

`;

const CardContainer = styled.div`
    width: 273px;
    display: grid;
`;

const CardImage = styled.div`
    width: 273px;
    height: 273px;
    background-color: #D9D9D9;
    position: relative;
`;

const LikeButton = styled.div`
    width: 48px;
    height: 48px;
    background-color: #969696;
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #000;
    }
`;

const ContentContainer = styled.div`
    padding: 16px 0px 10px 0px;
`;

const UserInfo = styled.div`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    color: #757575;
`;

const Content = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

const SlideBtnWrapper = styled.div`
    width: 100%;
    margin: 113px 0px auto 0px;
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
    box-shadow: 3px 3px 15px 0px #6e6e6e;
    cursor: pointer;

    &:hover {
        background-color: #b3b3b3;
        opacity: 0.7;  
    }
`;

export default RecommendCard;