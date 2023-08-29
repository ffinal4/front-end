import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import AucUploadCard from './AucUploadCard';
import AucUploadDetail from './AucUploadDetail';
import Up from '../../assets/icon/uparrow.png'
import Down from '../../assets/icon/downarrow.png'

const ProductChoice = ({ setMyPocketGoods, myPocketGoods, data, failed } : any) => {

    const myPocketData = data.data.info;
    const [checkBox, setCheckBox] = useState<number | null>(null);
    const [findedData, setFindedData] = useState<any>();
    const [seeInfo, setSeeInfo] = useState<boolean>(false);

    useEffect(() => {
        setFindedData(myPocketData.find((item : any) => item.goodsId === checkBox));
    }, [checkBox])

    const onClickSeeHandler = () => {
        setFindedData(myPocketData.find((item : any) => item.goodsId === checkBox));
        setSeeInfo(!seeInfo);
    };

    // console.log(findedData, "findedData");

  return (
    <div>
        <UploadContainer>
            <RequiredText
                style={{color: `${(failed && myPocketGoods.goodsId === "") && "#DF3737"}`}}
            >경매품 선택*</RequiredText>
            <MyPocketWrapper>
                <MyPocketContainer>
                    {myPocketData.map((item : any) => {
                        return (
                        <NotRatingProductWrapper>
                            <AucUploadCard
                                key={item.goodsId}
                                item={item}
                                checkBox={checkBox}
                                setCheckBox={setCheckBox}
                                setMyPocketGoods={setMyPocketGoods}
                                myPocketGoods={myPocketGoods}
                            />
                            {(item.ratingCheck === false
                                || item.sellerPrice === null)
                                && <NotRatingProduct />}        
                        </NotRatingProductWrapper>
                        )
                    })}
                </MyPocketContainer> 
                {(failed && myPocketGoods.goodsId === "")
                && <FailedText>* 경매에 등록할 물건을 골라주세요.</FailedText>}
            </MyPocketWrapper>
        </UploadContainer>
        <UploadContainer style={{display: "grid"}}>
            <SeeButtonWrapper>
                <RequiredText>물건 정보</RequiredText>
                {((seeInfo && findedData)
                    ? <LineWrapper onClick={onClickSeeHandler}>
                        물건 정보 접기
                        <ChoiceBox src={Up} />
                    </LineWrapper>
                    : <LineWrapper onClick={onClickSeeHandler}>
                        물건 정보 보기
                        <ChoiceBox src={Down} />
                    </LineWrapper>
                )}
            </SeeButtonWrapper>
            <InfoWrapper>
            {(seeInfo && findedData) && <AucUploadDetail findedData={findedData} />}
            </InfoWrapper>
        </UploadContainer>
    </div>
  )
};

const UploadContainer = styled.div`
    width: 100%;
    padding: 30px 0px;
    display: flex;
    border-bottom: 2px solid #EAEAEA;

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #39373A;
        border-radius: 5px;
        
        &:hover {
            background-color: #524f53;
        }
    }
    ::-webkit-scrollbar-track {
        background-color: #D5D4D4;
        border-radius: 5px;
    }
`;

const RequiredText = styled.div`
    width: 192px;
    font-family: "Pretendard";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

const MyPocketWrapper = styled.div`
    width: 100%;
    display: grid;
`;

const MyPocketContainer = styled.div`
    width: 100%;
    height: 333px;
    max-height: 600px;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    gap: 16px;
`;

const LineWrapper = styled.div`
    width: 100%;
    padding: 3px 0px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

const ChoiceBox = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
`;

const SeeButtonWrapper = styled.div`
    display: flex;
    width: 100%;
`;

const InfoWrapper = styled.div`
    width: 1136px;
`;

const FailedText = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #DF3737;
    padding: 20px 0px 0px 0px;
`;

const NotRatingProductWrapper = styled.div`
    position: relative;
`;

const NotRatingProduct = styled.div`
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    width: 272px;
    height: 333px;
    border-radius: 10px;
    background-color: #FCFCFC;
    opacity: 0.4;
`;

export default ProductChoice;