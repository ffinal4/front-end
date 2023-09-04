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
  Title,
} from "./TradeRequestCard";
import RequestStateButton from "./RequestStateButton";
import { StRequestState } from "../../styles/RequestStateBox";
import goodsexchange from "../../assets/icon/goodsexchange.png";

const TradeReceiveCard = ({ item, data }: any) => {
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

  const goodsDetailModalOnclick = () => {
    setDetailModalOpen(!detailModalOpen);
  };

  useEffect(() => {
    if (item?.requestStatus === "REQUEST") {
      setBorder("1px solid #D5D4D4");
    }
    if (item?.requestStatus === "TRADING") {
      setBorder("2px solid #EC8D49");
    }
    if (item?.requestStatus === "DONE") {
      setBorder("1px solid  #D5D4D4");
    }
    if (item?.requestStatus === "CANCEL") {
      setBorder("1px solid #EFEFEF");
      setOpacity("0.5");
    }
  }, [item?.requestStatus]);

  const tradeReceiveState = () => {
    if (item?.requestStatus === "REQUEST") {
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
    if (item?.requestStatus === "TRADING") {
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
    if (item?.requestStatus === "DONE") {
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
    if (item?.requestStatus === "CANCEL") {
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
    if (item?.requestStatus === "REQUEST" || "DONE" || "CANCEL" || "TRADING") {
      return (
        <GoodsContainer>
          <GoodsImg
            src={goodsListResponseDtos.imageUrl}
            onClick={goodsDetailModalOnclick}
          />
          {detailModalOpen && (
            <div style={{ position: "absolute" }}>
              {/* <DetailGoodsModal
                detailModalOpen={detailModalOpen}
                setDetailModalOpen={setDetailModalOpen}
              /> */}
            </div>
          )}
          <ExchangeImg src={goodsexchange} />
          <GoodsImg src={goodsListResponseDto.imageUrl} />
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
        data={data}
        item={item}
      />
    </CardContainer>
  );
};

export default TradeReceiveCard;
