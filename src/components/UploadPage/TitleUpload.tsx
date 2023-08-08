import React, { useState } from 'react'
import { styled } from 'styled-components'

const TitleUpload = () => {

    const [title, setTitle] = useState("");

    return (
        <LineContainer>
            <RequiredText>제목</RequiredText>
            <Wrapper>
                <TitleInput
                    type='text'
                    maxLength={40}
                    value={title}
                    placeholder='제목을 입력해주세요.'
                    onChange={(event) => setTitle(event.target.value)}
                >
                </TitleInput>
                <Text color={(title.length >= 40) ? "red" : "#000"}>{title.length}/40</Text>
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
    padding: 0px 20px 0px 20px;
    margin: 0px 16px 0px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid;
    width: 656px;
`;

const Text = styled.div<{ color: string }>`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: ${(props) => props.color};
`;

export default TitleUpload;