import React from 'react'
import {
    OutBox,
    Wrapper,
    InBoxWrapper,
    InBox,
    Text
} from './Pocket';
import MyPocket from "../../assets/icon/layer_6.png";

const MyPocketBtn = ({ navigate } : any) => {
  return (
    <OutBox onClick={() => {
      navigate("/mypocket");
    }}>
        <Wrapper>
          <InBoxWrapper>
              <InBox src={MyPocket} />
          </InBoxWrapper>
          <Text>내 주머니</Text>
        </Wrapper>
    </OutBox>
  )
};

export default MyPocketBtn;