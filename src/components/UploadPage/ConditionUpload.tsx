import React from 'react'
import { styled } from 'styled-components'
import { StBasicButton } from '../../../styles/BasicButton';

const ConditionUpload = () => {
  return (
    <LineContainer>
        <RequiredText>물건상태</RequiredText>
        <Wrapper>
            <StBasicButton buttonColor="white">새상품</StBasicButton>
            <StBasicButton buttonColor="white">중고</StBasicButton>
            <StBasicButton buttonColor="white">하자있음</StBasicButton>
        </Wrapper>
    </LineContainer>
  )
};

const LineContainer = styled.div`
    display: flex;
    padding: 30px 0px 30px 0px;
    border-bottom: 2px dotted #EAEAEA;
`;

const RequiredText = styled.div`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    width: 191px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

export default ConditionUpload;