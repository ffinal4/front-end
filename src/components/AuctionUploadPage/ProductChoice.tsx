import React from 'react'
import { styled } from 'styled-components'

const ProductChoice = () => {
  return (
    <div>
        <UploadContainer>
            <RequiredText>경매품 선택</RequiredText>
        </UploadContainer>
        <UploadContainer>
            <RequiredText>물건 정보</RequiredText>
            <LineWrapper>
                물건 정보 보기
                <ChoiceBox />
            </LineWrapper>
        </UploadContainer>
    </div>
  )
};

const UploadContainer = styled.div`
    width: 100%;
    padding: 30px 0px;
    display: flex;
    border-bottom: 2px solid #EAEAEA;
`;

const RequiredText = styled.div`
    width: 192px;
    font-family: "Pretendard";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

const MyPoketContainer = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
`;

const LineWrapper = styled.div`
    width: 100%;
    padding: 3px 0px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const ChoiceBox = styled.div`
    width: 24px;
    height: 24px;
    background-color: #D9D9D9;
    cursor: pointer;
`;

export default ProductChoice;