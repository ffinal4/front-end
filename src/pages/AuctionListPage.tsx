import React from "react";
import { styled } from "styled-components";
import { StTitle } from "../styles/TitleFont";
import HorizontalLine from "../components/common/HorizontalLine";
import smallMastcot from "../assets/icon/peeppo.png";
import { useQuery } from "react-query";
import { getAuctionListApi } from "../api/acution";
import AuctionCard from "../components/common/AuctionCard";

const AuctionListPage = () => {
  const { isLoading, error, data } = useQuery("auctionListPageData", getAuctionListApi, {
    refetchOnWindowFocus: false,
  });
  if (isLoading) return <div>Loading...</div>;
  console.log("옥션페이지데이터", data);
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <TitleContainer>
        <ImageContainer>
          <TitleImage src={smallMastcot} />
          <TitleImage src={smallMastcot} />
          <TitleImage src={smallMastcot} />
        </ImageContainer>
        <TitleText marginbottom="0" textalign="center">
          INSIDE POCKET
        </TitleText>
      </TitleContainer>
      <HorizontalLine />
      <CardContainer>
        {data?.data.info.content.map((item: any) => {
          return <AuctionCard item={item} key={item.auctionid} />;
        })}
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  display: flex;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`;
const TitleImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 0 5px 16px 0;
`;

const TitleText = styled(StTitle)`
  color: var(--blue-blue-100, #58abf7);
`;

export default AuctionListPage;
