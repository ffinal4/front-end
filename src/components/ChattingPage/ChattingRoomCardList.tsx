import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import MyChat from "./MyChat";
import YourChat from "./YourChat";
import LoadingSpinner from "../common/LoadingSpinner";

const ChattingRoomCardList = ({ data, webSocketMsg, isLoading }: any) => {
  const messageEndRef = useRef<any>(null);
  useEffect(() => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [data, webSocketMsg]);
  console.log("웹소켓메시지!!", webSocketMsg);

  if (isLoading) return <LoadingSpinner />;

  return (
    <ChattingRoomCardListContainer>
      {data
        ?.slice(0)
        .reverse()
        .map((item: any) => {
          return (
            <div>
              {item.checkSameUser ? <MyChat item={item} key={item.time} /> : <YourChat item={item} key={item.time} />}
            </div>
          );
        })}
      <div>
        {webSocketMsg.map((item: any) => {
          return <div>{item.message}</div>;
        })}
      </div>
      <div ref={messageEndRef}></div>
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
  padding: 10px 40px 70px 40px;
`;

export default ChattingRoomCardList;
