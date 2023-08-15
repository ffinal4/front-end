import React from 'react'
import { styled } from 'styled-components';

const RatingInfo = () => {
  return (
    <InfoContainer>
        <TitleContainer>
            이케아 LISABO 리사보 의자
        </TitleContainer>
        <ContentWrapper>
            <ContentLineContainer>
                <Text style={{color: "#ADADAD"}}>카테고리</Text>
                <Text style={{color: "#39373A"}}>가구/인테리어</Text>
            </ContentLineContainer>
            <ContentLineContainer>
                <Text style={{color: "#ADADAD"}}>상품상태</Text>
                <Text style={{color: "#39373A"}}>상</Text>
            </ContentLineContainer>
            <ContentLineContainer>
                <Text style={{color: "#ADADAD"}}>거래지역</Text>
                <Text style={{color: "#39373A"}}>수원시 영통구 매탄3동</Text>
            </ContentLineContainer>
            <ContentLineContainer>
                <Text style={{color: "#ADADAD"}}>거래방법</Text>
                <Text style={{color: "#39373A"}}>상관없음</Text>
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