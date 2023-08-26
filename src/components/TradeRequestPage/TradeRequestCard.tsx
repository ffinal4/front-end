import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import goodsexchange from "../../assets/icon/goodsexchange.png";
import goods from "../../assets/images/kangaroowhy.png";
import traderequest from "../../assets/icon/traderequest.png";
import tradeing from "../../assets/icon/tradeingrequst.png";
import tradecomplete from "../../assets/icon/tradecomplete.png";
import RequestStateButton from "./RequestStateButton";
import { StRequestState } from "../../styles/RequestStateBox";

const TradeRequestCard = () => {
  const [requestState, setRequestState] = useState({ request: "교환요청" });
  const { request } = requestState;
  const [border, setBorder] = useState<string>();

  useEffect(() => {
    if (request === "교환요청") {
      setBorder("1px solid #D5D4D4");
    }
    if (request === "교환진행중") {
      setBorder("2px solid #FBD8BF");
    }
    if (request === "교환완료") {
      setBorder("1px solid  #D5D4D4");
    }
    if (request === "교환취소") {
      setBorder("1px solid #EFEFEF");
    }
  }, []);

  const tradeRequestState = () => {
    if (request === "교환요청") {
      return (
        <StRequestState
          backgroundcolor="white"
          color="#EC8D49"
          border="#EC8D49"
        >
          교환요청
        </StRequestState>
      );
    }
    if (request === "교환진행중") {
      return (
        <StRequestState
          backgroundcolor="#EC8D49"
          color="white"
          border="#EC8D49"
        >
          교환진행중
        </StRequestState>
      );
    }
    if (request === "교환완료") {
      return (
        <StRequestState
          backgroundcolor="#EFEFEF"
          color="black"
          border="#EFEFEF"
        >
          교환완료
        </StRequestState>
      );
    }
    if (request === "교환취소") {
      return (
        <StRequestState
          backgroundcolor="#EFEFEF"
          color="#ADADAD"
          border="#EFEFEF"
        >
          교환취소
        </StRequestState>
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

  const tradeRequestGoods = () => {
    if (request === "교환요청" || "교환완료" || "교환취소") {
      return (
        <GoodsContainer>
          <GoodsImg src={goods} />
          <ExchangeImg src={goodsexchange} />
          <GoodsImg src={goods} />
        </GoodsContainer>
      );
    }
    if (request === "교환진행중") {
      return (
        <GoodsContainer>
          <GoodsImg src={goods} />
          <ExchangeImg src={goodsexchange} />
          <GoodsImg src={goods} />
        </GoodsContainer>
      );
    }
  };

  return (
    <CardContainer style={{ border: `${border}` }}>
      <Container>
        <Date>2023-8-22</Date>
        {tradeRequestState()}
      </Container>
      {tradeRequestGoods()}
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
export const TradeImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TradeImg = styled.img`
  width: 328px;
  height: 43px;

  margin-top: 30px;
`;
export const CardContainer = styled.div`
  width: 368px;
  height: 520px;
  border-radius: 10px;
  border: 1px solid #d5d4d4;
  position: relative;
  margin-bottom: 24px;
`;

export const Container = styled.div`
  display: flex;
`;

export const Date = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  height: 44px;
  margin: 10px 0px 0px 20px;
`;

export const DotImg = styled.img`
  width: 8px;
  height: 8px;
  margin-right: 6px;
`;

export const GoodsContainer = styled.div`
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

export const GoodsImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  border: 1px solid black;
`;

export const ContentsContainer = styled.div`
  padding: 0px 20px 0px 20px;
`;

export const ExchangeImg = styled.img`
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

export const GoodsTitle = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  margin-top: 6px;
  margin-bottom: 6px;
`;

export const Address = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  color: #adadad;
`;

// export const TradeStateContaner = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-family: "Pretendard";
//   font-size: 14px;
//   font-weight: 400;
//   padding: 10px 20px 0px 20px;
// `;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 16px;
`;

export default TradeRequestCard;
