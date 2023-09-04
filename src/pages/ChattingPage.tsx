import React from "react";
import { styled } from "styled-components";
import ChattingList from "../components/ChattingPage/ChattingList";
import ChattingRoom from "../components/ChattingPage/ChattingRoom";

const ChattingPage = () => {
  return (
    <ChattingPageContainer>
      <ChatWrap>
        <ChattingList />
        <ChattingRoom />
      </ChatWrap>
    </ChattingPageContainer>
  );
};

const ChatWrap = styled.div`
  display: flex;
  gap: 18px;
  margin: 0 auto;
  max-width: 1136px;
  width: 100%;
  height: 100%;
`;
const ChattingPageContainer = styled.div`
  padding-top: 120px;
  background-color: #fcf6e9;
  height: calc(100vh - 103px);
`;

export default ChattingPage;
