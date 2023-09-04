import React from 'react'
import { styled } from 'styled-components';
import Empty from '../../assets/images/emptypocket.png'
import NoZzim from '../../assets/images/nozzim.png'
import Nobid from '../../assets/images/nobid.png'

const EmptyPocket = ({ pocketStatus } : any) => {

    const pocketText = () => {
        if (pocketStatus === 0) {
            return (
                <ContentWrapper>
                    <Title>EMPTY POCKET</Title>
                    <TextWrapper>
                        <Text>주머니가 비었어요.</Text>
                        <Text>교환하고 싶은 물건들로 내 주머니를 채워보세요!</Text>
                    </TextWrapper>
                    <EmptyImg src={Empty} />
                </ContentWrapper>
            )
        } else if (pocketStatus === 1) {
            return (
                <ContentWrapper>
                    <Title>EMPTY POCKET</Title>
                    <TextWrapper>
                        <Text>주머니가 비었어요.</Text>
                        <Text>상대방이 아직 주머니를 채우는 중이에요.</Text>
                    </TextWrapper>
                    <EmptyImg src={Empty} />
                </ContentWrapper>
            )
        } else if (pocketStatus === 2) {
            return (
                <ContentWrapper>
                    <Title>EMPTY LIST</Title>
                    <TextWrapper>
                        <Text>아직 찜한 목록이 없어요.</Text>
                        <Text>마음에 드는 물건들을 찜해 보세요!</Text>
                    </TextWrapper>
                    <NoZzimImg src={NoZzim} />
                </ContentWrapper>
            )
        } else {
            return (
                <NoBidImg src={Nobid} />
            )
        };
    };

  return (
    <LayoutContainer>
        {pocketText()}
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

const NoZzimImg = styled.img`
    width: 387px;
    height: 58px;
    object-fit: contain;
`;

const NoBidImg = styled.img`
    width: 351px;
    height: 208.213px;
    object-fit: contain;
`;

export default EmptyPocket;