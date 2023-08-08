import React, { useState } from 'react'
import { styled } from 'styled-components'
import { StBasicButton } from '../../styles/BasicButton';

const ConditionUpload = () => {

    const [newProduct, setNewProduct] = useState(false);
    const [usedProduct, setUsedProduct] = useState(false);
    const [damaged, setDamaged] = useState(false);

    const onCheckNewCondition = () => {
        setNewProduct(!newProduct);
        setUsedProduct(false);
        setDamaged(false);
    };
    const onCheckUsedCondition = () => {
        setNewProduct(false);
        setUsedProduct(!usedProduct);
        setDamaged(false);
    };
    const onCheckDamagedCondition = () => {
        setNewProduct(false);
        setUsedProduct(false);
        setDamaged(!damaged);
    };

  return (
    <LineContainer>
        <RequiredText>물건상태</RequiredText>
        <AllWrapper>
            <Wrapper>
                <StBasicButton
                    buttonColor={(newProduct) ? "#d6d6d6" : "white"}
                    onClick={onCheckNewCondition}
                >상
                </StBasicButton>
                <StBasicButton
                    buttonColor={(usedProduct) ? "#d6d6d6" : "white"}
                    onClick={onCheckUsedCondition}
                >중
                </StBasicButton>
                <StBasicButton
                    buttonColor={(damaged) ? "#d6d6d6" : "white"}
                    onClick={onCheckDamagedCondition}
                >하
                </StBasicButton>
            </Wrapper>
            <PriceWrapper>
                <PriceInput
                    type='text'
                    placeholder='현재 물건의 가치를 돈으로 환산했을 때 어느 정도 가격인지 입력해주세요. ex) 30000'
                />
                <Text>원</Text>
            </PriceWrapper>
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
    gap: 40px;
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
`;

const PriceInput = styled.input`
    width: 100%;
    height: 44px;
    padding: 0px 20px 0px 20px;
    border: 1px solid #000;
`;

const Text = styled.div`
    padding: 0px 264px 0px 0px;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

export default ConditionUpload;