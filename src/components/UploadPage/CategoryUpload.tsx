import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import CategorySelect from "../common/CategorySelect";
import Up from "../../assets/icon/uparrow.png";
import Down from "../../assets/icon/downarrow.png";

const CategoryUpload = ({ setUploadData, uploadData, failedUpload }: any) => {
  const [categorySelect, setCategorySelect] = useState({
    category: "",
    name: "카테고리 선택",
  });
  const { category, name } = categorySelect;
  const [selectBar, setSelectBar] = useState<boolean>(false);

  const onClickDropDownHandelr = () => {
    setSelectBar(!selectBar);
  };

  useEffect(() => {
    if (category !== "") {
      setUploadData({ ...uploadData, data: { ...uploadData.data, category: category } });
    }
  }, [selectBar]);

  return (
    <LineContainer>
      <RequiredText style={{ color: `${failedUpload && uploadData.data.category === "" && "#DF3737"}` }}>
        카테고리*
      </RequiredText>
      <RightWrapper>
        <SelectBar>
          <Text>{name}</Text>
          {selectBar ? (
            <ChoiceBox src={Up} onClick={onClickDropDownHandelr}></ChoiceBox>
          ) : (
            <ChoiceBox src={Down} onClick={onClickDropDownHandelr}></ChoiceBox>
          )}
        </SelectBar>
        {selectBar && (
          <SelectContainer>
            <CategorySelect
              categorySelect={categorySelect}
              setCategorySelect={setCategorySelect}
              setSelectBar={setSelectBar}
            />
          </SelectContainer>
        )}
        {failedUpload && uploadData.data.category === "" && (
          <Text style={{ color: "#DF3737" }}>* 카테고리를 선택해 주세요.</Text>
        )}
      </RightWrapper>
    </LineContainer>
  );
};

export const LineContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 0px 30px 0px;
  border-bottom: 2px solid #eaeaea;
`;

export const RequiredText = styled.div`
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  min-width: 191px;
`;

export const SelectBar = styled.div`
  display: inline-flex;
  width: 176px;
  height: 44px;
  padding: 0px 10px;
  border-bottom: 1px solid;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 843px) {
    gap: 20px;
  }
`;

export const Text = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
`;

const ChoiceBox = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
`;

export const SelectContainer = styled.div`
  padding: 40px 0px 0px 0px;
  position: absolute;
  z-index: 1000;
`;

export const RightWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  position: relative;
`;

export default CategoryUpload;
