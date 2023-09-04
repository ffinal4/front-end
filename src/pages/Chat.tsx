import React, { useEffect, useState } from "react";
import { Stomp } from "@stomp/stompjs";
import { useQuery } from "react-query";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { getChatApi } from "../api/chat";

const Chat = () => {
  const [stompClient, setStompClient] = useState<any>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const accessToken = localStorage.getItem("accessToken");
  // const { isLoading, error, data } = useQuery("getChatData", getChatApi, {
  //   refetchOnWindowFocus: false,
  // });

  // useEffect(() => {
  //   // STOMP 클라이언트 설정
  //   const socket = new WebSocket("wss://peeppo.store/stomp/chat");
  //   const client = Stomp.over(socket);
  //   console.log(client);

  //   // 연결 헤더에 액세스 토큰 추가
  //   const headers = {
  //     AccessToken: accessToken,
  //   };

  //   setStompClient(client);

  //   // STOMP 연결
  //   client.connect(
  //     headers,
  //     () => {
  //       // 구독 설정
  //       const subscription = client.subscribe("/sub/chat/room/32d63446-437f-4710-b16a-5ded131da8c8", (message) => {
  //         // 메시지 도착 시 처리
  //         const newMessage = JSON.parse(message.body);
  //         console.log(message);

  //         setMessages((prevMessages) => [...prevMessages, newMessage]);
  //       });

  //       // 컴포넌트 언마운트 시 연결 해제
  //       return () => {
  //         if (stompClient) {
  //           subscription.unsubscribe();
  //           stompClient.disconnect(() => {});
  //         }
  //       };
  //     },
  //     (error: any) => {
  //       console.error("STOMP 연결 실패:", error);
  //     }
  //   );
  // }, [accessToken]);

  // if (isLoading) return <LoadingSpinner />;
  // console.log("메인페이지데이터", data);
  // if (error) {
  //   console.log(error);
  // }

  const handleSendMessage = () => {
    if (stompClient && inputMessage.trim() !== "") {
      // 메시지 전송
      stompClient.send(
        "/app/sendMessage",
        { Authorization: `Bearer ${accessToken}` },
        JSON.stringify({ content: inputMessage })
      );
      setInputMessage("");
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}></div>
        ))}
      </div>
      <input
        type="text"
        placeholder="메시지 입력"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>전송</button>
    </div>
  );
};

export default Chat;
