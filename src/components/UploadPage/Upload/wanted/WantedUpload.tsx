import React from 'react'
import * as S from '../style/style'

const WantedUpload = () => {
  return (
    <S.LastLineContainer>
        <S.RequiredText>이걸원해요</S.RequiredText>
        <S.LastWrapper>
            <S.SelectBar style={{marginBottom: "30px"}}>
                <S.Text>카테고리 선택</S.Text>
                <S.ChoiceBox></S.ChoiceBox>
            </S.SelectBar>
            <S.InputContainer>
            <S.DesciptionTextarea
                typeof='text'
                placeholder='구입 연도, 브랜드, 사용감, 하자 유무 등 교환을 원하는 사람들에게 필요한 정보를 꼭 포함해주세요! (최소 10자 이상)' />
            </S.InputContainer>
            <S.TextCount style={{marginBottom: "30px"}}>0/2000</S.TextCount>
            <S.TagInput
                placeholder='태그를 입력해주세요.'
            />
        </S.LastWrapper>
    </S.LastLineContainer>
  )
};

export default WantedUpload;