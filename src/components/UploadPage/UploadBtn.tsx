import React from 'react'
import { styled } from 'styled-components'
// import { StBasicButton } from '../../styles/BasicButton';

const UploadBtn = () => {
  return (
    <BtnWrapper>
        <Button>
            주머니에 추가
        </Button>
    </BtnWrapper>
  )
};

const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0px 0px 0px;
`;

const Button = styled.div`
    display: flex;
    font-family: "Pretendard";
    font-size: 15px;
    font-weight: 400;
    line-height: 150%;
    width: 177px;
    padding: 10px 39px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #D9D9D9;
    border: 1px solid #000;
    cursor: pointer;
`;

export default UploadBtn;