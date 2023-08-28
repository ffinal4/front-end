import React from "react";
import {
  CardContainer,
  Filter,
  FilterdropdownMenuContainer,
  TradeRequestListContainer,
} from "../TradeRequestPage/GetRequestList";
import { ArrowImg } from "../../pages/TradeRequestPage";
import FilterDropdownMenu from "./FilterDropdownMenu";
import AuctionRequestCard from "./AuctionRequestCard";
import arrow from "../../assets/icon/arrow.png";

interface BidAuctionListProps {
  filterOpen: boolean;
  dropdownMenu: string;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDropdownMenu: React.Dispatch<React.SetStateAction<string>>;
}

const BidAuctionList: React.FC<BidAuctionListProps> = ({
  filterOpen,
  dropdownMenu,
  setFilterOpen,
  setDropdownMenu,
}) => {
  return (
    <div>
      <TradeRequestListContainer>
        <FilterdropdownMenuContainer>
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
        </FilterdropdownMenuContainer>
        <CardContainer>
          <AuctionRequestCard />
          <AuctionRequestCard />
          <AuctionRequestCard />
        </CardContainer>
      </TradeRequestListContainer>
    </div>
  );
};

export default BidAuctionList;
