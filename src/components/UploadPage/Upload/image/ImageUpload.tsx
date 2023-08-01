import React from 'react'
import * as S from '../../style/style'

const ImageUpload = () => {
  return (
    <S.LineContainer>
        <S.RequiredText>상품이미지</S.RequiredText>
        <S.InputLabel htmlFor='files'>
            <S.InputStyleWrapper>
                <S.InputStyleBox /><S.Text style={{ color: "#717171" }}>이미지등록</S.Text>
            </S.InputStyleWrapper>
        </S.InputLabel>
        <S.UploadInputBox type='file' id='files'></S.UploadInputBox>
        <S.TextWrapper>
            <S.Text>* 상품 이미지는 640X640에 최적화되어 있습니다.</S.Text>
            <S.Text>- 이미지는 상품 등록 시 정사각형으로 잘려서 등록됩니다.</S.Text>
            <S.Text>- 큰 이미지일 경우 이미지가 깨지는 경우가 발생할 수 있습니다.</S.Text>
            <S.Text>- 최대 지원 사이즈인 640X640으로 리사이즈 해서 올려주세요.(개당 이미지 최대 10M)</S.Text>
        </S.TextWrapper>
    </S.LineContainer>
  )
}

export default ImageUpload;