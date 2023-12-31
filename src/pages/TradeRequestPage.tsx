import React, { useState } from "react";
import { styled } from "styled-components";
import GetRequestList from "../components/TradeRequestPage/GetRequestList";
import SendRequestList from "../components/TradeRequestPage/SendRequestList";
import Paging from "../components/common/Paging/Paging";

const TradeRequestPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterTap, setFilterTap] = useState({
    getTap: true,
    sendTap: false,
  });
  const { getTap, sendTap } = filterTap;

  return (
    <LayoutContainer>
      <PageLayout>
        <TradeRequestPageContainer>
          <Title>TRADING REQUEST</Title>
          <Container>
            <SubTitle>교환요청</SubTitle>
          </Container>
          {getTap === true && sendTap === false && (
            <div>
              <GetRequestList
                filterOpen={filterOpen}
                setFilterOpen={setFilterOpen}
                filterTap={filterTap}
                setFilterTap={setFilterTap}
              />
            </div>
          )}
          {getTap === false && sendTap === true && (
            <div>
              <SendRequestList
                filterOpen={filterOpen}
                setFilterOpen={setFilterOpen}
                filterTap={filterTap}
                setFilterTap={setFilterTap}
              />
            </div>
          )}
        </TradeRequestPageContainer>
      </PageLayout>
      <Paging />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 220px 0px 190px 0px;
  background-color: #fcf6e9;
`;

export const PageLayout = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
`;

export const TradeRequestPageContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const Title = styled.div`
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 110%;
`;

export const Container = styled.div``;

export const SubTitle = styled.div`
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 40px;
  margin-top: 6px;
`;

export const TabContainer = styled.div`
  display: flex;
  margin-left: 40px;
  position: absolute;
  top: -42px;
`;

export const GetRequest = styled.div`
  cursor: pointer;
  border: 2px solid black;
  width: 176px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  border-radius: 5px 5px 0px 0px;
  background-color: white;
  font-family: "Pretendard";
`;

export const SendRequest = styled.div`
  width: 176px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  border-radius: 5px 5px 0px 0px;
  font-family: Pretendard;
  cursor: pointer;
  border-bottom: 2px solid black;
`;

export const GetRequests = styled.div`
  width: 176px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  border-bottom: 2px solid black;
  border-radius: 5px 5px 0px 0px;
  font-family: Pretendard;
  cursor: pointer;
`;

export const SendRequests = styled.div`
  cursor: pointer;
  border: 2px solid black;
  width: 176px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  border-radius: 5px 5px 0px 0px;
  background-color: white;
  font-family: Pretendard;
`;

export const ArrowImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const RequestDateMenu = styled.div`
  width: 174px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  font-family: Pretendard;
`;

export const TradeRequestItemMenu = styled.div`
  width: 478px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  font-family: Pretendard;
`;

export const MyItemMenu = styled.div`
  width: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  font-family: Pretendard;
`;

export const TradeStateMenu = styled.div`
  width: 172px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  font-family: Pretendard;
`;

export const AllStateContainer = styled.div`
  width: 100%;
  border: 1px solid black;
  margin-top: 20px;
`;

export const ChatState = styled.div`
  width: 192px;
`;

export const RequestStateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 40px;
`;

export const RequestStateNumber = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
`;

export const RequestIngNumber = styled.div`
  display: flex;
  align-items: center;
  font-family: "Pretendard";
  font-size: 16px;
`;

export const DotImg = styled.img`
  width: 8px;
  height: 8px;
  margin-right: 8px;
`;

export default TradeRequestPage;
