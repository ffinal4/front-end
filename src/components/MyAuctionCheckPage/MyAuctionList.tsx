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
  GetRequest,
  RequestIngNumber,
  RequestStateContainer,
  RequestStateNumber,
  SendRequest,
  TabContainer,
} from "../../pages/TradeRequestPage";
import FilterDropdownMenu from "./FilterDropdownMenu";
import arrow from "../../assets/icon/arrow.png";
import AuctionRequestCard from "./AuctionRequestCard";
import { DotImg } from "../TradeRequestPage/TradeRequestCard";
import bluedot from "../../assets/icon/bluedot.png";
import blackdot from "../../assets/icon/blackdot.png";
import { useQuery } from "react-query";
import { getMyAuctionCheckApi } from "../../api/acution";

interface MyAuctionListProps {
  filterOpen: boolean;
  filterTap: any;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownMenu: string;
  setDropdownMenu: React.Dispatch<React.SetStateAction<string>>;
  setFilterTap: React.Dispatch<
    React.SetStateAction<{ myAuctionTap: boolean; bidAuctionTap: boolean }>
  >;
}

const MyAuctionList: React.FC<MyAuctionListProps> = ({
  filterOpen,
  filterTap,
  dropdownMenu,
  setFilterOpen,
  setDropdownMenu,
  setFilterTap,
}) => {
  const { data, isLoading, error }: any = useQuery(
    "getMyAuctionCheckData",
    getMyAuctionCheckApi
  );

  if (isLoading) return <div>Loading...</div>;
  console.log("내경매현황 데이터", data);
  if (error) {
    console.log(error);
  }
  console.log(data, "내 경매 현황 데이터");
  const myAuctionOnclick = () => {
    setFilterTap({
      myAuctionTap: false,
      bidAuctionTap: true,
    });
  };
  console.log("경매현황페이지 내경매 데이터", data);

  return (
    <div>
      <TabContainer>
        <GetRequest>내 경매</GetRequest>
        <SendRequest onClick={myAuctionOnclick}>입찰 경매</SendRequest>
      </TabContainer>
      <RequestStateContainer>
        <RequestStateNumber>
          <DotImg src={bluedot} />
          경매중 10
        </RequestStateNumber>
        <RequestIngNumber>
          <DotImg src={blackdot} />
          경매완료 2
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
          {data?.data.content.length > 0 &&
            data?.data.content?.map((item: any) => {
              return <AuctionRequestCard key={item.auctionId} item={item} />;
            })}
        </CardContainer>
      </TradeRequestListContainer>
    </div>
  );
};

export default MyAuctionList;
