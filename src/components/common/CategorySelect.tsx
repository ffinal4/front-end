import React, { Dispatch, SetStateAction } from 'react'
import { styled } from 'styled-components';
import CategoryIcon from '../../assets/images/song.jpg'

interface Props {
  categorySelect: {
    category: string,
    name: string,
  };
  setSelectBar: Dispatch<SetStateAction<boolean>>;
  setCategorySelect: Dispatch<SetStateAction<{
    category: string,
    name: string,
  }>>;
};

const CategorySelect : React.FC<Props> = ({ categorySelect, setSelectBar, setCategorySelect }) => {

  interface Kind {
    category: string;
    name: string;
  };

  const categoryArray : Kind[] = [
    {category: "WOMAN", name: "여성패션/잡화"},
    {category: "MAN", name: "남성패션/잡화"},
    {category: "FURNITURE", name: "가구/인테리어"},
    {category: "HOBBY", name: "취미/게임/음반/굿즈"},
    {category: "BOOK", name: "도서"},
    {category: "BEAUTY", name: "뷰티/미용"},
    {category: "BABY", name: "유아동/유아물품"},
    {category: "KITCHEN", name: "생활주방용품"},
    {category: "TICKET", name: "티켓/교환권"},
    {category: "SPORTS", name: "스포츠/레저"},
    {category: "PET", name: "반려동물용품"},
    {category: "DIGITAL", name: "디지털기기"},
    {category: "ELECTRONICS", name: "가전제품"},
    {category: "ART", name: "예술/희귀/수집품"},
    {category: "PLANT", name: "식물"},
    {category: "FOOD", name: "가공식품"},
    {category: "ETC", name: "기타물품"},
  ];

  const onClickChoiceHandelr = (item : {category : string, name : string}) => {
    setSelectBar(false);
    setCategorySelect({
      ...categorySelect,
      category: item.category,
      name: item.name,
    })
  };

  return (
    <CategoryContainer>
        <CategoryHeader>전체카테고리</CategoryHeader>
        <CategoryWrapper>
            {categoryArray.map((item) => {
              return (
              <CategoryKindWrapper
                key={item.category}
                onClick={() => onClickChoiceHandelr(item)}
              >
                <Text >{item.name}</Text>
              </CategoryKindWrapper>
              )
            })}
        </CategoryWrapper>
    </CategoryContainer>
  )
};

const CategoryContainer = styled.div`
    width: 1000px;
    height: 310px;
    position: absolute;
    box-shadow: 1px 1px 8px 0px #c7c7c7;
    background-color: white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
`;

const CategoryHeader = styled.div`
    width: 100%;
    height: 54px;
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #39373A;
    color: #fff;
    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const CategoryWrapper = styled.div`
  width: 100%;
  height: 256px;
  display: flex;
  flex-wrap: wrap;
`;

const CategoryKindWrapper = styled.div`
  display: flex;
  width: 200px;
  padding: 20px 0px 20px 20px;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    font-weight: 700;
    background-color: #EFEFEF;
  };
`;

const Text = styled.div`
  display: flex;
  font-family: "Pretendard";
  font-size: 16px;
  line-height: 150%;
`;

export default CategorySelect;