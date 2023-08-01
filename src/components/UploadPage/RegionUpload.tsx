import React from 'react'
import { styled } from 'styled-components'
import { StBasicButton } from '../../styles/BasicButton';

const RegionUpload = () => {
  return (
    <LineContainer>
        <RequiredText>주거래지역</RequiredText>
          <Wrapper style={{gap: "39px"}}>
            <Text>경기도 00시 00구 00동</Text>
            <StBasicButton buttonColor="#D9D9D9">직접입력</StBasicButton>
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
    gap: 39px;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

export default RegionUpload;