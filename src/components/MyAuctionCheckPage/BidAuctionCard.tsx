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
  const [border, setBorder] = useState<string>();
  const [opacity, setOpacity] = useState<string>();

  useEffect(() => {
    if (bidListResponseDtos.bidStatus === "BIDDING") {
      setBorder("1px solid #D5D4D4");
    }
    if (bidListResponseDtos.bidStatus === "SUCCESS"
      || bidListResponseDtos.bidStatus === "TRADING") {
      setBorder("2px solid #58ABF7");
    }
    if (bidListResponseDtos.bidStatus === "DONE") {
      setBorder("1px solid #D5D4D4");
    }
    if (bidListResponseDtos.bidStatus === "FAIL") {
      setBorder("1px solid #D5D4D4");
      setOpacity("0.5");
    }
  }, []);

  const auctionRequestState = () => {
    if (bidListResponseDtos.bidStatus === "BIDDING") {
      return (
        <StAuctionIng backgroundcolor="white" color="#58ABF7" border="#58ABF7">
          입찰중
        </StAuctionIng>
      );
    } else if (bidListResponseDtos.bidStatus === "SUCCESS") {
      return (
        <StRequestState
          backgroundcolor="#58ABF7"
          color="white"
          border="#58ABF7"
        >
          입찰성공
        </StRequestState>
      );
    } else if (bidListResponseDtos.bidStatus === "TRADING") {
      return (
        <StRequestState
          backgroundcolor="#58ABF7"
          color="white"
          border="#58ABF7"
        >
          교환진행중
        </StRequestState>
      );
    } else if (bidListResponseDtos.bidStatus === "DONE") {
      return (
        <StRequestState
          backgroundcolor="#EFEFEF"
          color="black"
          border="#EFEFEF"
        >
          교환완료
        </StRequestState>
      );
    } else {
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
    if (item?.bidListResponseDtos.length > 1) {
      return (
        <div>
          <Title>입찰</Title>
          <GoodsTitle>{bidListResponseDtos.title} 외 {item?.bidListResponseDtos.length - 1}개</GoodsTitle>
          <Address>{bidListResponseDtos.location}</Address>
        </div>
      );
    } else {
      return (
        <div>
          <Title>입찰</Title>
          <GoodsTitle>{bidListResponseDtos.title}</GoodsTitle>
          <Address>{bidListResponseDtos.location}</Address>
        </div>
      );
    };
  };
  
  return (
    <CardContainer style={{ border: `${border}`, opacity: `${opacity}` }}>
      <Container>
        <Date>{testListResponseDto.auctionEndTime.slice(0, 10)}</Date>
        {auctionRequestState()}
      </Container>
      <div>
        <BidAuctionGoods
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
          item={item}
        />
      </ButtonContainer>
    </CardContainer>
  );
};

export default BidAuctionCard;
