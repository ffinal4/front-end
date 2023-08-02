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
        <Wrapper>
            <StBasicButton
                buttonColor={(newProduct) ? "#d6d6d6" : "white"}
                onClick={onCheckNewCondition}
            >새상품
            </StBasicButton>
            <StBasicButton
                buttonColor={(usedProduct) ? "#d6d6d6" : "white"}
                onClick={onCheckUsedCondition}
            >중고
            </StBasicButton>
            <StBasicButton
                buttonColor={(damaged) ? "#d6d6d6" : "white"}
                onClick={onCheckDamagedCondition}
            >하자있음
            </StBasicButton>
        </Wrapper>
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

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

export default ConditionUpload;