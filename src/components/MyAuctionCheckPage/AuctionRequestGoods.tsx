import React, { useState } from "react";
import { styled } from "styled-components";
import { ExchangeImg, GoodsImg } from "../TradeRequestPage/TradeRequestCard";
import timer from "../../assets/icon/timer.png";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { getAuctionBidDetailApi } from "../../api/acution";

interface AuctionRequestGoodsProps {
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  item: any;
  setDetailModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDetailData: React.Dispatch<React.SetStateAction<any>>;
}

const AuctionRequestGoods: React.FC<AuctionRequestGoodsProps> = ({
  requestState,
  setRequestState,
  item,
  setDetailModalOpen,
  setDetailData
}) => {
  const navigate = useNavigate();
  const { request } = requestState;
  const testListResponseDto = item?.testListResponseDto;
  const bidListResponseDtos = item?.bidListResponseDtos;

//   const mutation = useMutation(() => getAuctionBidDetailApi(auctionId, userId), {
//     onSuccess: (res) => {
//         console.log("상세보기", res)
//         setDetailModalOpen(true);
//         setDetailData(res);
//     }
// });

  const onCilckDetailModalHandler = () => {
    setDetailModalOpen(true);
    // mutation.mutate();
  };

  const auctionGoodsState = () => {
    if (request === "AUCTION") {
      return <GoodsImg
        key={testListResponseDto?.auctionId}
        src={testListResponseDto.image}
        onClick={() => navigate(`/auctiondetail/${testListResponseDto?.auctionId}`)}
      />;
    }
    if (request === "END") {
      if (bidListResponseDtos?.length > 0) {
        return (
          <GoodsContainer>
            <GoodsImg
              key={testListResponseDto?.auctionId}
              src={testListResponseDto.image}
              onClick={() => navigate(`/auctiondetail/${testListResponseDto?.auctionId}`)}
            />
            <ExchangeImg src={timer} />
            {(bidListResponseDtos?.length > 1)
              ? <GoodsImg src={bidListResponseDtos[0].goodsImg}>
                <GoodsCount>{bidListResponseDtos?.length}개의 물건</GoodsCount>
              </GoodsImg>
              : <GoodsImg src={bidListResponseDtos[0].goodsImg} />}
          </GoodsContainer>
        );
      } else {
        return <GoodsImg
          key={testListResponseDto?.auctionId}
          src={testListResponseDto.image}
          onClick={() => navigate(`/auctiondetail/${testListResponseDto?.auctionId}`)}
        />;
      };
    }
    if (request === "DONE") {
      return (
        <GoodsContainer>
          <GoodsImg
            key={testListResponseDto?.auctionId}
            src={testListResponseDto.image}
            onClick={() => navigate(`/auctiondetail/${testListResponseDto?.auctionId}`)}
          />
          <ExchangeImg src={timer} />
          {(bidListResponseDtos?.length > 1)
              ? <GoodsImg src={bidListResponseDtos[0].goodsImg}>
                <GoodsCount>{bidListResponseDtos?.length}개의 물건</GoodsCount>
              </GoodsImg>
              : <GoodsImg src={bidListResponseDtos[0].goodsImg} />}
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

export const GoodsCount = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  background-color: #00000080;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: #FCFCFC;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AuctionRequestGoods;
