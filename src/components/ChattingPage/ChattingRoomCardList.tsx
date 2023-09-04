import React from "react";
import { styled } from "styled-components";
import MyChat from "./MyChat";
import YourChat from "./YourChat";

const ChattingRoomCardList = () => {
  return (
    <ChattingRoomCardListContainer>
      <MyChat />
      <YourChat />
    </ChattingRoomCardListContainer>
  );
};

const ChattingRoomCardListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow: hidden;
  height: calc(100vh - 223px);
  overflow-y: scroll;
  padding: 10px 40px 225px 40px;
`;

export default ChattingRoomCardList;
