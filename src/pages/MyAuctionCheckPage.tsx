import React, { useState } from "react";
import { styled } from "styled-components";
import {
  AllStateContainer,
  ArrowImg,
  CardContainer,
  Container,
  DotImg,
  Filter,
  FilterContainer,
  GetRequest,
  PageLayout,
  RequestIngNumber,
  RequestStateContainer,
  RequestStateNumber,
  SendRequest,
  SubTitle,
  TabContainer,
  Title,
  TradeRequestListContainer,
  TradeRequestPageContainer,
} from "./TradeRequestPage";
import arrow from "../assets/icon/arrow.png";
import bluedot from "../assets/icon/bluedot.png";
import blackdot from "../assets/icon/blackdot.png";
import FilterDropdownMenu from "../components/MyAuctionCheckPage/FilterDropdownMenu";
import AuctionRequestCard from "../components/MyAuctionCheckPage/AuctionRequestCard";

const MyAuctionCheckPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState("필터");

  return (
    <LayoutContainer>
      <PageLayout>
        <TradeRequestPageContainer>
          <Title>BIDDING OVERVIEW</Title>
          <Container>
            <SubTitle>경매 현황</SubTitle>
          </Container>
          <TabContainer>
            <GetRequest>내 경매</GetRequest>
            <SendRequest>입찰 경매</SendRequest>
          </TabContainer>
          <RequestStateContainer>
            <RequestStateNumber>
              <DotImg src={bluedot} />
              경매중 10
            </RequestStateNumber>
            <RequestIngNumber>
              <DotImg src={blackdot} />
              경매완료 2
            </RequestIngNumber>
          </RequestStateContainer>
          <TradeRequestListContainer>
            <AllStateContainer>
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
              <CardContainer>
                <AuctionRequestCard />
                <AuctionRequestCard />
                <AuctionRequestCard />
                <AuctionRequestCard />
              </CardContainer>
            </AllStateContainer>
          </TradeRequestListContainer>
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
