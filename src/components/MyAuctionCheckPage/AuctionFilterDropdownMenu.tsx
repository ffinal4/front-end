import React from "react";
import {
  FilterDropdownContainer,
  RequestState,
} from "../TradeRequestPage/FilterDropdownMenu";
import { useRecoilState, useResetRecoilState } from "recoil";
import { auctionCategory, myAuctionFilter } from "../../store/filterCategory";
import { pagination } from "../../store/pagination";

const AuctionFilterDropdownMenu = (props: any) => {
  const { auctionFilterOpen, setAuctionFilterOpen, setCategory, setFilter } = props;

  const resetPage = useResetRecoilState(pagination);

  interface State {
    status: string | null;
    name: string;
  };

  const statusArray: State[] = [
    { status: null, name: "전체" },
    { status: "AUCTION", name: "경매중" },
    { status: "END", name: "경매종료" },
    { status: "DONE", name: "교환완료" },
    { status: "CANCLE", name: "입찰실패" },
  ];

  return (
    <div>
      <FilterDropdownContainer>
        {statusArray.map((item) => {
          return (
            <div
              key={item.status}
              onClick={() => {
                if (item.status !== null) {
                  setCategory(`&status=${item.status}`);
                  setFilter(item.name);
                  resetPage();
                  setAuctionFilterOpen(false);
                } else {
                  setCategory("");
                  setFilter(item.name);
                  resetPage();
                  setAuctionFilterOpen(false);
                };
              }}>
              <RequestState>{item.name}</RequestState>
            </div>
          )
        })}
        {/* <RequestState onClick={requestStateOnclick}>전체</RequestState>
        <RequestState onClick={requestStateOnclick}>경매중</RequestState>
        <RequestState onClick={requestStateOnclick}>경매종료</RequestState>
        <RequestState onClick={requestStateOnclick}>교환완료</RequestState>
        <RequestState onClick={requestStateOnclick}>입찰실패</RequestState> */}
      </FilterDropdownContainer>
    </div>
  );
};

export default AuctionFilterDropdownMenu;
