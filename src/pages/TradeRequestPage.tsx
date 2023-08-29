import React, { useState } from "react";
import { styled } from "styled-components";
import orangedot from "../assets/icon/orangedot.png";
import emptydot from "../assets/icon/emptydot.png";
import GetRequestList from "../components/TradeRequestPage/GetRequestList";
import SendRequestList from "../components/TradeRequestPage/SendRequestList";

const TradeRequestPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState("필터");

  const [filterTap, setFilterTap] = useState({
    getTap: true,
    sendTap: false,
  });
  const { getTap, sendTap } = filterTap;

  const sendRequestOnclick = () => {
    setFilterTap({
      getTap: false,
      sendTap: true,
    });
  };

  const getRequestOnclick = () => {
    setFilterTap({ getTap: true, sendTap: false });
  };

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
              <TabContainer>
                <GetRequest>받은 요청</GetRequest>
                <SendRequest onClick={sendRequestOnclick}>
                  보낸 요청
                </SendRequest>
              </TabContainer>
              <RequestStateContainer>
                <RequestStateNumber>
                  <DotImg src={emptydot} />
                  교환요청 10
                </RequestStateNumber>
                <RequestIngNumber>
                  <DotImg src={orangedot} />
                  교환진행중 10
                </RequestIngNumber>
              </RequestStateContainer>
              <GetRequestList
                filterOpen={filterOpen}
                setFilterOpen={setFilterOpen}
                dropdownMenu={dropdownMenu}
                setDropdownMenu={setDropdownMenu}
              />
            </div>
          )}
          {getTap === false && sendTap === true && (
            <div>
              <TabContainer>
                <GetRequests onClick={getRequestOnclick}>받은 요청</GetRequests>
                <SendRequests>보낸 요청</SendRequests>
              </TabContainer>
              <RequestStateContainer>
                <RequestStateNumber>
                  <DotImg src={emptydot} />
                  교환요청 10
                </RequestStateNumber>
                <RequestIngNumber>
                  <DotImg src={orangedot} />
                  교환진행중 10
                </RequestIngNumber>
              </RequestStateContainer>
              <SendRequestList
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
  background-color: #fcf6e9;
`;

export const PageLayout = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
`;

export const TradeRequestPageContainer = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 110%;
`;

export const Container = styled.div``;

export const SubTitle = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 40px;
  margin-top: 6px;
`;

export const TabContainer = styled.div`
  display: flex;
  position: absolute;
  margin-left: 40px;
`;

export const GetRequest = styled.div`
  cursor: pointer;
  border: 2px solid black;
  width: 176px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid white;
  border-radius: 5px 5px 0px 0px;
  background-color: white;
  font-family: Pretendard;
`;

export const SendRequest = styled.div`
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
  border-bottom: 4px solid white;
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
