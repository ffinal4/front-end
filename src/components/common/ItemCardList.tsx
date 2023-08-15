import React from "react";
import { styled } from "styled-components";
import ItemCard from "./ItemCard";

const ItemCardList = () => {
  return (
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
  );
};

const ItemCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px 16px;
  margin-bottom: 100px;
`;

export default ItemCardList;
