import React from "react";
import { styled } from "styled-components";
import defaultProfile from "../../assets/images/defaultprofile.png";
import { useRecoilValue } from "recoil";
import { myProfileImage } from "../../store/chatting";

const MyChat = ({ item }: any) => {
  const hours = new Date(item.time).getHours();
  const minutes = new Date(item.time).getMinutes();
  const amPm = hours < 12 ? "오전" : "오후";
  const formattedTime = `${amPm} ${hours % 12}:${minutes.toString().padStart(2, "0")}`;
  const myImage = useRecoilValue(myProfileImage);
  console.log("123", myImage);

  return (
    <MyChatContainer>
      <Time>{formattedTime}</Time>
      <TextBox>{item.message}</TextBox>
      <UserImage src={myImage ? myImage : defaultProfile} />
    </MyChatContainer>
  );
};

const MyChatContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  width: 100%;
`;

const Time = styled.div`
  margin-right: 10px;
  color: var(--black-white-black, #222020);
  /* WEB/KOR/Kor R 14 */
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

const TextBox = styled.div`
  margin-right: 20px;
  color: var(--black-white-white, #fcfcfc);
  /* WEB/KOR/Kor R 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  display: flex;
  width: 288px;
  padding: 16px 20px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 5px;
  background: var(--black-white-gray-100, #39373a);
`;

const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  border: 1px solid var(--black-white-black, #222020);
  background-color: #ffff;
`;
export default MyChat;
