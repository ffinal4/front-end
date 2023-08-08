import React from 'react'
import { styled } from 'styled-components';
import { StBasicButton } from '../../styles/BasicButton';
import Image from '../../assets/images/pocket.png'

const WantedInfo = () => {
    return (
            <InfoContainer>
                <InfoTextContainer>
                    <TextTitleContainer>
                        <InfoTextTitle>기프티콘 30,000원</InfoTextTitle>
                        <InfoTextContent style={{color: "#A4A4A4"}}>티켓/교환권</InfoTextContent>
                    </TextTitleContainer>
                    <InfoTextContent>같은 가격으로 아무 커피 프랜차이즈 기프티콘과 교환 원해요!</InfoTextContent>
                    <InfoTextContent>다른 금액 기프티콘들도 주머니 넣어뒀으니까 주머니 보시고 찔러주세요!</InfoTextContent>
                </InfoTextContainer>
                {/* <MyPoketContainer>
                    <PoketInline>
                        <PoketInfoContainer>
                            <InfoTextTitle>000님의 주머니</InfoTextTitle>
                            <PoketWrapper>
                                <TextWrapper>
                                    <Box width="24px" height="24px" />
                                    <InfoTextContent color='#717171'>물건갯수</InfoTextContent>
                                </TextWrapper>
                                <TextWrapper>
                                    <Box width="24px" height="24px" />
                                    <InfoTextContent color='#717171'>하트</InfoTextContent>
                                </TextWrapper>
                            </PoketWrapper>
                            <ImageContainer>
                                <ImageBox src={Image}/>
                                <ImageBox src={Image}/>
                                <ImageBox src={Image}/>
                                <ImageBox src={Image}/>
                                <ImageBox src={Image}/>
                                <ImageBox src={Image}/>
                            </ImageContainer>
                            <ButtonWrapper>
                                <StBasicButton
                                    buttonColor='#717171'
                                    style={{ padding: "10px 35px", color: "#fff" }}
                                >주머니 더보기
                                </StBasicButton>
                            </ButtonWrapper>
                        </PoketInfoContainer>
                    </PoketInline>
                </MyPoketContainer> */}
            </InfoContainer>
    )
};

const InfoContainer = styled.div`
    width: 100%;
    border-top: 2px solid #000;
    border-bottom: 2px solid #D9D9D9;
    margin: 42px 0px 60px 0px;
    display: flex;
    justify-content: space-between;
    padding: 60px 0px 100px 0px;
`;

const InfoTextContainer = styled.div`
    width: 100%;
`;

const InfoTextTitle = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
`;

const TextTitleContainer = styled.div`
    width: 100%;
    margin: 0px 0px 20px 0px;
`;

const InfoTextContent = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`;

const MyPoketContainer = styled.div`
    border-left: 2px solid #000;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
    height: 614px;
    width: 384px;
    padding: 0px 0px 20px 20px;
`;

const PoketInline = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px 96px 74px 96px;
    border-left: 2px dashed #BFBFBF;
    border-bottom: 2px dashed #BFBFBF;
`;

const PoketInfoContainer = styled.div`
    display: grid;
    padding: 0px;
    gap: 8px;
`;

const PoketWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 20px;
`;

const TextWrapper = styled.div`
    display: flex;
    gap: 7px; 
`;

const Box = styled.div<{ width: string, height: string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: #D9D9D9;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 290px;
    display: flex;
    flex-wrap: wrap;
    border-top: 2px solid #D9D9D9;
    padding: 16px 0px 0px 0px;
    gap: 16px;
    overflow: hidden;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px 0px 0px;
`;

const ImageBox = styled.div<{ src: string }>`
    width: 80px;
    height: 80px;
    background-image: ${(props) => `url(${props.src})`};
    background-size: cover;
    /* border: 1px solid; */
`;

export default WantedInfo;