import React, { Dispatch, SetStateAction } from 'react'
import { styled } from 'styled-components';
import CategoryIcon from '../../assets/images/song.jpg'

interface Props {
  category: {
    id: string,
    name: string,
  };
  setSelectBar: Dispatch<SetStateAction<boolean>>;
  setCategory: Dispatch<SetStateAction<{
    id: string,
    name: string,
  }>>;
};

const CategorySelect : React.FC<Props> = ({ category, setSelectBar, setCategory }) => {

  interface Kind {
    id: string;
    name: string;
  };

  const categoryArray : Kind[] = [
    {id: "WOMAN", name: "여성패션/잡화"},
    {id: "MAN", name: "남성패션/잡화"},
    {id: "FURNITURE", name: "가구/인테리어"},
    {id: "HOBBY", name: "취미/게임/음반/굿즈"},
    {id: "BOOK", name: "도서"},
    {id: "BEAUTY", name: "뷰티/미용"},
    {id: "BABY", name: "유아동/유아물품"},
    {id: "KITCHEN", name: "생활주방용품"},
    {id: "TICKET", name: "티켓/교환권"},
    {id: "SPORTS", name: "스포츠/레저"},
    {id: "PET", name: "반려동물용품"},
    {id: "DIGITAL", name: "디지털기기"},
    {id: "ELECTRONICS", name: "가전제품"},
    {id: "ART", name: "예술/희귀/수집품"},
    {id: "PLANT", name: "식물"},
    {id: "FOOD", name: "가공식품"},
    {id: "ETC", name: "기타물품"},
  ];

  const onClickChoiceHandelr = (item : {id : string, name : string}) => {
    setSelectBar(false);
    setCategory({
      ...category,
      id: item.id,
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
                key={item.id}
                onClick={() => onClickChoiceHandelr(item)}
              >
                <Icon src={CategoryIcon}/>
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
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
`;

const CategoryHeader = styled.div`
    width: 100%;
    height: 54px;
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #EDEDED;
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
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
  padding: 20px 0px 20px 10px;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    font-weight: 700;
    background-color: #D9D9D9;
  };
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  font-family: "Pretendard";
  font-size: 16px;
  line-height: 150%;
`;

export default CategorySelect;