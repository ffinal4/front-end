import React, { useState, useEffect } from "react";
import {
  Address,
  ButtonContainer,
  CardContainer,
  Container,
  ContentsContainer,
  Date,
  GoodsTitle,
} from "../TradeRequestPage/TradeRequestCard";
import { StAuctionIng, Title } from "./AuctionRequestCard";
import { StRequestState } from "../../styles/RequestStateBox";
import BidAuctionGoods from "./BidAuctionGoods";
import BidStateButton from "./BidStateButton";

const BidAuctionCard = ({ item }: any) => {
  const bidListResponseDtos = item?.bidListResponseDtos[0];
  const testListResponseDto = item?.testListResponseDto;
  const [requestState, setRequestState] = useState({
    request: bidListResponseDtos.bidStatus,
  });
  const [border, setBorder] = useState<string>();
  const [opacity, setOpacity] = useState<string>();
  const { request } = requestState;

  useEffect(() => {
    if (request === "BIDDING") {
      setBorder("1px solid #D5D4D4");
    }
    if (request === "SUCCESS") {
      setBorder("2px solid #58ABF7");
    }
    if (request === "DONE") {
      setBorder("1px solid #D5D4D4");
    }
    if (request === "FAIL") {
      setBorder("1px solid #D5D4D4");
      setOpacity("0.5");
    }
  }, [request]);

  const auctionRequestState = () => {
    if (request === "BIDDING") {
      return (
        <StAuctionIng backgroundcolor="white" color="#58ABF7" border="#58ABF7">
          입찰중
        </StAuctionIng>
      );
    }
    if (request === "SUCCESS") {
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
    if (request === "DONE") {
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
    if (request === "FAIL") {
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

  const auctionCondition = () => {
    if (request === "BIDDING") {
      return (
        <div>
          <Title>입찰</Title>
          <GoodsTitle>{bidListResponseDtos.title}</GoodsTitle>
          <Address>{bidListResponseDtos.location}</Address>
        </div>
      );
    }
    if (request === "SUCCESS") {
      return (
        <div>
          <Title>입찰</Title>
          <GoodsTitle>{bidListResponseDtos.title}</GoodsTitle>
          <Address>{bidListResponseDtos.location}</Address>
        </div>
      );
    }
    if (request === "DONE") {
      return (
        <div>
          <Title>입찰</Title>
          <GoodsTitle>{bidListResponseDtos.title}</GoodsTitle>
          <Address>{bidListResponseDtos.location}</Address>
        </div>
      );
    }
    if (request === "FAIL") {
      return (
        <div>
          <Title>입찰</Title>
          <GoodsTitle>{bidListResponseDtos.title}</GoodsTitle>
        </div>
      );
    }
  };
  return (
    <CardContainer style={{ border: `${border}`, opacity: `${opacity}` }}>
      <Container>
        <Date>{testListResponseDto.auctionEndTime.slice(0, 10)}</Date>
        {auctionRequestState()}
      </Container>
      <div>
        <BidAuctionGoods
          requestState={requestState}
          setRequestState={setRequestState}
          item={item}
        />
      </div>

      <ContentsContainer>
        <Title>경매</Title>
        <GoodsTitle>{testListResponseDto.title}</GoodsTitle>
        <Address>{testListResponseDto.location}</Address>
        {auctionCondition()}
      </ContentsContainer>

      <ButtonContainer>
        <BidStateButton
          requestState={requestState}
          setRequestState={setRequestState}
          item={item}
        />
      </ButtonContainer>
    </CardContainer>
  );
};

export default BidAuctionCard;
