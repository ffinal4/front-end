import React from "react";
import { styled } from "styled-components";
import Banner from "../components/MainPage/Banner";
import NewItemList from "../components/MainPage/NewItemList";
import AuctionList from "../components/MainPage/AuctionList";
import Footer from "../components/common/Footer";
import HowToTrade from "../components/MainPage/HowToTrade";
import { useQuery } from "react-query";
import { getMainPageApi } from "../api/goods";

const MainPage = () => {
  const { isLoading, error, data } = useQuery("ZzimListPageData", getMainPageApi, {
    refetchOnWindowFocus: false,
  });
  if (isLoading) return <div>Loading...</div>;
  console.log("메인페이지데이터", data);
  if (error) {
    console.log(error);
  }
  return (
    <MainPageContainer>
      <Banner />
      <NewItemList data={data?.data.info.goodsListResponseDto} />
      <AuctionList data={data?.data.info.auctionResponseDto} />
      <HowToTrade />
      <Footer />
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div``;
export default MainPage;
