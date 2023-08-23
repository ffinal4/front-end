import React, { useState } from "react";
import { styled } from "styled-components";
import goodsexchange from "../../assets/icon/goodsexchange.png";
import goods from "../../assets/images/kangaroowhy.png";
import orangedot from "../../assets/icon/orangedot.png";
import yellowdot from "../../assets/icon/yellowdot.png";
import reddot from "../../assets/icon/reddot.png";
import greendot from "../../assets/icon/greendot.png";
import traderequest from "../../assets/icon/traderequest.png";
import tradeing from "../../assets/icon/tradeingrequst.png";
import tradecomplete from "../../assets/icon/tradecomplete.png";
import RequestStateButton from "./RequestStateButton";

const TradeRequestCard = () => {
  const [requestState, setRequestState] = useState({ request: "교환요청" });
  const { request } = requestState;

  const tradeRequestState = () => {
    if (request === "교환요청") {
      return (
        <TradeRequestState>
          <DotImg src={orangedot} />
          교환요청
        </TradeRequestState>
      );
    }
    if (request === "교환진행중") {
      return (
        <TradeRequestIng>
          <DotImg src={yellowdot} />
          교환진행중
        </TradeRequestIng>
      );
    }
    if (request === "교환취소") {
      return (
        <TradeRequestCancel>
          <DotImg src={reddot} />
          교환취소
        </TradeRequestCancel>
      );
    }
    if (request === "교환완료") {
      return (
        <TradeRequestComplete>
          <DotImg src={greendot} />
          교환완료
        </TradeRequestComplete>
      );
    }
  };

  const tradeRequestStateBar = () => {
    if (request === "교환요청") {
      return (
        <TradeImgContainer>
          <TradeImg src={traderequest} />
        </TradeImgContainer>
      );
    }
    if (request === "교환진행중") {
      return (
        <TradeImgContainer>
          <TradeImg src={tradeing} />
        </TradeImgContainer>
      );
    }
    if (request === "교환완료") {
      return (
        <TradeImgContainer>
          <TradeImg src={tradecomplete} />
        </TradeImgContainer>
      );
    }
  };
  return (
    <CardContainer>
      <Container>
        <Date>2023-8-22</Date>
        {tradeRequestState()}
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
        <Title>내 물건</Title>
        <GoodsTitle>가디언즈 오브 갤럭시 오리지널 티켓</GoodsTitle>
        <Address>서울시 서초구 서초1동</Address>
      </ContentsContainer>
      {tradeRequestStateBar()}
      <ButtonContainer>
        <RequestStateButton
          requestState={requestState}
          setRequestState={setRequestState}
        />
      </ButtonContainer>
    </CardContainer>
  );
};
const TradeImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TradeImg = styled.img`
  width: 328px;
  height: 43px;

  margin-top: 30px;
`;
const CardContainer = styled.div`
  width: 368px;
  height: 520px;
  border-radius: 10px;
  border: 1px solid #d5d4d4;
  position: relative;
  margin-bottom: 24px;
`;

const Container = styled.div`
  display: flex;
`;

const Date = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  height: 44px;
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

const TradeRequestIng = styled.div`
  width: 110px;
  height: 44px;
  background-color: #fcf6e9;
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

const TradeRequestCancel = styled.div`
  width: 110px;
  height: 44px;
  background-color: rgba(223, 55, 55, 0.1);
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

const TradeRequestComplete = styled.div`
  width: 110px;
  height: 44px;
  background-color: #efefef;
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
  margin-top: 20px;
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

// const TradeStateContaner = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-family: "Pretendard";
//   font-size: 14px;
//   font-weight: 400;
//   padding: 10px 20px 0px 20px;
// `;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 16px;
`;

export default TradeRequestCard;
