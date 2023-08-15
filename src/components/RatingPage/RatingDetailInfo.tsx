import React from 'react'
import { styled } from 'styled-components';

const RatingDetailInfo = () => {
  return (
    <InfoContainer>
        <TitleContainer>
            이케아 LISABO 리사보 의자
        </TitleContainer>
        <ContentContainer>
            <ContentText>
                밑면 패브릭:폴리에스테르 100% (100% 재활용)프레임:스틸, 에폭시/폴리에스테르 파우더코팅시트:적층 무늬목, 폴리우레탄 폼 35kg/cu.m., 폴리프로필렌 부직포등받이:폴리프로필렌 플라스틱, 폴리에스테르충전재 제품관리 중성세제를 희석한 물로 닦아주세요. 깨끗한 천으로 물기를 닦아주세요. 안전한 사용을 위해 필요시 나사를 다시 조여주세요. 커버 세탁하지 마세요. 표백하지 마세요. 건조기에 넣지 마세요. 다림질하지 마세요. 드라이클리닝하지 마세요. 진공청소기를 사용하세요. 가벼운 얼룩은 섬유세제를 이용하거나 물 또는 중성세제에 적신 스펀지로 지워주세요.
            </ContentText>
        </ContentContainer>
    </InfoContainer>
  )
};

const InfoContainer = styled.div`
    width: 100%;
    padding: 20px 0px 0px 0px;
`;

const TitleContainer = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    padding: 0px 0px 30px 0px;
`;

const ContentContainer = styled.div`
    width: 100%;
    height: 240px;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
`;

const ContentText = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #39373A;
    width: 100%;
    height: 408px;
`;

export default RatingDetailInfo;