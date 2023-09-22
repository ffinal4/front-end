import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { styled } from "styled-components";
import { filterCategory, filterName } from "../../../store/filterCategory";
import { pagination } from "../../../store/pagination";
import './FilterModal.css';

const FilterModal = ({ filterClick, header }: any) => {
  const [categorySelect, setCategorySelect] = useRecoilState(filterCategory);
  const [, setCurrentFilterName] = useRecoilState(filterName);
  const resetPage = useResetRecoilState(pagination);

  interface Kind {
    category: string | null;
    name: string;
  }

  const categoryArray: Kind[] = [
    { category: null, name: "전체" },
    { category: "WOMAN", name: "여성패션/잡화" },
    { category: "MAN", name: "남성패션/잡화" },
    { category: "FURNITURE", name: "가구/인테리어" },
    { category: "HOBBY", name: "취미/게임/음반/굿즈" },
    { category: "BOOK", name: "도서" },
    { category: "BEAUTY", name: "뷰티/미용" },
    { category: "BABY", name: "유아동/유아물품" },
    { category: "KITCHEN", name: "생활주방용품" },
    { category: "TICKET", name: "티켓/교환권" },
    { category: "SPORTS", name: "스포츠/레저" },
    { category: "PET", name: "반려동물용품" },
    { category: "DIGITAL", name: "디지털기기" },
    { category: "ELECTRONICS", name: "가전제품" },
    { category: "ART", name: "예술/희귀/수집품" },
    { category: "PLANT", name: "식물" },
    { category: "FOOD", name: "가공식품" },
    { category: "ETC", name: "기타물품" },
  ];

  return (
    <div className={header ? "CategoryContainer" : "CategoryWrapper"}>
      <CategoryHeader>전체카테고리</CategoryHeader>
      <CategoryWrapper>
        {categoryArray.map((item) => {
          return (
            <CategoryKindWrapper
              key={item.category}
              onClick={() => {
                if (item.category !== null) {
                  setCategorySelect(`&category=${item.category}`);
                  setCurrentFilterName(item.name);
                  resetPage();
                  if (filterClick !== undefined) {
                    filterClick();
                    resetPage();
                  }
                } else {
                  setCategorySelect("");
                  setCurrentFilterName(item.name);
                  resetPage();

                  if (filterClick !== undefined) {
                    filterClick();
                    resetPage();
                  }
                }
              }}
            >
              <Text>{item.name}</Text>
            </CategoryKindWrapper>
          );
        })}
      </CategoryWrapper>
    </div>
  );
};

const CategoryHeader = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #39373a;
  color: #fff;
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  border-radius: 5px 5px 0px 0px;
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
    background-color: #efefef;
  }
`;

const Text = styled.div`
  display: flex;
  font-family: "Pretendard";
  font-size: 16px;
  line-height: 150%;
`;
export default FilterModal;
