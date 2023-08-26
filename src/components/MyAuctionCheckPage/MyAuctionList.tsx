import React from "react";
import {
  CardContainer,
  Filter,
  FilterContainer,
  FilterdropdownMenuContainer,
  TradeRequestListContainer,
} from "../TradeRequestPage/GetRequestList";
import { ArrowImg } from "../../pages/TradeRequestPage";
import FilterDropdownMenu from "./FilterDropdownMenu";
import arrow from "../../assets/icon/arrow.png";
import AuctionRequestCard from "./AuctionRequestCard";

interface MyAuctionListProps {
  filterOpen: boolean;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownMenu: string;
  setDropdownMenu: React.Dispatch<React.SetStateAction<string>>;
}

const MyAuctionList: React.FC<MyAuctionListProps> = ({
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
          <AuctionRequestCard />
          <AuctionRequestCard />
          <AuctionRequestCard />
          <AuctionRequestCard />
        </CardContainer>
      </TradeRequestListContainer>
    </div>
  );
};

export default MyAuctionList;
