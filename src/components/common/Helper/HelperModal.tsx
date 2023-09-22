import React, { useEffect, useRef, useState } from 'react'
import './HelperModal.css'
import styled from 'styled-components';
import SubmitBtn from '../../../assets/icon/submitbtn.png'
import ProfileImg from '../../../assets/images/mascot1.svg'

interface HelperProps {
  isHelper: boolean;
  setIsHelper: React.Dispatch<React.SetStateAction<boolean>>;
}

const HelperModal : React.FC<HelperProps> = ({ isHelper, setIsHelper }) => {

  let scrollBar = document.getElementById("scroll");

  type ChatType = {
    mychat: boolean,
    contents: string
  };

  const [chatList, setChatList] = useState<ChatType[]>([]);
  const [chatText, setChatText] = useState<{ content : string }>({
    content: "" 
  });
  const [focus, setFocus] = useState<boolean>(false);
  const { content } = chatText;

  const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setChatText({
      ...chatText,
      [name]: value,
    });
  };

  const onSubmitHandler = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content !== "") {
      setChatList([...chatList, {mychat: true, contents: content} ]);
    } else {
      setChatList([])
    };
    setChatText({...chatText, content: ""});
    if (scrollBar) {
      scrollBar.scrollTop = scrollBar.scrollHeight;
    };
  };

  return (
    <div className='ModalContainer'>
      <ModalInContainer>
        <CloseBtnContainer>
          <ClossBtn onClick={() => setIsHelper(false)}>{"<"}</ClossBtn>
          <NameContainer>PEEPPOCHAT</NameContainer>
        </CloseBtnContainer>
        <ChatTextOutContainer id='scroll'>
          <LeftChatContainer>
            <ProfileLineContainer>
              <ProfileImage src={ProfileImg} />
              <ProfileName>PEEPPOCHAT</ProfileName>
            </ProfileLineContainer>
            <LeftChatBox>무엇을 도와드릴까요?</LeftChatBox>
          </LeftChatContainer>
          {chatList.length > 0
            && (
              <RightChatContainer>
              {chatList?.map((item : ChatType) => {
                return (
                  (item.mychat)
                    ? <RightChatBox>{item.contents}</RightChatBox>
                    : <div>
                    <ProfileLineContainer>
                      <ProfileImage src={ProfileImg} />
                      <ProfileName>PEEPPOCHAT</ProfileName>
                    </ProfileLineContainer>
                    <LeftChatBox>{item.contents}</LeftChatBox>
                  </div> 
                )
              })}
              </RightChatContainer>
            )}
        </ChatTextOutContainer>
        <ButtonWrapper>
          <Button>물물교환이란?</Button>
          <Button>포켓경매란?</Button>
          <Button>레이팅이란?</Button>
        </ButtonWrapper>
        <ChatInputBoxContainer
          typeof='onSumbit'
          name='input'
          onSubmit={(e) => onSubmitHandler(e)}
          style={{border: `${focus ? "1px solid #0fc4ac" : "1px solid #ffb37c"}`}}
        >
          <ChatInputContainer
            type='text'
            autoComplete="off"
            name="content"
            value={content}
            placeholder='메세지를 입력해주세요'
            onChange={(e) => onChangeHandler(e)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <SumbitBtnContainer>
            <SubmitButton
              src={SubmitBtn}
              onClick={() => {
                  setChatList([...chatList, {mychat: true, contents: content} ]);
                  setChatText({...chatText, content: ""})
                }
              }
            />
          </SumbitBtnContainer>
        </ChatInputBoxContainer>
      </ModalInContainer>
    </div>
  )
};

const ModalInContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
  background-color: #fdd988;
  position: relative;
  display: grid;
  justify-content: center;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #39373A;
    border-radius: 5px;
        
    &:hover {
      background-color: #524f53;
    }
  }
  ::-webkit-scrollbar-track {
    background-color: #D5D4D4;
    border-radius: 5px;
  }
`;

const CloseBtnContainer = styled.div`
  min-width: 315px;
  max-height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #EC8D49;
  padding: 10px;
  position: relative;
`;

const ClossBtn = styled.div`
  color: #EC8D49;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 30px;
  font-weight: 700;
  position: absolute;
  top: 10px;
  left: 0;
  z-index: 1000;
  cursor: pointer;
  border-radius: 100%;

  &:hover {
    font-size: 31px;
    background-color: #ffb37c;
  }
`;

const NameContainer = styled.div`
  font-family: "Lemon/Milk", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

const ChatTextOutContainer = styled.div`
  width: 100%;
  height: 380px;
  overflow-y: auto;
`;

const ChatInputBoxContainer = styled.form`
  width: 100%;
  max-height: 60px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
  background-color: #ffb37c;
  border-radius: 50px;

  &:hover {
    box-shadow: 0px 0px 5px 0px #ffb37c;
  }
`;

const ChatInputContainer = styled.input`
  width: 100%;
  height: 100%;
  background-color: #ffb37c;
  border-radius: 50px;
  padding: 0px 15px;
  color: #222022;
  font-family: "Pretendard";
  font-size: 16px;
`;

const SubmitButton = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
`;

const SumbitBtnContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #fdd988;
  }
`;

const LeftChatContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  padding: 10px;
`;

const ProfileLineContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  gap: 10px;
`;

const ProfileImage = styled.div<{ src : string }>`
  width: 36px;
  height: 36px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const ProfileName = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`;

const LeftChatBox = styled.div`
  width: 200px;
  max-width: 100%;
  min-height: 50px;
  padding: 16px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  border: 1px solid;
  border-radius: 15px;
  background-color: #FCFCFC;
  display: flex;
  align-items: center;
`;

const RightChatContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: end;
  gap: 20px;
  padding: 10px;
`;

const RightChatBox = styled.div`
  width: 200px;
  max-width: 100%;
  min-height: 50px;
  padding: 16px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  border-radius: 15px;
  background-color: #EC8D49;
  color: #FCFCFC;
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: end;
  gap: 5px;
`;

const Button = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 30px;
  background-color: #EC8D49;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  font-size: 12px;
  font-weight: 400;
  color: #FCFCFC;
  box-shadow: 1px 1px 4px 0px #EC8D49;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #ffb37c;
  }

  &:active {
    background-color: #EC8D49;
    font-size: 11px;
  }
`;

export default HelperModal;