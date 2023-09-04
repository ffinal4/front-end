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
  RequestIngNumber,
  RequestStateContainer,
  RequestStateNumber,
  SendRequests,
  TabContainer,
} from "../../pages/TradeRequestPage";
import TradeRequestCard, { DotImg } from "./TradeRequestCard";
import arrow from "../../assets/icon/arrow.png";
import orangedot from "../../assets/icon/orangedot.png";
import emptydot from "../../assets/icon/emptydot.png";
import { useQuery } from "react-query";
import { getTradeRequestApi } from "../../api/goods";
import { useRecoilValue } from "recoil";
import { pagination } from "../../store/pagination";
import { getRequestFilter, requestCategory } from "../../store/filterCategory";
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
    [" getTradeRequestData", currentPage, tradeState],
    () => getTradeRequestApi(currentPage, tradeState),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <LoadingSpinner />;
  console.log("물물교환요청한 데이터", data);
  if (error) {
    console.log(error);
  }
  console.log(data, "물물교환요청한 데이터");

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
