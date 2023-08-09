import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import React from "react";

// 모든페이지 공통 메인레이아웃
export const StMainLayout = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
  padding: 220px 0 100px 0;

  /* @media screen and (max-width: 1600px) {
    padding: 80px 200px 100px 200px;
  } */

  @media screen and (max-width: 834px) {
    padding: 80px 0 100px 0;
  }
  @media screen and (max-width: 375px) {
    padding: 80px 0 100px 0;
  }
`;

const MainLayout = () => {
  return (
    <StMainLayout>
      <Outlet />
    </StMainLayout>
  );
};

export default MainLayout;
