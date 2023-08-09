import React, { Dispatch, SetStateAction, useState } from "react";
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
import { StBasicButton } from '../styles/BasicButton';

const UploadPage = () => {

  const [uploadData, setUploadData] = useState({});

  // const objToFormData = (obj : any) => {
  //   const formData = new FormData();
  //   for (const key in obj) {
  //     if (obj.hasOwnProperty(key)) {
  //       formData.append(key, obj[key]);
  //     }
  //   }
  //     return formData;
  // };

  // const formData = objToFormData(uploadData);

  const onClickUploadHandler = () => {
    // console.log("form", formData)
    console.log("uploadData", uploadData);
  };

  return (
    <PageLayout>
      <PageHeader>ADD TO MY POCKET</PageHeader>
      <TitleWrapper>
        <PageTitle>내 주머니에 추가</PageTitle>
        <PageSubtitle>* 필수항목</PageSubtitle>
      </TitleWrapper>
      <PageContainer>
        <ImageUpload />
        <TitleUpload setUploadData={setUploadData} uploadData={uploadData} />
        <CategoryUpload setUploadData={setUploadData} uploadData={uploadData} />
        <RegionUpload setUploadData={setUploadData} uploadData={uploadData} />
        <ConditionUpload setUploadData={setUploadData} uploadData={uploadData} />
        <MethodUpload setUploadData={setUploadData} uploadData={uploadData} />
        <DetailUpload setUploadData={setUploadData} uploadData={uploadData} />
        <TagUpload />
        <WantedUpload />
        <BtnWrapper>
          <StBasicButton buttonColor="#D9D9D9" onClick={onClickUploadHandler}>주머니에 추가</StBasicButton>
        </BtnWrapper>
      </PageContainer>
    </PageLayout>
  );
};

const PageLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const PageHeader = styled.div`
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 110%;
`;

const PageContainer = styled.div`
  border-top: 4px solid;
  width: 100%;

  @media screen and (max-width: 1136px) {
        padding: 0px 20px 0px 20px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  margin: 16px 0px 20px 0px;
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

const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0px 0px 0px;
`;

export default UploadPage;
