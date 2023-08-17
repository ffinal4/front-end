import React from "react";
import AucBidCard from "../AuctionDetailPage/AucBidCard";
import { StCardPicture } from "../../styles/CardPicture";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const AuctionCard = ({ item }: any) => {
  const navigate = useNavigate();
  return (
    <CardContainer
      onClick={() => {
        navigate(`/auctiondetail/${item.auctionId}`);
      }}
    >
      <StCardPicture image={item.image} />
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 272px;
  height: 272px;
  margin-right: 16px;
`;
export default AuctionCard;
