import React from "react";
import { styled } from "styled-components";

const SearchInput = () => {
  return (
    <SearchContainer>
      <InputContainer>
        <Input type="search" placeholder="search" />
      </InputContainer>
    </SearchContainer>
  );
};
const SearchContainer = styled.div`
  border-bottom: 1px solid gray;
  width: 100%;
  height: 76px;
  display: flex;
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
const Input = styled.input`
  border: 1px solid gray;
  width: 754px;
  height: 44px;
  font-size: 18px;
  padding: 10px;
`;
export default SearchInput;
