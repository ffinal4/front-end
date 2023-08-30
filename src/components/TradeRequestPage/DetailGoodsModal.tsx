import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import {
  CancelButtonContainer,
  CancelImg,
  ModalBackground,
} from "../MyAuctionCheckPage/AuctionCompleteModal";
import remove from "../../assets/icon/remove.png";
import leftarrow from "../../assets/icon/detailarrow.png";
import rightarrow from "../../assets/icon/detailrightarrow.png";
import ArrowLeft from "../../assets/images/arrowleft.png";
import ArrowRight from "../../assets/images/arrowright.png";
import DetailInfo from "./DetailInfo";

interface DetailGoodsModalProps {
  detailModalOpen: boolean;
  setDetailModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DetailGoodsModal: React.FC<DetailGoodsModalProps> = ({
  detailModalOpen,
  setDetailModalOpen,
}) => {
  // const arrImages: string[] = data.data.info.images;

  const divRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState<number>(0);
  const imageWidth: number = 272;
  const SlideRange: number = currentImg * imageWidth;

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.transition = "all 0.5s ease-in-out";
      divRef.current.style.transform = `translateX(-${SlideRange}px)`;
    }
  }, [SlideRange]);

  const moveToPrevBtn = () => {
    if (currentImg === 0) return;
    setCurrentImg(currentImg - 1);
  };

  const moveToNextBtn = () => {
    if (currentImg === 0) return; //수정필요
    setCurrentImg(currentImg + 1);
  };

  return (
    <div>
      <ModalBackground />
      <BoxContainer>
        <Arrow src={leftarrow} alt="" />
        <DetailModalContainer>
          <CancelButtonContainer>
            <CancelImg
              src={remove}
              onClick={() => {
                setDetailModalOpen(false);
              }}
            />
          </CancelButtonContainer>
          <div style={{ display: "flex", gap: "30px" }}>
            <ImageOutContainer>
              <SlideBtnWrapper>
                <SlideButton onClick={moveToPrevBtn}>
                  <img src={ArrowLeft} alt="" />
                </SlideButton>
                <SlideButton onClick={moveToNextBtn}>
                  <img src={ArrowRight} alt="" />
                </SlideButton>
              </SlideBtnWrapper>
            </ImageOutContainer>
            <DetailInfo />
          </div>
          <InfoContainer>
            <InfoTextTitle>상품정보</InfoTextTitle>
            <InfoTextContent>
              내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧내용안녕하세욧
            </InfoTextContent>
          </InfoContainer>
        </DetailModalContainer>
        <Arrow src={rightarrow} alt="" />
      </BoxContainer>
    </div>
  );
};

const BoxContainer = styled.div`
  width: 948px;
  height: 634px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailModalContainer = styled.div`
  width: 812px;
  height: 630px;
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  border: 2px solid black;
  border-radius: 10px;
  padding-left: 30px;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #39373a;
    border-radius: 5px;

    &:hover {
      background-color: #524f53;
    }
  }
  ::-webkit-scrollbar-track {
    background-color: #d5d4d4;
    border-radius: 5px;
  }
`;

const Arrow = styled.img`
  width: 48px;
  height: 48px;
  z-index: 9999;
  cursor: pointer;
`;

const ImageOutContainer = styled.div`
  width: 272px;
  height: 272px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const SlideBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: space-between;
  z-index: 200;
`;

const SlideButton = styled.div`
  width: 36px;
  height: 36px;
  background-color: #222020;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 200;

  &:hover {
    background-color: #b3b3b3;
    opacity: 0.7;
  }
`;

const InfoContainer = styled.div`
  /* width: 100%; */
  width: 752px;
  height: 214px;
  margin-top: 30px;
  overflow: auto;
`;

const InfoTextTitle = styled.div`
  width: 100%;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  padding: 0px 0px 40px 0px;
`;

const InfoTextContent = styled.div`
  width: 100%;
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
export default DetailGoodsModal;
