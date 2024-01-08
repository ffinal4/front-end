import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import React from "react";

// 모든페이지 공통 메인레이아웃
export const StMainLayout = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
  padding: 200px 0 100px 0;

  @media screen and (max-width: 834px) {
    width: 96%;
    padding: 80px 0 100px 0;
  }
  @media screen and (max-width: 500px) {
    padding: 120px 0 100px 0;
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
