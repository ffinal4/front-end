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
  const testListResponseDto = item?.testListResponseDto;

  const auctionGoodsState = () => {
    if (request === "AUCTION") {
      return <GoodsImg src={testListResponseDto.image} />;
    }
    if (request === "END") {
      return <GoodsImg src={testListResponseDto.image} />;
    }
    if (request === "DONE") {
      return (
        <GoodsContainer>
          <GoodsImg src={testListResponseDto.image} />
          <ExchangeImg src={timer} />
          <GoodsImg src={testListResponseDto.bidImg} />
        </GoodsContainer>
      );
    }
    if (request === "CANCEL") {
      return <GoodsImg src={testListResponseDto.image} />;
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
