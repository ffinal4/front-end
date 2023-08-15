import React from "react";
import {
  ChatState,
  Container,
  Filter,
  MenuContainer,
  MyItemMenu,
  RequestDateMenu,
  SubTitle,
  Title,
  TradeRequestItemMenu,
  TradeRequestListContainer,
  TradeStateMenu,
} from "./TradeRequestPage";
import MyAutionList from "../components/MyAuctionCheckPage/MyAutionList";

const MyAuctionCheckPage = () => {
  return (
    <div>
      <Title>TRADING REQUEST</Title>
      <Container>
        <SubTitle>교환요청리스트</SubTitle>
        <Filter>Filter</Filter>
      </Container>
      <TradeRequestListContainer>
        <MenuContainer>
          <RequestDateMenu>요청일자</RequestDateMenu>
          <TradeRequestItemMenu>교환 요청 물품</TradeRequestItemMenu>
          <MyItemMenu>내 물건</MyItemMenu>
          <TradeStateMenu>상태</TradeStateMenu>
          <ChatState />
        </MenuContainer>
        <MyAutionList />
        <MyAutionList />
        <MyAutionList />
        <MyAutionList />
        <MyAutionList />
        <MyAutionList />
        <MyAutionList />
        <MyAutionList />
        <MyAutionList />
        <MyAutionList />
      </TradeRequestListContainer>
    </div>
  );
};

export default MyAuctionCheckPage;
