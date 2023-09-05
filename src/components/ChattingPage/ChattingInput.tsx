import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { chatOtherUserData } from "../../store/chatting";

const ChattingInput = ({ accessToken, stompClient }: any) => {
  const otherUserData = useRecoilValue(chatOtherUserData);
  const [inputMsg, setInputMsg] = useState("");

  const handleSubmitMessage = () => {
    if (stompClient && inputMsg.trim() !== "") {
      // 메시지 전송
      stompClient.send(
        `/pub/chatroom/${otherUserData.roomId}`,
        { AccessToken: accessToken },
        JSON.stringify({ messageType: "TALK", chatRoom: otherUserData.roomId, message: inputMsg })
      );
      setInputMsg("");
    }
  };
  return (
    <ChattingInputContainer>
      <Form
        typeof="onSubmit"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitMessage();
        }}
      >
        <Input
          type="text"
          placeholder="메세지를 입력해 주세요."
          value={inputMsg}
          onChange={(e: any) => {
            setInputMsg(e.target.value);
          }}
        />
        <SendButton onClick={handleSubmitMessage}>Send</SendButton>
      </Form>
    </ChattingInputContainer>
  );
};

const ChattingInputContainer = styled.div`
  position: absolute;
  bottom: -120px;
  width: 100%;
  height: 92px;
  padding: 23px 20px 25px 20px;
  border-top: 1px solid var(--black-white-gray-60, #adadad);
  background: var(--black-white-white, #fcfcfc);
`;

const Form = styled.form`
  display: flex;
  gap: 16px;
`;
const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0px 20px;
  /* WEB/KOR/Kor R 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  border-radius: 5px 5px 0px 0px;
  border-bottom: 1px solid var(--black-white-gray-60, #adadad);
  background: var(--black-white-gray-10, #efefef);
`;

const SendButton = styled.div`
  color: var(--black-white-gray-60, #adadad);

  /* WEB/KOR/Kor R 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  display: flex;
  width: 80px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid var(--black-white-gray-60, #adadad);
  background: var(--black-white-gray-10, #efefef);
  cursor: pointer;
`;
export default ChattingInput;
