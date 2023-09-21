import React, { useState } from "react";
import { styled } from "styled-components";
import FilterDropdownMenu from "./FilterDropdownMenu";
import arrow from "../../assets/icon/arrow.png";
import { useQuery } from "react-query";
import {
  ArrowImg,
  GetRequest,
  SendRequest,
  TabContainer,
} from "../../pages/TradeRequestPage";
import { getTradeReceiveRequestApi } from "../../api/goods";
import TradeReceiveCard from "./TradeReceiveCard";
import { useRecoilValue } from "recoil";
import { pagination } from "../../store/pagination";
import { requestCategory } from "../../store/filterCategory";
import LoadingSpinner from "../common/LoadingSpinner";

interface GetRequestListProps {
  filterOpen: boolean;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterTap: any;
  setFilterTap: React.Dispatch<
    React.SetStateAction<{ getTap: boolean; sendTap: boolean }>
  >;
}
const GetRequestList: React.FC<GetRequestListProps> = ({
  filterOpen,
  setFilterOpen,
  setFilterTap,
}) => {
  const [dropdownMenu, setDropdownMenu] = useState("전체");
  const currentPage = useRecoilValue(pagination);
  const tradeState = useRecoilValue(requestCategory); //filter기능넣기

  //받은요청 API
  const { isLoading, data, error }: any = useQuery(
    ["getTradeReceiveRequestData", currentPage, tradeState],
    () => getTradeReceiveRequestApi(currentPage, tradeState),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <LoadingSpinner />;
  if (error) {};

  const sendRequestOnclick = () => {
    setFilterTap({
      getTap: false,
      sendTap: true,
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <TabContainer>
        <GetRequest>받은 요청</GetRequest>
        <SendRequest onClick={sendRequestOnclick}>보낸 요청</SendRequest>
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
              return (
                <TradeReceiveCard key={item.goodsId} item={item} data={data} />
              );
            })}
        </CardContainer>
      </TradeRequestListContainer>
    </div>
  );
};

export const TradeRequestListContainer = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  width: 100%;
  height: 1784px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-top: 84px;
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
