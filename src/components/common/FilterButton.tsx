import React from "react";
import { styled } from "styled-components";

const FilterButton = () => {
  return (
    <FilterContainer>
      <div>Filter</div>
      <FilterBox></FilterBox>
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

const FilterBox = styled.div`
  width: 24px;
  height: 24px;
  background-color: #d9d9d9;
`;

export default FilterButton;
