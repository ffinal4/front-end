import React from 'react'
import * as S from '../style/style'

const CategoryUpload = () => {
  return (
    <S.LineContainer>
        <S.RequiredText>카테고리</S.RequiredText>
        <S.SelectBar>
            <S.Text>카테고리 선택</S.Text>
            <S.ChoiceBox></S.ChoiceBox>
        </S.SelectBar>
    </S.LineContainer>
  )
};

export default CategoryUpload;