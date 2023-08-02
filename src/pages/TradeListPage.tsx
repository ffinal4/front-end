import React from "react";
import { styled } from "styled-components";
import eyeImage from "../assets/images/eye.svg";
import HorizontalLine from "../components/common/HorizontalLine";
import FilterButton from "../components/common/FilterButton";
import ItemCard from "../components/common/ItemCard";

const TradeListPage = () => {
  return (
    <TradeListPageContainer>
      <TitleContainer>
        <TitleImage src={eyeImage} />
        <TitleText>Peeping Pockets</TitleText>
      </TitleContainer>
      <HorizontalLine />
      <FilterButton />
      <ItemCardContainer>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </ItemCardContainer>
    </TradeListPageContainer>
  );
};

const TradeListPageContainer = styled.div`
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`;
const TitleImage = styled.img`
  width: 66px;
  height: 54px;
  margin-bottom: 16px;
`;

const TitleText = styled.div`
  color: #181818;
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
`;

const ItemCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px 16px;
`;

// const ItemCardContainer = styled.div`
//   width: 100%;
//   display: grid;
//   grid-gap: 30px 16px;
//   grid-template-columns: repeat(4, 1fr);
// `;

export default TradeListPage;
