import React from 'react'
import { styled } from 'styled-components'

const UploadBtn = () => {
  return (
    <BtnWrapper>
        <Button>
            핍포 알아보기
        </Button>
    </BtnWrapper>
  )
};

const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    display: flex;
    font-family: "Pretendard";
    font-size: 15px;
    font-weight: 400;
    line-height: 150%;
    width: 177px;
    margin: 30px 0px 0px 0px;
    padding: 10px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #D9D9D9;
    cursor: pointer;
`;

export default UploadBtn;