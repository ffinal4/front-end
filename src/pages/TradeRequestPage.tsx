import React from "react";
import { styled } from "styled-components";
import TradeRequestList from "../components/TradeRequestPage/TradeRequestList";

const TradeRequestPage = () => {
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
        <TradeRequestList />
        <TradeRequestList />
        <TradeRequestList />
        <TradeRequestList />
        <TradeRequestList />
        <TradeRequestList />
        <TradeRequestList />
        <TradeRequestList />
        <TradeRequestList />
        <TradeRequestList />
      </TradeRequestListContainer>
    </div>
  );
};

const Title = styled.div`
  /* border: 1px solid red; */
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 110%;
`;

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SubTitle = styled.div`
  /* border: 1px solid red; */
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
`;

const Filter = styled.div`
  border-bottom: 1px solid #222020;
  cursor: pointer;
  width: 176px;
  height: 44px;
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 20px;
`;

const TradeRequestListContainer = styled.div`
  border-top: 4px solid black;
  border-bottom: 4px solid black;
  margin-top: 20px;
  width: 1136px;
  height: 1194px;
`;

const MenuContainer = styled.div`
  border-bottom: 2px solid #e1e1e1;
  background-color: #efefef;
  display: flex;
  height: 56px;
`;

const RequestDateMenu = styled.div`
  /* border: 1px solid blue; */
  width: 174px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  font-family: Pretendard;
`;

const TradeRequestItemMenu = styled.div`
  /* border: 1px solid blue; */
  width: 478px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  font-family: Pretendard;
`;

const MyItemMenu = styled.div`
  /* border: 1px solid blue; */
  width: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  font-family: Pretendard;
`;

const TradeStateMenu = styled.div`
  /* border: 1px solid blue; */
  width: 172px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  font-family: Pretendard;
`;

const ChatState = styled.div`
  /* border: 1px solid blue; */
  width: 192px;
`;

export default TradeRequestPage;
