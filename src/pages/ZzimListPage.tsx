import React from "react";
import { styled } from "styled-components";
import { StTitle } from "../styles/TitleFont";
import eyeImage from "../assets/images/eye.svg";
import HorizontalLine from "../components/common/HorizontalLine";
import dotLine from ".././assets/images/vector.png";
import { getZzimPageApi } from "../api/users";
import { useQuery } from "react-query";

const ZzimListPage = () => {
  const { isLoading, error, data } = useQuery("ZzimListPageData", getZzimPageApi, {
    refetchOnWindowFocus: false,
  });
  if (isLoading) return <div>Loading...</div>;
  console.log("찜 리스트페이지데이터", data);
  if (error) {
    console.log(error);
  }
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
