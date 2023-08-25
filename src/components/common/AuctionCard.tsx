import React from "react";
import AucBidCard from "../AuctionDetailPage/AucBidCard";
import { StCardPicture } from "../../styles/CardPicture";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import CardZzimBtn from "./CardZzimBtn";
import eyeImage from "../../assets/images/eye.svg";
import BidDeadLine from "../MainPage/BidDeadLine";

const AuctionCard = ({ item }: any) => {
  const navigate = useNavigate();
  return (
    <AuctionCardContainer>
      <StCardPicture
        image={item.image}
        onClick={() => {
          navigate(`/auctiondetail/${item.auctionId}`);
        }}
      >
        <DeadLineContainer>
          <BidDeadLine deadline={item?.auctionEndTime} />
        </DeadLineContainer>
      </StCardPicture>
      <AddressContent>
        <AddressImage src={eyeImage} />
        {item?.auctionStatus === null ? "입찰을 기다리는 중..." : `${item?.auctionStatus}명이 입찰중`}
      </AddressContent>
      <CardZzimBtn checkZzim={item?.checkDibs} goodsId={item?.goodsId} isCard={true} isAuction={true} />
      <ItemTitle>{item?.title}</ItemTitle>
      <UserName> {item?.location}</UserName>
      <ItemContent>{item?.content}</ItemContent>
    </AuctionCardContainer>
  );
};

const AuctionCardContainer = styled.div`
  position: relative;
  line-height: 150%;
  width: 272px;
  font-family: "Pretendard";
  font-style: normal;
  position: relative;
`;

const ItemTitle = styled.div`
  color: #000;
  /* KOR/Kor B 20 */
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;

const UserName = styled.div`
  color: var(--black-white-gray-60, #adadad);
  /* KOR/Kor R 14 */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

const ItemContent = styled.div`
  text-overflow: ellipsis;
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 48px;
  font-size: 16px;
  font-weight: 400;
  margin-top: 6px;
  margin-bottom: 5px;
`;

const AddressContent = styled.div`
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  background-color: rgba(34, 32, 32, 0.2);
  padding: 10px;
  top: 0px;
  left: 0px;
  position: absolute;
  color: var(--black-white-white, #fcfcfc);
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  display: flex;
  align-items: center;
`;

const AddressImage = styled.img`
  width: 18px;
  height: 15px;
  margin-right: 10px;
`;

const DeadLineContainer = styled.div`
  position: absolute;
  top: 224px;
  color: var(--black-white-black, #222020);
  /* KOR/Kor B 16 */
  font-family: " Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
`;
export default AuctionCard;
