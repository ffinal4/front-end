import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import ChattingList from "../components/ChattingPage/ChattingList";
import ChattingRoom from "../components/ChattingPage/ChattingRoom";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { useQuery } from "react-query";
import { getChatApi } from "../api/chat";
import { useRecoilState } from "recoil";
import { myProfileImage } from "../store/chatting";
import noChat from "../assets/images/nochat.png";

const ChattingPage = () => {
  const [chatRoomOpen, setChatRoomOpen] = useState(false);
  const [, setMyprofileImage] = useRecoilState(myProfileImage);
  const { isLoading, error, data } = useQuery("getChatData", getChatApi, {
    refetchOnWindowFocus: false,
  });
  console.log(data?.data[0].myImageUrl);

  useEffect(() => {
    if (data !== null) {
      console.log("이미지넣음");

      setMyprofileImage(data?.data[0].myImageUrl);
    }
  }, []);
  if (isLoading) return <LoadingSpinner />;
  console.log("채팅페이지데이터", data);
  if (error) {
    console.log(error);
  }

  return (
    <div>
      {data?.data[0].chatRoomResponseDtos.length === 0 ? (
        <NochatContainer>
          <Nochat src={noChat} />
        </NochatContainer>
      ) : (
        <ChattingPageContainer>
          <ChatWrap>
            <ChattingList chatList={data?.data[0].chatRoomResponseDtos} setChatRoomOpen={setChatRoomOpen} />
            {chatRoomOpen && <ChattingRoom setChatRoomOpen={setChatRoomOpen} />}
          </ChatWrap>
        </ChattingPageContainer>
      )}
    </div>
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
const Nochat = styled.img`
  width: 500px;
`;

const NochatContainer = styled.div`
  padding-top: 200px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default ChattingPage;
