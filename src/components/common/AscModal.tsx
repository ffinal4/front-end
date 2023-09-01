import React from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { filterAsc } from "../../store/filterCategory";

const AscModal = () => {
  const [ascState, setAscState] = useRecoilState(filterAsc);
  return (
    <AscModalContainer>
      <ButtonContainer
        onClick={() => {
          setAscState(false);
        }}
      >
        최신순
      </ButtonContainer>
      <ButtonContainer
        onClick={() => {
          setAscState(true);
        }}
      >
        오래된순
      </ButtonContainer>
    </AscModalContainer>
  );
};

const AscModalContainer = styled.div`
  width: 177px;
  box-shadow: rgba(63, 71, 77, 0.2) 0px 4px 10px 0px;
  background-color: #ffff;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 44px;
  padding: 10px 20px;
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  &:hover {
    background-color: #efefef;
  }
`;
export default AscModal;
