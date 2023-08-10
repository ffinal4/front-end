import React, { useState } from "react";
import { styled } from "styled-components";
import category from "../../assets/icon/category.png";
import CategorySelect from "./CategorySelect";

const Navbar = () => {
  const [categorySelect, setCategorySelect] = useState({
    category: "",
    name: "카테고리 선택",
  });
  const [selectBar, setSelectBar] = useState<boolean>(false);

  return (
    <CategoryHeaderContainer>
      <CategoryContainer
        onClick={() => {
          setSelectBar(!selectBar);
        }}
      >
        <CategoryImg src={category} />
        {selectBar && (
          <CategorySelect
            categorySelect={categorySelect}
            setCategorySelect={setCategorySelect}
            setSelectBar={setSelectBar}
          />
        )}
      </CategoryContainer>
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
  padding-left: 160px;
`;
const CategoryContainer = styled.div`
  cursor: pointer;
`;

const CategoryImg = styled.img``;
const MenuContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  margin-left: 60px;
`;

const Menu = styled.div`
  /* border: 1px solid green; */
  margin-left: 40px;
  margin-right: 40px;
  cursor: pointer;
`;
export default Navbar;
