import React from "react";
import {
  CardContainer,
  Filter,
  FilterContainer,
  FilterdropdownMenuContainer,
  TradeRequestListContainer,
} from "./GetRequestList";
import { ArrowImg } from "../../pages/TradeRequestPage";
import FilterDropdownMenu from "./FilterDropdownMenu";
import TradeRequestCard from "./TradeRequestCard";
import arrow from "../../assets/icon/arrow.png";

interface SendRequestListProps {
  filterOpen: boolean;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownMenu: string;
  setDropdownMenu: React.Dispatch<React.SetStateAction<string>>;
}

const SendRequestList: React.FC<SendRequestListProps> = ({
  filterOpen,
  dropdownMenu,
  setFilterOpen,
  setDropdownMenu,
}) => {
  return (
    <div>
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
