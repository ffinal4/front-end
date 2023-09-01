import React, { useState } from "react";
import arrow from "../../assets/icon/downarrow.png";
import { styled } from "styled-components";
import AscModal from "./AscModal";
import { useRecoilValue } from "recoil";
import { filterAsc } from "../../store/filterCategory";

const AscFilterButton = () => {
  const [isAsdcModalOpen, setIsAscModalOpen] = useState(false);
  const ascState = useRecoilValue(filterAsc);
  return (
    <FilterContainer
      onClick={() => {
        setIsAscModalOpen(!isAsdcModalOpen);
      }}
    >
      {ascState ? <div>오래된순</div> : <div>최신순</div>}
      <FilterBox src={arrow} />
      {isAsdcModalOpen && (
        <ModalContainer>
          <AscModal />
        </ModalContainer>
      )}
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  float: right;
  font-family: "Pretendard";
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
  margin-left: 16px;
`;

const FilterBox = styled.img`
  width: 24px;
  height: 24px;
`;

const ModalContainer = styled.div`
  z-index: 999;
  position: absolute;
  top: 45px;
  left: 0;
`;
export default AscFilterButton;
