import React from 'react'
import * as S from '../../style/style'

const TagUpload = () => {
  return (
    <S.LastLineContainer>
        <S.RequiredText>연관태그</S.RequiredText>
        <S.Wrapper style={{display: "grid"}}>
                <S.TagInput
                    placeholder='태그를 입력해주세요.'
                />
                <S.Text style={{color: "#808080"}}>- 태그는 띄어쓰기로 구분되어 최대 9자까지 입력할 수 있습니다.</S.Text>
                <S.Text style={{color: "#808080"}}>- 태그는 검색의 부가정보로 사용되지만, 검색 결과 노출을 보장하지는 않습니다.</S.Text>
                <S.Text style={{color: "#808080"}}>- 검색 광고는 태그정보를 기준으로 노출됩니다.</S.Text>
                <S.Text style={{color: "#808080"}}>- 상품과 직접 관련이 없는 다른 상품명, 브랜드, 스팸성 키워드 등을 입력하면 노출이 중단되거나 상품이 삭제될 수 있습니다.</S.Text>
        </S.Wrapper>
    </S.LastLineContainer>
  )
}

export default TagUpload