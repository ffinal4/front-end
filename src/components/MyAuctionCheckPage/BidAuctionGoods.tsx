import React from "react";
import { styled } from "styled-components";
import {
  ExchangeImg,
  GoodsContainer,
  GoodsImg,
} from "../TradeRequestPage/TradeRequestCard";
import timer from "../../assets/icon/timer.png";
import goods from "../../assets/images/eye.svg";

interface BidAuctionGoodsProps {
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  // item: any;
}

const BidAuctionGoods: React.FC<BidAuctionGoodsProps> = ({
  requestState,
  setRequestState,
  // item,
}) => {
  const { request } = requestState;

  const bidAuctionGoodsState = () => {
    if (request === "입찰중") {
      return (
        <GoodsContainer>
          <GoodsImg src={goods} />
          <ExchangeImg src={timer} />
          <GoodsImg src={goods} />
        </GoodsContainer>
      );
    }
    if (request === "입찰성공") {
      return (
        <GoodsContainer>
          <GoodsImg src={goods} />
          <ExchangeImg src={timer} />
          <GoodsImg src={goods} />
        </GoodsContainer>
      );
    }
    if (request === "교환완료") {
      return (
        <GoodsContainer>
          <GoodsImg src={goods} />
          <ExchangeImg src={timer} />
          <GoodsImg src={goods} />
        </GoodsContainer>
      );
    }
    if (request === "입찰실패") {
      return (
        <GoodsContainer>
          <GoodsImg src={goods} />
          <ExchangeImg src={timer} />
          <GoodsImg src={goods} />
        </GoodsContainer>
      );
    }
  };

  return <div>{bidAuctionGoodsState()}</div>;
};

export default BidAuctionGoods;
