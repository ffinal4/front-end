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
  RequestIngNumber,
  RequestStateContainer,
  RequestStateNumber,
  SubTitle,
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
    <TradeRequestPageContainer>
      <Title>TRADING REQUEST</Title>
      <Container>
        <SubTitle>교환요청</SubTitle>
      </Container>
      <TradeRequestListContainer>
        <AllStateContainer>
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
  );
};

export default MyAuctionCheckPage;
