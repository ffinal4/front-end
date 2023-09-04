import React from "react";
import {
  ExchangeImg,
  GoodsContainer,
  GoodsImg,
} from "../TradeRequestPage/TradeRequestCard";
import timer from "../../assets/icon/timer.png";
import { GoodsCount } from "./AuctionRequestGoods";
import Empty from "../../assets/images/defaultprofile.png"
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const { request } = requestState;
  const testListResponseDto = item?.testListResponseDto;
  const bidListResponseDtos = item?.bidListResponseDtos[0];

  const bidAuctionGoodsState = () => {
    if (item?.bidListResponseDtos.length > 1) {
      return (
        <GoodsContainer>
          <GoodsImg
            key={testListResponseDto.auctionId}
            src={testListResponseDto.image}
            onClick={() => navigate(`/auctiondetail/${testListResponseDto.auctionId}`)}
          />
          <ExchangeImg src={timer} />
          <GoodsImg
            src={bidListResponseDtos.goodsImg}
            onClick={() => navigate("/mypocket")}
          >
            <GoodsCount>{item?.bidListResponseDtos.length}개의 물건</GoodsCount>
          </GoodsImg>
        </GoodsContainer>
      );
    } else {
      return (
        <GoodsContainer>
          <GoodsImg
            key={testListResponseDto.auctionId}
            src={testListResponseDto.image}
            onClick={() => navigate(`/auctiondetail/${testListResponseDto.auctionId}`)}
          />
          <ExchangeImg src={timer} />
          <GoodsImg
            src={bidListResponseDtos.goodsImg}
            onClick={() => navigate("/mypocket")}
          />
        </GoodsContainer>
      );
    };
    // if (request === "BIDDING") {
    //   return (
    //     <GoodsContainer>
    //       <GoodsImg src={testListResponseDto.image} />
    //       <ExchangeImg src={timer} />
    //       <GoodsImg src={bidListResponseDtos.goodsImg} />
    //     </GoodsContainer>
    //   );
    // }
    // if (request === "SUCCESS") {
    //   return (
    //     <GoodsContainer>
    //       <GoodsImg src={testListResponseDto.image} />
    //       <ExchangeImg src={timer} />
    //       <GoodsImg src={bidListResponseDtos.goodsImg} />
    //     </GoodsContainer>
    //   );
    // }
    // if (request === "DONE") {
    //   return (
    //     <GoodsContainer>
    //       <GoodsImg src={testListResponseDto.image} />
    //       <ExchangeImg src={timer} />
    //       <GoodsImg src={bidListResponseDtos.goodsImg} />
    //     </GoodsContainer>
    //   );
    // }
    // if (request === "FAIL") {
    //   return (
    //     <GoodsContainer>
    //       <GoodsImg src={testListResponseDto.image} />
    //       <ExchangeImg src={timer} />
    //       <GoodsImg src={bidListResponseDtos.goodsImg} />
    //     </GoodsContainer>
    //   );
    // }
  };

  return <div>{bidAuctionGoodsState()}</div>;
};

export default BidAuctionGoods;
