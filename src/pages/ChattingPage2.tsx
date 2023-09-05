import React, { useState } from "react";
import { styled } from "styled-components";
import Profile from "../assets/images/엎드린.png";
import Profile2 from "../assets/images/선.png";
import Image from "../assets/images/song.jpg";
import Image2 from "../assets/images/ppapparo.jpg";
import Chatting from "../components/ChattingPage/Chatting";
import NonPofile from "../assets/images/defaultprofile.png";
import ChatCard from "../components/ChattingPage/ChatCard";
import { useQuery } from "react-query";
import { getChattingListApi } from "../api/users";

const ChattingPage2 = () => {
  // const { isLoading, error, data } : any = useQuery("chatList", getChattingListApi, {
  //     refetchOnWindowFocus: false,
  // });

  // console.log("채팅목록데이터", data);

  const [messageList, setMessageList] = useState([
    {
      profile: NonPofile,
      name: "이승재",
      message: "TEAM 핍포 화이팅!",
      image: Image2,
      myChat: "",
      isOpen: false,
      count: 2,
    },
    { profile: Profile2, name: "박준영", message: "ㅎㅎㅎㅎㅎ", image: Image, myChat: "", isOpen: false, count: 12 },
    { profile: Profile, name: "서명진", message: "안녕하세요", image: Image2, myChat: "", isOpen: false, count: 0 },
    {
      profile: Profile2,
      name: "윤지숙",
      message: "디자이너 화이팅!",
      image: Image,
      myChat: "",
      isOpen: false,
      count: 1,
    },
    {
      profile: Profile,
      name: "이지원A",
      message: "프론트엔드 화이팅!",
      image: Image2,
      myChat: "",
      isOpen: false,
      count: 5,
    },
    {
      profile: Profile2,
      name: "이지원B",
      message: "백엔드 화이팅!",
      image: Image,
      myChat: "",
      isOpen: false,
      count: 4,
    },
    {
      profile: Profile,
      name: "김지훈",
      message: "프로젝트 화이팅!",
      image: Image2,
      myChat: "",
      isOpen: false,
      count: 7,
    },
  ]);

  return (
    <PageContainer>
      <ContainerWrapper>
        <ListContainer>
          {messageList.map((item) => {
            return (
              <div>
                <ChatCard item={item} messageList={messageList} setMessageList={setMessageList} />
              </div>
            );
          })}
        </ListContainer>
      </ContainerWrapper>
      {messageList.map((chat) => {
        return chat.isOpen && <Chatting item={chat} messageList={messageList} setMessageList={setMessageList} />;
      })}
      {/* <BottomContainer /> */}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  height: 860px;
  display: flex;
  background-color: #fcf6e9;
  padding: 142px 392px 0px 392px;
  position: relative;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #39373a;
    border-radius: 5px;
    &:hover {
      background-color: #555257;
    }
  }
  ::-webkit-scrollbar-track {
    background-color: #d5d4d4;
    border-radius: 5px;
  }
`;

const ContainerWrapper = styled.div`
  min-width: 572px;
  max-height: 837px;
  display: grid;
  overflow-y: scroll;
  background-color: #fcfcfc;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ffc596;
    border-radius: 5px;
    &:hover {
      background-color: #f0b280;
    }
  }
  ::-webkit-scrollbar-track {
    background-color: white;
  }

  @media screen and (max-width: 1136px) {
    width: 100%;
  }
`;

const ListContainer = styled.div`
  width: 560px;
  min-height: 837px;
  border-left: 1px solid #c3c3c3;
  background-color: #fcfcfc;
`;

const ChatWrapper = styled.div`
  width: 560px;
  height: 837px;
`;

const ChattingContainer = styled.div`
  top: 141px;
  right: 372px;
  position: absolute;
`;

export default ChattingPage2;
