import React from "react";
import {
  CardContainer,
  Filter,
  FilterContainer,
  FilterdropdownMenuContainer,
  TradeRequestListContainer,
} from "../TradeRequestPage/GetRequestList";
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
import arrow from "../../assets/icon/arrow.png";
import BidAuctionCard from "./BidAuctionCard";
import { DotImg } from "../TradeRequestPage/TradeRequestCard";
import bluedot from "../../assets/icon/bluedot.png";
import blackdot from "../../assets/icon/blackdot.png";
import { getBidAuctionApi } from "../../api/acution";
import { useQuery } from "react-query";

interface BidAuctionListProps {
  filterOpen: boolean;
  dropdownMenu: string;
  filterTap: any;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDropdownMenu: React.Dispatch<React.SetStateAction<string>>;
  setFilterTap: React.Dispatch<React.SetStateAction<{ myAuctionTap: boolean; bidAuctionTap: boolean }>>;
}

const BidAuctionList: React.FC<BidAuctionListProps> = ({
  filterOpen,
  dropdownMenu,
  filterTap,
  setFilterOpen,
  setDropdownMenu,
  setFilterTap,
}) => {
  const { isLoading, data, error }: any = useQuery(" getBidAuctionData", getBidAuctionApi);

  if (isLoading) return <div>Loading...</div>;
  console.log("입찰경매현황 데이터", data);
  if (error) {
    console.log(error);
  }
  console.log(data, "입찰경매현황 데이터");

  const bidAuctionOnclick = () => {
    setFilterTap({ myAuctionTap: true, bidAuctionTap: false });
  };
  return (
    <div>
      <TabContainer>
        <GetRequests onClick={bidAuctionOnclick}>내 경매</GetRequests>
        <SendRequests>입찰 경매</SendRequests>
      </TabContainer>
      <RequestStateContainer>
        <RequestStateNumber>
          <DotImg src={bluedot} />
          입찰중 10
        </RequestStateNumber>
        <RequestIngNumber>
          <DotImg src={blackdot} />
          입찰성공 2
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
          <BidAuctionCard />;
        </CardContainer>
      </TradeRequestListContainer>
    </div>
  );
};

export default BidAuctionList;
