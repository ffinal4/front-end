import React, { useCallback, useState } from 'react'
import { styled } from 'styled-components'
import { StBasicButton } from '../../styles/BasicButton';

interface Props {
    uploadData: object;
    setUploadData: React.Dispatch<React.SetStateAction<object>>;
};

const ConditionUpload : React.FC<Props> = ({ uploadData, setUploadData }) => {

    const [conditionProduct, setConditionProduct] = useState({
        goodsCondition: "",
        price: "",
    });
    const { goodsCondition, price } = conditionProduct;

    const onCheckNewCondition = () => {
        setConditionProduct({...conditionProduct, goodsCondition: "상"})
    };
    const onCheckUsedCondition = () => {
        setConditionProduct({...conditionProduct, goodsCondition: "중"})
    };
    const onCheckDamagedCondition = () => {
        setConditionProduct({...conditionProduct, goodsCondition: "하"})
    };

    const memoizedCallback = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event?.target;
        const numValue = value.replace(/[^0-9]/g, '');
        setConditionProduct({
            ...conditionProduct,
            [name]: numValue
    })}, [conditionProduct]);

    const numericValue = parseFloat(price);
    const formatted  = numericValue.toLocaleString();
    // console.log("wow", formatted);
    // console.log("price", price);

    const onBlurEventHandler = () => {
        setUploadData({...uploadData, goodsCondition, price});
    };

  return (
    <LineContainer>
        <RequiredText>물건상태</RequiredText>
        <AllWrapper>
            <Wrapper>
                <StBasicButton
                    buttonColor={(goodsCondition === "상") ? "#575757" : "white"}
                    style={{color: `${(goodsCondition === "상") ? "white" : "#000"}`}}
                    onClick={onCheckNewCondition}
                >상
                </StBasicButton>
                <StBasicButton
                    buttonColor={(goodsCondition === "중") ? "#575757" : "white"}
                    style={{color: `${(goodsCondition === "중") ? "white" : "#000"}`}}
                    onClick={onCheckUsedCondition}
                >중
                </StBasicButton>
                <StBasicButton
                    buttonColor={(goodsCondition === "하") ? "#575757" : "white"}
                    style={{color: `${(goodsCondition === "하") ? "white" : "#000"}`}}
                    onClick={onCheckDamagedCondition}
                >하
                </StBasicButton>
            </Wrapper>
            <PriceWrapper>
                <PriceInput
                    type='text'
                    name='price'
                    value={(price) ? formatted : price}
                    placeholder='100,000'
                    onChange={(event) => memoizedCallback(event)}
                    onBlur={onBlurEventHandler}
                />
                <Text>원</Text>
            </PriceWrapper>
            <Text style={{color: "#808080"}}>*현재 물건의 가치를 돈으로 환산했을 때 어느 정도 가격인지 입력해주세요. ex) 30000</Text>
        </AllWrapper>
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
`;

const AllWrapper = styled.div`
    width: 100%;
    display: grid;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;

    @media screen and (max-width: 843px) {
        display: grid;
    }
`;

const PriceWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 30px 0px 20px 0px;
`;

const PriceInput = styled.input`
    width: 176px;
    height: 44px;
    padding: 0px 20px 0px 20px;
    border: 1px solid #000;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

export default ConditionUpload;