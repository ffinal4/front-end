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

const MyPocketPage = () => {
  const { isLoading, error, data } = useQuery("myPocketData", getMyPocketApi, {
    refetchOnWindowFocus: false,
  });
  if (isLoading) return <div>Loading...</div>;
  console.log("마이포켓데이터", data);
  if (error) {
    console.log(error);
  }
  return (
    <MyPocketPageContainer>
      <TitleContainer>
        <StTitle marginbottom="16px" textalign="center">
          MY POCKET
        </StTitle>
        <SubTitle>내 주머니</SubTitle>
      </TitleContainer>
      <MiddleContainer>
        <UploadBtn>주머니에 추가</UploadBtn>
      </MiddleContainer>
      <HorizontalLine />
      <DotLine src={dotLine} />
      <ItemCardList data={data?.data.info} />
      <Paging />
    </MyPocketPageContainer>
  );
};

const MyPocketPageContainer = styled.div`
  padding-top: 240px;
  width: 100%;
`;

const TitleContainer = styled.div`
  margin-bottom: 61px;
`;

const SubTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: "Pretendard";
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 48px */
`;

const MiddleContainer = styled.div`
  max-width: 1136px;
  width: 100%;
  height: 46px;
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
  margin-bottom: 80px;
`;

export default MyPocketPage;
