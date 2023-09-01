import React from "react";
import { styled } from "styled-components";
import ItemCard from "./ItemCard";
import EmptyPocket from "./EmptyPocket";
import EmptyList from "./EmptyList";

const ItemCardList = ({ data, allList }: any) => {
  return (
    <ItemCardContainer>
      {(data?.length > 0)
        ? data?.map((item: any) => {
          return <ItemCard key={item.goodsId} item={item} />;
        })
        : ((allList)
          ? <EmptyList />
          : <EmptyPocket />)}
    </ItemCardContainer>
  );
};

const ItemCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 16px;
  margin-bottom: 100px;
`;

export default ItemCardList;
