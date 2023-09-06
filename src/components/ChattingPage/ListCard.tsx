import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { chatOtherUserData, otherProfileImage } from "../../store/chatting";
import defauProfile from "../../assets/images/defaultprofile.png";
const ListCard = ({ item, setChatRoomOpen }: any) => {
  const [, setOtherUser] = useRecoilState(chatOtherUserData);
  const [, setOtherImage] = useRecoilState(otherProfileImage);
  return (
    <ListCardContainer
      onClick={() => {
        setOtherUser(item);
        setOtherImage(item?.otherImageUrl);
        setChatRoomOpen(true);
      }}
    >
      <UserContainer>
        <UserImageContainer>
          <UserImage src={item?.otherImageUrl ? item?.otherImageUrl : defauProfile} />
          <TextContainer>
            <UserName>{item?.nickname}</UserName>
            <Content>{item?.recentMessage}</Content>
          </TextContainer>
        </UserImageContainer>

        <GoodsImage src={item.imageUrl} />
      </UserContainer>
    </ListCardContainer>
  );
};

const UserImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ListCardContainer = styled.div`
  padding: 20px 30px;
  width: 100%;
  height: 120px;
  background-color: #fcfcfc;
  &:hover {
    background-color: #efefef;
  }
  cursor: pointer;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 380px;
  background-color: #ffff;
`;

const TextContainer = styled.div`
  margin-left: 30px;
`;

const UserName = styled.div`
  color: var(--black-white-black, #222020);
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
  margin-bottom: 4px;
`;
const Content = styled.div`
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  max-width: 280px;
  width: 100%;
  height: 24px;
  text-overflow: ellipsis;
  word-break: break-word;
  overflow: hidden;
  color: var(--black-white-black, #222020);
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

const GoodsImage = styled.img`
  float: right;
  width: 80px;
  height: 80px;
  border-radius: 5px;
`;
export default ListCard;
