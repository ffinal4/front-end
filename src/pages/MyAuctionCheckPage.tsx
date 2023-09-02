import React, { useState } from "react";
import { styled } from "styled-components";
import {
  Container,
  PageLayout,
  SubTitle,
  Title,
  TradeRequestPageContainer,
} from "./TradeRequestPage";
import MyAuctionList from "../components/MyAuctionCheckPage/MyAuctionList";
import BidAuctionList from "../components/MyAuctionCheckPage/BidAuctionList";

const MyAuctionCheckPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [auctionFilterOpen, setAuctionFilterOpen] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState("전체");

  const [filterTap, setFilterTap] = useState({
    myAuctionTap: true,
    bidAuctionTap: false,
  });

  const { myAuctionTap, bidAuctionTap } = filterTap;

  return (
    <LayoutContainer>
      <PageLayout>
        <TradeRequestPageContainer>
          <Title>BIDDING OVERVIEW</Title>
          <Container>
            <SubTitle>경매 현황</SubTitle>
          </Container>
          {myAuctionTap === true && bidAuctionTap === false && (
            <div>
              <MyAuctionList
                auctionFilterOpen={auctionFilterOpen}
                setAuctionFilterOpen={setAuctionFilterOpen}
                dropdownMenu={dropdownMenu}
                setDropdownMenu={setDropdownMenu}
                setFilterTap={setFilterTap}
                filterTap={filterTap}
              />
            </div>
          )}
          {myAuctionTap === false && bidAuctionTap === true && (
            <div>
              <BidAuctionList
                filterOpen={filterOpen}
                setFilterOpen={setFilterOpen}
                dropdownMenu={dropdownMenu}
                setDropdownMenu={setDropdownMenu}
                setFilterTap={setFilterTap}
                filterTap={filterTap}
              />
            </div>
          )}
        </TradeRequestPageContainer>
      </PageLayout>
    </LayoutContainer>
  );
};
const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 220px 0px 190px 0px;
  background-color: #ecf4fc;
`;
export default MyAuctionCheckPage;
