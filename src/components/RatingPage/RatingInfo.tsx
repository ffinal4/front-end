import React from 'react'
import { styled } from 'styled-components';
import { ValueToEnum } from '../../utils/EnumCategory';

const RatingInfo = ({ data } : any) => {
  return (
    <InfoContainer>
        <TitleContainer>
            {data.data.info.title}
        </TitleContainer>
        <ContentWrapper>
            <ContentLineContainer>
                <Text style={{color: "#ADADAD"}}>카테고리</Text>
                <Text style={{color: "#39373A"}}>{ValueToEnum(data.data.info.category)}</Text>
            </ContentLineContainer>
            <ContentLineContainer>
                <Text style={{color: "#ADADAD"}}>상품상태</Text>
                <Text style={{color: "#39373A"}}>{data.data.info.goodsCondition}</Text>
            </ContentLineContainer>
            <ContentLineContainer>
                <Text style={{color: "#ADADAD"}}>거래지역</Text>
                <Text style={{color: "#39373A"}}>{data.data.info.location}</Text>
            </ContentLineContainer>
            <ContentLineContainer>
                <Text style={{color: "#ADADAD"}}>거래방법</Text>
                <Text style={{color: "#39373A"}}>{data.data.info.tradeType}</Text>
            </ContentLineContainer>
            <ContentLineContainer>
                <Text style={{color: "#ADADAD"}}>상품태그</Text>
                <Text style={{color: "#39373A"}}># 인테리어   # 이케아  # 의자</Text>
            </ContentLineContainer>
        </ContentWrapper>
    </InfoContainer>
  )
};

const InfoContainer = styled.div`
    width: 100%;
    flex-direction: column;
    padding: 20px 0px 0px 0px;
`;

const TitleContainer = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
`;

const ContentWrapper = styled.div`
    padding: 30px 0px 110px 0px;
    display: grid;
    gap: 10px;
`;

const ContentLineContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

export default RatingInfo;