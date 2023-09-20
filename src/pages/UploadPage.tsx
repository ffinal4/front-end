import React, { useState } from "react";
import { styled } from "styled-components";
import Swal from "sweetalert2";
import ImageUpload from "../components/UploadPage/ImageUpload";
import TitleUpload from "../components/UploadPage/TitleUpload";
import CategoryUpload from "../components/UploadPage/CategoryUpload";
import RegionUpload from "../components/UploadPage/RegionUpload";
import ConditionUpload from "../components/UploadPage/ConditionUpload";
import MethodUpload from "../components/UploadPage/MethodUpload";
import DetailUpload from "../components/UploadPage/DetailUpload";
import TagUpload from "../components/UploadPage/TagUpload";
import WantedUpload from "../components/UploadPage/WantedUpload";
import { StBasicButton } from "../styles/BasicButton";
import { postUploadApi } from "../api/goods";
import { useNavigate } from "react-router-dom";
import RatingUpload from "../components/UploadPage/RatingUpload";

const UploadPage = () => {
  const navigate = useNavigate();
  const locationData = localStorage.getItem("location");

  type uploadBodyData = {
    data: {
      title: string;
      content: string;
      tradeType: string;
      category: string;
      goodsCondition: string;
      ratingCheck: boolean;
      sellerPrice: string;
      location: string;
    };
    wanted: {
      title: string;
      content: string;
      category: string;
    };
  };

  const [failedUpload, setFailedUpload] = useState(false);
  const [uploadImages, setUploadImages] = useState<File[]>([]);
  const [uploadData, setUploadData] = useState<any>({
    data: {
      title: "",
      content: "",
      tradeType: "",
      category: "",
      goodsCondition: "",
      ratingCheck: false,
      sellerPrice: "",
      location: `${locationData}`,
    },
    wanted: {
      title: "",
      content: "",
      category: "",
    },
  });

  const formData = new FormData();

  const onClickUploadHandler = async () => {
    if (
      uploadData.data.ratingCheck === true &&
      uploadData.data.sellerPrice === ""
    ) {
      setFailedUpload(true);
      console.log(uploadImages, uploadData);
    }
    if (
      uploadImages.length === 0 ||
      uploadData.data.title === "" ||
      uploadData.data.tradeType === "" ||
      uploadData.data.category === "" ||
      uploadData.data.goodsCondition === "" ||
      (uploadData.data.ratingCheck === true &&
        uploadData.data.sellerPrice === "")
    ) {
      setFailedUpload(true);
    } else {
      if (uploadData.wanted.category === "") {
        setUploadData({...uploadData, wanted: {...uploadData.wanted, category: "ETC"}});
        Swal.fire({
          icon: "warning",
          text: "정말로 맞교환을 원하시는 물품이 없으신가요?",
          confirmButtonColor: "#ffca64",
        });
        if (uploadData.wanted.category === "ETC") {
        try {
          console.log(uploadImages, uploadData);
          const sliceImages = uploadImages.slice(0, 3);
          sliceImages.forEach((blobImage, index) => {
            formData.append("images", blobImage, `image${index + 1}.jpg`);
          });
          formData.append(
            "data",
            new Blob([JSON.stringify(uploadData.data)], {
              type: "application/json",
            })
          );
          formData.append(
            "wanted",
            new Blob([JSON.stringify(uploadData.wanted)], {
              type: "application/json",
            })
          );
          formData.forEach(function (value, key) {
            console.log(key + ": " + value);
          });
  
          const res = await postUploadApi(formData);
          if (res.status === 200) {
            Swal.fire({
              icon: "success",
              text: "주머니에 물건이 추가되었어요!",
              confirmButtonColor: "#ffca64",
            });
            navigate("/myPocket");
          }
        } catch (error) {
          Swal.fire({
            icon: "warning",
            text: "이미지의 크기가 너무 커요!",
            confirmButtonColor: "#ffca64",
          });
          console.log(error);
        }
      }
      } else {
        try {
          console.log(uploadImages, uploadData);
          const sliceImages = uploadImages.slice(0, 3);
          sliceImages.forEach((blobImage, index) => {
            formData.append("images", blobImage, `image${index + 1}.jpg`);
          });
          formData.append(
            "data",
            new Blob([JSON.stringify(uploadData.data)], {
              type: "application/json",
            })
          );
          formData.append(
            "wanted",
            new Blob([JSON.stringify(uploadData.wanted)], {
              type: "application/json",
            })
          );
          formData.forEach(function (value, key) {
            console.log(key + ": " + value);
          });
  
          const res = await postUploadApi(formData);
          if (res.status === 200) {
            Swal.fire({
              icon: "success",
              text: "주머니에 물건이 추가되었어요!",
              confirmButtonColor: "#ffca64",
            });
            navigate("/myPocket");
          }
        } catch (error) {
          Swal.fire({
            icon: "warning",
            text: "이미지의 크기가 너무 커요!",
            confirmButtonColor: "#ffca64",
          });
          console.log(error);
        }
      };
    }
  };

  return (
    <PageLayout>
      <PageHeader>ADD TO MY POCKET</PageHeader>
      <TitleWrapper>
        <PageTitle>주머니에 추가</PageTitle>
        <PageSubtitle>* 필수항목</PageSubtitle>
      </TitleWrapper>
      <PageContainer>
        <ImageUpload
          setUploadImages={setUploadImages}
          uploadImages={uploadImages}
          failedUpload={failedUpload}
        />
        <TitleUpload
          setUploadData={setUploadData}
          uploadData={uploadData}
          failedUpload={failedUpload}
        />
        <CategoryUpload
          setUploadData={setUploadData}
          uploadData={uploadData}
          failedUpload={failedUpload}
        />
        <RegionUpload locationData={locationData} />
        <ConditionUpload
          setUploadData={setUploadData}
          uploadData={uploadData}
          failedUpload={failedUpload}
        />
        <MethodUpload
          setUploadData={setUploadData}
          uploadData={uploadData}
          failedUpload={failedUpload}
        />
        <DetailUpload
          setUploadData={setUploadData}
          uploadData={uploadData}
          failedUpload={failedUpload}
        />
        <TagUpload />
        <RatingUpload
          setUploadData={setUploadData}
          uploadData={uploadData}
          failedUpload={failedUpload}
        />
        <WantedUpload
          setUploadData={setUploadData}
          uploadData={uploadData}
          failedUpload={failedUpload}
        />
        <BtnWrapper>
          <Button buttonColor="#FFCA64" onClick={onClickUploadHandler}>
            주머니에 추가
          </Button>
          {failedUpload && (
            <FailedText>입력 내용을 다시 한 번 확인해 주세요.</FailedText>
          )}
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

  @media screen and (max-width: 375px) {
    font-size: 24px;
    padding-left: 16px;
  }
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

  @media screen and (max-width: 375px) {
    align-items: center;
  }
`;

const PageTitle = styled.div`
  font-family: "Pretendard";
  font-size: 32px;
  font-weight: 800;
  line-height: 150%;
  margin: 0px 20px 0px 0px;

  @media screen and (max-width: 375px) {
    font-size: 16px;
    font-weight: 700;
    line-height: 140%;
    padding-left: 16px;
  }
`;

const PageSubtitle = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  padding: 17px 0px 0px 0px;

  @media screen and (max-width: 375px) {
    font-size: 14px;
    line-height: 140%;
    padding: 0px;
  }
`;

const BtnWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 30px 0px 0px 0px;
  gap: 10px;
`;

const Button = styled(StBasicButton)`
  border: 2px solid #222020;
  font-weight: 700;
  margin: 0px auto;
`;

const FailedText = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #df3737;
  margin: 0px auto;
`;

export default UploadPage;