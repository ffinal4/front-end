import React from "react";
import { styled } from "styled-components";
import { StTitle } from "../styles/TitleFont";
import FilterButton from "../components/common/FilterButton";
import HorizontalLine from "../components/common/HorizontalLine";
import dotLine from ".././assets/images/vector.png";
import ItemCardList from "../components/common/ItemCardList";
import Paging from "../components/common/Paging/Paging";
import { useQuery } from "react-query";
import { getMyPocketApi } from "../api/goods";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { pagination } from "../store/pagination";
import { filterAsc } from "../store/filterCategory";
import AscFilterButton from "../components/common/AscFilterButton";
import LoadingSpinner from "../components/common/LoadingSpinner";

const MyPocketPage = () => {
  const currentPage = useRecoilValue(pagination);
  const asc = useRecoilValue(filterAsc);

  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery(
    ["myPocketData", currentPage, asc],
    () => getMyPocketApi(currentPage, asc),
    {
      refetchOnWindowFocus: false,
    }
  );
  if (isLoading) return <LoadingSpinner />;
  if (error) {};
  return (
    <MyPocketPageContainer>
      <TitleContainer>
        <StTitle marginbottom="16px" textalign="center">
          MY POCKET
        </StTitle>
        <SubTitle>내 주머니에 등록한 물건들은 자동으로 물물교환 페이지에 업로드됩니다.</SubTitle>
        <MiddleContainer>
          <UploadBtn
            onClick={() => {
              navigate("/upload");
            }}
          >
            주머니에 물건 넣기
          </UploadBtn>
        </MiddleContainer>
      </TitleContainer>

      <HorizontalLine />

      <DotLine src={dotLine} />
      <FilterButtonContainer>
        <AscFilterButton />
      </FilterButtonContainer>
      <CardListContainer>
        <ItemCardList data={data?.data.info.goodsListResponseDto.content} isPocket={true} />
      </CardListContainer>
      <Paging />
    </MyPocketPageContainer>
  );
};

const MyPocketPageContainer = styled.div`
  padding-top: 120px;
  width: 100%;
  padding-bottom: 100px;
`;

const FilterButtonContainer = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
  margin-top: 20px;
`;

const TitleContainer = styled.div`
  padding-bottom: 61px;
  background-color: #ffca64;
  padding-top: 100px;
`;

const SubTitle = styled.div`
  color: #222020;
  text-align: center;
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 48px */
`;

const MiddleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0px 0px 0px;
`;

const UploadBtn = styled.div`
  float: right;
  display: flex;
  width: 176px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid var(--black-white-black, #222020);
  background: var(--black-white-white, #fcfcfc);
  color: var(--black-white-black, #222020);
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  cursor: pointer;
`;

const DotLine = styled.img`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const CardListContainer = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
`;
export default MyPocketPage;
