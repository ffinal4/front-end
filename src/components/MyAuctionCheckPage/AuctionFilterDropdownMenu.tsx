import React from "react";
import {
  FilterDropdownContainer,
  RequestState,
} from "../TradeRequestPage/FilterDropdownMenu";
import { useRecoilState } from "recoil";
import { myAuctionFilter } from "../../store/filterCategory";

const AuctionFilterDropdownMenu = (props: any) => {
  const { auctionFilterOpen, setAuctionFilterOpen, setDropdownMenu } = props;

  const [filter, setFilter] = useRecoilState(myAuctionFilter);
  const requestStateOnclick = (event: any) => {
    setFilter(event.target.innerHTML);
    setAuctionFilterOpen(!auctionFilterOpen);
  };
  return (
    <div>
      <FilterDropdownContainer>
        <RequestState onClick={requestStateOnclick}>전체</RequestState>
        <RequestState onClick={requestStateOnclick}>경매중</RequestState>
        <RequestState onClick={requestStateOnclick}>경매종료</RequestState>
        <RequestState onClick={requestStateOnclick}>교환완료</RequestState>
        <RequestState onClick={requestStateOnclick}>입찰실패</RequestState>
      </FilterDropdownContainer>
    </div>
  );
};

export default AuctionFilterDropdownMenu;
