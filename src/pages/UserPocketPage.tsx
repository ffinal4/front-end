import React from "react";
import { styled } from "styled-components";
import eyeImage from "../assets/images/eye.svg";
import { StTitle } from "../styles/TitleFont";
import dotLine from ".././assets/images/vector.png";
import Paging from "../components/common/Paging/Paging";
import UserInfo from "../components/UserPocketPage/UserInfo";
import { useMutation } from "react-query";
import { getUserPocketApi } from "../api/goods";

const UserPocketPage = () => {
  const zzimMutate = useMutation(() => getUserPocketApi(), {
    onSuccess: (res) => {
      console.log("다른유저데이터성공!", res);
      setIsZzim(!isZzim);
    },
  });
  return (
    <UserPocketContainer>
      <TitleContainer>
        <TitleLogo src={eyeImage} />
        <StTitle marginbottom="80px" textalign="center">
          PEEPPING POCKET
        </StTitle>
        <UserInfo />
      </TitleContainer>
      <DotLine src={dotLine} />
      <CardListContainer>{/* <ItemCardList data={} /> */}</CardListContainer>
      <Paging />
    </UserPocketContainer>
  );
};
const UserPocketContainer = styled.div`
  padding-top: 240px;
  width: 100%;
  padding-bottom: 100px;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 4px solid #222020;
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
