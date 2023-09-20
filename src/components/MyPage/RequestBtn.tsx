import React from 'react'
import {
    OutBox,
    Wrapper,
    InBoxWrapper,
    InBox,
    Text
} from './Pocket';
import Exchange from "../../assets/icon/exchange.png";

const RequestBtn = ({ navigate } : any) => {
  return (
    <OutBox
      onClick={() => {
        navigate("/traderequest");
    }}>
        <Wrapper>
          <InBoxWrapper>
              <InBox src={Exchange} />
          </InBoxWrapper>
          <Text>교환 요청</Text>
        </Wrapper>
    </OutBox>
  )
};

export default RequestBtn;