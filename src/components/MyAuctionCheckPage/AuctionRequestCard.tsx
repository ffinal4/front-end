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
} from "../TradeRequestPage/TradeRequestCard";
import RequestStateButton from "./RequestStateButton";
import { StRequestState } from "../../styles/RequestStateBox";
import AuctionRequestGoods from "./AuctionRequestGoods";

const AuctionRequestCard = ({ setDetailData, item, setDto, setSellerPicks, sellerPicks, setDetailModalOpen }: any) => {
  const testListResponseDto = item?.testListResponseDto;
  const [requestState, setRequestState] = useState({
    request: testListResponseDto.auctionStatus,
  });
  const [border, setBorder] = useState<string>();
  const [opacity, setOpacity] = useState<string>();
  const { request } = requestState;

  useEffect(() => {
    if (testListResponseDto.auctionStatus === "AUCTION") {
      setBorder("1px solid #D5D4D4");
    }
    if (testListResponseDto.auctionStatus === "END") {
      if (testListResponseDto.bidCount === 0) {
        setBorder("1px solid #D5D4D4");
        setOpacity("0.5");
      } else {
        setBorder("2px solid #58ABF7");
      };
    }
    if (testListResponseDto.auctionStatus === "TRADING") {
      setBorder("2px solid #58ABF7");
    }
    if (testListResponseDto.auctionStatus === "DONE") {
      setBorder("1px solid #D5D4D4");
    }
    if (testListResponseDto.auctionStatus === "CANCEL") {
      setBorder("1px solid #D5D4D4");
      setOpacity("0.5");
    }
  }, []);

  const auctionRequestState = () => {
    if (testListResponseDto.auctionStatus === "AUCTION") {
      return (
        <StAuctionIng backgroundcolor="white" color="#58ABF7" border="#58ABF7">
          경매중
        </StAuctionIng>
      );
    }
    if (testListResponseDto.auctionStatus === "END") {
      return (
        (testListResponseDto.bidCount === 0)
          ? <StRequestState
            backgroundcolor="#EFEFEF"
            color="#ADADAD"
            border="#EFEFEF"
          >
            입찰실패
          </StRequestState>
          : <StRequestState
            backgroundcolor="#58ABF7"
            color="white"
            border="#58ABF7"
          >
            경매종료
          </StRequestState>
        
      );
    }
    if (testListResponseDto.auctionStatus === "TRADING") {
      return (
        <StRequestState
          backgroundcolor="#58ABF7"
          color="white"
          border="#58ABF7"
        >
          거래진행중
        </StRequestState>
      );
    }
    if (testListResponseDto.auctionStatus === "DONE") {
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
    if (testListResponseDto.auctionStatus === "CANCEL") {
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
    // 경매중
    if (testListResponseDto.auctionStatus === "AUCTION") {
      return (
        <div>
          <Title>경매상황</Title>
          <GoodsTitle>
            현재 총 {testListResponseDto.bidCount} 명이 경매에 입찰했어요.
          </GoodsTitle>
          <Address>
            경매 종료까지 {testListResponseDto.timeRemaining.days}:
            {testListResponseDto.timeRemaining.hours}:
            {testListResponseDto.timeRemaining.minutes}:
            {testListResponseDto.timeRemaining.seconds}
          </Address>
        </div>
      );
    }
    //경매종료
    if (testListResponseDto.auctionStatus === "END") {
      if (testListResponseDto.bidCount === 0) {
        // bidCount가 0이면 request를 "CANCEL"로 변경
        // setRequestState({ request: "CANCEL" });
        return (
          <div>
            <Title>경매상황</Title>
            <GoodsTitle>총 0명이 경매에 입찰했어요.</GoodsTitle>
          </div>
        );
      } else {
        if (item?.bidListResponseDtos.length > 0) {
          return (
            <div>
              <Title>입찰</Title>
              <GoodsTitle>{item?.bidListResponseDtos[0].title}</GoodsTitle>
              <Address>{item?.bidListResponseDtos[0].location}</Address>
            </div>
          );
        } else {
          return (
            <div>
              <Title>경매상황</Title>
              <GoodsTitle>
                현재 총 {testListResponseDto.bidCount} 명이 입찰중이에요.
              </GoodsTitle>
              <Address>
                {/* 입찰품 선택까지 {testListResponseDto.timeRemaining.days}:
              {testListResponseDto.timeRemaining.hours}:
              {testListResponseDto.timeRemaining.minutes}:
              {testListResponseDto.timeRemaining.seconds} */}
              입찰품을 선택해주세요.
              </Address>
            </div>
          );
        };
      }
    }
    // 교환완료
    if (testListResponseDto.auctionStatus === "DONE"
      // || testListResponseDto.auctionStatus === "TRADING"
      ) {
      return (
        <div>
          <Title>입찰</Title>
          <GoodsTitle>{item?.bidListResponseDtos[0].title}</GoodsTitle>
          <Address>{item?.bidListResponseDtos[0].location}</Address>
        </div>
      );
    }
    // 경매실패
    if (testListResponseDto.auctionStatus === "CANCEL") {
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
        <Date>{testListResponseDto.auctionEndTime.slice(0, 10)}</Date>
        {auctionRequestState()}
      </Container>
      <GoodsContainer>
        <AuctionRequestGoods
          requestState={requestState}
          setRequestState={setRequestState}
          item={item}
          setDetailModalOpen={setDetailModalOpen}
          setDetailData={setDetailData}
        />
      </GoodsContainer>

      <ContentsContainer>
        <Title>경매</Title>
        <GoodsTitle>{testListResponseDto.title}</GoodsTitle>
        <Address>{testListResponseDto.location}</Address>
        {auctionCondition()}
      </ContentsContainer>
      <ButtonContainer>
        <RequestStateButton
          requestState={requestState}
          setRequestState={setRequestState}
          item={item}
          setDto={setDto}
          setSellerPicks={setSellerPicks}
          sellerPicks={sellerPicks}
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
