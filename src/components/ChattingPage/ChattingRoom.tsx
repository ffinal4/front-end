import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import ChattingInput from "./ChattingInput";
import ChattingRoomCardList from "./ChattingRoomCardList";
import { useQuery } from "react-query";
import { getChatDetailApi } from "../../api/chat";
import LoadingSpinner from "../common/LoadingSpinner";
import { useRecoilState, useRecoilValue } from "recoil";
import { chatOtherUserData } from "../../store/chatting";
import { Stomp, Client } from "@stomp/stompjs";

const ChattingRoom = ({ setChatRoomOpen }: any) => {
  const otherUserData = useRecoilValue(chatOtherUserData);
  const [stompClient, setStompClient] = useState<any>(null);
  const [webSocketMsg, setwebSocketMsg] = useState<string[]>([]);
  const accessToken = localStorage.getItem("accessToken") || "";
  const [data, setData] = useState<any>(null);
  const clientRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // const { isLoading, error, data } = useQuery(
  //   ["getChatDetailData", otherUserData.roomId],
  //   () => getChatDetailApi(otherUserData.roomId),
  //   {
  //     refetchOnWindowFocus: false,
  //   }
  // );
  console.log("스톰프클라이언트", stompClient);
  const getChatApi = async () => {
    try {
      const res = await getChatDetailApi(otherUserData.roomId);
      setIsLoading(true);
      if (res.status == 200) {
        const res = await getChatDetailApi(otherUserData.roomId);
        console.log("채팅가져오기 성공", res);
        setData(res);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("채팅가져오기에러", error);
    }
  };
  useEffect(() => {
    getChatApi();
  }, []);

  useEffect(() => {
    // STOMP 클라이언트 설정
    const socket = new WebSocket(`wss://peeppo.store/stomp/chat`);
    const client = Stomp.over(socket);
    clientRef.current = client;
    console.log("클라이언트", client);

    setStompClient(client);

    // STOMP 연결
    client.connect(
      {
        AccessToken: accessToken,
      },
      () => {
        // 구독 설정
        const subscription = client.subscribe(
          `/sub/chat/room/${otherUserData.roomId}`,
          (message) => {
            // 메시지 도착 시 처리
            const newMessage = JSON.parse(message.body);
            console.log("뉴메시지", newMessage);

            //

            setwebSocketMsg((prevWebSocketMsg) => {
              // 중복 메시지를 필터링합니다.
              const uniqueMessages = prevWebSocketMsg.filter((msg: any) => msg.id !== newMessage.id);

              // 새로운 메시지를 배열의 앞에 추가합니다.
              return [...uniqueMessages, newMessage];
            });
          },
          {
            AccessToken: accessToken,
          }
        );

        // 컴포넌트 언마운트 시 연결 해제
        return () => {
          console.log("언마운트!!!!!!!");
          if (clientRef.current) {
            subscription.unsubscribe();
            stompClient.disconnect(() => {});
            console.log("웹소켓 연결 종료");
          }
        };
      },
      (error: any) => {
        console.error("STOMP 연결 실패:", error);
      }
    );
    client.onWebSocketClose = () => {
      console.log("WebSocket 연결이 닫혔습니다.");
      setChatRoomOpen(false);
    };
  }, []);
  console.log("웹소켓메시지", webSocketMsg);

  if (isLoading) return <LoadingSpinner />;
  console.log("채팅디테일데이터", data);

  return (
    <ChattingRoomContainer>
      <OtherUserContainer>
        <ContentContainer>
          <UserImage src={otherUserData.imageUrl} />
          <UserName>{otherUserData.nickname}</UserName>
          {/* <Content></Content> */}
        </ContentContainer>
        <DenyButton>거절</DenyButton>
      </OtherUserContainer>
      <ChattingRoomCardList
        data={data?.data.content}
        webSocketMsg={webSocketMsg}
        isLoading={isLoading}
        otherUserNickname={otherUserData.nickname}
      />
      <ChattingInput accessToken={accessToken} stompClient={stompClient} />
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
