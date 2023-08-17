import React from "react";
import {
  FilterDropdownContainer,
  RequestState,
} from "../TradeRequestPage/FilterDropdownMenu";

const FilterDropdownMenu = (props: any) => {
  const { filterOpen, setFilterOpen, setDropdownMenu } = props;

  const requestStateOnclick = (event: any) => {
    setDropdownMenu(event.target.innerHTML);
    setFilterOpen(!filterOpen);
  };
  return (
    <div>
      <FilterDropdownContainer>
        <RequestState onClick={requestStateOnclick}>경매전</RequestState>
        <RequestState onClick={requestStateOnclick}>경매진행중</RequestState>
        <RequestState onClick={requestStateOnclick}>입찰실패</RequestState>
        <RequestState onClick={requestStateOnclick}>낙찰</RequestState>
      </FilterDropdownContainer>
    </div>
  );
};

export default FilterDropdownMenu;
