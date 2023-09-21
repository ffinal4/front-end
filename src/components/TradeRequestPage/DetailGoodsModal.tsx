import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import {
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
  detailData: any;
  detailModalOpen: boolean;
  setDetailModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DetailGoodsModal: React.FC<DetailGoodsModalProps> = ({
  detailData,
  detailModalOpen,
  setDetailModalOpen,
}) => {

  const modalData = detailData?.data.info;
  const divRef = useRef<HTMLDivElement>(null);
  const divTwoRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState<number>(0);
  const imageWidth: number = 272;
  const SlideRange: number = currentImg * imageWidth;
  const [activePage, setActivePage] = useState<number>(0);
  const productWidth: number = 752;
  const productSlideRange: number = activePage * productWidth;

  

  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.transition = "all 0.5s ease-in-out";
      divRef.current.style.transform = `translateX(-${SlideRange}px)`;
    }
    if (divTwoRef.current) {
      divTwoRef.current.style.transition = "all 0.5s ease-in-out";
      divTwoRef.current.style.transform = `translateX(-${productSlideRange}px)`;
    }
  }, [SlideRange, productSlideRange]);

  const moveToPrevSlideBtn = () => {
    if (activePage === 0) return;
    setActivePage(activePage - 1);
  };

  const moveToNextSlideBtn = () => {
    if (activePage === (modalData?.length - 1)) return; //수정필요
    setActivePage(activePage + 1);
  };

  const moveToPrevImageBtn = () => {
    if (currentImg === 0) return;
    setCurrentImg(currentImg - 1);
  };

  const moveToNextImageBtn = () => {
    if (currentImg === (modalData[activePage]?.imageUrls.length - 1)) return; //수정필요
    setCurrentImg(currentImg + 1);
  };

  const pageOnclick = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  return (
    <div>
      <ModalBackground />
      <BoxContainer>
        <Arrow src={leftarrow} alt="" onClick={moveToPrevSlideBtn} />
        <DetailModalContainer>
          <DetailModalHeadContainer>
            <PageSlideContainer>
              {modalData?.map((item : any) => {
                return (
                  <PageNumber
                    active={activePage === modalData?.indexOf(item)}
                    onClick={() => pageOnclick(modalData?.indexOf(item))}
                  >
                    {(modalData?.indexOf(item) + 1)}
                  </PageNumber>
                )
              })}
            </PageSlideContainer>
            <CancelButtonContainer>
              <CancelImg
                src={remove}
                onClick={() => {
                  setDetailModalOpen(false);
                }}
              />
            </CancelButtonContainer>
          </DetailModalHeadContainer>
          <DetailWrapper>
          <DetailOutWrapper ref={divTwoRef}>
          {modalData?.map((item : any) => {
            const inputData = item?.content.split('\n');
            return (
              <div>
          <div style={{ display: "flex", gap: "30px" }}>
            <ImageOutContainer>
            <ImageWrapper ref={divRef}>
              {item?.imageUrls.map((image : string) => {
                return <ImageBox src={image} />
              })}
              </ImageWrapper>
              <SlideBtnWrapper>
                <SlideButton onClick={moveToPrevImageBtn}>
                  <img src={ArrowLeft} alt="" />
                </SlideButton>
                <SlideButton onClick={moveToNextImageBtn}>
                  <img src={ArrowRight} alt="" />
                </SlideButton>
              </SlideBtnWrapper>
            </ImageOutContainer>
            <DetailInfo item={item} />
          </div>
          <InfoContainer>
            <InfoTextTitle>{item?.title}</InfoTextTitle>
            <InfoTextContent>
              {inputData.map((item : any) => {
                        return (
                            (item === inputData[inputData.length - 1])
                                ? <div>{item}</div>
                                : <div>{item}<br /></div>
                        )
                    })}
            </InfoTextContent>
          </InfoContainer>
          </div>
            )
          })
        }
          </DetailOutWrapper>
          </DetailWrapper>
        </DetailModalContainer>
        <Arrow src={rightarrow} alt="" onClick={moveToNextSlideBtn} />
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

const PageSlideContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const PageNumber = styled.div<{ active: boolean }>`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  background-color: ${(props) => (props.active ? "#ec8d49" : "")};
  border-radius: 5px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.active ? "white" : "black")};
`;

const CancelButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 20px;
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

const DetailModalHeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 20px;
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

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ImageBox = styled.div<{ src : string }>`
  min-width: 272px;
  height: 272px;
  background-size: cover;
  background-image: ${(props) => `url(${props.src})`};
  background-position: center center;
  background-repeat: no-repeat;
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

const DetailWrapper = styled.div`
  width: 752px;
  height: 560px;
  overflow: hidden;
`;
const DetailOutWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export default DetailGoodsModal;
