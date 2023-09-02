import React from "react";
import {
  ExchangeImg,
  GoodsContainer,
  GoodsImg,
} from "../TradeRequestPage/TradeRequestCard";
import timer from "../../assets/icon/timer.png";

interface BidAuctionGoodsProps {
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  item: any;
}

const BidAuctionGoods: React.FC<BidAuctionGoodsProps> = ({
  requestState,
  setRequestState,
  item,
}) => {
  const { request } = requestState;
  const testListResponseDto = item?.testListResponseDto;
  const bidListResponseDtos = item?.bidListResponseDtos[0];

  const bidAuctionGoodsState = () => {
    if (request === "BIDDING") {
      return (
        <GoodsContainer>
          <GoodsImg src={testListResponseDto.image} />
          <ExchangeImg src={timer} />
          <GoodsImg src={bidListResponseDtos.goodsImg} />
        </GoodsContainer>
      );
    }
    if (request === "SUCCESS") {
      return (
        <GoodsContainer>
          <GoodsImg src={testListResponseDto.image} />
          <ExchangeImg src={timer} />
          <GoodsImg src={bidListResponseDtos.goodsImg} />
        </GoodsContainer>
      );
    }
    if (request === "DONE") {
      return (
        <GoodsContainer>
          <GoodsImg src={testListResponseDto.image} />
          <ExchangeImg src={timer} />
          <GoodsImg src={bidListResponseDtos.goodsImg} />
        </GoodsContainer>
      );
    }
    if (request === "FAIL") {
      return (
        <GoodsContainer>
          <GoodsImg src={testListResponseDto.image} />
          <ExchangeImg src={timer} />
          <GoodsImg src={bidListResponseDtos.goodsImg} />
        </GoodsContainer>
      );
    }
  };

  return <div>{bidAuctionGoodsState()}</div>;
};

export default BidAuctionGoods;
