import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import category from "../../assets/icon/category.png";
import CategorySelect from "./CategorySelect";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [categorySelect, setCategorySelect] = useState({
    category: "",
    name: "카테고리 선택",
  });
  const [selectBar, setSelectBar] = useState<boolean>(false);
  const [pathnames, setPathnames] = useState(0);

  const tradeListOnclick = () => {
    navigate("/tradeList");
  };

  useEffect(() => {
    if (location.pathname.includes("/auction")) {
      return (setPathnames(1))
    } else if (
      location.pathname.includes("/tradeList")
      || location.pathname.includes("/detail")
      || location.pathname.includes("/traderequest")) {
      return (setPathnames(2))
    } else if (location.pathname.includes("/rating")) {
      return (setPathnames(3))
    } else {
      return (setPathnames(0))
    };
  }, [location.pathname]);

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
            onClick={tradeListOnclick}
            style={{
              color: `${(pathnames === 2) ? "#EC8D49" : "#222020"}`,
              fontWeight: `${(pathnames === 2) ? "700" : "400"}`
            }}
          >물물교환</Menu>
          <Menu
            onClick={() => {
              navigate("/auctionlist");
            }}
            style={{
              color: `${(pathnames === 1) ? "#58ABF7" : "#222020"}`,
              fontWeight: `${(pathnames === 1) ? "700" : "400"}`
            }}
          >
            포켓경매
          </Menu>
          <Menu
            onClick={() => navigate("/ratingstart")}
            style={{
              color: `${(pathnames === 3) ? "#EC8D49" : "#222020"}`,
              fontWeight: `${(pathnames === 3) ? "700" : "400"}`
            }}
          >레이팅</Menu>
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
  display: flex;
  align-items: center;
  margin-left: 60px;
`;

const Menu = styled.div`
  cursor: pointer;
  font-family: "Pretendard";
  margin-left: 40px;
  margin-right: 40px;
  font-weight: 400;
`;
export default Navbar;
