import React from 'react'
import { styled } from 'styled-components'

const CategoryUpload = () => {
  return (
    <LineContainer>
        <RequiredText>카테고리</RequiredText>
        <SelectBar>
            <Text>카테고리 선택</Text>
            <ChoiceBox></ChoiceBox>
        </SelectBar>
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

const SelectBar = styled.div`
    display: inline-flex;
    height: 44px;
    padding: 0px 20px;
    border-bottom: 1px solid;
    justify-content: center;
    align-items: center;
    gap: 122px;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

const ChoiceBox = styled.div`
    width: 24px;
    height: 24px;
    background-color: #D9D9D9;
    cursor: pointer;
`;

export default CategoryUpload;