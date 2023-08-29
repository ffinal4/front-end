import React from 'react'
import {
    OutBox,
    Wrapper,
    InBoxWrapper,
    InBox,
    Text
} from './Pocket';
import MyChat from "../../assets/icon/profile.png";

const MyChatBtn = ({ navigate } : any) => {
  return (
    <OutBox
        onClick={() => {
        navigate("/chat");
        }}
    >
        <Wrapper>
        <InBoxWrapper>
            <InBox src={MyChat} />
        </InBoxWrapper>
        <Text>내 채팅</Text>
        </Wrapper>
    </OutBox>
  )
};

export default MyChatBtn;