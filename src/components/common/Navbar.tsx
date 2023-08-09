import React, { useState } from "react";
import { styled } from "styled-components";
import CategorySelect from "./CategorySelect";

const Navbar = () => {
  const [categorySelect, setCategorySelect] = useState({
    category: "",
    name: "카테고리 선택",
  });
  const [selectBar, setSelectBar] = useState<boolean>(false);

  return (
    <CategoryHeaderContainer>
      <Button
        onClick={() => {
          setSelectBar(!selectBar);
        }}
      />
      {selectBar && (
        <CategorySelect
          categorySelect={categorySelect}
          setCategorySelect={setCategorySelect}
          setSelectBar={setSelectBar}
        />
      )}
      <MenuContainer>
        <Menu>물물교환</Menu>
        <Menu>포켓경매</Menu>
        <Menu>레이팅</Menu>
      </MenuContainer>
    </CategoryHeaderContainer>
  );
};
const CategoryHeaderContainer = styled.div`
  max-width: 1920px;
  height: 70px;
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  padding-left: 180px;
`;
const Button = styled.div`
  width: 36px;
  height: 36px;
  background-color: #d9d9d9;
  cursor: pointer;
`;

const MenuContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  margin-left: 100px;
`;

const Menu = styled.div`
  /* border: 1px solid green; */
  margin-left: 40px;
  margin-right: 40px;
  cursor: pointer;
`;
export default Navbar;
