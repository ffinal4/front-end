import React, { useState, useCallback } from 'react'
import { styled } from 'styled-components'

const TitleUpload = ({ setUploadData, uploadData } : any) => {

    const [titleInput, setTitleInput] = useState({
        title: ""
    });
    const { title } = titleInput;

    const memoizedCallback = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event?.target;
        setTitleInput({
            ...titleInput,
            [name]: value
        });
        setUploadData({...uploadData, data: {...uploadData.data, title: title}});
    }, [titleInput]);

    return (
        <LineContainer>
            <RequiredText>제목*</RequiredText>
            <Wrapper>
                <TitleInput
                    type='text'
                    maxLength={40}
                    name='title'
                    value={titleInput.title}
                    placeholder='제목을 입력해주세요.'
                    onChange={(event) => memoizedCallback(event)}
                >
                </TitleInput>
                <Text color={(titleInput.title.length >= 40) ? "red" : "#000"}>{titleInput.title.length}/40</Text>
            </Wrapper>
        </LineContainer>
    )
};

const LineContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 30px 0px 30px 0px;
    border-bottom: 2px solid #EAEAEA;
`;

const RequiredText = styled.div`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    min-width: 191px;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 843px) {
        display: grid;
    }
`;

const TitleInput = styled.input`
    display: inline-flex;
    width: 100%;
    height: 44px;
    padding: 0px 20px 0px 20px;
    margin: 0px 16px 0px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid #ADADAD;
    border-radius: 5px;
    background-color: #FCFCFC;
`;

const Text = styled.div<{ color: string }>`
    width: 272px;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: ${(props) => props.color};

    @media screen and (max-width: 843px) {
        display: flex;
        justify-content: end;
        width: 100%;
    }
`;

export default TitleUpload;