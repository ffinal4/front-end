import React from "react";
import { styled } from "styled-components";
import Banner from "../components/MainPage/Banner";
import NewItemList from "../components/MainPage/NewItemList";
import AuctionList from "../components/MainPage/AuctionList";
import HowToTrade from "../components/MainPage/HowToTrade";
import { useQuery } from "react-query";
import { getMainPageApi } from "../api/goods";
import RankList from "../components/MainPage/RankList";
import LoadingSpinner from "../components/common/LoadingSpinner";

const MainPage = () => {
  const { isLoading, error, isError, data } = useQuery("getMaintPageData", getMainPageApi, {
    refetchOnWindowFocus: false,
  });
  if (isLoading) return <LoadingSpinner />;
  if (isError) {}
  return (
    <div>
      <Banner />
      <NewItemList data={data?.data.info.goodsListResponseDto} />
      <RankList data={data?.data.info.ratingUserResponseDto} />
      <AuctionList data={data?.data.info.auctionResponseDto} />
      <HowToTrade />
    </div>
  );
};

export default MainPage;
