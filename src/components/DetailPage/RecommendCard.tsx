import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components';
import ItemCard from '../common/ItemCard';
import ArrowLeft from '../../assets/images/arrowleft.png'
import ArrowRight from '../../assets/images/arrowright.png'
import AuctionCard from '../common/AuctionCard';

const RecommendCard = ({ data, auction } : any) => {

    const imageLength = Math.floor(data?.length / 4);
    const slideRef = useRef<HTMLDivElement>(null);
    const [currentImg, setCurrentImg] = useState<number>(0);
    const imageWidth : number = 1152;
    const slideRange : number = currentImg * imageWidth;

    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.style.transition = "all 0.5s ease-in-out";
            slideRef.current.style.transform = `translateX(-${slideRange}px)`;
        };
    }, [slideRange]);

    const moveToNextSlide = () => {
        if (currentImg === imageLength) return;
        setCurrentImg(currentImg + 1);
    };

    const moveToPrevSlide = () => {
        if (currentImg === 0) return;
        setCurrentImg(currentImg - 1);
    };

  return (
    <LayoutContainer>
        <HeadLineContainer>
            {(auction)
                ? <HeaderText>지금 경매 중인 다른 물건들</HeaderText>
                : <HeaderText>이런 물건은 어떠세요?</HeaderText>}
            {(data?.length > 0) && <TitleText>{currentImg + 1}/{imageLength + 1}</TitleText>}
        </HeadLineContainer>
        <RecommendList>
            {(data?.length > 4)
                && <SlideBtnWrapper>
                <SlideButton onClick={moveToPrevSlide}>
                    <img src={ArrowLeft} alt=''/>
                </SlideButton>
                <SlideButton onClick={moveToNextSlide}>
                    <img src={ArrowRight} alt=''/>
                </SlideButton>
            </SlideBtnWrapper>}
            <CardListContainer ref={slideRef}>
                {data?.map((item : any) => {
                    return (
                        (auction)
                            ? <ImageCard>
                                <AuctionCard key={item.auctionid} item={item} />
                            </ImageCard>
                            : <ImageCard>
                                <ItemCard key={item.goodsId} item={item} />
                            </ImageCard>
                    )
                })}
                {/* <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard>
                <ImageCard>
                    <ItemCard />
                </ImageCard> */}
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
    overflow: hidden;
`;

const CardListContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    gap: 16px;
`;

const ImageCard = styled.div`
    width: 272px;
    height: 100%;
`;

const CardContainer = styled.div`
    width: 272px;
    display: grid;
`;

const CardImage = styled.div`
    width: 272px;
    height: 272px;
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
    width: 48px;
    height: 48px;
    background-color: #222020;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    z-index: 200;
    opacity: 0.2;
    cursor: pointer;

    &:hover {
        background-color: #b3b3b3;
        opacity: 0.7;  
    }
`;

export default RecommendCard;