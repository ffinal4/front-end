import React, { useState } from "react";
import { styled } from "styled-components";
import ChattingList from "../components/ChattingPage/ChattingList";
import ChattingRoom from "../components/ChattingPage/ChattingRoom";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { useQuery } from "react-query";
import { getChatApi } from "../api/chat";

const ChattingPage = () => {
  const [chatRoomOpen, setChatRoomOpen] = useState(false);
  const { isLoading, error, data } = useQuery("getChatData", getChatApi, {
    refetchOnWindowFocus: false,
  });
  if (isLoading) return <LoadingSpinner />;
  console.log("채팅페이지데이터", data);
  if (error) {
    console.log(error);
  }

  return (
    <ChattingPageContainer>
      <ChatWrap>
        <ChattingList chatList={data?.data} setChatRoomOpen={setChatRoomOpen} />
        {chatRoomOpen && <ChattingRoom setChatRoomOpen={setChatRoomOpen} />}
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
