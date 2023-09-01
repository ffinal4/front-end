import React from 'react'
import {
    OutBox,
    Wrapper,
    InBoxWrapper,
    InBox,
    Text
} from './Pocket';
import Like from "../../assets/icon/blacklike.png";

const ZzimListBtn = ({ navigate } : any) => {
  return (
    <OutBox
      onClick={() => {
        navigate("/zzimlist");
    }}>
        <Wrapper>
        <InBoxWrapper>
            <InBox src={Like} />
        </InBoxWrapper>
        <Text>찜한 목록</Text>
        </Wrapper>
    </OutBox>
  )
};

export default ZzimListBtn;