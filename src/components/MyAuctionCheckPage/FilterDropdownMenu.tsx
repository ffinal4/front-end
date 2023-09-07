import React from "react";
import {
  FilterDropdownContainer,
  RequestState,
} from "../TradeRequestPage/FilterDropdownMenu";
import { useResetRecoilState } from "recoil";
import { pagination } from "../../store/pagination";

const FilterDropdownMenu = (props: any) => {
  const { filterOpen, setFilterOpen, setDropdownMenu, setCategory, setFilter } = props;
  const resetPage = useResetRecoilState(pagination);

  interface State {
    status: string | null;
    name: string;
  };

  const statusArray: State[] = [
    { status: null, name: "전체" },
    { status: "BIDDING", name: "입찰중" },
    { status: "SUCCESS", name: "입찰성공" },
    { status: "TRADING", name: "교환진행중" },
    { status: "DONE", name: "교환완료" },
    { status: "FAIL", name: "입찰실패" },
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
                    setFilterOpen(false);
                  } else {
                    setCategory("");
                    setFilter(item.name);
                    resetPage();
                    setFilterOpen(false);
                  };
                }}>
                <RequestState>{item.name}</RequestState>
              </div>
            )
          })}
        {/* <RequestState onClick={requestStateOnclick}>전체</RequestState>
        <RequestState onClick={requestStateOnclick}>입찰중</RequestState>
        <RequestState onClick={requestStateOnclick}>입찰성공</RequestState>
        <RequestState onClick={requestStateOnclick}>교환완료</RequestState>
        <RequestState onClick={requestStateOnclick}>입찰실패</RequestState> */}
      </FilterDropdownContainer>
    </div>
  );
};

export default FilterDropdownMenu;
