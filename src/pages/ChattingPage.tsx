import React, { useState } from 'react'
import { styled } from 'styled-components';
import Profile from '../assets/images/엎드린.png'
import Profile2 from '../assets/images/선.png'
import Image from '../assets/images/song.jpg'
import Image2 from '../assets/images/ppapparo.jpg'
import Chatting from '../components/ChattingPage/Chatting';

const ChattingPage = () => {

    const [messageList, setMessageList] = useState([
        {profile: Profile, name: "이승재", message: "TEAM 핍포 화이팅!", image: Image2, myChat: "", isOpen: false},
        {profile: Profile2, name: "박준영", message: "ㅎㅎㅎㅎㅎ", image: Image, myChat: "", isOpen: false},
        {profile: Profile, name: "서명진", message: "안녕하세요", image: Image2, myChat: "", isOpen: false},
        {profile: Profile2, name: "윤지숙", message: "디자이너 화이팅!", image: Image, myChat: "", isOpen: false},
        {profile: Profile, name: "이지원A", message: "프론트엔드 화이팅!", image: Image2, myChat: "", isOpen: false},
        {profile: Profile2, name: "이지원B", message: "백엔드 화이팅!", image: Image, myChat: "", isOpen: false},
        {profile: Profile, name: "김지훈", message: "프로젝트 화이팅!", image: Image2, myChat: "", isOpen: false},
    ]);

    const onClickOpenEventHandler = (name : string) => {
        const updatedMessageList = messageList.map(message => {
            if (message.name === name) {
                if (message.isOpen) {
                    return {
                        ...message,
                        isOpen: false,
                    };
                }
                return {
                    ...message,
                    isOpen: true,
                };
            }
            return {
                ...message,
                isOpen: false,
            };
        });
        setMessageList(updatedMessageList);
    };

  return (
    <PageContainer>
        <ContainerWrapper>
                {messageList.map((item) => {
                    return (
                        <ChatWrapper>
                    {(item.isOpen)
                    ? (<ListContainer>
                    <ListCard backgroundColor='#FFF' key={item.name} onClick={() => onClickOpenEventHandler(item.name)}>
                        <MessageLeftWrapper>
                            <ProfileImage src={item.profile} />
                            <LastMessageWrapper>
                                <LastMessageTitle>{item.name}</LastMessageTitle>
                                <LastMessageContent>{item.message}</LastMessageContent>
                            </LastMessageWrapper>
                        </MessageLeftWrapper>
                        <ProductImages src={item.image}/>
                    </ListCard>
                    </ListContainer>)
                : (<ListContainer>
                <ListCard backgroundColor='#EAEAEA' key={item.name} onClick={() => onClickOpenEventHandler(item.name)}>
                    <MessageLeftWrapper>
                        <ProfileImage src={item.profile} />
                        <LastMessageWrapper>
                            <LastMessageTitle>{item.name}</LastMessageTitle>
                            <LastMessageContent>{item.message}</LastMessageContent>
                        </LastMessageWrapper>
                    </MessageLeftWrapper>
                    <ProductImages src={item.image}/>
                </ListCard>
                </ListContainer>)}
                <ChattingContainer>
                {(item.isOpen) && <Chatting item={item} messageList={messageList} setMessageList={setMessageList}/>}
                </ChattingContainer>
                </ChatWrapper>
                    )
                })
                }
        </ContainerWrapper>
        <BottomContainer />
    </PageContainer>
  )
};

const PageContainer = styled.div`
    width: 100%;
    height: 1080px;
    display: flex;
    background-color: #F0F0F0;
    padding: 70px 392px 0px 392px;
`;

const ContainerWrapper = styled.div`
    width: 100%;
    position: relative;
`;

const ListContainer = styled.div`
    width: 560px;
    border-left: 1px solid #C3C3C3;
    border-right: 1px solid #C3C3C3;
    cursor: pointer;
`;

const ListCard = styled.div<{ backgroundColor : string }>`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
    border-bottom: 1px solid #C3C3C3;
    padding: 20px 18px 20px 20px;
`;

const ProfileImage = styled.div<{ src : string }>`
    width: 80px;
    height: 80px;
    background-image: ${(props) => `url(${props.src})`};
    background-size: cover;
    border-radius: 100%;
`;

const LastMessageWrapper = styled.div`
    padding: 0px 112px 0px 20px;
`;

const MessageLeftWrapper = styled.div`
    display: flex;
    align-items: center;
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

const ProductImages = styled.img`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ChatWrapper = styled.div`
    width: 100%;
`;

const ChattingContainer = styled.div`
    top: 69px; 
    right: 376px;
    position: fixed;
`;

const BottomContainer = styled.div`
    width: 100%;
    height: 186px;
    background-color: #D9D9D9;
    position: fixed;
    bottom: 0;
    left: 0;
`;

export default ChattingPage;