import React from "react";
import { styled } from "styled-components";

const FilterDropdownMenu = (props: any) => {
  const { filterOpen, setFilterOpen, setDropdownMenu } = props;

  const requestStateOnclick = (event: any) => {
    setDropdownMenu(event.target.innerHTML);
    setFilterOpen(!filterOpen);
  };
  return (
    <div>
      <FilterDropdownContainer>
        <RequestState onClick={requestStateOnclick}>교환요청</RequestState>
        <RequestState onClick={requestStateOnclick}>교환진행중</RequestState>
        <RequestState onClick={requestStateOnclick}>교환취소</RequestState>
        <RequestState onClick={requestStateOnclick}>교환완료</RequestState>
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
