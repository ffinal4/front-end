import React, { ChangeEvent, useState } from "react";
import { styled } from "styled-components";
import removeIcon from "../../assets/icon/trash.png";
import Camera from "../../assets/icon/camera.png";

const ImageUpload = ({ setUploadImages, uploadImages, failedUpload }: any) => {
  type FileState = {
    default: { id: number; imageUrl: string };
    second: { id: number; imageUrl: string };
    third: { id: number; imageUrl: string };
  };

  const [file, setFile] = useState<FileState>({
    default: { id: 1, imageUrl: "" },
    second: { id: 2, imageUrl: "" },
    third: { id: 3, imageUrl: "" },
  });

  const [imageUrlLists, setImageUrlLists] = useState<string[]>([]);

  const onChangeFileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      for (let i = 0; i < fileList.length; i++) {
        const blobImage = fileList[i];
        const fileUrl = URL.createObjectURL(fileList[i]);
        uploadImages.push(blobImage);
        imageUrlLists.push(fileUrl);
      }
    }
    setFile({
      ...file,
      default: { ...file.default, imageUrl: imageUrlLists[0] },
      second: { ...file.second, imageUrl: imageUrlLists[1] },
      third: { ...file.third, imageUrl: imageUrlLists[2] },
    });
  };

  const onClickChangeHandler = (id: number) => {
    const switchValues = (
      imageUrlLists: string[],
      index1: number,
      index2: number
    ) => {
      [imageUrlLists[index1], imageUrlLists[index2]] = [
        imageUrlLists[index2],
        imageUrlLists[index1],
      ];
    };
    const switchFile = (
      uploadImages: string[],
      index1: number,
      index2: number
    ) => {
      [uploadImages[index1], uploadImages[index2]] = [
        uploadImages[index2],
        uploadImages[index1],
      ];
    };

    switchFile(uploadImages, 0, id - 1);
    switchValues(imageUrlLists, 0, id - 1);
    setFile({
      ...file,
      default: { ...file.default, imageUrl: imageUrlLists[0] },
      second: { ...file.second, imageUrl: imageUrlLists[1] },
      third: { ...file.third, imageUrl: imageUrlLists[2] },
    });
  };

  const onClickRemoveHandler = () => {
    setUploadImages([]);
    setImageUrlLists([]);
    setFile({
      ...file,
      default: { ...file.default, imageUrl: "" },
      second: { ...file.second, imageUrl: "" },
      third: { ...file.third, imageUrl: "" },
    });
  };

  return (
    <LineContainer>
      <RequiredText
        style={{
          color: `${
            failedUpload && uploadImages.length === 0 ? "#DF3737" : "#222020"
          }`,
        }}
      >
        상품이미지*
      </RequiredText>
      <ContentContainer>
        {file.default.imageUrl ||
        file.second.imageUrl ||
        file.third.imageUrl ? (
          <ImageContainer>
            {file.default.imageUrl ? (
              <ImageThumbnailContainer
                key={file.default.id}
                style={{ border: "6px solid #EC8D49" }}
              >
                <FirstImage>대표이미지</FirstImage>
                <ImageThumbnail
                  src={file.default.imageUrl}
                  alt=""
                ></ImageThumbnail>
              </ImageThumbnailContainer>
            ) : (
              <div>
                <InputLabel htmlFor="files">
                  <InputStyleWrapper>
                    <InputStyleBox src={Camera} />
                    <Text style={{ color: "#ADADAD" }}>이미지추가</Text>
                  </InputStyleWrapper>
                </InputLabel>
                <UploadInputBox
                  type="file"
                  id="files"
                  multiple
                  onChange={onChangeFileHandler}
                />
              </div>
            )}
            {file.second.imageUrl ? (
              <ImageThumbnailContainer
                key={file.second.id}
                onClick={() => onClickChangeHandler(file.second.id)}
              >
                <ImageThumbnail
                  src={file.second.imageUrl}
                  alt=""
                ></ImageThumbnail>
              </ImageThumbnailContainer>
            ) : (
              <div>
                <InputLabel htmlFor="files">
                  <InputStyleWrapper>
                    <InputStyleBox src={Camera} />
                    <Text style={{ color: "#ADADAD" }}>이미지추가</Text>
                  </InputStyleWrapper>
                </InputLabel>
                <UploadInputBox
                  type="file"
                  id="files"
                  multiple
                  onChange={onChangeFileHandler}
                />
              </div>
            )}
            {file.third.imageUrl ? (
              <ImageThumbnailContainer
                key={file.third.id}
                onClick={() => onClickChangeHandler(file.third.id)}
              >
                <ImageThumbnail
                  src={file.third.imageUrl}
                  alt=""
                ></ImageThumbnail>
              </ImageThumbnailContainer>
            ) : (
              <div>
                <InputLabel htmlFor="files">
                  <InputStyleWrapper>
                    <InputStyleBox src={Camera} />
                    <Text style={{ color: "#ADADAD" }}>이미지추가</Text>
                  </InputStyleWrapper>
                </InputLabel>
                <UploadInputBox
                  type="file"
                  id="files"
                  multiple
                  onChange={onChangeFileHandler}
                />
              </div>
            )}
            <RemoveBtnWrapper onClick={onClickRemoveHandler}>
              <RemoveIcon src={removeIcon} alt="" />
              이미지 전체 삭제
            </RemoveBtnWrapper>
          </ImageContainer>
        ) : (
          <ImageContainer>
            <InputLabel htmlFor="files">
              <InputStyleWrapper>
                <InputStyleBox src={Camera} />
                <Text style={{ color: "#ADADAD" }}>이미지등록</Text>
              </InputStyleWrapper>
            </InputLabel>
            <UploadInputBox
              type="file"
              id="files"
              multiple
              onChange={onChangeFileHandler}
            />
            <InputLabel htmlFor="files">
              <InputStyleWrapper>
                <InputStyleBox src={Camera} />
                <Text style={{ color: "#ADADAD" }}>이미지등록</Text>
              </InputStyleWrapper>
            </InputLabel>
            <UploadInputBox
              type="file"
              id="files"
              multiple
              onChange={onChangeFileHandler}
            />
            <InputLabel htmlFor="files">
              <InputStyleWrapper>
                <InputStyleBox src={Camera} />
                <Text style={{ color: "#ADADAD" }}>이미지등록</Text>
              </InputStyleWrapper>
            </InputLabel>
            <UploadInputBox
              type="file"
              id="files"
              multiple
              onChange={onChangeFileHandler}
            />
          </ImageContainer>
        )}
        <TextWrapper>
          {failedUpload && uploadImages.length === 0 && (
            <Text style={{ color: "#DF3737", paddingBottom: "10px" }}>
              * 상품 이미지는 최소 1개 이상 필수로 등록되어야 합니다.
            </Text>
          )}
          <Text>* 상품 이미지는 640X640에 최적화되어 있습니다.</Text>
          <Text>- 이미지는 상품 등록 시 정사각형으로 잘려서 등록됩니다.</Text>
          <Text>
            - 큰 이미지일 경우 이미지가 깨지는 경우가 발생할 수 있습니다.
          </Text>
        </TextWrapper>
      </ContentContainer>
    </LineContainer>
  );
};

const LineContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 0px 30px 0px;
  border-bottom: 2px solid #eaeaea;

  @media screen and (max-width: 500px) {
    display: grid;
    gap: 14px;
  }
`;

const ContentContainer = styled.div`
  display: grid;
`;

const RequiredText = styled.div`
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  min-width: 191px;
`;

const ImageContainer = styled.div`
  width: 100%;
  gap: 16px;
  display: flex;

  @media screen and (max-width: 500px) {
    gap: 15px;
  }
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
  background-color: #ec8d49;
  color: #fff;
  border-radius: 5px 0px 0px 0px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const ImageThumbnailContainer = styled.div`
  width: 176px;
  height: 176px;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 104px;
    height: 104px;
  }
`;

const InputLabel = styled.label`
  width: 176px;
  height: 176px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 104px;
    height: 104px;
  }
`;

const InputStyleWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const InputStyleBox = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin: 0px auto;
`;

const Text = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #717171;
  width: 100%;
`;

const UploadInputBox = styled.input`
  display: none;
`;

const TextWrapper = styled.div`
  width: 100%;
  margin: 22px 0px 0px 0px;
`;

const RemoveBtnWrapper = styled.div`
  gap: 10px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  display: flex;
  margin: 0px 0px 0px 173px;
  color: #222020;
  cursor: pointer;
  height: 24px;

  @media screen and (max-width: 1136px) {
    margin: 0px;
  }
  @media screen and (max-width: 500px) {
    position: absolute;
    top: 242px;
    right: 10px;
  }
`;

const RemoveIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  opacity: 0.7;
`;

export default ImageUpload;
