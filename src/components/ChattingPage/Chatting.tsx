import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { styled } from "styled-components";
import Profile from "../../assets/images/엎드린.png";
import Profile2 from "../../assets/images/선.png";

const Chatting = ({ item, messageList, setMessageList }: any) => {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  const [chats, setChats] = useState([
    {
      time: "10:00:00",
      content: "안녕하세요",
    },
  ]);
  const [chatting, setChatting] = useState({
    content: "",
  });
  const [alerts, setAlerts] = useState(false);

  useEffect(() => {
    setAlerts(true);
  }, []);

  const onChangeChatHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setChatting({
      ...chatting,
      [name]: value,
    });
  };

  const onClickChatHandler = (event: any) => {
    event.preventDefault();
    if (chatting.content === "") {
      Swal.fire({
        icon: "warning",
        text: "메세지를 입력해주세요!",
        confirmButtonColor: "#ffca64",
      });
    } else {
      setChats([
        ...chats,
        {
          ...chats,
          time: `${hours}:${minutes}:${seconds}`,
          content: chatting.content,
        },
      ]);
      setChatting({ ...chatting, content: "" });
      return {
        ...item,
        myChat: chats[chats.length - 1].content,
      };
    }
  };

  const onClickNoHandler = () => {
    setAlerts(false);
  };

  return (
    <ChattingContainer>
      <AllTopWrapper>
        {alerts && (
          <AlertContainer>
            <ProductImages src={Profile2} />
            <LastMessageWrapper>
              <LastMessageTitle>
                스파이더맨 어크로스 더 유니버스 IMA...
              </LastMessageTitle>
              <LastMessageContent>바꾼사람이핍포</LastMessageContent>
            </LastMessageWrapper>
            <NoButton onClick={onClickNoHandler}>거절</NoButton>
          </AlertContainer>
        )}
        <ChattingWrapper>
          <TextWrapper>
            <Text>물물교환 신청이 수락되었습니다.</Text>
            <Text>
              물물교환 전 안전한 물물교환을 위한 4단계 잊지 마세요!
              <Link>보러가기</Link>
            </Text>
          </TextWrapper>
          <OpponentChatLineContainer>
            <ChatProfile src={item.profile} />
            <OpponentChat>{item.message}</OpponentChat>
            <TimeText>{chats[0].time}</TimeText>
          </OpponentChatLineContainer>
          {chats.map((text) => {
            return (
              <MyChatLineContainer>
                <TimeText>{text.time}</TimeText>
                <MyChat>{text.content}</MyChat>
                <ChatProfile src={Profile} />
              </MyChatLineContainer>
            );
          })}
        </ChattingWrapper>
      </AllTopWrapper>
      <InputOutContainer onSubmit={onClickChatHandler}>
        <ChattingInputWrapper>
          <ChattingInput
            type="text"
            name="content"
            value={chatting.content}
            placeholder="메세지를 입력해 주세요."
            onChange={(event) => onChangeChatHandler(event)}
          />
        </ChattingInputWrapper>
        <Button type="submit">Send</Button>
      </InputOutContainer>
    </ChattingContainer>
  );
};

const ChattingContainer = styled.div`
  min-width: 560px;
  max-height: 837px;
  border: 1px solid #adadad;
  background-color: #fdd988;
`;

const AllTopWrapper = styled.div`
  height: 625px;
  overflow-y: hidden;
`;

const ChattingWrapper = styled.div`
  width: 100%;
  max-width: 492px;
  height: 90%;
  margin: 25px 16px 40px 40px;
  overflow-y: auto;
`;

const TextWrapper = styled.div`
  padding: 0px 0px 20px 0px;
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: #222020;
`;

const Link = styled.div`
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: #39373a;
  border-bottom: 1px solid #39373a;
  cursor: pointer;

  &:hover {
    color: #615e7e;
    border-bottom: 1px solid #615e7e;
  }
`;

const OpponentChatLineContainer = styled.div`
  width: 100%;
  max-width: 482px;
  display: flex;
  align-items: end;
  padding: 0px 0px 40px 0px;
`;

const ChatProfile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 100%;
`;

const OpponentChat = styled.div`
  display: flex;
  width: 260px;
  max-width: 464px;
  padding: 16px 20px;
  align-items: flex-start;
  margin: 0px 10px 0px 20px;
  background-color: #fcfcfc;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  border-radius: 5px;
`;

const MyChatLineContainer = styled.div`
  width: 100%;
  max-width: 482px;
  display: flex;
  justify-content: end;
  align-items: end;
  padding: 0px 0px 40px 0px;
`;

const MyChat = styled.div`
  display: flex;
  width: 260px;
  max-width: 464px;
  padding: 16px 20px;
  align-items: flex-start;
  margin: 0px 20px 0px 10px;
  background-color: #39373a;
  color: #fcfcfc;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  border-radius: 5px;
`;

const ChattingInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px 5px 0px 0px;
  border-bottom: 1px solid #adadad;
  width: 422px;
  height: 44px;
  background-color: #efefef;
`;

const ChattingInput = styled.input`
  width: 100%;
  padding: 0px 20px;
  background-color: #efefef;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #adadad;
`;

const Button = styled.button`
  width: 80px;
  height: 44px;
  margin: 0px 20px 0px 0px;
  background-color: #efefef;
  border-radius: 5px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #adadad;
  border: 1px solid #adadad;
  cursor: pointer;
`;

const TimeText = styled.div`
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`;

const AlertContainer = styled.div`
  width: 558px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #c3c3c3;
  border-bottom: 1px solid #c3c3c3;
  border-left: 1px solid #c3c3c3;
  background-color: #fff;
  /* padding: 20px; */
`;

const ProductImages = styled.img`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  object-fit: contain;
`;

const LastMessageWrapper = styled.div`
  padding: 0px 40px 0px 20px;
`;

const LastMessageTitle = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
`;

const LastMessageContent = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
`;

const NoButton = styled.div`
  display: flex;
  width: 80px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  background-color: #39373a;
  border-radius: 5px;
  color: #fcfcfc;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
`;

const InputOutContainer = styled.form`
  width: 558px;
  height: 92px;
  padding: 24px 20px 24px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: #fcfcfc;
  border-top: 1px solid #adadad;
`;

export default Chatting;
