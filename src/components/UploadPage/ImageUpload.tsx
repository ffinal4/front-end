import React from 'react'
import { styled } from 'styled-components'

const ImageUpload = () => {
  return (
    <LineContainer>
        <RequiredText>상품이미지</RequiredText>
        <InputLabel htmlFor='files'>
            <InputStyleWrapper>
                <InputStyleBox /><Text style={{ color: "#717171" }}>이미지등록</Text>
            </InputStyleWrapper>
        </InputLabel>
        <UploadInputBox type='file' id='files'></UploadInputBox>
        <TextWrapper>
            <Text>* 상품 이미지는 640X640에 최적화되어 있습니다.</Text>
            <Text>- 이미지는 상품 등록 시 정사각형으로 잘려서 등록됩니다.</Text>
            <Text>- 큰 이미지일 경우 이미지가 깨지는 경우가 발생할 수 있습니다.</Text>
            <Text>- 최대 지원 사이즈인 640X640으로 리사이즈 해서 올려주세요.(개당 이미지 최대 10M)</Text>
        </TextWrapper>
    </LineContainer>
  )
}

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

const InputLabel = styled.label`
    width: 273px;
    height: 273px;
    background-color: #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 16px 0px 0px;
    cursor: pointer;
`;

const InputStyleWrapper = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
`;

const InputStyleBox = styled.div`
    width: 64px;
    height: 64px;
    margin: 0px auto 13px auto;
    background-color: #ACACAC;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #717171;
`;

const UploadInputBox = styled.input`
    display: none;
`;

const TextWrapper = styled.div`
    align-items: end;
    margin: 177px 0px 0px 0px;
`;

export default ImageUpload;