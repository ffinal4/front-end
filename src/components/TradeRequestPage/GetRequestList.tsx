import React from "react";
import { styled } from "styled-components";
import FilterDropdownMenu from "./FilterDropdownMenu";
import TradeRequestCard, { DotImg } from "./TradeRequestCard";
import arrow from "../../assets/icon/arrow.png";
import orangedot from "../../assets/icon/orangedot.png";
import emptydot from "../../assets/icon/emptydot.png";
import {
  ArrowImg,
  GetRequest,
  RequestIngNumber,
  RequestStateContainer,
  RequestStateNumber,
  SendRequest,
  TabContainer,
} from "../../pages/TradeRequestPage";

interface GetRequestListProps {
  filterOpen: boolean;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownMenu: string;
  setDropdownMenu: React.Dispatch<React.SetStateAction<string>>;
  filterTap: any;
  setFilterTap: React.Dispatch<
    React.SetStateAction<{ getTap: boolean; sendTap: boolean }>
  >;
}
const GetRequestList: React.FC<GetRequestListProps> = ({
  filterOpen,
  dropdownMenu,
  setFilterOpen,
  setDropdownMenu,
  setFilterTap,
}) => {
  const sendRequestOnclick = () => {
    setFilterTap({
      getTap: false,
      sendTap: true,
    });
  };
  return (
    <div>
      <TabContainer>
        <GetRequest>받은 요청</GetRequest>
        <SendRequest onClick={sendRequestOnclick}>보낸 요청</SendRequest>
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
      <TradeRequestListContainer>
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
            <FilterdropdownMenuContainer>
              <FilterDropdownMenu
                filterOpen={filterOpen}
                setFilterOpen={setFilterOpen}
                setDropdownMenu={setDropdownMenu}
              />
            </FilterdropdownMenuContainer>
          )}
        </FilterContainer>
        <CardContainer>
          <TradeRequestCard />
          <TradeRequestCard />
          <TradeRequestCard />
          <TradeRequestCard />
          <TradeRequestCard />
          <TradeRequestCard />
          <TradeRequestCard />
          <TradeRequestCard />
        </CardContainer>
      </TradeRequestListContainer>
    </div>
  );
};

export const TradeRequestListContainer = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 23px;
  width: 100%;
  height: 1784px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const FilterContainer = styled.div`
  z-index: 800;
  padding-right: 40px;
  display: flex;
  justify-content: end;
  margin-top: 40px;
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
  font-family: Pretendard;
`;

export const FilterdropdownMenuContainer = styled.div`
  position: absolute;
  margin-top: 44px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0px 40px;
  margin-top: 20px;
`;
export default GetRequestList;
