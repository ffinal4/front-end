import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import goodsexchange from "../../assets/icon/goodsexchange.png";
import goods from "../../assets/images/kangaroowhy.png";
import { StRequestState } from "../../styles/RequestStateBox";
import DetailGoodsModal from "./DetailGoodsModal";
import SendRequestButton from "./SendRequestButton";

const TradeRequestCard = ({ item, data }: any) => {
  const [requestState, setRequestState] = useState({
    request: item?.requestStatus,
  });
  const [border, setBorder] = useState<string>();
  const [opacity, setOpacity] = useState<string>();
  const [detailModalOpen, setDetailModalOpen] = useState<boolean>(false);
  const { request } = requestState;
  const goodsListResponseDto = item?.goodsListResponseDto;
  const goodsListResponseDtos = item?.goodsListResponseDtos[0];

  const goodsDetailModalOnclick = () => {
    setDetailModalOpen(!detailModalOpen);
  };

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

  const tradeRequestState = () => {
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

  const tradeRequestGoods = () => {
    if (request === "REQUEST" || "DONE" || "CANCEL") {
      return (
        <GoodsContainer>
          <GoodsImg
            src={goodsListResponseDto.imageUrl}
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
          <GoodsImg src={goodsListResponseDtos.imageUrl} />
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
        <Date>2023-8-22</Date>
        {tradeRequestState()}
      </Container>
      {tradeRequestGoods()}
      <ContentsContainer>
        <Title>상대물건</Title>
        <GoodsTitle>{goodsListResponseDto.title}</GoodsTitle>
        <Address>{goodsListResponseDto.location}</Address>
        <Title>내 물건</Title>
        <GoodsTitle>{goodsListResponseDtos.title}</GoodsTitle>
        <Address>{goodsListResponseDtos.location}</Address>
      </ContentsContainer>

      <SendRequestButton
        data={data}
        item={item}
        requestState={requestState}
        setRequestState={setRequestState}
      />
    </CardContainer>
  );
};
export const TradeImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TradeImg = styled.img`
  width: 328px;
  height: 43px;

  margin-top: 30px;
`;
export const CardContainer = styled.div`
  width: 368px;
  height: 467px;
  border-radius: 10px;
  border: 1px solid #d5d4d4;
  position: relative;
  margin-bottom: 24px;
`;

export const Container = styled.div`
  display: flex;
`;

export const Date = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  height: 44px;
  margin: 10px 0px 0px 20px;
`;

export const DotImg = styled.img`
  width: 8px;
  height: 8px;
  margin-right: 6px;
`;

export const GoodsContainer = styled.div`
  border-bottom: 1px solid #d5d4d4;
  padding-bottom: 20px;
  width: 328px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 44px;
`;

export const GoodsImg = styled.div<{ src : string }>`
  width: 80px;
  height: 80px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
`;

export const OtherGoodsImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
`;

export const ContentsContainer = styled.div`
  padding: 0px 20px 0px 20px;
`;

export const ExchangeImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const Title = styled.div`
  color: #ec8d49;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
`;

export const GoodsTitle = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  margin-top: 6px;
  margin-bottom: 6px;
`;

export const Address = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  color: #adadad;
`;

// export const TradeStateContaner = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-family: "Pretendard";
//   font-size: 14px;
//   font-weight: 400;
//   padding: 10px 20px 0px 20px;
// `;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 16px;
`;

export default TradeRequestCard;
