import React, { useState } from "react";
import { styled } from "styled-components";
import arrow from "../assets/icon/arrow.png";
import TradeRequestList from "../components/TradeRequestPage/TradeRequestList";
import FilterDropdownMenu from "../components/TradeRequestPage/FilterDropdownMenu";

const TradeRequestPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState("필터");

  return (
    <div>
      <Title>TRADING REQUEST</Title>
      <Container>
        <SubTitle>교환요청리스트</SubTitle>
        <FilterContainer>
          <Filter
            onClick={() => {
              setFilterOpen(!filterOpen);
            }}
          >
            {dropdownMenu}
            <ArrowImg src={arrow} />
          </Filter>
          {filterOpen && (
            <FilterDropdownMenu
              filterOpen={filterOpen}
              setFilterOpen={setFilterOpen}
              setDropdownMenu={setDropdownMenu}
            />
          )}
        </FilterContainer>
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

export const Title = styled.div`
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 110%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SubTitle = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
`;
export const FilterContainer = styled.div`
  /* border: 1px solid red; */
`;
export const Filter = styled.div`
  border-bottom: 1px solid #222020;
  cursor: pointer;
  width: 176px;
  height: 44px;
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 20px;
  justify-content: space-between;
  position: relative;
`;

export const ArrowImg = styled.img`
  width: 24px;
  height: 24px;
`;
export const TradeRequestListContainer = styled.div`
  border-top: 4px solid black;
  border-bottom: 4px solid black;
  margin-top: 20px;
  width: 1136px;
  height: 1192px;
`;

export const MenuContainer = styled.div`
  border-bottom: 2px solid #222020;
  background-color: #fdd988;
  display: flex;
  height: 54px;
`;

export const RequestDateMenu = styled.div`
  /* border: 1px solid blue; */
  width: 174px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  font-family: Pretendard;
`;

export const TradeRequestItemMenu = styled.div`
  /* border: 1px solid blue; */
  width: 478px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  font-family: Pretendard;
`;

export const MyItemMenu = styled.div`
  /* border: 1px solid blue; */
  width: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  font-family: Pretendard;
`;

export const TradeStateMenu = styled.div`
  /* border: 1px solid blue; */
  width: 172px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  font-family: Pretendard;
`;

export const ChatState = styled.div`
  /* border: 1px solid blue; */
  width: 192px;
`;

export default TradeRequestPage;
