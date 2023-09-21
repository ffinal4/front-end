import React, { useState } from 'react'
import { styled } from 'styled-components';
import AucDetail from './AucDetail';
import { ValueToEnum } from '../../utils/EnumCategory';

const AucUploadDetail = ({ findedData } : any) => {

    const contentData = findedData?.content;
    const wantedData = findedData?.wantedGoods.content;
    const inputData1 = contentData.split("\n");
    const inputData2 = wantedData.split("\n");

    const [detailTap, setDetailTap] = useState({
        giveTap: true,
        wantTap: false,
    });
    const { giveTap, wantTap } = detailTap;

    const onClickGiveHandler = () => {
        setDetailTap({
            giveTap: true,
            wantTap: false, 
        });
    };

    const onClickWantHandler = () => {
        setDetailTap({
            giveTap: false,
            wantTap: true,
        });
    };

  return (
    <PageLayout>
        <PageContainer>
            <AucDetail findedData={findedData} />
            <InfoContainer>
            {
            (giveTap === true && wantTap === false)
            && <LayoutContainer>
                    <TapContainer>
                        <TapClickButton>드려요</TapClickButton>
                        <TapDefaultButton onClick={onClickWantHandler}>받아요</TapDefaultButton>
                    </TapContainer>
                    <InfoNextContainer>
                        <InfoTextContainer>
                            <InfoTextTitle>상품정보</InfoTextTitle>
                            <InfoTextContent style={{paddingTop: "40px"}}>
                                {inputData1?.map((item : string) => {
                                    return (
                                        (item === inputData1[inputData1.length - 1])
                                            ? <div>{item}</div>
                                            : <div>{item}<br /></div>
                                    )
                                })}
                            </InfoTextContent>
                        </InfoTextContainer>
                    </InfoNextContainer>
                </LayoutContainer> 
            }
            {
            (giveTap === false && wantTap === true)
            && <LayoutContainer>
                    <TapContainer>
                        <TapDefaultButton onClick={onClickGiveHandler}>드려요</TapDefaultButton>
                        <TapClickButton>받아요</TapClickButton>
                    </TapContainer>
                    <InfoNextContainer>
                        <InfoTextContainer>
                            <TextTitleContainer>
                                <InfoTextTitle>{findedData.wantedGoods.title}</InfoTextTitle>
                                <InfoTextContent style={{color: "#A4A4A4"}}>{ValueToEnum(findedData.wantedGoods.category)}</InfoTextContent>
                            </TextTitleContainer>
                            <InfoTextContent>
                                {inputData2?.map((item : string) => {
                                    return (
                                        (item === inputData2[inputData2.length - 1])
                                            ? <div>{item}</div>
                                            : <div>{item}<br /></div>
                                    )
                                })}
                            </InfoTextContent>
                        </InfoTextContainer>
                    </InfoNextContainer>
                </LayoutContainer> 
            }
            </InfoContainer>
        </PageContainer>
    </PageLayout>
  )
}

const PageLayout = styled.div`
    width: 100%;
    height: 100%;
`;

const PageContainer = styled.div`
    width: 100%;

    @media screen and (max-width: 1136px) {
        padding: 0px 20px 0px 20px;        
    }
`;

const TapContainer = styled.div`
    display: flex;
    gap: 0px;
    position: absolute;
`;

const TapClickButton = styled.div`
    display: flex;
    padding: 10px auto;
    font-family: "Pretendard";
    font-weight: 700;
    justify-content: center;
    align-items: center;
    width: 177px;
    height: 44px;
    border: 2px solid #000;
    border-bottom: 4px solid #fff;
    border-radius: 5px 5px 0px 0px;

    @media screen and (max-width: 375px) {
        width: 112px;
    }
`;

const TapDefaultButton = styled.div`
    display: flex;
    padding: 10px auto;
    font-family: "Pretendard";
    justify-content: center;
    align-items: center;
    background-color: #EFEFEF;
    width: 177px;
    height: 44px;
    border: 1px solid #000;
    border-bottom: 2px solid #000;
    border-radius: 5px 5px 0px 0px;
    cursor: pointer;

    @media screen and (max-width: 375px) {
        width: 112px;
    }
`;

const LayoutContainer = styled.div`
    display: grid;
    width: 100%;
`;

const InfoContainer = styled.div`
    width: 100%;
`;

const InfoNextContainer = styled.div`
    width: 100%;
    border-top: 2px solid #000;
    /* border-bottom: 2px solid #D9D9D9; */
    margin: 42px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
    padding: 60px 0px 100px 0px;

    @media screen and (max-width: 375px) {
        margin: 41px 0px 0px 0px;
    }
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
`;

const TextTitleContainer = styled.div`
    width: 100%;
    margin: 0px 0px 20px 0px;
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

export default AucUploadDetail;