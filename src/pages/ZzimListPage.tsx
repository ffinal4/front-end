import React from "react";
import { styled } from "styled-components";
import { StTitle } from "../styles/TitleFont";
import eyeImage from "../assets/images/eye.svg";
import HorizontalLine from "../components/common/HorizontalLine";
import dotLine from ".././assets/images/vector.png";
import { getZzimPageApi } from "../api/users";
import { useQuery } from "react-query";
import ItemCardList from "../components/common/ItemCardList";
import Paging from "../components/common/Paging/Paging";
import LoadingSpinner from "../components/common/LoadingSpinner";

const ZzimListPage = () => {
  const { isLoading, isError, error, data } = useQuery("ZzimListPageData", getZzimPageApi, {
    refetchOnWindowFocus: false,
  });
  if (isLoading) return <LoadingSpinner />;
  if (isError) {};

  return (
    <div>
      <TitleContainer>
        <TitleImage src={eyeImage} />
        <StTitle marginbottom="0" textalign="center">
          ZZIM LIST
        </StTitle>
      </TitleContainer>
      <HorizontalLine />
      <DotLine src={dotLine} />
      <ItemCardList data={data?.data.info} />
      <Paging />
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

export default ZzimListPage;
