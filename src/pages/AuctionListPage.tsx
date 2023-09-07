import React from "react";
import { styled } from "styled-components";
import { StTitle } from "../styles/TitleFont";
import HorizontalLine from "../components/common/HorizontalLine";
import smallMastcot from "../assets/icon/peeppo.png";
import { useQuery } from "react-query";
import { getAuctionListApi } from "../api/acution";
import AuctionCard from "../components/common/AuctionCard";
import { StBasicButton } from "../styles/BasicButton";
import { useNavigate } from "react-router-dom";
import FilterButton from "../components/common/FilterButton";
import Paging from "../components/common/Paging/Paging";
import { useRecoilValue } from "recoil";
import { pagination } from "../store/pagination";
import { filterAsc, filterCategory } from "../store/filterCategory";
import AscFilterButton from "../components/common/AscFilterButton";
import LoadingSpinner from "../components/common/LoadingSpinner";
import EmptyList from "../components/common/EmptyList";

const AuctionListPage = () => {
  const currentPage = useRecoilValue(pagination);
  const currentCategory = useRecoilValue(filterCategory);
  const currentAsc = useRecoilValue(filterAsc);
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery(
    ["auctionListPageData", currentPage, currentCategory, currentAsc],
    () => getAuctionListApi(currentPage, currentCategory, currentAsc),
    {
      refetchOnWindowFocus: false,
    }
  );
  if (isLoading) return <LoadingSpinner />;
  console.log("옥션페이지데이터", data);
  if (error) {
    console.log(error);
  }
  return (
    <AuctionListPageContainer>
      <TitleContainer>
        <ImageContainer>
          <TitleImage src={smallMastcot} />
          <TitleImage src={smallMastcot} />
          <TitleImage src={smallMastcot} />
        </ImageContainer>
        <TitleText marginbottom="0" textalign="center">
          POCKET AUCTION
        </TitleText>
        <StButton
          buttonColor="#58ABF7"
          onClick={() => {
            navigate("/auctionupload");
          }}
        >
          경매 물품 올리기
        </StButton>
      </TitleContainer>
      <HorizontalLine />
      <AscFilterButton />
      <FilterButton />
      <CardContainer>
        {(data?.data.info.content.length > 0)
          ? data?.data.info.content.map((item: any) => {
            return <AuctionCard item={item} key={item.auctionid} />
          })
          : <EmptyList />
        }
      </CardContainer>
      <Paging />
    </AuctionListPageContainer>
  );
};

const AuctionListPageContainer = styled.div`
  width: 100%;
`;

const StButton = styled(StBasicButton)`
  border: 1px solid var(--black-white-black, #222020);
  color: var(--black-white-white, #fcfcfc);
  /* KOR/Kor B 16 */
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
  margin-top: 40px;
`;
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 16px;

  @media screen and (max-width: 1136px) {
    justify-content: center;
  }
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
