import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import App from "./../../App";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeadContainer>
      <LogoContainer>
        <Button />
        <Logo>PEEPPO</Logo>
      </LogoContainer>
      <Container>
        <InputContainer>
          <SearchInput type="search" placeholder="Search" />
        </InputContainer>
        <ButtonContainer>
          <Button />
          <Button />
          <Button />
        </ButtonContainer>
      </Container>
    </HeadContainer>
  );
};

export default Header;

const HeadContainer = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  border-bottom: 1px solid gray;
  padding: 13px 200px;
  background-color: #fff;
  border: 1px solid red;
`;

const LogoContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  align-items: center;
  width: 174px;
  height: 41px;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-left: 10px;
`;
const Container = styled.div`
  border: 1px solid green;
  display: flex;
  align-items: center;
`;
const InputContainer = styled.div`
  border: 2px solid black;
  width: 100%;
  display: flex;
`;
const SearchInput = styled.input`
  border: 1px solid #d9d9d9;
  background-color: #d9d9d9;
  width: 100%;
  height: 44px;
  font-size: 16px;
  padding: 10px;
`;
const ButtonContainer = styled.div`
  border: 1px solid red;
  display: flex;
`;
const Button = styled.div`
  width: 36px;
  height: 36px;
  background-color: #d9d9d9;
  cursor: pointer;
  margin-left: 20px;
`;
