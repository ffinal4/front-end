import React from 'react'
import { styled } from 'styled-components';
import Empty from '../../assets/images/emptypocket.png'

const EmptyPocket = () => {
  return (
    <LayoutContainer>
        <ContentWrapper>
            <Title>EMPTY POCKET</Title>
            <TextWrapper>
                <Text>주머니가 비었어요.</Text>
                <Text>교환하고 싶은 물건들로 내 주머니를 채워보세요!</Text>
            </TextWrapper>
            <EmptyImg src={Empty} />
        </ContentWrapper>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ContentWrapper = styled.div`
    display: grid;
    align-items: center;
`;

const Title = styled.div`
    color: #D5D4D4;
    font-family: "Lemon/Milk", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
`;

const TextWrapper = styled.div`
    padding: 20px 0px 40px 0px;
`;

const Text = styled.div`
    color: #ADADAD;
    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
`;

const EmptyImg = styled.img`
    width: 339px;
    height: 49px;
    object-fit: contain;
`;

export default EmptyPocket;