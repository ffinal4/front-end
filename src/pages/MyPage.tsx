import React, { useEffect } from "react";
import { styled } from "styled-components";
import ProfileContent from "../components/MyPage/ProfileContent";
import MyPippo from "../components/MyPage/MyPippo";
import { useQuery } from "react-query";
import { getMypageApi } from "../api/users";
import Background from "../assets/images/mypagebg.svg";
import Pocket from "../components/MyPage/Pocket";
import LoadingSpinner from "../components/common/LoadingSpinner";

const MyPage = () => {
  const { isLoading, error, data }: any = useQuery("myPageData", getMypageApi, {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data) {
      const localLocation = localStorage.getItem("location");
      if (data.data.info.location !== localLocation) {
        localStorage.setItem("location", data.data.info.location);
        console.log("test");
      }
    }
  }, []);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error: {error.message}</p>;
  console.log("myPage", data);

  return (
    <AllLayoutContainer>
      <LayoutImage src={Background} />
        <MyPageTitle>MY PAGE</MyPageTitle>
        <MyPageContentContainer>
          <ProfileContent data={data} />
          <MyPippo data={data} />
        </MyPageContentContainer>
        <Pocket />
    </AllLayoutContainer>
  );
};

const AllLayoutContainer = styled.div`
  padding-top: 200px;
  width: 100%;
  background-color: #fcf6e9;
  overflow: hidden;
`;

const LayoutImage = styled.img`
  width: 1864px;
  height: 327px;
  object-fit: contain;
  position: absolute;
  top: 170px;
  left: 0;
  z-index: 0;
`;

const MyPageTitle = styled.div`
  font-family: "Lemon/Milk", sans-serif;
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
  line-height: 110%;
  padding: 0px 0px 60px 0px;
  position: relative;
`;

const MyPageContentContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1144px) {
    display: grid;
    justify-content: center;
  }
`;

export default MyPage;
