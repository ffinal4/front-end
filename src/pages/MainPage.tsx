import React from "react";
import { styled } from "styled-components";
import Banner from "../components/MainPage/Banner";
import NewItemList from "../components/MainPage/NewItemList";
import AuctionList from "../components/MainPage/AuctionList";
import Footer from "../components/common/Footer";
import HowToTrade from "../components/MainPage/HowToTrade";

const MainPage = () => {
  return (
    <MainPageContainer>
      <Banner />
      <NewItemList />
      <AuctionList />
      <HowToTrade />
      <Footer />
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div``;
export default MainPage;
