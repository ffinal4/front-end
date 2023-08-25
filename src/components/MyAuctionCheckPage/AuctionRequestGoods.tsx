import React from "react";
import { styled } from "styled-components";
import { ExchangeImg, GoodsImg } from "../TradeRequestPage/TradeRequestCard";
import goods from "../../assets/icon/peeppo.png";
import goodsexchange from "../../assets/icon/goodsexchange.png";

interface AuctionRequestGoodsProps {
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
}

const AuctionRequestGoods: React.FC<AuctionRequestGoodsProps> = ({
  requestState,
  setRequestState,
}) => {
  const { request } = requestState;

  const auctionGoodsState = () => {
    if (request === "경매중") {
      return <GoodsImg src={goods} />;
    }
    if (request === "경매종료") {
      return <GoodsImg src={goods} />;
    }
    if (request === "교환완료") {
      return (
        <GoodsContainer>
          <GoodsImg src={goods} />
          <ExchangeImg src={goodsexchange} />
          <GoodsImg src={goods} />
        </GoodsContainer>
      );
    }
    if (request === "입찰실패") {
      return <GoodsImg src={goods} />;
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
