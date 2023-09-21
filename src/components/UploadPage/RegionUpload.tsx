import React, { useState } from 'react'
import { styled } from 'styled-components'
import { StBasicButton } from '../../styles/BasicButton';

const RegionUpload = ({ locationData } : any) => {

  return (
    <LineContainer>
        <RequiredText>주거래지역</RequiredText>
          <Wrapper style={{gap: "39px"}}>
            <Text>{locationData}</Text>
          </Wrapper>
    </LineContainer>
  )
};

const LineContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 30px 0px 30px 0px;
    border-bottom: 2px dotted #EAEAEA;
`;

const RequiredText = styled.div`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    min-width: 191px;
    color: #222020;

    @media screen and (max-width: 375px) {
      min-width: 116px;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 39px;

    @media screen and (max-width: 843px) {
        display: grid;
    }
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

export default RegionUpload;