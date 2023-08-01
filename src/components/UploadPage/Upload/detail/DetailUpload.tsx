import React from 'react'
import * as S from '../../style/style'

const DetailUpload = () => {
  return (
    <S.LineContainer>
        <S.RequiredText>상세설명</S.RequiredText>
        <S.Wrapper style={{display: "grid"}}>
          <S.InputContainer>
            <S.DesciptionTextarea
                typeof='text'
                placeholder='구입 연도, 브랜드, 사용감, 하자 유무 등 교환을 원하는 사람들에게 필요한 정보를 꼭 포함해주세요! (최소 10자 이상)' />
          </S.InputContainer>
          <S.TextCount>0/2000</S.TextCount>
        </S.Wrapper>
    </S.LineContainer>
  )
};

export default DetailUpload;