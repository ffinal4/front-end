import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { filterName } from "../../store/filterCategory";
import arrow from "../../assets/icon/downarrow.png";
import FilterModal from "./FilterModal/FilterModal";

const FilterButton = () => {
  const currentFilter = useRecoilValue(filterName);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <FilterContainer
      onClick={() => {
        setIsFilterOpen(!isFilterOpen);
      }}
    >
      <div>{currentFilter}</div>
      <FilterBox src={arrow} />
      <ModalContainer>{isFilterOpen && <FilterModal />}</ModalContainer>
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
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 375px) {
   display: none;
  }
`;

const FilterBox = styled.img`
  width: 24px;
  height: 24px;
`;

const ModalContainer = styled.div`
  z-index: 999;
  position: absolute;
  top: 45px;
  left: -765px;
`;
export default FilterButton;
