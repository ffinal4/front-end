import React, { useState } from 'react'
import { styled } from 'styled-components'
import AucUploadCard from './AucUploadCard';
import AucUploadDetail from './AucUploadDetail';

const ProductChoice = ({ setMyPocketGoods, myPocketGoods, data } : any) => {

    const myPocketData = data.data.info;
    const [checkBox, setCheckBox] = useState<number | null>(null);
    const [findedData, setFindedData] = useState<any>();
    const [seeInfo, setSeeInfo] = useState<boolean>(false);
    

    const onClickSeeHandler = () => {
        setFindedData(myPocketData.find((item : any) => item.goodsId === checkBox));
        setSeeInfo(!seeInfo);
    };

    // console.log(findedData, "findedData");

  return (
    <div>
        <UploadContainer>
            <RequiredText>경매품 선택</RequiredText>
            <MyPoketContainer>
                {myPocketData.map((item : any) => {
                    return (<AucUploadCard
                        key={item.goodsId}
                        item={item}
                        checkBox={checkBox}
                        setCheckBox={setCheckBox}
                        setMyPocketGoods={setMyPocketGoods}
                        myPocketGoods={myPocketGoods}
                    />)
                })}
            </MyPoketContainer> 
        </UploadContainer>
        <UploadContainer style={{display: "grid"}}>
            <SeeButtonWrapper>
                <RequiredText>물건 정보</RequiredText>
                {((seeInfo && findedData)
                    ? <LineWrapper onClick={onClickSeeHandler}>
                        물건 정보 접기
                        <ChoiceBox />
                    </LineWrapper>
                    : <LineWrapper onClick={onClickSeeHandler}>
                        물건 정보 보기
                        <ChoiceBox />
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
`;

const RequiredText = styled.div`
    width: 192px;
    font-family: "Pretendard";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

const MyPoketContainer = styled.div`
    width: 100%;
    max-height: 600px;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    gap: 16px;

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #ffc596;
        border-radius: 5px;
        &:hover {
            background-color: #f0b280;
        }
    }
    ::-webkit-scrollbar-track {
        background-color: #fff1e3;
    }
`;

const LineWrapper = styled.div`
    width: 100%;
    padding: 3px 0px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

const ChoiceBox = styled.div`
    width: 24px;
    height: 24px;
    background-color: #D9D9D9;
`;

const SeeButtonWrapper = styled.div`
    display: flex;
    width: 100%;
`;

const InfoWrapper = styled.div`
    width: 1136px;
`;

export default ProductChoice;