import React from "react";
import { styled } from "styled-components";

const ListCard = () => {
  return (
    <ListCardContainer>
      <UserContainer>
        <UserImage />
        <TextContainer>
          <UserName>박준영</UserName>
          <Content>
            안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요?
          </Content>
        </TextContainer>
      </UserContainer>
    </ListCardContainer>
  );
};

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
`;

const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 380px;
  background-color: gray;
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
export default ListCard;
