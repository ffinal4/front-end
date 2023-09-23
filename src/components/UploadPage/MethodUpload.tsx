import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { StBasicButton } from "../../styles/BasicButton";

const MethodUpload = ({ uploadData, setUploadData, failedUpload }: any) => {
  const onCheckDirectHandler = () => {
    setUploadData({
      ...uploadData,
      data: { ...uploadData.data, tradeType: "직거래" },
    });
  };
  const onCheckParcelHandler = () => {
    setUploadData({
      ...uploadData,
      data: { ...uploadData.data, tradeType: "택배" },
    });
  };
  const onCheckNoMatterHandler = () => {
    setUploadData({
      ...uploadData,
      data: { ...uploadData.data, tradeType: "상관없음" },
    });
  };

  return (
    <LineContainer>
        <RequiredText
          style={{color: `${(failedUpload && uploadData.data.tradeType === "") ? "#DF3737" : "#222020"}`}}
        >교환방법*</RequiredText>
        <AllWrapper>
          <Wrapper>
              <Button
                  buttonColor={(uploadData.data.tradeType === "직거래") ? "#FFCA64" : ""}
                  style={{fontWeight: `${(uploadData.data.tradeType === "직거래") ? "700" : "400"}`}}
                  onClick={onCheckDirectHandler}
              >직거래
              </Button>
              <Button
                  buttonColor={(uploadData.data.tradeType === "택배") ? "#FFCA64" : ""}
                  style={{fontWeight: `${(uploadData.data.tradeType === "택배") ? "700" : "400"}`}}
                  onClick={onCheckParcelHandler}
              >택배
              </Button>
              <Button
                  buttonColor={(uploadData.data.tradeType === "상관없음") ? "#FFCA64" : ""}
                  style={{fontWeight: `${(uploadData.data.tradeType === "상관없음") ? "700" : "400"}`}}
                  onClick={onCheckNoMatterHandler}
              >상관없음
              </Button>
          </Wrapper>
          {(failedUpload && uploadData.data.tradeType === "")
            && <Text>* 교환 방법을 선택해 주세요.</Text>
          }
        </AllWrapper>
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

const RequiredText = styled.div`
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  min-width: 191px;
`;

const AllWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 843px) {
    gap: 15px;
  }
`;

const Button = styled(StBasicButton)`
  border: 1px solid #222020;
  color: #222020;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #DF3737;
`;

export default MethodUpload;
