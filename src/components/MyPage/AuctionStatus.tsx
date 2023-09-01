import React from 'react'
import {
    OutBox,
    Wrapper,
    InBoxWrapper,
    InBox,
    Text
} from './Pocket';
import Auction from "../../assets/icon/auction.png";

const AuctionStatus = ({ navigate } : any) => {
  return (
    <OutBox onClick={() => navigate("/auctioncheck")}>
        <Wrapper>
        <InBoxWrapper>
            <InBox src={Auction} />
        </InBoxWrapper>
        <Text>경매 현황</Text>
        </Wrapper>
    </OutBox>
  )
};

export default AuctionStatus;