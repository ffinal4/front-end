import React from 'react'
import * as S from '../style/style'

const RegionUpload = () => {
  return (
    <S.LineContainer>
        <S.RequiredText>주거래지역</S.RequiredText>
          <S.Wrapper style={{gap: "39px"}}>
            <S.Text>경기도 00시 00구 00동</S.Text>
            <S.Button>직접입력</S.Button>
          </S.Wrapper>
    </S.LineContainer>
  )
}

export default RegionUpload;