import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import ChattingInput from "./ChattingInput";
import ChattingRoomCardList from "./ChattingRoomCardList";
import { useQuery } from "react-query";
import { getChatDetailApi } from "../../api/chat";
import LoadingSpinner from "../common/LoadingSpinner";
import { useRecoilState, useRecoilValue } from "recoil";
import { chatOtherUserData } from "../../store/chatting";
import { Stomp } from "@stomp/stompjs";

const ChattingRoom = ({ myProfileImage }: any) => {
  const otherUserData = useRecoilValue(chatOtherUserData);
  const [webSocketMsg, setWebSocketMsg] = useState<string[]>([]);
  const accessToken = localStorage.getItem("accessToken") || "";
  const [data, setData] = useState<any>(null);
  const stompClient = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log("otherUserData", otherUserData);

  const getChatApi = async () => {
    try {
      const res = await getChatDetailApi(otherUserData.roomId);
      setIsLoading(true);
      if (res.status === 200) {
        setData(res);
        setIsLoading(false);
        console.log("채팅상세페이지데이터", res);
      }
    } catch (error) {
      console.error("채팅 가져오기 에러", error);
    }
  };

  useEffect(() => {
    getChatApi();
    setWebSocketMsg([]);
  }, [otherUserData]);

  useEffect(() => {
    // STOMP 클라이언트 설정
    const socket = new WebSocket(`wss://peeppo.store/stomp/chat`);
    stompClient.current = Stomp.over(socket);

    // STOMP 연결
    stompClient.current.connect(
      {
        AccessToken: accessToken,
      },
      () => {
        // 구독 설정
        stompClient.current.subscribe(
          `/sub/chat/room/${otherUserData.roomId}`,
          (message: any) => {
            // 메시지 도착 시 처리
            const newMessage = JSON.parse(message.body);
            setWebSocketMsg((webSocketMsg) => [...webSocketMsg, newMessage]);
          },
          {
            AccessToken: accessToken,
          }
        );
      },
      (error: any) => {
        console.error("STOMP 연결 실패:", error);
      }
    );

    // 컴포넌트 언마운트 시 연결 해제
    return () => {
      if (stompClient.current) {
        stompClient.current.disconnect(() => {
          console.log("웹소켓 연결 종료");
        });
      }
    };
  }, [otherUserData, accessToken]);

  if (isLoading) return <LoadingSpinner />;
  return (
    <ChattingRoomContainer>
      <OtherUserContainer>
        <ContentContainer>
          <UserImage src={otherUserData.imageUrl} />
          <div>
            <GoodsName>{otherUserData.title}</GoodsName>
            <UserName>{otherUserData.nickname}</UserName>
          </div>
        </ContentContainer>
        <DenyButton>거절</DenyButton>
      </OtherUserContainer>
      <ChattingRoomCardList
        data={data?.data}
        webSocketMsg={webSocketMsg}
        isLoading={isLoading}
        otherUserNickname={otherUserData.nickname}
      />
      <ChattingInput accessToken={accessToken} stompClient={stompClient.current} />
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

const GoodsName = styled.div`
  color: var(--black-white-black, #222020);
  /* WEB/KOR/Kor B 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
`;

const OtherUserContainer = styled.div`
  position: absolute;
  top: 120px;
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
  color: var(--black-white-gray-100, #39373a);

  /* WEB/KOR/Kor R 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
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
