import React, { useState, useEffect } from "react";
import {
  Address,
  ButtonContainer,
  CardContainer,
  Container,
  ContentsContainer,
  Date,
  GoodsContainer,
  GoodsTitle,
  TradeImg,
  TradeImgContainer,
} from "../TradeRequestPage/TradeRequestCard";
import AuctionRequestGoods from "./AuctionRequestGoods";
import { StAuctionIng, Title } from "./AuctionRequestCard";
import RequestStateButton from "../TradeRequestPage/RequestStateButton";
import { StRequestState } from "../../styles/RequestStateBox";
import auctionrequest from "../../assets/icon/auctionrequest.png";
import auctioncomplete from "../../assets/icon/auctioncomplete.png";
import auctiontradecomplete from "../../assets/icon/auctiontradecomplete.png";

const BidAuctionCard = () => {
  const [requestState, setRequestState] = useState({ request: "입찰실패" });
  const [border, setBorder] = useState<string>();
  const [opacity, setOpacity] = useState<string>();
  const { request } = requestState;

  useEffect(() => {
    if (request === "입찰중") {
      setBorder("1px solid #D5D4D4");
    }
    if (request === "입찰성공") {
      setBorder("2px solid #58ABF7");
    }
    if (request === "교환완료") {
      setBorder("1px solid #D5D4D4");
    }
    if (request === "입찰실패") {
      setBorder("1px solid #D5D4D4");
      setOpacity("0.5");
    }
  }, [request]);

  const auctionRequestState = () => {
    if (request === "입찰중") {
      return (
        <StAuctionIng backgroundcolor="white" color="#58ABF7" border="#58ABF7">
          입찰중
        </StAuctionIng>
      );
    }
    if (request === "입찰성공") {
      return (
        <StRequestState
          backgroundcolor="#58ABF7"
          color="white"
          border="#58ABF7"
        >
          입찰성공
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
    if (request === "입찰실패") {
      return (
        <StRequestState
          backgroundcolor="#EFEFEF"
          color="#ADADAD"
          border="#EFEFEF"
        >
          입찰실패
        </StRequestState>
      );
    }
  };

  const auctionRequestStateBar = () => {
    if (request === "입찰중") {
      return (
        <TradeImgContainer>
          <TradeImg src={auctionrequest} />
        </TradeImgContainer>
      );
    }
    if (request === "입찰성공") {
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
    if (request === "입찰중") {
      return (
        <div>
          <Title>경매상황</Title>
          <GoodsTitle>현재 총 12명이 입찰중이에요.</GoodsTitle>
          <Address>경매 종료까지 00:01:12</Address>
        </div>
      );
    }
    if (request === "입찰성공") {
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
    <CardContainer style={{ border: `${border}`, opacity: `${opacity}` }}>
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

export default BidAuctionCard;
