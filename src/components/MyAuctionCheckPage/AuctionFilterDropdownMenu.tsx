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
  const requestStateOnclick = (event: any) => {
    setFilter(event.target.innerHTML);
    setAuctionFilterOpen(!auctionFilterOpen);
  };
  return (
    <div>
      <FilterDropdownContainer>
        {statusArray.map((item) => {
          return (
            <div
              key={item.status}
              onClick={() => {
                if (item.status !== null) {
                  setFilter(item.name);
                }
              }}>
              <RequestState onClick={requestStateOnclick}>경매중</RequestState>
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
