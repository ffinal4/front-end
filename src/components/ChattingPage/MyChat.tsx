import React from "react";
import { styled } from "styled-components";

const MyChat = () => {
  return (
    <MyChatContainer>
      <Time>오후 2:10</Time>
      <TextBox>
        좋아요! 직접 교환만
        가능한데가능한데가능한데가능한데가능한데가능한데가능한가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데가능한데
        근처까지 오실 수 있나요?
      </TextBox>
      <UserImage />
    </MyChatContainer>
  );
};

const MyChatContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  width: 100%;
`;

const Time = styled.div`
  margin-right: 10px;
  color: var(--black-white-black, #222020);
  /* WEB/KOR/Kor R 14 */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

const TextBox = styled.div`
  margin-right: 20px;
  color: var(--black-white-white, #fcfcfc);
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
  background: var(--black-white-gray-100, #39373a);
`;

const UserImage = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  border: 1px solid var(--black-white-black, #222020);
`;
export default MyChat;
