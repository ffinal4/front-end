import React from 'react'
import { styled } from 'styled-components';

const AucGiveInfo = () => {
    return (
        <InfoContainer>
            <InfoTextContainer>
                <InfoTextTitle>aaa</InfoTextTitle>
                <InfoTextContent>aaa</InfoTextContent>
                {/* <InfoTextContent>스타벅스 기프티콘 많아서 기간내에 사용하기가 힘들것 같아서요.</InfoTextContent>
                <InfoTextContent>같은 가격으로 아무 커피 프랜차이즈 기프티콘과 교환 원해요!</InfoTextContent>
                <InfoTextContent style={{marginTop: "10px"}}>다른 금액 기프티콘들도 주머니 넣어뒀으니깐 주머니 보시고 찔러주세요!</InfoTextContent> */}
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
    padding: 0px 0px 40px 0px;
`;

const InfoTextContent = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`;

export default AucGiveInfo;