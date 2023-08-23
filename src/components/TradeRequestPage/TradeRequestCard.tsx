import React from "react";
import { styled } from "styled-components";
import goodsexchange from "../../assets/icon/goodsexchange.png";
import goods from "../../assets/images/kangaroowhy.png";
import dot from "../../assets/icon/orangedot.png";
import { StBasicButton } from "../../styles/BasicButton";

const TradeRequestCard = () => {
  return (
    <CardContainer>
      <Container>
        <Date>2023-8-22</Date>
        <TradeRequestState>
          <DotImg src={dot} />
          교환요청
        </TradeRequestState>
      </Container>

      <GoodsContainer>
        <GoodsImg src={goods} />
        <ExchangeImg src={goodsexchange} />
        <GoodsImg src={goods} />
      </GoodsContainer>
      <ContentsContainer>
        <Title>상대물건</Title>
        <GoodsTitle>스파이더맨 어크로스 더 유니버스 IMAX 포스터</GoodsTitle>
        <Address>경기도 수원시 영통구</Address>
      </ContentsContainer>
      <BorderLine>
        <EmptyCircle>
          <FullCircle />
        </EmptyCircle>
        <EmptyCircle>
          <FullCircle />
        </EmptyCircle>
        <EmptyCircle>
          <FullCircle />
        </EmptyCircle>
      </BorderLine>
      <TradeStateContaner>
        <div>교환요청</div>
        <div>교환진행중</div>
        <div>교환완료</div>
      </TradeStateContaner>
      <ButtonContainer>
        <StAssureBt buttonColor="#F9B482">수락</StAssureBt>
        <StRejectBt buttonColor="white">거절</StRejectBt>
      </ButtonContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 368px;
  height: 451px;
  border-radius: 10px;
  border: 1px solid black;
  position: relative;
`;

const Container = styled.div`
  display: flex;
`;

const Date = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  margin: 10px 0px 0px 20px;
`;

const DotImg = styled.img`
  width: 8px;
  height: 8px;
  margin-right: 6px;
`;

const TradeRequestState = styled.div`
  width: 110px;
  height: 44px;
  background-color: #fcf0e8;
  border-radius: 0px 10px;
  position: absolute;
  right: 0;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoodsContainer = styled.div`
  border-bottom: 1px solid #d5d4d4;
  padding-bottom: 20px;
  width: 328px;
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 44px;
`;

const GoodsImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  border: 1px solid black;
`;

const ContentsContainer = styled.div`
  padding: 0px 20px 0px 20px;
`;

const ExchangeImg = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.div`
  color: #ec8d49;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
`;

const GoodsTitle = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  margin-top: 6px;
`;

const Address = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  color: #adadad;
`;

const BorderLine = styled.div`
  width: 279px;
  height: 4px;
  border-radius: 30px;
  background-color: #d5d4d4;
  margin: auto;
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EmptyCircle = styled.div`
  width: 16px;
  height: 16px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: gray;
`;

const TradeStateContaner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  padding: 10px 20px 0px 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 16px;
`;

const StAssureBt = styled(StBasicButton)`
  width: 80px;
  height: 44px;
  border-radius: 5px;
  border: 1px solid black;
`;

const StRejectBt = styled(StBasicButton)`
  width: 80px;
  height: 44px;
  border-radius: 5px;
  border: 1px solid #adadad;
`;
export default TradeRequestCard;
