import React from "react";
import {
  CardContainer,
  Filter,
  FilterContainer,
  FilterdropdownMenuContainer,
  TradeRequestListContainer,
} from "./GetRequestList";
import {
  ArrowImg,
  GetRequests,
  RequestIngNumber,
  RequestStateContainer,
  RequestStateNumber,
  SendRequests,
  TabContainer,
} from "../../pages/TradeRequestPage";
import FilterDropdownMenu from "./FilterDropdownMenu";
import TradeRequestCard, { DotImg } from "./TradeRequestCard";
import arrow from "../../assets/icon/arrow.png";
import orangedot from "../../assets/icon/orangedot.png";
import emptydot from "../../assets/icon/emptydot.png";

interface SendRequestListProps {
  filterOpen: boolean;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownMenu: string;
  setDropdownMenu: React.Dispatch<React.SetStateAction<string>>;
  filterTap: any;
  setFilterTap: React.Dispatch<
    React.SetStateAction<{ getTap: boolean; sendTap: boolean }>
  >;
}

const SendRequestList: React.FC<SendRequestListProps> = ({
  filterOpen,
  dropdownMenu,
  setFilterOpen,
  setDropdownMenu,
  setFilterTap,
}) => {
  const getRequestOnclick = () => {
    setFilterTap({ getTap: true, sendTap: false });
  };
  return (
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
        </CardContainer>
      </TradeRequestListContainer>
    </div>
  );
};

export default SendRequestList;
