import React, { useState } from "react";
import { styled } from "styled-components";
import ImageUpload from "../components/UploadPage/ImageUpload";
import TitleUpload from "../components/UploadPage/TitleUpload";
import CategoryUpload from "../components/UploadPage/CategoryUpload";
import RegionUpload from "../components/UploadPage/RegionUpload";
import ConditionUpload from "../components/UploadPage/ConditionUpload";
import MethodUpload from "../components/UploadPage/MethodUpload";
import DetailUpload from "../components/UploadPage/DetailUpload";
import TagUpload from "../components/UploadPage/TagUpload";
import WantedUpload from "../components/UploadPage/WantedUpload";
import UploadBtn from "../components/UploadPage/UploadBtn";

const UploadPage = () => {
  return (
    <div>
      <PageLayout>
        <TitleWrapper>
          <PageTitle>내 주머니에 추가</PageTitle>
          <PageSubtitle>* 필수항목</PageSubtitle>
        </TitleWrapper>
        <PageContainer>
          <ImageUpload />
          <TitleUpload />
          <CategoryUpload />
          <RegionUpload />
          <ConditionUpload />
          <MethodUpload />
          <DetailUpload />
          <TagUpload />
          <WantedUpload />
          <UploadBtn />
        </PageContainer>
      </PageLayout>
    </div>
  );
};

const PageLayout = styled.div`
  width: 100%;
  height: 1986px;
`;

const PageContainer = styled.div`
  border-top: 4px solid;
  width: 1140px;
`;

const TitleWrapper = styled.div`
  display: flex;
  margin: 0px 0px 20px 0px;
`;

const PageTitle = styled.div`
  font-family: "Pretendard";
  font-size: 32px;
  font-weight: 800;
  line-height: 150%;
  margin: 0px 20px 0px 0px;
`;

const PageSubtitle = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  padding: 17px 0px 0px 0px;
`;

export default UploadPage;
