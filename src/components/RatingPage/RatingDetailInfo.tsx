import React from 'react'
import { styled } from 'styled-components';

const RatingDetailInfo = ({ data } : any) => {
  return (
    <InfoContainer>
        <TitleContainer>
            {data.data.info.title}
        </TitleContainer>
        <ContentContainer>
            <ContentText>
                {data.data.info.content}
            </ContentText>
        </ContentContainer>
    </InfoContainer>
  )
};

const InfoContainer = styled.div`
    width: 100%;
    padding: 20px 0px 0px 0px;
`;

const TitleContainer = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    padding: 0px 0px 30px 0px;
`;

const ContentContainer = styled.div`
    width: 100%;
    height: 240px;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
`;

const ContentText = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #39373A;
    width: 100%;
    height: 408px;
`;

export default RatingDetailInfo;