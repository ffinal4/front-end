import React from 'react'
import { styled } from 'styled-components'

const TitleUpload = () => {
    return (
        <LineContainer>
            <RequiredText>제목</RequiredText>
            <Wrapper>
                <TitleInput
                    type='text'
                    placeholder='제목을 입력해주세요.'
                >
                </TitleInput>
                <Text>0/40</Text>
            </Wrapper>
        </LineContainer>
    )
};

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

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TitleInput = styled.input`
    display: inline-flex;
    height: 44px;
    padding: 0px 505px 0px 20px;
    margin: 0px 16px 0px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

export default TitleUpload;