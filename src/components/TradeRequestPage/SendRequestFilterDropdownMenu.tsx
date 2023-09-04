import React from "react";
import { FilterDropdownContainer, RequestState } from "./FilterDropdownMenu";
import { useRecoilState, useResetRecoilState } from "recoil";
import { requestCategory, sendRequestFilter } from "../../store/filterCategory";
import { pagination } from "../../store/pagination";

const SendRequestFilterDropdownMenu = (props: any) => {
  const [categorySelect, setCategorySelect] = useRecoilState(requestCategory);
  const [tradeState, setTradeState] = useRecoilState(sendRequestFilter);
  const resetPage = useResetRecoilState(pagination);

  interface State {
    status: string | null;
    name: string;
  }

  const sendStatusArray: State[] = [
    { status: null, name: "전체" },
    { status: "REQUEST", name: "교환요청" },
    { status: "TRADING", name: "교환진행중" },
    { status: "CANCEL", name: "교환취소" },
    { status: "DONE", name: "교환완료" },
  ];

  return (
    <div>
      <FilterDropdownContainer>
        {sendStatusArray.map((item) => {
          return (
            <div
              key={item.status}
              onClick={() => {
                if (item.status !== null) {
                  setCategorySelect(`&status=${item.status}`);
                  setTradeState(item.name);
                  resetPage();
                } else {
                  setCategorySelect("");
                  setTradeState(item.name);
                  resetPage();
                }
              }}
            >
              <RequestState>{item.name}</RequestState>
            </div>
          );
        })}
      </FilterDropdownContainer>
    </div>
  );
};

export default SendRequestFilterDropdownMenu;
