import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { StBasicButton } from "../../styles/BasicButton";

const MethodUpload = ({ uploadData, setUploadData }: any) => {
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
        <RequiredText>교환방법*</RequiredText>
        <Wrapper>
            <Button
                buttonColor={(uploadData.data.tradeType === "직거래") ? "#FFCA64" : ""}
                style={{fontWeight: `${(uploadData.data.tradeType === "직거래") && "700"}`}}
                onClick={onCheckDirectHandler}
            >직거래
            </Button>
            <Button
                buttonColor={(uploadData.data.tradeType === "택배") ? "#FFCA64" : ""}
                style={{fontWeight: `${(uploadData.data.tradeType === "택배") && "700"}`}}
                onClick={onCheckParcelHandler}
            >택배
            </Button>
            <Button
                buttonColor={(uploadData.data.tradeType === "상관없음") ? "#FFCA64" : ""}
                style={{fontWeight: `${(uploadData.data.tradeType === "상관없음") && "700"}`}}
                onClick={onCheckNoMatterHandler}
            >상관없음
            </Button>
        </Wrapper>
    </LineContainer>
  );
};

const LineContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 0px 30px 0px;
  border-bottom: 2px solid #eaeaea;
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
  gap: 16px;

  @media screen and (max-width: 843px) {
    display: grid;
  }
`;

const Button = styled(StBasicButton)`
  border: 1px solid #222020;
  color: #222020;
`;

export default MethodUpload;
