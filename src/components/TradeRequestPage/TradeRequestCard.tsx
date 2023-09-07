import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import goodsexchange from "../../assets/icon/goodsexchange.png";
import { StRequestState } from "../../styles/RequestStateBox";
import SendRequestButton from "./SendRequestButton";
import { GoodsCount } from "../MyAuctionCheckPage/AuctionRequestGoods";
import { useNavigate } from "react-router-dom";

const TradeRequestCard = ({ item, data }: any) => {
  const navigate = useNavigate();
  const [requestState, setRequestState] = useState({
    request: item?.requestStatus,
  });
  const [border, setBorder] = useState<string>();
  const [opacity, setOpacity] = useState<string>();
  const { request } = requestState;
  const goodsListResponseDto = item?.goodsListResponseDto;
  const goodsListResponseDtos = item?.goodsListResponseDtos[0];

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

  const tradeRequestState = () => {
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

  const tradeRequestGoods = () => {
    if (item?.requestStatus === "REQUEST") {
      if (goodsListResponseDtos?.length > 0) {
        return (
          <GoodsContainer>
            <GoodsImg
              src={goodsListResponseDto.imageUrl}
              onClick={() =>
                navigate(`/detail/${goodsListResponseDto.goodsId}`)
              }
            />
            <ExchangeImg src={goodsexchange} />
            {goodsListResponseDtos?.length > 1 ? (
              <GoodsImg src={goodsListResponseDtos[0].imageUrl}>
                <GoodsCount>
                  {goodsListResponseDtos?.length}개의 물건
                </GoodsCount>
              </GoodsImg>
            ) : (
              <GoodsImg
                src={goodsListResponseDtos[0].imageUrl}
                onClick={() => {
                  navigate("/mypocket");
                }}
              />
            )}
          </GoodsContainer>
        );
      } else {
        return (
          <GoodsContainer>
            <GoodsImg
              src={goodsListResponseDto.imageUrl}
              onClick={() =>
                navigate(`/detail/${goodsListResponseDto.goodsId}`)
              }
            />
            <ExchangeImg src={goodsexchange} />
            <GoodsImg
              src={goodsListResponseDtos.imageUrl}
              onClick={() => {
                navigate("/mypocket");
              }}
            />
          </GoodsContainer>
        );
      }
    }
    if (item?.requestStatus === "DONE" || "TRADING" || "CANCEL") {
      return (
        <GoodsContainer>
          <GoodsImg
            src={goodsListResponseDto.imageUrl}
            onClick={() => navigate(`/detail/${goodsListResponseDto.goodsId}`)}
          />

          <ExchangeImg src={goodsexchange} />
          <GoodsImg
            src={goodsListResponseDtos.imageUrl}
            onClick={() => {
              navigate("/mypocket");
            }}
          />
        </GoodsContainer>
      );
    }
  };

  return (
    <CardContainer style={{ border: `${border}`, opacity: `${opacity}` }}>
      <Container>
        <Date>{item.createdAt.slice(0, 10)}</Date>
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

export const GoodsImg = styled.div<{ src: string }>`
  width: 80px;
  height: 80px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 16px;
`;

export default TradeRequestCard;
