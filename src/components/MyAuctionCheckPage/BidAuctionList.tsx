import React, { useEffect, useRef, useState } from "react";
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
import LoadingSpinner from "../common/LoadingSpinner";
import { BidFilterToEnum } from "../../utils/EnumFilter";
import Paging from "../common/Paging/Paging";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { pagination } from "../../store/pagination";

interface BidAuctionListProps {
  filterOpen: boolean;
  dropdownMenu: string;
  filterTap: any;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDropdownMenu: React.Dispatch<React.SetStateAction<string>>;
  setFilterTap: React.Dispatch<
    React.SetStateAction<{ myAuctionTap: boolean; bidAuctionTap: boolean }>
  >;
}

const BidAuctionList: React.FC<BidAuctionListProps> = ({
  filterOpen,
  dropdownMenu,
  filterTap,
  setFilterOpen,
  setDropdownMenu,
  setFilterTap,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const currentPage = useRecoilValue(pagination);
  const resetPage = useResetRecoilState(pagination);
  const [category, setCategory] = useState<string | null>("");
  const [filter, setFilter] = useState("전체");

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const { isLoading, data, error }: any = useQuery(
    ["getBidAuctionData", currentPage, category],
    () => getBidAuctionApi(currentPage, category)
  );

  const bidAuctionOnclick = () => {
    setFilterTap({ myAuctionTap: true, bidAuctionTap: false });
    resetPage();
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) {};

  return (
    <div style={{ position: "relative" }}>
      <TabContainer>
        <GetRequests onClick={bidAuctionOnclick}>내 경매</GetRequests>
        <SendRequests>입찰 경매</SendRequests>
      </TabContainer>

      <TradeRequestListContainer>
        <FilterContainer>
          <Filter
            ref={divRef}
            onClick={() => {
              setFilterOpen(!filterOpen);
            }}
          >
            {filter}
            <ArrowImg src={arrow} />
          </Filter>
          {filterOpen && (
            <FilterdropdownMenuContainer>
              <FilterDropdownMenu
                filterOpen={filterOpen}
                setFilterOpen={setFilterOpen}
                setDropdownMenu={setDropdownMenu}
                setFilter={setFilter}
                setCategory={setCategory}
              />
            </FilterdropdownMenuContainer>
          )}
        </FilterContainer>

        <CardContainer>
          {data?.data.content.length > 0 &&
            data?.data.content?.map((item: any) => {
              return <BidAuctionCard key={item.bidId} item={item} />;
            })}
        </CardContainer>
      </TradeRequestListContainer>
      <Paging />
    </div>
  );
};

export default BidAuctionList;
