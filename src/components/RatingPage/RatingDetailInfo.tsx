import React from 'react'
import { styled } from 'styled-components';

const RatingDetailInfo = ({ data } : any) => {

    const contentData = data?.data.info.content;
    const inputData = contentData.split("\n");

  return (
    <InfoContainer>
        <TitleContainer>
            {data.data.info.title}
        </TitleContainer>
        <ContentContainer>
            <ContentText>
                {inputData?.map((item : string) => {
                        return (
                            (item === inputData[inputData.length - 1])
                                ? <div>{item}</div>
                                : <div>{item}<br /></div>
                        )
                    })}
            </ContentText>
        </ContentContainer>
    </InfoContainer>
  )
};

const InfoContainer = styled.div`
    width: 100%;
    padding: 20px 0px 0px 0px;
    
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #39373A;
        border-radius: 5px;
        
        &:hover {
            background-color: #524f53;
        }
    }
    ::-webkit-scrollbar-track {
        background-color: #D5D4D4;
        border-radius: 5px;
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    padding: 0px 0px 30px 0px;
`;

const ContentContainer = styled.div`
    width: 100%;
    height: 240px;
    display: flex;
    flex-wrap: wrap;
    
`;

const ContentText = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #39373A;
    overflow-y: auto;
    width: 100%;
    height: 408px;
    word-break: break-word;
    display: -webkit-box-vertical;
`;

export default RatingDetailInfo;