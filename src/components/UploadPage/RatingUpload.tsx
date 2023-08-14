import React, { useState, useCallback } from 'react'
import { styled } from 'styled-components';

const RatingUpload = ({ setUploadData, uploadData } : any) => {

    const [ratingCheck, setRatingCheck] = useState<{rating : string}>({
        rating: "NO"
    });
    const [conditionProduct, setConditionProduct] = useState({
        price: "",
    });
    
    const { rating } = ratingCheck;
    const { price } = conditionProduct;

    const onCheckYesRatingHandler = () => {
        setRatingCheck({...ratingCheck, rating: "YES"});
        console.log("YES", uploadData);
    };
    const onCheckNoRatingHandler = () => {
        setRatingCheck({...ratingCheck, rating: "NO"});
        console.log("NO", uploadData);
    };

    const memoizedCallback = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event?.target;
        const numValue = value.replace(/[^0-9]/g, '');
        setConditionProduct({
            ...conditionProduct,
            [name]: numValue
        })
        setUploadData({...uploadData, data: {...uploadData.data, sellerPrice: price}});
    }, [conditionProduct]);

    const numericValue = parseFloat(price);
    const formatted  = numericValue.toLocaleString();

  return (
    <LineContainer>
        <RequiredText>레이팅 여부</RequiredText>
        <AllWrapper>
            <RatingCheckWrapper>
                <CheckWrapper>
                    <EmptyCircle 
                        style={(rating === "YES") ? {border: "2px solid #FFCA64"} : {border: "2px solid #D5D4D4"}}
                        onClick={onCheckYesRatingHandler}
                    >
                        {(rating === "YES") && <FullCircle style={{backgroundColor: "#FFCA64"}}/>}
                    </EmptyCircle>
                    YES
                </CheckWrapper>
                <CheckWrapper>
                    <EmptyCircle onClick={onCheckNoRatingHandler}>
                        {(rating === "NO") && <FullCircle />}
                    </EmptyCircle>
                    NO
                </CheckWrapper>
            </RatingCheckWrapper>
            <TextWrapper>
                <Text style={{color: "#808080"}}>- 레이팅 값이 없는 물건은 물물교환에만 사용될 수 있으며 경매에 참가할 수 없습니다.</Text>
                <Text style={{color: "#808080"}}>- 레이팅이 시작되면 다른 유저들이 내가 생각하는 물건의 가치에 대해 평가하게 됩니다.</Text>
                <Text style={{color: "#808080"}}>- 10명이 레이팅을 완료하게되면 내가 생각하는 물건의 가치와 유저들이 평가한 가치의 평균가가 물건의 점수로 레이팅됩니다.</Text>
            </TextWrapper>
            {
            (rating === "YES")
            && <Wrapper>
                <PriceWrapper>
                    <PriceInput
                        type='text'
                        name='price'
                        value={(price) ? formatted : price}
                        placeholder='100,000'
                        onChange={(event) => memoizedCallback(event)}
                    />
                    <Text>원</Text>
                </PriceWrapper>
                <Text style={{color: "#808080"}}>*현재 물건의 가치를 돈으로 환산했을 때 어느 정도 가격인지 입력해주세요. ex) 30000</Text>
            </Wrapper>
            }
        </AllWrapper>
    </LineContainer>
  )
};

const LineContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 39px 0px 6% 0px;
    border-bottom: 4px solid;
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

const RatingCheckWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 40px;
`;

const CheckWrapper = styled.div`
    display: flex;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    gap: 16px;
`;

const EmptyCircle = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 100%;
    border: 2px solid #D5D4D4;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const FullCircle = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: #ADADAD;
`;

const Wrapper = styled.div`
    width: 100%;
    padding: 30px 0px 0px 0px;
`;

const PriceWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0px 0px 20px 0px;
`;

const PriceInput = styled.input`
    width: 176px;
    height: 44px;
    padding: 0px 00px 0px 20px;
    border: 1px solid #ADADAD;
    border-radius: 5px;
    background-color: #FCFCFC;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

const TextWrapper = styled.div`
    width: 100%;
    padding: 30px 0px 0px 0px;
`;

export default RatingUpload;