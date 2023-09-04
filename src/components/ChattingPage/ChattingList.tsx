import React from "react";
import { styled } from "styled-components";
import ListCard from "./ListCard";

const ChattingList = () => {
  return (
    <ChattingListContainer>
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
    </ChattingListContainer>
  );
};

const ChattingListContainer = styled.div`
  width: 50%;
  height: calc(100vh - 223px);
  background-color: #ffff;
  overflow: hidden;
  overflow-y: scroll;
  border-right: 1px solid #adadad;
  border-left: 1px solid #adadad;
`;

export default ChattingList;
