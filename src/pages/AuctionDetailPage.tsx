import React, { useState } from "react";
import { styled } from "styled-components";
import RecommendCard from "../components/DetailPage/RecommendCard";
import MyPickBar from "../components/common/MyPickBar";
import AucDetailImage from "../components/AuctionDetailPage/AucDetailImage";
import AucGiveInfo from "../components/AuctionDetailPage/AucGiveInfo";
import AucWantedInfo from "../components/AuctionDetailPage/AucWantedInfo";
import AucBidInfo from "../components/AuctionDetailPage/AucBidInfo";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getAuctionDetailApi } from "../api/acution";
import LoadingSpinner from "../components/common/LoadingSpinner";

const AuctionDetailPage = () => {
  const { auctionId }: any = useParams();
  const { data, isLoading, isError, error }: any = useQuery(
    ["AuctionDetailData", auctionId],
    () => getAuctionDetailApi(auctionId),
    {
      refetchOnWindowFocus: false,
    }
  );

  const [detailTap, setDetailTap] = useState({
    bid: true,
    giveTap: false,
    wantTap: false,
  });

  const { bid, giveTap, wantTap } = detailTap;

  const onClickBidHandler = () => {
    setDetailTap({
      bid: true,
      giveTap: false,
      wantTap: false,
    });
  };

  const onClickGiveHandler = () => {
    setDetailTap({
      bid: false,
      giveTap: true,
      wantTap: false,
    });
  };

  const onClickWantHandler = () => {
    setDetailTap({
      bid: false,
      giveTap: false,
      wantTap: true,
    });
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <PageLayout>
      <PageContainer>
        <AucDetailImage data={data} />
        <InfoContainer>
          {bid === true && giveTap === false && wantTap === false && (
            <LayoutContainer>
              <TapContainer>
                <TapClickButton>입찰 현황</TapClickButton>
                <TapDefaultButton onClick={onClickGiveHandler}>드려요</TapDefaultButton>
                <TapDefaultButton onClick={onClickWantHandler}>받아요</TapDefaultButton>
              </TapContainer>
              <AucBidInfo productData={data} />
            </LayoutContainer>
          )}
          {bid === false && giveTap === true && wantTap === false && (
            <LayoutContainer>
              <TapContainer>
                <TapDefaultButton onClick={onClickBidHandler}>입찰 현황</TapDefaultButton>
                <TapClickButton>드려요</TapClickButton>
                <TapDefaultButton onClick={onClickWantHandler}>받아요</TapDefaultButton>
              </TapContainer>
              <AucGiveInfo data={data} />
            </LayoutContainer>
          )}
          {bid === false && giveTap === false && wantTap === true && (
            <LayoutContainer>
              <TapContainer>
                <TapDefaultButton onClick={onClickBidHandler}>입찰 현황</TapDefaultButton>
                <TapDefaultButton onClick={onClickGiveHandler}>드려요</TapDefaultButton>
                <TapClickButton>받아요</TapClickButton>
              </TapContainer>
              <AucWantedInfo data={data} />
            </LayoutContainer>
          )}
        </InfoContainer>
      </PageContainer>
      <RecommendCard data={data.data.info.auctionResponseDtos} auction={true} />
      {/* <MyPickBar /> */}
    </PageLayout>
  );
};

const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 0px 60px 0px;
`;

const PageContainer = styled.div`
  width: 100%;

  @media screen and (max-width: 1136px) {
    padding: 0px 20px 0px 20px;
  }
`;

const TapContainer = styled.div`
  display: flex;
  gap: 0px;
  position: absolute;
`;

const TapClickButton = styled.div`
  display: flex;
  padding: 10px auto;
  font-family: "Pretendard";
  font-weight: 700;
  justify-content: center;
  align-items: center;
  width: 177px;
  height: 44px;
  border: 2px solid #000;
  border-bottom: 4px solid #fff;
  border-radius: 5px 5px 0px 0px;

  @media screen and (max-width: 500px) {
    width: 110px;
  }
`;

const TapDefaultButton = styled.div`
  display: flex;
  padding: 10px auto;
  font-family: "Pretendard";
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  width: 177px;
  height: 44px;
  border-bottom: 2px solid #000;
  border-radius: 5px 5px 0px 0px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 110px;
  }
`;

const LayoutContainer = styled.div`
  padding: 60px 0px 87px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InfoContainer = styled.div`
  width: 100%;
`;

export default AuctionDetailPage;
