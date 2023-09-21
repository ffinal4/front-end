import React from "react";
import { styled } from "styled-components";
import { StCardPicture } from "../../styles/CardPicture";
import { useNavigate } from "react-router-dom";
import CardZzimBtn from "./CardZzimBtn";

const ItemCard = ({ item, isPocket }: any) => {
  const navigate = useNavigate();

  const cardContent = () => {
    if (isPocket) {
      if (item?.ratingCheck) {
        if (item?.ratingPrice > 0) {
          return <UserName>{(item?.ratingPrice).toLocaleString()}</UserName>;
        } else {
          return <UserName>레이팅이 되는 중...</UserName>;
        }
      } else {
        return <UserName>레이팅이 필요해요</UserName>;
      }
    } else {
      return <UserName>{item?.location}</UserName>;
    }
  };

  return (
    <ItemCardContainer>
      <StCardPicture
        image={item?.image}
        onClick={() => {
          navigate(`/detail/${item.goodsId}`);
        }}
      />
      {item?.checkSameUser ? (
        <div></div>
      ) : isPocket ? (
        <div></div>
      ) : (
        <CardZzimBtn
          checkZzim={item?.checkDibs}
          goodsId={item?.goodsId}
          isCard={true}
        />
      )}
      <ItemTitle>{item?.title}</ItemTitle>
      {cardContent()}
      <ItemContent>{item?.content}</ItemContent>
    </ItemCardContainer>
  );
};

const ItemCardContainer = styled.div`
  position: relative;
  width: 272px;
  font-family: "Pretendard";
  line-height: 150%;
  font-style: normal;
`;

const ItemTitle = styled.div`
  color: #000;
  /* KOR/Kor B 20 */
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  height: 24px;
`;

const UserName = styled.div`
  color: var(--black-white-gray-60, #adadad);
  /* KOR/Kor R 14 */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

const ItemContent = styled.div`
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 48px;
  font-size: 16px;
  font-weight: 400;
  margin-top: 6px;
  margin-bottom: 5px;
`;
export default ItemCard;
