import React, { useState } from 'react'
import { styled } from 'styled-components';
import Image from '../../assets/images/pocket.png'

const FeedbackInfo = () => {

    const [gauge, setGauge] = useState(0);

    const onClickAddHandler = () => {
        setGauge(gauge + 5);
    };

    const onClickMinusHandler = () => {
        setGauge(gauge - 5);
    };

    return (
            <InfoContainer>
                <InfoTextContainer>
                    <PointContainer>
                        <InfoTextTitle>사용자김핍포님의 주머니지수</InfoTextTitle>
                        <GaugeBar>
                            <Gauge width={gauge}>⚪</Gauge>
                        </GaugeBar>
                        <InfoTextTitle>{gauge}%</InfoTextTitle>
                        <Button onClick={onClickAddHandler}>+</Button>
                        <Button onClick={onClickMinusHandler}>-</Button>
                    </PointContainer>
                    <TitleContainer>
                        <InfoTextTitle>핍포님이 받은 유저 평가에요!</InfoTextTitle>
                        <AllViewTextWrapper>
                            <AllViewText>전체보기</AllViewText>
                            <Box width='24px' height='24px'></Box>
                        </AllViewTextWrapper>
                    </TitleContainer>
                    <FeedbackContainer>
                        <FeedbackBox>
                            <ImageBox src={Image}/>
                            <FeedbackContentContainer>
                                <AllViewText>피드백유저 이름</AllViewText>
                                <CommentContainer>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</CommentContainer>
                            </FeedbackContentContainer>
                        </FeedbackBox>
                        <FeedbackBox>
                            <ImageBox src={Image}/>
                            <FeedbackContentContainer>
                                <AllViewText>피드백유저 이름</AllViewText>
                                <CommentContainer>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</CommentContainer>
                            </FeedbackContentContainer>
                        </FeedbackBox>
                        <FeedbackBox>
                            <ImageBox src={Image}/>
                            <FeedbackContentContainer>
                                <AllViewText>피드백유저 이름</AllViewText>
                                <CommentContainer>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</CommentContainer>
                            </FeedbackContentContainer>
                        </FeedbackBox>
                        <FeedbackBox>
                            <ImageBox src={Image}/>
                            <FeedbackContentContainer>
                                <AllViewText>피드백유저 이름</AllViewText>
                                <CommentContainer>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</CommentContainer>
                            </FeedbackContentContainer>
                        </FeedbackBox>
                        <FeedbackBox>
                            <ImageBox src={Image}/>
                            <FeedbackContentContainer>
                                <AllViewText>피드백유저 이름</AllViewText>
                                <CommentContainer>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</CommentContainer>
                            </FeedbackContentContainer>
                        </FeedbackBox>
                        <FeedbackBox>
                            <ImageBox src={Image}/>
                            <FeedbackContentContainer>
                                <AllViewText>피드백유저 이름</AllViewText>
                                <CommentContainer>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</CommentContainer>
                            </FeedbackContentContainer>
                        </FeedbackBox>
                    </FeedbackContainer>
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
    height: 729px;
    border-top: 4px solid #000;
    border-bottom: 4px solid #000;
    margin: 40px 0px 60px 0px;
    display: grid;
`;

const InfoTextContainer = styled.div`
    padding: 60px 0px 0px 0px;
    width: 100%;
`;

const InfoTextTitle = styled.div`
    font-family: "Pretendard";
    font-size: 26px;
    font-weight: 800;
    line-height: 150%;
`;

const Gauge = styled.div<{ width: number }>`
    width: ${(props) => props.width}%;
    background-color: #000;
    border-radius: 10px;
    text-align: right;
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
    font-family: Pretendard;
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

const Box = styled.div<{ width: string, height: string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: #D9D9D9;
`;

const ImageBox = styled.div<{ src: string }>`
    width: 118px;
    height: 118px;
    background-image: ${(props) => `url(${props.src})`};
    background-size: cover;
`;

const Button = styled.button`
    width: 30px;
    height: 30px;
    background-color: gray;
    border: 1px solid;
`;

export default FeedbackInfo;