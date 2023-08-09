import React, { useState } from 'react'
import { styled } from 'styled-components';
import Profile from '../assets/images/엎드린.png'
import Profile2 from '../assets/images/선.png'
import Image from '../assets/images/song.jpg'
import Image2 from '../assets/images/ppapparo.jpg'

const ChattingPage = () => {

    const [chats, setChat] = useState<{id: Number, content: string}[]>([{
        id: 1,
        content: ""
    }]);

    const [messageList, setMessageList] = useState([
        {profile: Profile, name: "이승재", message: "TEAM 핍포 화이팅!", image: Image2, isOpen: false},
        {profile: Profile2, name: "박준영", message: "", image: Image, isOpen: true},
        {profile: Profile, name: "서명진", message: "안녕하세요", image: Image2, isOpen: false},
        {profile: Profile2, name: "윤지숙", message: "디자이너 화이팅!", image: Image, isOpen: false},
        {profile: Profile, name: "이지원A", message: "프론트엔드 화이팅!", image: Image2, isOpen: false},
        {profile: Profile2, name: "이지원B", message: "백엔드 화이팅!", image: Image, isOpen: false},
        {profile: Profile, name: "김지훈", message: "프로젝트 화이팅!", image: Image2, isOpen: false},
    ]);

  return (
    <PageContainer>
        <ContainerWrapper>
            <ListContainer>
                {messageList.map((item) => {
                    return (
                    (item.isOpen)
                    ? <ListCard backgroundColor='#FFF'>
                        <MessageLeftWrapper>
                            <ProfileImage src={item.profile} />
                            <LastMessageWrapper>
                                <LastMessageTitle>{item.name}</LastMessageTitle>
                                <LastMessageContent>{item.message}</LastMessageContent>
                            </LastMessageWrapper>
                        </MessageLeftWrapper>
                        <ProductImages src={item.image}/>
                    </ListCard>
                : <ListCard backgroundColor='#EAEAEA'>
                    <MessageLeftWrapper>
                        <ProfileImage src={item.profile} />
                        <LastMessageWrapper>
                            <LastMessageTitle>{item.name}</LastMessageTitle>
                            <LastMessageContent>{item.message}</LastMessageContent>
                        </LastMessageWrapper>
                    </MessageLeftWrapper>
                    <ProductImages src={item.image}/>
                </ListCard>
                    )
                })}
            </ListContainer>
            <ChattingContainer>
                <ChattingWrapper>
                    <OpponentChatLineContainer>
                        <ChatProfile src={Profile2} />
                        <OpponentChat>안녕하세요!</OpponentChat>
                    </OpponentChatLineContainer>
                    <MyChatLineContainer>
                        <MyChat>안녕하세요!</MyChat>
                        <ChatProfile src={Profile} />
                    </MyChatLineContainer>
                </ChattingWrapper>
                <ChattingInputWrapper>
                    <ChattingInput
                        type="text"
                        placeholder='내용을 입력해주세요.'
                    />
                    <Button />
                </ChattingInputWrapper>
            </ChattingContainer>
        </ContainerWrapper>
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
    display: flex;
    gap: 16px;
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

const ChattingContainer = styled.div`
    width: 560px;
    height: 756px;
    border: 1px solid #C3C3C3;
    background-color: #FFF;
    padding: 30px 0px;
    display: grid;
    justify-content: center;
`;

const ChattingWrapper = styled.div`
    width: 100%;
    height: 640px;
`;

const OpponentChatLineContainer = styled.div`
    width: 100%;
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
    width: 288px;
    max-width: 464px;
    padding: 16px 20px;
    align-items: flex-start;
    border-bottom: 2px solid #000;
    background-color: #F0F0F0;
    margin: 0px 10px 0px 20px;
`;

const MyChatLineContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
    padding: 0px 48px 40px 48px;
`;

const MyChat = styled.div`
    display: flex;
    width: 288px;
    max-width: 464px;
    padding: 16px 20px;
    align-items: flex-start;
    border-bottom: 2px solid #000;
    margin: 0px 10px 0px 20px;
`;

const ChattingInputWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    height: 44px;
    border: 1px solid #000;
`;

const ChattingInput = styled.input`
    width: 100%;
    padding: 0px 20px;
`;

const Button = styled.button`
    width: 24px;
    height: 24px;
    margin: 0px 20px 0px 0px;
    background-color: #D9D9D9;
    cursor: pointer;
`;

export default ChattingPage;