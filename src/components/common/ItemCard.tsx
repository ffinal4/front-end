import React from "react";
import { styled } from "styled-components";
import { StCardPicture } from "../../styles/CardPicture";

const ItemCard = () => {
  return (
    <ItemCardContainer>
      <StCardPicture image={"none"} />
      <AddressContent>
        <AddressBtn />
        경기도 용인시 기흥구
      </AddressContent>
      <ItemTitle>물건 이름</ItemTitle>
      <UserName>사용자 이름</UserName>
      <ItemContent>
        동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 동해물과우하사 우리나라 만세 동해물과
      </ItemContent>
    </ItemCardContainer>
  );
};

const AddressContent = styled.div`
  top: 10px;
  left: 10px;
  position: absolute;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  display: flex;
  align-items: center;
`;

const AddressBtn = styled.div`
  width: 24px;
  height: 24px;
  background-color: #636363;
  margin-right: 10px;
`;
const ItemCardContainer = styled.div`
  position: relative;
  width: 272px;
  font-family: Pretendard;
  line-height: 150%;
  font-style: normal;
`;

const ItemTitle = styled.div`
  color: #000;
  /* KOR/Kor B 20 */
  font-size: 20px;
  font-weight: 700;
  margin-top: 16px;
`;

const UserName = styled.div`
  color: #757575;
  /* KOR/Kor R 14 */
  font-size: 14px;
  font-weight: 400;
`;

const ItemContent = styled.div`
  text-overflow: ellipsis;
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 48px;
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
`;
export default ItemCard;
