import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import { StBasicButton } from '../../styles/BasicButton';
import Image from '../../assets/images/pocket.png'

const GiveInfo = ({ data } : any) => {

    const contentData = data?.data.info.goodsResponseDtoList.content;
    const inputData = contentData.split("\n");

  return (
    <InfoContainer>
        <InfoTextContainer>
            <InfoTextTitle>상품정보</InfoTextTitle>
            <InfoTextContent>
                {inputData?.map((item : string) => {
                    return (
                        (item === inputData[inputData.length - 1])
                            ? <div>{item}</div>
                            : <div>{item}<br /></div>
                    )
                })}
            </InfoTextContent>
        </InfoTextContainer>
    </InfoContainer>
  )
};

const InfoContainer = styled.div`
    width: 100%;
    border-top: 2px solid #000;
    border-bottom: 2px solid #D9D9D9;
    margin: 42px 0px 60px 0px;
    display: flex;
    justify-content: space-between;
    padding: 60px 0px 100px 0px;
`;

const InfoTextContainer = styled.div`
    width: 100%;
`;

const InfoTextTitle = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    padding: 0px 0px 40px 0px;
`;

const InfoTextContent = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    word-break: break-word;
    display: -webkit-box-vertical;
`;

export default GiveInfo;