import React from "react";
import { styled } from "styled-components";
import { StCardPicture } from "../../styles/CardPicture";
import { useNavigate } from "react-router-dom";
import locationImage from "../../assets/icon/location.png";
import heart from "../../assets/icon/heart.svg";

const ItemCard = ({ item }: any) => {
  const navigate = useNavigate();

  return (
    <ItemCardContainer>
      <StCardPicture
        image={item?.image}
        onClick={() => {
          navigate(`/detail/${item.goodsId}`);
        }}
      />
      <AddressContent>
        <AddressImage src={locationImage} />
        {item?.location}
      </AddressContent>
      <ZzimBtnContainer>
        <ZzimBtn src={heart} />
      </ZzimBtnContainer>
      <ItemTitle>{item?.title}</ItemTitle>
      <UserName>{item?.nickname}</UserName>
      <ItemContent>{item?.content}</ItemContent>
    </ItemCardContainer>
  );
};

const ZzimBtn = styled.img`
  width: 100%;
`;

const ZzimBtnContainer = styled.div`
  background: var(--black-white-white, #fcfcfc);
  width: 48px;
  height: 48px;
  border-radius: 10px 0px;
  position: absolute;
  top: 226px;
  right: 0;
  z-index: 99;
  padding: 10px;
  cursor: pointer;
`;

const AddressContent = styled.div`
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  background-color: rgba(34, 32, 32, 0.2);
  padding: 10px;
  top: 0px;
  left: 0px;
  position: absolute;
  color: var(--black-white-white, #fcfcfc);
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  display: flex;
  align-items: center;
`;

const AddressImage = styled.img`
  width: 24px;
  height: 24px;
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
