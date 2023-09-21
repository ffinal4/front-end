import React from "react";
import { styled } from "styled-components";
import Like from "../../assets/icon/like.png";
import Time from "../../assets/icon/time.png";
import Layer from "../../assets/icon/layer_6.png";
import { ValueToEnum } from "../../utils/EnumCategory";

const DetailInfo = ({ item } : any) => {

  const categorys = item?.category;

  return (
    <InfoContainer>
      <InfoTitle>{item?.title}</InfoTitle>
      <UserNameContainer></UserNameContainer>
      <UserNameContainer
        style={{ border: "none", paddingTop: "16px", position: "relative" }}
      >
        <TextWrapper
          style={{ gap: "8px" }}
        >
          <ColorText color="#39373A">{item?.nickname}</ColorText>
          <SmallBox src={Layer} style={{ cursor: "pointer" }} />
        </TextWrapper>
        <BoxWrapper>
          <TextWrapper>
            <SmallBox src={Like} />
            <ColorText color="#ADADAD">0</ColorText>
          </TextWrapper>
          <TextWrapper>
            <SmallBox src={Time} />
            <ColorText color="#ADADAD">3일 전</ColorText>
          </TextWrapper>
          <TextWrapper>
          </TextWrapper>
        </BoxWrapper>
      </UserNameContainer>
      <TextContainer>
        <TextLine>
          <ColorText color="#ADADAD">카테고리</ColorText>
          <ColorText color="#222020">{ValueToEnum(categorys)}</ColorText>
        </TextLine>
        <TextLine>
          <ColorText color="#ADADAD">상품상태</ColorText>
          <ColorText color="#222020">{item?.goodsCondition}</ColorText>
        </TextLine>
        <TextLine>
          <ColorText color="#ADADAD">거래지역</ColorText>
          <ColorText color="#222020">{item?.location}</ColorText>
        </TextLine>
        <TextLine>
          <ColorText color="#ADADAD">거래방법</ColorText>
          <ColorText color="#222020">{item?.tradeType}</ColorText>
        </TextLine>
        <TextLine>
          <ColorText color="#ADADAD">상품태그</ColorText>
          <ColorText color="#222020">준비중입니다.</ColorText>
        </TextLine>
      </TextContainer>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  width: 450px;
  
  @media screen and (max-width: 834px) {
    width: 100%;
    display: grid;
  }
`;

const InfoTitle = styled.div`
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 700;
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

  gap: 10px;
`;

const TextLine = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
`;
export default DetailInfo;
