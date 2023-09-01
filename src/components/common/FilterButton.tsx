import React from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { filterName } from "../../store/filterCategory";
import arrow from "../../assets/icon/downarrow.png";

const FilterButton = () => {
  const currentFilter = useRecoilValue(filterName);
  return (
    <FilterContainer>
      <div>{currentFilter}</div>
      <FilterBox src={arrow} />
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  float: right;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-top: 20px;
  width: 177px;
  height: 44px;
  padding: 10px 20px;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const FilterBox = styled.img`
  width: 24px;
  height: 24px;
`;

export default FilterButton;
