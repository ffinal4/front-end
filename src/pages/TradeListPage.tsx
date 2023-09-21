import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import eyeImage from "../assets/images/eye.svg";
import HorizontalLine from "../components/common/HorizontalLine";
import FilterButton from "../components/common/FilterButton";
import Paging from "../components/common/Paging/Paging";
import { StTitle } from "../styles/TitleFont";
import ItemCardList from "../components/common/ItemCardList";
import { useQuery } from "react-query";
import { getGoodsApi } from "../api/goods";
import { pagination } from "../store/pagination";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { filterAsc, filterCategory, filterName } from "../store/filterCategory";
import AscFilterButton from "../components/common/AscFilterButton";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const TradeListPage = () => {
  const navigate = useNavigate();
  const currentPage = useRecoilValue(pagination);
  const currentCategory = useRecoilValue(filterCategory);
  const [categorySelect, setCategorySelect] = useRecoilState(filterCategory);
  const [currentFilterName, setCurrentFilterName] = useRecoilState(filterName);
  const resetPage = useResetRecoilState(pagination);
  const currentAsc = useRecoilValue(filterAsc);
  const { isLoading, error, isError, data } = useQuery(
    ["tradeListPageData", currentPage, currentCategory, currentAsc],
    () => getGoodsApi(currentPage, currentCategory, currentAsc),
    {
      refetchOnWindowFocus: false,
    }
  );

  interface Kind {
    category: string | null;
    name: string;
  }

  const categoryArray: Kind[] = [
    { category: null, name: "전체" },
    { category: "WOMAN", name: "여성패션/잡화" },
    { category: "MAN", name: "남성패션/잡화" },
    { category: "FURNITURE", name: "가구/인테리어" },
    { category: "HOBBY", name: "취미/게임/음반/굿즈" },
    { category: "BOOK", name: "도서" },
    { category: "BEAUTY", name: "뷰티/미용" },
    { category: "BABY", name: "유아동/유아물품" },
    { category: "KITCHEN", name: "생활주방용품" },
    { category: "TICKET", name: "티켓/교환권" },
    { category: "SPORTS", name: "스포츠/레저" },
    { category: "PET", name: "반려동물용품" },
    { category: "DIGITAL", name: "디지털기기" },
    { category: "ELECTRONICS", name: "가전제품" },
    { category: "ART", name: "예술/희귀/수집품" },
    { category: "PLANT", name: "식물" },
    { category: "FOOD", name: "가공식품" },
    { category: "ETC", name: "기타물품" },
  ];

  const onClickFilterHandler = (item : Kind) => {
    setCategorySelect(`&category=${item.category}`);
    setCurrentFilterName(item.name);
    resetPage();
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) {};

  return (
    <TradeListPageContainer>
      <TitleContainer>
        <TitleImage src={eyeImage} />
        <TitleText marginbottom="0" textalign="center">
          POCKET TRADE
        </TitleText>
      </TitleContainer>
      <UploadBtn
        onClick={() => {
          navigate("/upload");
        }}
      >
        물건 올리기
      </UploadBtn>
      <CategoryContainer>
        {categoryArray.map((item : Kind) => {
          return (
            (currentFilterName === item.name)
              ? <CategoryButton
                key={item.name}
                style={{backgroundColor: "#ec8d49", color: "#FCFCFC"}}>
                {item.name}
              </CategoryButton>
              : <CategoryButton
                key={item.name}
                onClick={() => onClickFilterHandler(item)}>
                {item.name}
              </CategoryButton>
          )
        })}
      </CategoryContainer>
      <HorizontalLine />
      <AscFilterButton />
      <FilterButton />
      <ItemCardList data={data?.data.content} allList={true} />
      <Paging />
    </TradeListPageContainer>
  );
};

const TradeListPageContainer = styled.div`
  width: 100%;
`;

const UploadBtn = styled.div`
  border-radius: 5px;
  border: 2px solid var(--black-white-black, #222020);
  background: var(--orange-orange-100, #ec8d49);
  display: flex;
  width: 176px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: var(--black-white-white, #fcfcfc);
  /* WEB/KOR/Kor B 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
  margin-bottom: 80px;
  cursor: pointer;

  @media screen and (max-width: 375px) {
    width: 104px;
    height: 40px;
    margin-bottom: 20px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (max-width: 375px) {
    display: none;
  }
`;
const TitleImage = styled.img`
  width: 66px;
  height: 54px;
  margin-bottom: 16px;
`;

const TitleText = styled(StTitle)`
  color: var(--orange-orange-100, #ec8d49);
`;

const CategoryContainer = styled.div`
  display: none;
  
  @media screen and (max-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 370px;
    gap: 10px;
    margin-bottom: 40px;
    padding: 10px;
    overflow-x: auto;
  }
`;

const CategoryButton = styled.div`
  height: 25px;
  border: 1px solid #39373A;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  font-size: 8px;
  font-weight: 400;
  line-height: 140%;
  padding: 0px 20px;
  color: #39373A;

  &:hover {
    background-color: #ec8d49;
  }
`;

export default TradeListPage;
