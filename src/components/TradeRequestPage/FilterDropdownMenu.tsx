import React from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { styled } from "styled-components";
import { requestCategory } from "../../store/filterCategory";
import { pagination } from "../../store/pagination";

const FilterDropdownMenu = (props: any) => {
  const { filterOpen, setFilterOpen, setDropdownMenu } = props;
  const [categorySelect, setCategorySelect] = useRecoilState(requestCategory);
  // const [tradeState, setTradeState] = useRecoilState(getRequestFilter);
  const resetPage = useResetRecoilState(pagination);

  interface State {
    status: string | null;
    name: string;
  }

  const getStatusArray: State[] = [
    { status: null, name: "전체" },
    { status: "REQUEST", name: "교환요청" },
    { status: "TRADING", name: "교환진행중" },
    { status: "CANCEL", name: "교환취소" },
    { status: "DONE", name: "교환완료" },
  ];

  return (
    <div>
      <FilterDropdownContainer>
        {getStatusArray.map((item) => {
          return (
            <div
              key={item.status}
              onClick={() => {
                if (item.status !== null) {
                  setCategorySelect(`&status=${item.status}`);
                  setDropdownMenu(item.name);
                  setFilterOpen(!filterOpen);
                  resetPage();
                } else {
                  setCategorySelect("");
                  setDropdownMenu(item.name);
                  setFilterOpen(!filterOpen);
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

export const FilterDropdownContainer = styled.div`
  width: 176px;
  background-color: white;
  border-bottom: 1px solid black;
`;

export const RequestState = styled.div`
  border-bottom: 1px solid gray;
  cursor: pointer;
  height: 44px;
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 20px;
  font-family: Pretendard;
`;
export default FilterDropdownMenu;
