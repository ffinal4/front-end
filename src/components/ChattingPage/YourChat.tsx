import React from "react";
import { styled } from "styled-components";

const YourChat = ({ item }: any) => {
  const hours = new Date(item.time).getHours();
  const minutes = new Date(item.time).getMinutes();
  const amPm = hours < 12 ? "오전" : "오후";
  const formattedTime = `${amPm} ${hours % 12}:${minutes.toString().padStart(2, "0")}`;
  return (
    <YourChatContainer>
      <UserImage />
      <TextBox>{item.message}</TextBox>
      <Time>{formattedTime}</Time>
    </YourChatContainer>
  );
};

const YourChatContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: start;
  width: 100%;
`;

const Time = styled.div`
  color: var(--black-white-black, #222020);
  /* WEB/KOR/Kor R 14 */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

const TextBox = styled.div`
  margin-right: 10px;
  color: var(--black-white-black, #222020);
  /* WEB/KOR/Kor R 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  display: flex;
  width: 288px;
  padding: 16px 20px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 5px;
  background: var(--black-white-white, #fcfcfc);
`;

const UserImage = styled.div`
  margin-right: 20px;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  border: 1px solid var(--black-white-black, #222020);
`;

export default YourChat;
