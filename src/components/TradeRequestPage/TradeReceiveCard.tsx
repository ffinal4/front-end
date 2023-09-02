import React, { useState, useEffect } from "react";
import {
  Address,
  CardContainer,
  Container,
  ContentsContainer,
  Date,
  ExchangeImg,
  GoodsContainer,
  GoodsImg,
  GoodsTitle,
  OtherGoodsImg,
  Title,
} from "./TradeRequestCard";
import RequestStateButton, { ButtonContainer } from "./RequestStateButton";
import { StRequestState } from "../../styles/RequestStateBox";
import goodsexchange from "../../assets/icon/goodsexchange.png";
import goods from "../../assets/images/kangaroowhy.png";
import DetailGoodsModal from "./DetailGoodsModal";

const TradeReceiveCard = ({ item }: any) => {
  const goodsListResponseDto = item?.goodsListResponseDto;
  const goodsListResponseDtos = item?.goodsListResponseDtos[0];
  const tradeDate = item?.createdAt;
  const [requestState, setRequestState] = useState({
    request: item?.requestStatus,
  });
  const [border, setBorder] = useState<string>();
  const [opacity, setOpacity] = useState<string>();
  const [detailModalOpen, setDetailModalOpen] = useState<boolean>(false);
  const { request } = requestState;

  //   const goodsDetailModalOnclick = () => {
  //     setDetailModalOpen(!detailModalOpen);
  //   };

  useEffect(() => {
    if (request === "REQUEST") {
      setBorder("1px solid #D5D4D4");
    }
    if (request === "TRADING") {
      setBorder("2px solid #EC8D49");
    }
    if (request === "DONE") {
      setBorder("1px solid  #D5D4D4");
    }
    if (request === "CANCEL") {
      setBorder("1px solid #EFEFEF");
      setOpacity("0.5");
    }
  }, [request]);

  const tradeReceiveState = () => {
    if (request === "REQUEST") {
      return (
        <StRequestState
          backgroundcolor="white"
          color="#EC8D49"
          border="#EC8D49"
        >
          교환요청
        </StRequestState>
      );
    }
    if (request === "TRADING") {
      return (
        <StRequestState
          backgroundcolor="#EC8D49"
          color="white"
          border="#EC8D49"
        >
          교환진행중
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
    if (request === "CANCEL") {
      return (
        <StRequestState
          backgroundcolor="#EFEFEF"
          color="#ADADAD"
          border="#EFEFEF"
        >
          교환취소
        </StRequestState>
      );
    }
  };

  const tradeReceiveGoods = () => {
    if (request === "REQUEST" || "DONE" || "CANCEL") {
      return (
        <GoodsContainer>
          <GoodsImg
            src={goodsListResponseDtos.imageUrl}
            // onClick={goodsDetailModalOnclick}
          />
          {detailModalOpen && (
            <div style={{ position: "absolute" }}>
              <DetailGoodsModal
                detailModalOpen={detailModalOpen}
                setDetailModalOpen={setDetailModalOpen}
              />
            </div>
          )}
          <ExchangeImg src={goodsexchange} />
          <GoodsImg src={goodsListResponseDto.imageUrl} />
        </GoodsContainer>
      );
    }
    if (request === "TRADING") {
      return (
        <GoodsContainer>
          <GoodsImg src={goods} />
          <ExchangeImg src={goodsexchange} />
          <GoodsImg src={goods} />
          <OtherGoodsImg src={goods} />
        </GoodsContainer>
      );
    }
  };

  return (
    <CardContainer style={{ border: `${border}`, opacity: `${opacity}` }}>
      <Container>
        <Date>{tradeDate.slice(0, 10)}</Date>
        {tradeReceiveState()}
      </Container>
      {tradeReceiveGoods()}
      <ContentsContainer>
        <Title>상대물건</Title>
        <GoodsTitle>{goodsListResponseDtos.title}</GoodsTitle>
        <Address>{goodsListResponseDtos.location}</Address>
        <Title>내 물건</Title>
        <GoodsTitle>{goodsListResponseDto.title}</GoodsTitle>
        <Address>{goodsListResponseDto.location}</Address>
      </ContentsContainer>
      <RequestStateButton
        requestState={requestState}
        setRequestState={setRequestState}
        item={item}
      />
    </CardContainer>
  );
};

export default TradeReceiveCard;
