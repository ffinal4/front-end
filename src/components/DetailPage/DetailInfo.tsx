import React, { useEffect, useState } from "react";
import { StBasicButton } from "../../styles/BasicButton";
import { styled } from "styled-components";
import Like from "../../assets/icon/like.png";
import Time from "../../assets/icon/time.png";
import Layer from "../../assets/icon/layer_6.png";
import { deleteGoodsApi, postZzimApi } from "../../api/goods";
import CardZzimBtn from "../common/CardZzimBtn";
import { useNavigate } from "react-router-dom";
import { ValueToEnum } from "../../utils/EnumCategory";
import ModalBtn from "./ModalBtn";
import AcceptBtn from "./AcceptBtn";

const DetailInfo = ({ data }: any) => {
  
  const navigate = useNavigate();
  const categorys = data.data.info.goodsResponseDtoList.category;
  const createdDate = data.data.info.goodsResponseDtoList.createdAt;
  const splitDate = createdDate.split("T")[0];
  const targetDate : any = new Date(splitDate);
  const currentDate : any = new Date();
  const newDate = currentDate - targetDate;
  const result = Math.floor(newDate / (1000 * 60 * 60 * 24));
  console.log("며칠전", result);

  return (
    <InfoContainer>
      <InfoTitle>{data.data.info.goodsResponseDtoList.title}</InfoTitle>
      <UserNameContainer></UserNameContainer>
      <UserNameContainer style={{ border: "none", paddingTop: "16px", position: "relative" }}>
        <TextWrapper
          style={{ gap: "8px" }}
          onClick={() => {
            if (data.data.info.checkSameUser) {
              navigate("/mypocket");
            } else {
              navigate(`/userpocket/${data.data.info.goodsResponseDtoList.nickname}`);
            }
          }}
        >
          <ColorText color="#39373A">{data.data.info.goodsResponseDtoList.nickname}</ColorText>
          <SmallBox src={Layer} style={{ cursor: "pointer" }} />
        </TextWrapper>
        <BoxWrapper>
          <TextWrapper style={{cursor: "default"}}>
            <SmallBox src={Like} />
            <ColorText color="#ADADAD">{data.data.info.goodsResponseDtoList.dibsCount}</ColorText>
          </TextWrapper>
          <TextWrapper style={{cursor: "default"}}>
            <SmallBox src={Time} />
            <ColorText color="#ADADAD">{result}일 전</ColorText>
          </TextWrapper>
          <TextWrapper>
            <ModalBtn data={data} navigate={navigate} />
          </TextWrapper>
        </BoxWrapper>
      </UserNameContainer>
      <TextContainer>
        <TextLine>
          <ColorText color="#717171">카테고리</ColorText>
          <ColorText color="#222020">{ValueToEnum(categorys)}</ColorText>
        </TextLine>
        <TextLine>
          <ColorText color="#717171">상품상태</ColorText>
          <ColorText color="#222020">{data.data.info.goodsResponseDtoList.goodsCondition}</ColorText>
        </TextLine>
        <TextLine>
          <ColorText color="#717171">거래지역</ColorText>
          <ColorText color="#222020">{data.data.info.goodsResponseDtoList.location}</ColorText>
        </TextLine>
        <TextLine>
          <ColorText color="#717171">거래방법</ColorText>
          <ColorText color="#222020">{data.data.info.goodsResponseDtoList.tradeType}</ColorText>
        </TextLine>
        <TextLine>
          <ColorText color="#717171">상품태그</ColorText>
          <ColorText color="#222020">#스타벅스 #기프티콘 #교환권</ColorText>
        </TextLine>
      </TextContainer>
      <ColorText color="#717171">*상대방이 교환신청을 수락해야 채팅이 가능해요!</ColorText>
      <AcceptBtn data={data} />
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 834px) {
    width: 100%;
    display: grid;
  }
`;

const InfoTitle = styled.div`
  font-family: "Pretendard";
  font-size: 32px;
  font-weight: 800;
  line-height: 150%;
  max-height: 96px;
`;

const UserNameContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 0px 16px 0px;
  border-bottom: 2px solid #d9d9d9;
`;

const ColorText = styled.div<{ color: string }>`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: ${(props) => props.color};
`;

const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
`;

const SmallBox = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const TextContainer = styled.div`
  display: grid;
  padding: 24px 0px 40px 0px;
  gap: 10px;
`;

const TextLine = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
`;

export default DetailInfo;
