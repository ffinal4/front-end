import React from "react";
import { styled } from "styled-components";
import ItemCard from "./ItemCard";

const ItemCardList = ({ data }: any) => {
  return (
    <ItemCardContainer>
      {data.map((item: any) => {
        return <ItemCard key={item.goodsId} item={item} />;
      })}
    </ItemCardContainer>
  );
};

const ItemCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px 16px;
  margin-bottom: 100px;
`;

export default ItemCardList;
