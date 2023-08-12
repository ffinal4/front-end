import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { StBasicButton } from '../../styles/BasicButton';

const MethodUpload = ({ uploadData, setUploadData } : any) => {

    const onCheckDirectHandler = () => {
        setUploadData({...uploadData, data: {...uploadData.data, tradeType: "직거래"}});  
    };
    const onCheckParcelHandler = () => {
        setUploadData({...uploadData, data: {...uploadData.data, tradeType: "택배"}});
    };
    const onCheckNoMatterHandler = () => {
        setUploadData({...uploadData, data: {...uploadData.data, tradeType: "상관없음"}});  
    };

  return (
    <LineContainer>
        <RequiredText>교환방법</RequiredText>
        <Wrapper>
            <StBasicButton
                buttonColor={(uploadData.data.tradeType === "직거래") ? "#575757" : "white"}
                style={{color: `${(uploadData.data.tradeType === "직거래") ? "white" : "#000"}`}}
                onClick={onCheckDirectHandler}
            >직거래
            </StBasicButton>
            <StBasicButton
                buttonColor={(uploadData.data.tradeType === "택배") ? "#575757" : "white"}
                style={{color: `${(uploadData.data.tradeType === "택배") ? "white" : "#000"}`}}
                onClick={onCheckParcelHandler}
            >택배
            </StBasicButton>
            <StBasicButton
                buttonColor={(uploadData.data.tradeType === "상관없음") ? "#575757" : "white"}
                style={{color: `${(uploadData.data.tradeType === "상관없음") ? "white" : "#000"}`}}
                onClick={onCheckNoMatterHandler}
            >상관없음
            </StBasicButton>
        </Wrapper>
    </LineContainer>
  )
};

const LineContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 30px 0px 30px 0px;
    border-bottom: 2px solid #EAEAEA;
`;

const RequiredText = styled.div`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    min-width: 191px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @media screen and (max-width: 843px) {
        display: grid;
    }
`;

export default MethodUpload;