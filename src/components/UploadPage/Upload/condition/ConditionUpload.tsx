import React from 'react'
import * as S from '../../style/style'

const ConditionUpload = () => {
  return (
    <S.LineContainer>
        <S.RequiredText>물건상태</S.RequiredText>
        <S.Wrapper style={{gap: "16px"}}>
            <S.CheckBtn>새상품</S.CheckBtn>
            <S.CheckBtn>중고</S.CheckBtn>
            <S.CheckBtn>하자있음</S.CheckBtn>
        </S.Wrapper>
    </S.LineContainer>
  )
};

export default ConditionUpload;