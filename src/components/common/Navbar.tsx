import React, { useState } from "react";
import { styled } from "styled-components";
import category from "../../assets/icon/category.png";
import CategorySelect from "./CategorySelect";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [categorySelect, setCategorySelect] = useState({
    category: "",
    name: "카테고리 선택",
  });
  const [selectBar, setSelectBar] = useState<boolean>(false);

  return (
    <CategoryHeaderContainer>
      <Wrapper>
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
          <Menu
            onClick={() => {
              navigate("/tradelist");
            }}
          >
            물물교환
          </Menu>
          <Menu
            onClick={() => {
              navigate("/auctionlist");
            }}
          >
            포켓경매
          </Menu>
          <Menu onClick={() => navigate("/ratingstart")}>레이팅</Menu>
        </MenuContainer>
      </Wrapper>
    </CategoryHeaderContainer>
  );
};
const CategoryHeaderContainer = styled.div`
  max-width: 1920px;
  height: 70px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 1136px;
  display: flex;
  align-items: center;
  margin: 0px auto;
  @media screen and (max-width: 1136px) {
    width: 100%;
  }
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
  font-family: Pretendard;
  margin-left: 40px;
  margin-right: 40px;
  cursor: pointer;
  font-weight: 400;
`;
export default Navbar;
