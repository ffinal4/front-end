import React, { useState } from "react";
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
  SendRequests,
  TabContainer,
} from "../../pages/TradeRequestPage";
import TradeRequestCard from "./TradeRequestCard";
import arrow from "../../assets/icon/arrow.png";
import { useQuery } from "react-query";
import { getTradeRequestApi } from "../../api/goods";
import { useRecoilValue } from "recoil";
import { pagination } from "../../store/pagination";
import { requestCategory } from "../../store/filterCategory";
import LoadingSpinner from "../common/LoadingSpinner";
import SendRequestFilterDropdownMenu from "./SendRequestFilterDropdownMenu";

interface SendRequestListProps {
  filterOpen: boolean;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterTap: any;
  setFilterTap: React.Dispatch<
    React.SetStateAction<{ getTap: boolean; sendTap: boolean }>
  >;
}

const SendRequestList: React.FC<SendRequestListProps> = ({
  filterOpen,
  setFilterOpen,
  setFilterTap,
}) => {
  const [dropdownMenu, setDropdownMenu] = useState("전체");
  const currentPage = useRecoilValue(pagination);
  const tradeState = useRecoilValue(requestCategory);

  const { isLoading, data, error }: any = useQuery(
    ["getTradeRequestData", currentPage, tradeState],
    () => getTradeRequestApi(currentPage, tradeState),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <LoadingSpinner />;
  if (error) {};

  const getRequestOnclick = () => {
    setFilterTap({ getTap: true, sendTap: false });
  };

  return (
    <div style={{ position: "relative" }}>
      <TabContainer>
        <GetRequests onClick={getRequestOnclick}>받은 요청</GetRequests>
        <SendRequests>보낸 요청</SendRequests>
      </TabContainer>
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
              <SendRequestFilterDropdownMenu
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
              return <TradeRequestCard key={item.goodsId} item={item} />;
            })}
        </CardContainer>
      </TradeRequestListContainer>
    </div>
  );
};

export default SendRequestList;
