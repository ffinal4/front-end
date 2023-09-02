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
import { useRecoilValue } from "recoil";
import { pagination } from "../store/pagination";
import { filterAsc } from "../store/filterCategory";
import AscFilterButton from "../components/common/AscFilterButton";

const UserPocketPage = () => {
  const { nickname } = useParams();
  const page = useRecoilValue(pagination);
  const asc = useRecoilValue(filterAsc);

  const { isLoading, error, data } = useQuery(
    ["myPocketData", nickname, page, asc],
    () => getUserPocketApi(nickname, page, asc),
    {
      refetchOnWindowFocus: false,
    }
  );
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
      <FilterButtonContainer>
        <AscFilterButton />
      </FilterButtonContainer>
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

const FilterButtonContainer = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
  margin-top: 20px;
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
`;

const CardListContainer = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
`;

export default UserPocketPage;
