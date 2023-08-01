import React from 'react'
import * as S from '../style/style'

const MethodUpload = () => {
  return (
    <S.LineContainer>
        <S.RequiredText>교환방법</S.RequiredText>
        <S.Wrapper style={{gap: "16px"}}>
            <S.CheckBtn>직거래</S.CheckBtn>
            <S.CheckBtn>택배</S.CheckBtn>
        </S.Wrapper>
    </S.LineContainer>
  )
};

export default MethodUpload;