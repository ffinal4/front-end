import React from "react";
import { styled } from "styled-components";
import { StSubTitle, StTitle } from "../../styles/TitleFont";
import ItemCard from "../common/ItemCard";
import { StBasicButton } from "../../styles/BasicButton";
import { useNavigate } from "react-router-dom";

const NewItemList = ({ data }: any) => {
  const navigate = useNavigate();

  return (
    <NewItemListContainer>
      <StTitle marginbottom="16px" textalign="center">
        NEW IN PEEPPO!
      </StTitle>
      <StSubTitle marginbottom="30px" textalign="center">
        주머니에 새로 등록된 물건들이에요.
      </StSubTitle>
      <CardContainer>
        {data.map((item: any) => {
          return <ItemCard item={item} />;
        })}
        <MoreBtn
          buttonColor="var(--yellow-yellow-100, #FFCA64);"
          onClick={() => {
            navigate("/tradeList");
          }}
        >
          더보기
        </MoreBtn>
      </CardContainer>
    </NewItemListContainer>
  );
};

const NewItemListContainer = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  margin-bottom: 280px;
`;

const CardContainer = styled.div`
  border-top: 4px solid var(--black-white-gray-10, #efefef);
  border-bottom: 4px solid var(--black-white-gray-10, #efefef);
  padding: 40px 0 80px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px 16px;
  position: relative;
`;

const MoreBtn = styled(StBasicButton)`
  border: 2px solid var(--black-white-black, #222020);
  padding: 10px 0px;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 1px 2px 5px 0px rgba(34, 32, 32, 0.1);
  position: absolute;
  bottom: -22px;
`;

export default NewItemList;
