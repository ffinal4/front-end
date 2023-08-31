import React from 'react'
import { styled } from 'styled-components';
import { ValueToEnum } from '../../utils/EnumCategory';

const AucWantedInfo = ({ data } : any) => {

    const wantedData = data.data.info.auctionResponseDto.goodsResponseDto.wantedGoods;

    return (
        <InfoContainer>
            <InfoTextContainer>
                <TextTitleContainer>
                    <InfoTextTitle>{wantedData.title}</InfoTextTitle>
                    <InfoTextContent style={{color: "#A4A4A4"}}>{ValueToEnum(wantedData.category)}</InfoTextContent>
                </TextTitleContainer>
                <InfoTextContent>{wantedData.content}</InfoTextContent>
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