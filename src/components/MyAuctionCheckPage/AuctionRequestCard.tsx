import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import {
  Address,
  ButtonContainer,
  CardContainer,
  Container,
  ContentsContainer,
  Date,
  DotImg,
  GoodsContainer,
  GoodsTitle,
  TradeImg,
  TradeImgContainer,
} from "../TradeRequestPage/TradeRequestCard";

import bluedot from "../../assets/icon/bluedot.png";
import blackdot from "../../assets/icon/blackdot.png";
import reddot from "../../assets/icon/reddot.png";
import greendot from "../../assets/icon/greendot.png";
import auctionrequest from "../../assets/icon/auctionrequest.png";
import auctioncomplete from "../../assets/icon/auctioncomplete.png";
import auctiontradecomplete from "../../assets/icon/auctiontradecomplete.png";
import RequestStateButton from "./RequestStateButton";
import { StRequestState } from "../../styles/RequestStateBox";
import AuctionRequestGoods from "./AuctionRequestGoods";

const AuctionRequestCard = () => {
  const [requestState, setRequestState] = useState({ request: "경매종료" });
  const [border, setBorder] = useState<string>();
  const { request } = requestState;

  useEffect(() => {
    if (request === "경매중") {
      setBorder("2px solid #58ABF7");
    }
    if (request === "경매종료") {
      setBorder("2px solid #ADADAD");
    }
    if (request === "교환완료") {
      setBorder("1px solid #D5D4D4");
    }
    if (request === "입찰실패") {
      setBorder("1px solid #D5D4D4");
    }
  });

  const auctionRequestState = () => {
    if (request === "경매중") {
      return (
        <StRequestState backgroundcolor="#ECF4FC">
          <DotImg src={bluedot} />
          경매중
        </StRequestState>
      );
    }
    if (request === "경매종료") {
      return (
        <StRequestState backgroundcolor="#EFEFEF">
          <DotImg src={blackdot} />
          경매종료
        </StRequestState>
      );
    }
    if (request === "교환완료") {
      return (
        <StRequestState backgroundcolor="#EFEFEF">
          <DotImg src={greendot} />
          교환완료
        </StRequestState>
      );
    }
    if (request === "입찰실패") {
      return (
        <StRequestState backgroundcolor="rgba(223, 55, 55, 0.10)">
          <DotImg src={reddot} />
          입찰실패
        </StRequestState>
      );
    }
  };

  const auctionRequestStateBar = () => {
    if (request === "경매중") {
      return (
        <TradeImgContainer>
          <TradeImg src={auctionrequest} />
        </TradeImgContainer>
      );
    }
    if (request === "경매종료") {
      return (
        <TradeImgContainer>
          <TradeImg src={auctioncomplete} />
        </TradeImgContainer>
      );
    }
    if (request === "교환완료") {
      return (
        <TradeImgContainer>
          <TradeImg src={auctiontradecomplete} />
        </TradeImgContainer>
      );
    }
  };

  const auctionCondition = () => {
    if (request === "경매중") {
      return (
        <div>
          <Title>경매상황</Title>
          <GoodsTitle>현재 총 12명이 입찰중이에요.</GoodsTitle>
          <Address>경매 종료까지 00:01:12</Address>
        </div>
      );
    }
    if (request === "경매종료") {
      return (
        <div>
          <Title>경매상황</Title>
          <GoodsTitle>현재 총 35명이 입찰중이에요.</GoodsTitle>
          <Address>입찰품 선택까지 11:01:12</Address>
        </div>
      );
    }
    if (request === "교환완료") {
      return (
        <div>
          <Title>입찰</Title>
          <GoodsTitle>가디언즈 오브 갤럭시 오리지널 티켓</GoodsTitle>
          <Address>서울시 서초구 서초 1동</Address>
        </div>
      );
    }
    if (request === "입찰실패") {
      return (
        <div>
          <Title>경매상황</Title>
          <GoodsTitle>총 0명이 경매에 입찰했어요.</GoodsTitle>
        </div>
      );
    }
  };
  return (
    <CardContainer style={{ border: `${border}` }}>
      <Container>
        <Date>2023-8-22</Date>
        {auctionRequestState()}
      </Container>
      <GoodsContainer>
        <AuctionRequestGoods
          requestState={requestState}
          setRequestState={setRequestState}
        />
      </GoodsContainer>

      <ContentsContainer>
        <Title>경매</Title>
        <GoodsTitle>스파이더맨 어크로스 더 유니버스 IMAX 포스터</GoodsTitle>
        <Address>경기도 수원시 영통구</Address>
        {auctionCondition()}
      </ContentsContainer>
      {auctionRequestStateBar()}
      <ButtonContainer>
        <RequestStateButton
          requestState={requestState}
          setRequestState={setRequestState}
        />
      </ButtonContainer>
    </CardContainer>
  );
};

const Title = styled.div`
  color: #58abf7;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
`;
export default AuctionRequestCard;
