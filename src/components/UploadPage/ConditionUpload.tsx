import React, { useCallback, useState } from "react";
import { styled } from "styled-components";
import { StBasicButton } from "../../styles/BasicButton";

const ConditionUpload = ({ uploadData, setUploadData, failedUpload } : any) => {
    
  const onCheckNewCondition = () => {
    setUploadData({
      ...uploadData,
      data: { ...uploadData.data, goodsCondition: "상" },
    });
  };
  const onCheckUsedCondition = () => {
    setUploadData({
      ...uploadData,
      data: { ...uploadData.data, goodsCondition: "중" },
    });
  };
  const onCheckDamagedCondition = () => {
    setUploadData({
      ...uploadData,
      data: { ...uploadData.data, goodsCondition: "하" },
    });
  };

  // console.log("wow", formatted);
  // console.log("price", price);

  return (
    <LineContainer>
        <RequiredText
          style={{color: `${(failedUpload && uploadData.data.goodsCondition === "") && "#DF3737"}`}}
        >물건상태*</RequiredText>
        <AllWrapper>
            <Wrapper>
                <Button
                    buttonColor={(uploadData.data.goodsCondition === "상") ? "#FFCA64" : ""}
                    style={{fontWeight: `${(uploadData.data.goodsCondition === "상") && "700"}`}}
                    onClick={onCheckNewCondition}
                >상
                </Button>
                <Button
                    buttonColor={(uploadData.data.goodsCondition === "중") ? "#FFCA64" : ""}
                    style={{fontWeight: `${(uploadData.data.goodsCondition === "중") && "700"}`}}
                    onClick={onCheckUsedCondition}
                >중
                </Button>
                <Button
                    buttonColor={(uploadData.data.goodsCondition === "하") ? "#FFCA64" : ""}
                    style={{fontWeight: `${(uploadData.data.goodsCondition === "하") && "700"}`}}
                    onClick={onCheckDamagedCondition}
                >하
                </Button>
            </Wrapper>
            {(failedUpload && uploadData.data.goodsCondition === "")
              && <Text>* 물건의 상태를 선택해 주세요.</Text>
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
  width: 100%;
  display: flex;
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

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #DF3737;
`;

export default ConditionUpload;
