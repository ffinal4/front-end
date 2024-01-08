import React, { useState } from 'react'
import { StBasicButton } from '../../styles/BasicButton';
import { styled } from 'styled-components';
import Like from "../../assets/icon/like.png";
import Time from "../../assets/icon/time.png";
import Layer from "../../assets/icon/layer_6.png";
import Siren from "../../assets/icon/siren.png";
import Group from "../../assets/icon/group.png";
import { ValueToEnum } from '../../utils/EnumCategory';

const AucInfoDetail = ({ findedData }: any) => {

    return (
        <InfoContainer>
            <InfoTitle>
                {findedData.title}
            </InfoTitle>
            <UserNameContainer
                style={{ paddingTop: "16px", position: "relative" }}
            >
                <TextWrapper>
                    <ColorText color="#39373A">사용자김핍포</ColorText>
                    <SmallBox src={Layer} style={{ cursor: "pointer" }} />
                </TextWrapper>
            </UserNameContainer>
            <TextContainer>
                <TextLine>
                    <ColorText color="#717171">카테고리</ColorText>
                    <ColorText color="#222020">{ValueToEnum(findedData.category)}</ColorText>
                </TextLine>
                <TextLine>
                    <ColorText color="#717171">상품상태</ColorText>
                    <ColorText color="#222020">{findedData.goodsCondition}</ColorText>
                </TextLine>
                <TextLine>
                    <ColorText color="#717171">거래지역</ColorText>
                    <ColorText color="#222020">{findedData.location}</ColorText>
                </TextLine>
                <TextLine>
                    <ColorText color="#717171">거래방법</ColorText>
                    <ColorText color="#222020">{findedData.tradeType}</ColorText>
                </TextLine>
                <TextLine>
                    <ColorText color="#717171">상품태그</ColorText>
                    <ColorText color="#222020">준비중입니다.</ColorText>
                </TextLine>
            </TextContainer>
            <ColorText color="#717171">
                *상대방이 교환신청을 수락하여 채팅이 가능해요!
            </ColorText>
        </InfoContainer>
    );
};

const InfoContainer = styled.div`
      width: 100%;
      @media screen and (max-width: 834px) {
        display: flex;
        flex-direction: column;
      }
`;

const InfoTitle = styled.div`
      font-family: "Pretendard";
      font-size: 32px;
      font-weight: 800;
      line-height: 150%;
      padding: 0px 0px 10px 0px;
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

const TextWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
`;

const SmallBox = styled.img`
      width: 24px;
      height: 24px;
      object-fit: contain;
`;

const TextContainer = styled.div`
      display: flex;
      flex-direction: column;
      padding: 24px 0px 40px 0px;
      gap: 10px;
`;

const TextLine = styled.div`
      display: flex;
      width: 100%;
      gap: 40px;
`;

export default AucInfoDetail;