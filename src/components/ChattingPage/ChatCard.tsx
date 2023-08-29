import React from 'react'
import { styled } from 'styled-components';
import Chatting from './Chatting';

const ChatCard = ({ item, messageList, setMessageList } : any) => {

    const onClickOpenEventHandler = (name : string) => {
        const updatedMessageList = messageList.map((chat : any) => {
            if (chat.name === name) {
                if (chat.isOpen) {
                    return {
                        ...chat,
                        isOpen: false,
                    };
                }
                return {
                    ...chat,
                    isOpen: true,
                };
            }
            return {
                ...chat,
                isOpen: false,
            };
        });
        setMessageList(updatedMessageList);
    };

    return (
        <div>
            {(item.isOpen)
                ? (
                    <ListCard backgroundColor='#EFEFEF' key={item.name} onClick={() => onClickOpenEventHandler(item.name)}>
                        <MessageLeftWrapper>
                            <ProfileImage src={item.profile} />
                            <LastMessageWrapper>
                                <LastMessageTitle>{item.name}</LastMessageTitle>
                                <LastMessageContent>{item.message}</LastMessageContent>
                            </LastMessageWrapper>
                        </MessageLeftWrapper>
                        <ProductImages src={item.image} />
                    </ListCard>
                )
                : (
                    <ListCard backgroundColor='#FCFCFC' key={item.name} onClick={() => onClickOpenEventHandler(item.name)}>
                        <MessageLeftWrapper>
                            <ProfileImage src={item.profile} />
                            {(item.count > 0)
                                && <Count>{item.count}</Count>}
                            <LastMessageWrapper>
                                <LastMessageTitle>{item.name}</LastMessageTitle>
                                <LastMessageContent>{item.message}</LastMessageContent>
                            </LastMessageWrapper>
                        </MessageLeftWrapper>
                        <ProductImages src={item.image} />
                    </ListCard>
                )}
            {/* <ChatWrapper>
                <ChattingContainer>
                    {(item.isOpen) && <Chatting item={item} messageList={messageList} setMessageList={setMessageList}/>}
                </ChattingContainer>
            </ChatWrapper> */}
        </div>
    )
};

const ListCard = styled.div<{ backgroundColor : string }>`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
    padding: 20px 20px 20px 20px;
    position: relative;
    cursor: pointer;

    &:hover {
        background-color: #EFEFEF;
    }
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
    border-radius: 5px;
`;

const ChatWrapper = styled.div`
    width: 100%;
    height: 900px;
`;

const ChattingContainer = styled.div`
    top: 141px; 
    right: 395px;
    position: absolute;
`;

const Count = styled.div`
    display: inline-flex;
    padding: 0px 6px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    gap: 10px;
    border-radius: 20px;
    background-color: #DF3737;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    color: #FCFCFC;
    z-index: 999;
    top: 20px;
    left: 83px;
    min-width: 21px;
`;

export default ChatCard;