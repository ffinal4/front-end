import React from 'react'
import { styled } from 'styled-components';

const AucWantedInfo = () => {
    return (
        <InfoContainer>
            <InfoTextContainer>
                <TextTitleContainer>
                    <InfoTextTitle>aaa</InfoTextTitle>
                    <InfoTextContent style={{color: "#A4A4A4"}}>aaa</InfoTextContent>
                </TextTitleContainer>
                <InfoTextContent>aaa</InfoTextContent>
                {/* <InfoTextContent>다른 금액 기프티콘들도 주머니 넣어뒀으니까 주머니 보시고 찔러주세요!</InfoTextContent> */}
            </InfoTextContainer>
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

export default AucWantedInfo;