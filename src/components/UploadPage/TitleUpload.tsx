import React, { useState, useCallback } from 'react'
import { styled } from 'styled-components'

const TitleUpload = ({ setUploadData, uploadData, failedUpload } : any) => {

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
    }, [titleInput]);

    const onBlurInputHandler = () => {
        setUploadData({...uploadData, data: {...uploadData.data, title: title}});
    };

    return (
        <LineContainer>
            <RequiredText
                style={{color: `${(failedUpload && uploadData.data.title === "") ? "#DF3737" : "#222020"}`}}
            >제목*</RequiredText>
            <OutWrapper>
            <Wrapper>
                <TitleInput
                    type='text'
                    maxLength={40}
                    name='title'
                    value={titleInput.title}
                    placeholder='제목을 입력해주세요.'
                    onChange={(event) => memoizedCallback(event)}
                    onBlur={onBlurInputHandler}
                    style={{borderColor: `${(titleInput.title.length >= 40) ? "red" : "#000"}`}}
                >
                </TitleInput>
                <Text color={(titleInput.title.length >= 40) ? "red" : "#000"}>{titleInput.title.length}/40</Text>
            </Wrapper>
            {(failedUpload && uploadData.data.title === "")
                && <Text color={"#DF3737"} style={{width: "100%"}}>* 제목을 입력해주세요.</Text>
            }
            </OutWrapper>
        </LineContainer>
    )
};

const LineContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 30px 0px 30px 0px;
    border-bottom: 2px solid #EAEAEA;

    @media screen and (max-width: 500px) {
        display: grid;
        gap: 14px;
    }
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
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
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
    @media screen and (max-width: 500px) {
        width: 55px;
    }
`;

const OutWrapper = styled.div`
    display: grid;
    gap: 10px;
    width: 100%;
`;

export default TitleUpload;