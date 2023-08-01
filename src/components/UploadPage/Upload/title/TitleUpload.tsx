import React from 'react'
import * as S from '../style/style'

const TitleUpload = () => {
    return (
        <S.LineContainer>
            <S.RequiredText>제목</S.RequiredText>
            <S.Wrapper>
                <S.TitleInput
                    type='text'
                    placeholder='제목을 입력해주세요.'
                >
                </S.TitleInput>
                <S.Text>0/40</S.Text>
            </S.Wrapper>
        </S.LineContainer>
    )
}

export default TitleUpload