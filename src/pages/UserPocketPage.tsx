import React from "react";
import { styled } from "styled-components";
import { StTitle } from "../styles/TitleFont";
import dotLine from ".././assets/images/vector.png";
import Paging from "../components/common/Paging/Paging";
import UserInfo from "../components/UserPocketPage/UserInfo";
import { useQuery } from "react-query";
import { getUserPocketApi } from "../api/goods";
import { useParams } from "react-router-dom";
import ItemCardList from "../components/common/ItemCardList";

const UserPocketPage = () => {
  const { nickname } = useParams();
  const { isLoading, error, data } = useQuery(["myPocketData", nickname], () => getUserPocketApi(nickname), {
    refetchOnWindowFocus: false,
  });
  if (isLoading) return <div>Loading...</div>;
  console.log("남의포켓데이터", data);
  if (error) {
    console.log(error);
  }
  return (
    <UserPocketContainer>
      <TitleContainer>
        <TitleFont marginbottom="28px" textalign="center">
          PEEPPING POCKET
        </TitleFont>
        <UserInfo data={data?.data} />
      </TitleContainer>
      <DotLine src={dotLine} />
      <CardListContainer>
        <ItemCardList data={data?.data.info.goodsListResponseDto} />
      </CardListContainer>
      <Paging />
    </UserPocketContainer>
  );
};
const UserPocketContainer = styled.div`
  width: 100%;
  padding-bottom: 100px;
`;

const TitleContainer = styled.div`
  padding-top: 200px;
  padding-bottom: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #39373a;
`;

const TitleFont = styled(StTitle)`
  color: #fcfcfc;
`;
const TitleLogo = styled.img`
  width: 66px;
  margin-bottom: 16px;
`;

const DotLine = styled.img`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 80px;
`;

const CardListContainer = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
`;

export default UserPocketPage;
