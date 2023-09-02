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
        <RequestState onClick={requestStateOnclick}>전체</RequestState>
        <RequestState onClick={requestStateOnclick}>입찰중</RequestState>
        <RequestState onClick={requestStateOnclick}>입찰성공</RequestState>
        <RequestState onClick={requestStateOnclick}>교환완료</RequestState>
        <RequestState onClick={requestStateOnclick}>입찰실패</RequestState>
      </FilterDropdownContainer>
    </div>
  );
};

export default FilterDropdownMenu;
