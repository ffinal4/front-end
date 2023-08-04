import React, { ChangeEvent, useState } from 'react'
import { styled } from 'styled-components'

const ImageUpload = () => {

    const [file, setFile] = useState<string[]>([]);

    const onChangeFileHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        let imageUrlLists: string[] = [...file];

        if (fileList && fileList.length > 0) {
            for (let i = 0; i < fileList.length; i++) {
                const fileUrl = URL.createObjectURL(fileList[i]);
                imageUrlLists.push(fileUrl);
                // console.log(fileList);
                // console.log(imageUrlLists);
            };
        };
        setFile(imageUrlLists.slice(0,3));
        // console.log("cut", imageUrlLists.slice(0,3), "no", imageUrlLists)
    };

  return (
    <LineContainer>
        <RequiredText>상품이미지</RequiredText>
        <ContentContainer>
            {(file.length > 0)
            ? <ImageContainer>
                {(file[0])
                ? <ImageThumbnailContainer style={{border: "6px solid #6B6B6B"}}>
                        <FirstImage>대표이미지</FirstImage>
                        <ImageThumbnail src={file[0]} alt=''></ImageThumbnail>
                </ImageThumbnailContainer>
                : <div>
                    <InputLabel htmlFor='files'>
                        <InputStyleWrapper>
                            <InputStyleBox /><Text style={{ color: "#717171" }}>이미지추가</Text>
                        </InputStyleWrapper>
                    </InputLabel>
                    <UploadInputBox
                        type='file'
                        id='files'
                        multiple
                        onChange={onChangeFileHandler}
                    />
                </div>}
                {(file[1])
                    ? <ImageThumbnailContainer>
                        <ImageThumbnail src={file[1]} alt=''></ImageThumbnail>
                    </ImageThumbnailContainer>
                : <div>
                    <InputLabel htmlFor='files'>
                        <InputStyleWrapper>
                            <InputStyleBox /><Text style={{ color: "#717171" }}>이미지추가</Text>
                        </InputStyleWrapper>
                    </InputLabel>
                    <UploadInputBox
                        type='file'
                        id='files'
                        multiple
                        onChange={onChangeFileHandler}
                    />
                </div>}
                {(file[2])
                    ? <ImageThumbnailContainer>
                        <ImageThumbnail src={file[2]} alt=''></ImageThumbnail>
                    </ImageThumbnailContainer>
                : <div>
                    <InputLabel htmlFor='files'>
                        <InputStyleWrapper>
                            <InputStyleBox /><Text style={{ color: "#717171" }}>이미지추가</Text>
                        </InputStyleWrapper>
                    </InputLabel>
                    <UploadInputBox
                        type='file'
                        id='files'
                        multiple
                        onChange={onChangeFileHandler}
                    />
                </div>}
            </ImageContainer>
            : <ImageContainer>
                <InputLabel htmlFor='files'>
                    <InputStyleWrapper>
                        <InputStyleBox /><Text style={{ color: "#717171" }}>이미지등록</Text>
                    </InputStyleWrapper>
                </InputLabel>
                <UploadInputBox
                    type='file'
                    id='files'
                    multiple
                    onChange={onChangeFileHandler}
                />
                <InputLabel htmlFor='files'>
                    <InputStyleWrapper>
                        <InputStyleBox /><Text style={{ color: "#717171" }}>이미지등록</Text>
                    </InputStyleWrapper>
                </InputLabel>
                <UploadInputBox
                    type='file'
                    id='files'
                    multiple
                    onChange={onChangeFileHandler}
                />
                <InputLabel htmlFor='files'>
                    <InputStyleWrapper>
                        <InputStyleBox /><Text style={{ color: "#717171" }}>이미지등록</Text>
                    </InputStyleWrapper>
                </InputLabel>
                <UploadInputBox
                    type='file'
                    id='files'
                    multiple
                    onChange={onChangeFileHandler}
                />
                </ImageContainer>}
            <TextWrapper>
                <Text>* 상품 이미지는 640X640에 최적화되어 있습니다.</Text>
                <Text>- 이미지는 상품 등록 시 정사각형으로 잘려서 등록됩니다.</Text>
                <Text>- 큰 이미지일 경우 이미지가 깨지는 경우가 발생할 수 있습니다.</Text>
                <Text>- 최대 지원 사이즈인 640X640으로 리사이즈 해서 올려주세요.(개당 이미지 최대 10M)</Text>
            </TextWrapper>
        </ContentContainer>
    </LineContainer>
  )
}

const LineContainer = styled.div`
    display: flex;
    padding: 30px 0px 30px 0px;
    border-bottom: 2px dotted #EAEAEA;
`;

const ContentContainer = styled.div`
    display: grid;
`;

const RequiredText = styled.div`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    width: 191px;
`;

const ImageContainer = styled.div`
    width: 100%;
    gap: 16px;
    display: flex;
`;

const ImageThumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`;

const FirstImage = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    display: inline-flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    background-color: #6B6B6B;
    color: #fff;
`;

const ImageThumbnailContainer = styled.div`
    width: 176px;
    height: 176px;
    overflow: hidden;
    position: relative;
    margin: 0px 16px 0px 0px;
`;

const InputLabel = styled.label`
    width: 176px;
    height: 176px;
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
    width: 48px;
    height: 48px;
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
    margin: 22px 0px 0px 0px;
`;

export default ImageUpload;