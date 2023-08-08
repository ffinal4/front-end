import React from 'react'
import { styled } from 'styled-components'

const TagUpload = () => {
  return (
    <LastLineContainer>
        <RequiredText>연관태그</RequiredText>
        <Wrapper style={{display: "grid"}}>
                <TagInput
                    placeholder='태그를 입력해주세요.'
                />
                <Text>- 태그는 띄어쓰기로 구분되어 최대 9자까지 입력할 수 있습니다.</Text>
                <Text>- 태그는 검색의 부가정보로 사용되지만, 검색 결과 노출을 보장하지는 않습니다.</Text>
                <Text>- 검색 광고는 태그정보를 기준으로 노출됩니다.</Text>
                <Text>- 상품과 직접 관련이 없는 다른 상품명, 브랜드, 스팸성 키워드 등을 입력하면 노출이 중단되거나 상품이 삭제될 수 있습니다.</Text>
        </Wrapper>
    </LastLineContainer>
  )
}

const LastLineContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 30px 0px 60px 0px;
    border-bottom: 4px solid;
`;

const RequiredText = styled.div`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    min-width: 191px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TagInput = styled.input`
    display: inline-flex;
    width: 100%;
    height: 44px;
    padding: 0px 0px 0px 20px;
    margin: 0px 0px 15px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid;
`;

const Text = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #808080;
`;

export default TagUpload