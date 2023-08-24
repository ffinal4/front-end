import React, { useState } from "react";
import { styled } from "styled-components";
import arrow from "../assets/icon/arrow.png";
import orangedot from "../assets/icon/orangedot.png";
import yellowdot from "../assets/icon/yellowdot.png";
import FilterDropdownMenu from "../components/TradeRequestPage/FilterDropdownMenu";
import TradeRequestCard from "../components/TradeRequestPage/TradeRequestCard";

const TradeRequestPage = () => {
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
              <DotImg src={orangedot} />
              교환요청 10
            </RequestStateNumber>
            <RequestIngNumber>
              <DotImg src={yellowdot} />
              교환진행중 10
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
            <TradeRequestCard />
            <TradeRequestCard />
            <TradeRequestCard />
            <TradeRequestCard />
            <TradeRequestCard />
          </CardContainer>
        </AllStateContainer>
      </TradeRequestListContainer>
    </TradeRequestPageContainer>
  );
};

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
export const FilterContainer = styled.div`
  z-index: 800;
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
  font-family: Pretendard;
`;

export const ArrowImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const TradeRequestListContainer = styled.div`
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  margin-top: 20px;
  max-width: 1136px;
  height: 1764px;
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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 30px;
`;

export const ChatState = styled.div`
  width: 192px;
`;

export const RequestStateContainer = styled.div`
  display: flex;
  align-items: center;
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

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
export default TradeRequestPage;
