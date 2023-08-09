import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components';
import Profile from '../../assets/images/엎드린.png'
import Profile2 from '../../assets/images/선.png'

type Message = {
    profile: string,
    name: string,
    message: string,
    image: string,
    myChat: string,
    isOpen: boolean
};

interface Props {
    messageList: Message[];
    setMessageList: React.Dispatch<React.SetStateAction<Message[]>>;
    item: Message;
};

const Chatting : React.FC<Props> = ({ item, messageList, setMessageList }) => {

    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    const [chats, setChats] = useState([{
        time: "10:00:00",
        content: "안녕하세요"
    }]);
    const [chatting, setChatting] = useState({
        content: ""
    });
    const [alerts, setAlerts] = useState(false);

    useEffect(() => {
        setAlerts(true);
    }, [])

    const onChangeChatHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setChatting({
            ...chatting,
            [name]: value,
        });
    };

    const onClickChatHandler = () => {
        if (chatting.content === "") {
            alert("메세지를 입력해주세요!");
        } else {
            setChats([...chats, {...chats, time: `${hours}:${minutes}:${seconds}`, content: chatting.content}]);
            setChatting({...chatting, content: ""});
            return {
                ...item,
                myChat: chats[(chats.length) - 1].content,
            };
        };
    };

    const onClickNoHandler = () => {
        setAlerts(false);
    };

    return (
        <ChattingContainer>
            {(alerts)
            && <AlertContainer>
                <ProductImages src={Profile2} />
                <LastMessageWrapper>
                    <LastMessageTitle>스파이더맨 어크로스 더 유니버스 IMA...</LastMessageTitle>
                    <LastMessageContent>바꾼사람이핍포</LastMessageContent>
                </LastMessageWrapper>
                <NoButton onClick={onClickNoHandler}>거절</NoButton>
            </AlertContainer>}
            <ChattingWrapper>
                <OpponentChatLineContainer>
                    <ChatProfile src={item.profile} />
                    <OpponentChat>{item.message}</OpponentChat>
                    <TimeText>
                        {chats[0].time}
                    </TimeText>
                </OpponentChatLineContainer>
                {chats.map((text) => {
                    return (
                        <MyChatLineContainer>
                            <TimeText>
                                {text.time}
                            </TimeText>
                            <MyChat>{text.content}</MyChat>
                            <ChatProfile src={Profile} />
                        </MyChatLineContainer>
                    )
                })}
            </ChattingWrapper>
            <ChattingInputWrapper>
                <ChattingInput
                    type="text"
                    name='content'
                    value={chatting.content}
                    placeholder='내용을 입력해주세요.'
                    onChange={(event) => onChangeChatHandler(event)}
                />
                <Button onClick={onClickChatHandler}/>
            </ChattingInputWrapper>
        </ChattingContainer>
    )
};

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
    height: 500px;
    padding: 0px 48px;
    overflow-y: scroll;
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
    width: 240px;
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
    padding: 0px 0px 40px 0px;
`;

const MyChat = styled.div`
    display: flex;
    width: 240px;
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

const TimeText = styled.div`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
`;

const AlertContainer = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    border-right: 1px solid #C3C3C3;
    border-bottom: 1px solid #C3C3C3;
    border-left: 1px solid #C3C3C3;
    background-color: #FFF;
    padding: 20px;
`;

const ProductImages = styled.img`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    background-color: #D9D9D9;
    cursor: pointer;
`;

export default Chatting;