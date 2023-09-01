import React from "react";
import { styled } from "styled-components";
import { ExchangeImg, GoodsImg } from "../TradeRequestPage/TradeRequestCard";
import timer from "../../assets/icon/timer.png";

interface AuctionRequestGoodsProps {
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  item: any;
}

const AuctionRequestGoods: React.FC<AuctionRequestGoodsProps> = ({
  requestState,
  setRequestState,
  item,
}) => {
  const { request } = requestState;

  const auctionGoodsState = () => {
    if (request === item?.testListResponseDto.auctionStatus) {
      return <GoodsImg src={item?.testListResponseDto.image} />;
    }
    if (request === item?.testListResponseDto.auctionStatus) {
      return <GoodsImg src={item?.testListResponseDto.image} />;
    }
    if (request === item?.testListResponseDto.auctionStatus) {
      return (
        <GoodsContainer>
          <GoodsImg src={item?.testListResponseDto.image} />
          <ExchangeImg src={timer} />
          <GoodsImg src={item?.testListResponseDto.bidImg} />
        </GoodsContainer>
      );
    }
    if (request === item?.testListResponseDto.auctionStatus) {
      return <GoodsImg src={item?.testListResponseDto.image} />;
    }
  };
  return <div>{auctionGoodsState()}</div>;
};

const GoodsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 44px;
`;

export default AuctionRequestGoods;
