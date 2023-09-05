import React from "react";
import { styled } from "styled-components";
import { StTitle } from "../styles/TitleFont";
import eyeImage from "../assets/images/eye.svg";
import HorizontalLine from "../components/common/HorizontalLine";
import dotLine from ".././assets/images/vector.png";
import { useQuery } from "react-query";
import ItemCardList from "../components/common/ItemCardList";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { searchApi } from "../api/goods";
import { useParams } from "react-router-dom";
const SearchPage = () => {
  const { keyword }: any = useParams();

  const { isLoading, error, data } = useQuery(["searchData", keyword], () => searchApi(keyword), {
    refetchOnWindowFocus: false,
  });
  if (isLoading) return <LoadingSpinner />;
  console.log("검색데이터", data);
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <TitleContainer>
        <TitleImage src={eyeImage} />
        <StTitle marginbottom="0" textalign="center">
          SEARCH RESULT
        </StTitle>
      </TitleContainer>
      <HorizontalLine />
      <DotLine src={dotLine} />
      <ItemCardList data={data?.data.info} allList={true} />
    </div>
  );
};
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`;
const TitleImage = styled.img`
  width: 66px;
  height: 54px;
  margin-bottom: 16px;
`;
const DotLine = styled.img`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 80px;
`;
export default SearchPage;
