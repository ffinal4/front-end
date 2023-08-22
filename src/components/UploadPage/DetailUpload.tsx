import React, { useCallback, useState } from 'react'
import { styled } from 'styled-components'

const DetailUpload = ({ uploadData, setUploadData } : any) => {

    const [detailInfo, setDetailInfo] = useState({
        content: "",
    });
    const { content } = detailInfo;

    const memoizedCallback = useCallback((event : React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = event?.target;
        setDetailInfo({
            ...detailInfo,
            [name]: value
        });
    }, [detailInfo]);

    const onBlurTextAreaHandler = () => {
        setUploadData({...uploadData, data: {...uploadData.data, content: content}});
    };

  return (
    <LineContainer>
        <RequiredText>상세설명</RequiredText>
        <Wrapper>
          <InputContainer>
            <DesciptionTextarea
                typeof='text'
                maxLength={2000}
                name='content'
                value={content}
                placeholder='구입 연도, 브랜드, 사용감, 하자 유무 등 교환을 원하는 사람들에게 필요한 정보를 꼭 포함해주세요! (최소 10자 이상)'
                onChange={(event) => memoizedCallback(event)}
                onBlur={onBlurTextAreaHandler}
            />
          </InputContainer>
          <TextCount color={(content.length >= 2000) ? "red" : "#000"}>{content.length}/2000</TextCount>
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
    display: grid;
    align-items: center;
`;

const InputContainer = styled.div`
    width: 100%;
    height: 199px;
    border: 1px solid #ADADAD;
    border-radius: 5px;
    padding: 20px;
`;

const DesciptionTextarea = styled.textarea`
    width: 100%;
    height: 100%;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    border: none;
    outline: none;
`;

const TextCount = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    margin: 10px 0px 0px 0px;
`;

export default DetailUpload;