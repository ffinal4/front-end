import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
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
import auctionrequest from "../../assets/icon/auctionrequest.png";
import auctioncomplete from "../../assets/icon/auctioncomplete.png";
import auctiontradecomplete from "../../assets/icon/auctiontradecomplete.png";
import RequestStateButton from "./RequestStateButton";
import { StRequestState } from "../../styles/RequestStateBox";
import AuctionRequestGoods from "./AuctionRequestGoods";

const AuctionRequestCard = ({ item }: any) => {
  const [requestState, setRequestState] = useState({
    request: item?.testListResponseDto.auctionStatus,
  });

  const [border, setBorder] = useState<string>();
  const [opacity, setOpacity] = useState<string>();
  const { request } = requestState;

  useEffect(() => {
    if (request === item?.testListResponseDto.auctionStatus) {
      setBorder("1px solid #D5D4D4");
    }
    if (request === item?.testListResponseDto.auctionStatus) {
      setBorder("2px solid #58ABF7");
    }
    if (request === item?.testListResponseDto.auctionStatus) {
      setBorder("1px solid #D5D4D4");
    }
    if (request === item?.testListResponseDto.auctionStatus) {
      setBorder("1px solid #D5D4D4");
      setOpacity("0.5");
    }
  }, [request]);

  const auctionRequestState = () => {
    if (request === item?.testListResponseDto.auctionStatus) {
      return (
        <StAuctionIng backgroundcolor="white" color="#58ABF7" border="#58ABF7">
          경매중
        </StAuctionIng>
      );
    }
    if (request === item?.testListResponseDto.auctionStatus) {
      return (
        <StRequestState
          backgroundcolor="#58ABF7"
          color="white"
          border="#58ABF7"
        >
          경매종료
        </StRequestState>
      );
    }
    if (request === item?.testListResponseDto.auctionStatus) {
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
    if (request === item?.testListResponseDto.auctionStatus) {
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
    if (request === item?.testListResponseDto.auctionStatus) {
      return (
        <TradeImgContainer>
          <TradeImg src={auctionrequest} />
        </TradeImgContainer>
      );
    }
    if (request === item?.testListResponseDto.auctionStatus) {
      return (
        <TradeImgContainer>
          <TradeImg src={auctioncomplete} />
        </TradeImgContainer>
      );
    }
    if (request === item?.testListResponseDto.auctionStatus) {
      return (
        <TradeImgContainer>
          <TradeImg src={auctiontradecomplete} />
        </TradeImgContainer>
      );
    }
  };

  const auctionCondition = () => {
    if (request === item?.testListResponseDto.auctionStatus) {
      return (
        <div>
          <Title>경매상황</Title>
          <GoodsTitle>{item?.testListResponseDto.bidCount}</GoodsTitle>
          <Address>{item?.testListResponseDto.timeRemaining}</Address>
        </div>
      );
    }
    if (request === item?.testListResponseDto.auctionStatus) {
      return (
        <div>
          <Title>경매상황</Title>
          <GoodsTitle>현재 총 35명이 입찰중이에요.</GoodsTitle>
          <Address>입찰품 선택까지 11:01:12</Address>
        </div>
      );
    }
    if (request === item?.testListResponseDto.auctionStatus) {
      return (
        <div>
          <Title>입찰</Title>
          <GoodsTitle>가디언즈 오브 갤럭시 오리지널 티켓</GoodsTitle>
          <Address>서울시 서초구 서초 1동</Address>
        </div>
      );
    }
    if (request === item?.testListResponseDto.auctionStatus) {
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
        <Date>{item?.testListResponseDto.auctionEndTime}</Date>
        {auctionRequestState()}
      </Container>
      <GoodsContainer>
        <AuctionRequestGoods
          requestState={requestState}
          setRequestState={setRequestState}
          item={item}
        />
      </GoodsContainer>

      <ContentsContainer>
        <Title>경매</Title>
        <GoodsTitle>{item?.testListResponseDto.title}</GoodsTitle>
        <Address>{item?.testListResponseDto.location}</Address>
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
export const StAuctionIng = styled(StRequestState)``;
export const Title = styled.div`
  color: #58abf7;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
`;
export default AuctionRequestCard;
