import React from "react";
import { styled } from "styled-components";
import ChattingInput from "./ChattingInput";
import ChattingRoomCardList from "./ChattingRoomCardList";

const ChattingRoom = () => {
  return (
    <ChattingRoomContainer>
      <OtherUserContainer>
        <ContentContainer>
          <UserImage />
          <UserName>유저네임</UserName>
          {/* <Content></Content> */}
        </ContentContainer>
        <DenyButton>거절</DenyButton>
      </OtherUserContainer>
      <ChattingRoomCardList />
      <ChattingInput />
    </ChattingRoomContainer>
  );
};

const ChattingRoomContainer = styled.div`
  padding-top: 120px;
  width: 50%;
  background-color: #ffff;
  overflow: hidden;
  background-color: #fdd988;
  border-right: 1px solid #adadad;
  border-left: 1px solid #adadad;
  position: relative;
`;

const OtherUserContainer = styled.div`
  position: absolute;
  top: 0;
  border-bottom: 1px solid var(--black-white-gray-30, #d5d4d4);
  background: var(--black-white-white, #fcfcfc);
  width: 100%;
  height: 120px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  background-color: gray;
  margin-right: 20px;
`;

const ContentContainer = styled.div`
  max-width: 298px;
  width: 100%;
  display: flex;
  align-items: center;
`;
const UserName = styled.div`
  color: var(--black-white-black, #222020);
  /* WEB/KOR/Kor B 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
`;

const Content = styled.div``;

const DenyButton = styled.div`
  display: flex;
  width: 80px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: var(--black-white-gray-100, #39373a);
  cursor: pointer;
  color: var(--black-white-white, #fcfcfc);
  /* WEB/KOR/Kor R 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
export default ChattingRoom;
