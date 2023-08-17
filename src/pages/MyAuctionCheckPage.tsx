import React, { useState } from "react";
import {
  ArrowImg,
  ChatState,
  Container,
  Filter,
  FilterContainer,
  MenuContainer,
  MyItemMenu,
  RequestDateMenu,
  SubTitle,
  Title,
  TradeRequestItemMenu,
  TradeRequestListContainer,
  TradeStateMenu,
} from "./TradeRequestPage";
import arrow from "../assets/icon/arrow.png";
import MyAutionList from "../components/MyAuctionCheckPage/MyAutionList";
import FilterDropdownMenu from "../components/MyAuctionCheckPage/FilterDropdownMenu";

const MyAuctionCheckPage = () => {
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
          <RequestDateMenu>경매종료일</RequestDateMenu>
          <TradeRequestItemMenu>경매 물품</TradeRequestItemMenu>
          <MyItemMenu>입찰 수</MyItemMenu>
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
