import React, { useState } from "react";
import { styled } from "styled-components";
import {
  Container,
  DotImg,
  GetRequest,
  GetRequests,
  PageLayout,
  RequestIngNumber,
  RequestStateContainer,
  RequestStateNumber,
  SendRequest,
  SendRequests,
  SubTitle,
  TabContainer,
  Title,
  TradeRequestPageContainer,
} from "./TradeRequestPage";
import bluedot from "../assets/icon/bluedot.png";
import blackdot from "../assets/icon/blackdot.png";
import MyAuctionList from "../components/MyAuctionCheckPage/MyAuctionList";

const MyAuctionCheckPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState("필터");

  const [filterTap, setFilterTap] = useState({
    myAuctionTap: true,
    bidAuctionTap: false,
  });

  const { myAuctionTap, bidAuctionTap } = filterTap;

  const myAuctionOnclick = () => {
    setFilterTap({
      myAuctionTap: false,
      bidAuctionTap: true,
    });
  };

  const bidAuctionOnclick = () => {
    setFilterTap({ myAuctionTap: true, bidAuctionTap: false });
  };

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
              <TabContainer>
                <GetRequest>내 경매</GetRequest>
                <SendRequest onClick={myAuctionOnclick}>입찰 경매</SendRequest>
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
              <MyAuctionList
                filterOpen={filterOpen}
                setFilterOpen={setFilterOpen}
                dropdownMenu={dropdownMenu}
                setDropdownMenu={setDropdownMenu}
              />
            </div>
          )}
          {myAuctionTap === false && bidAuctionTap === true && (
            <div>
              <TabContainer>
                <GetRequests onClick={bidAuctionOnclick}>내 경매</GetRequests>
                <SendRequests>입찰 경매</SendRequests>
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
              <MyAuctionList
                filterOpen={filterOpen}
                setFilterOpen={setFilterOpen}
                dropdownMenu={dropdownMenu}
                setDropdownMenu={setDropdownMenu}
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
