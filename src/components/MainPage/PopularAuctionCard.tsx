import React from "react";
import { styled } from "styled-components";
import { StCardPicture } from "../../styles/CardPicture";
import locationImage from "../../assets/icon/location.png";
import BidDeadLine from "./BidDeadLine";
import { useNavigate } from "react-router-dom";

const PopularAucionCard = ({ bgColor, fontColor, hoverColor, data }: any) => {
  const navigate = useNavigate();

  return (
    <PopularAuctionCardContainer
      bgcolor={bgColor}
      fontcolor={fontColor}
      hovercolor={hoverColor}
      onClick={() => {
        navigate(`/auctiondetail/${data.auctionId}`);
      }}
    >
      <FirstSectionContainer bgcolor={bgColor}>
        <Triangle />
        <BidContentContainer fontcolor={fontColor}>
          <BidTitle>현재 입찰 수</BidTitle>
          <BidCount>{data?.bidCount}</BidCount>
          <BidDeadLine deadline={data?.auctionEndTime} isMainPage={true} />
        </BidContentContainer>
        <CardPicture image={data?.image}>
          <AddressContent>
            <AddressImage src={locationImage} />
            {data?.location}
          </AddressContent>
        </CardPicture>
      </FirstSectionContainer>
      <SecondSectionContainer>
        <ItemTitle>{data?.title}</ItemTitle>
        <UserName>피핍포인트</UserName>
        <ItemContent>{data?.content}</ItemContent>
      </SecondSectionContainer>
    </PopularAuctionCardContainer>
  );
};

const CardPicture = styled(StCardPicture)`
  position: relative;
`;
const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-top: 80px solid #ffff;
  border-left: 0px solid transparent;
  border-right: 80px solid transparent;
  position: absolute;
  top: 0;
  left: 0;
`;
const FirstSectionContainer = styled.div<{ bgcolor: string }>`
  position: relative;
  width: 100%;
  height: 416px;
  background-color: ${(props) => props.bgcolor};
  padding: 40px 48px 0 48px;
`;
const BidContentContainer = styled.div<{ fontcolor: string }>`
  text-align: right;
  color: ${(props) => props.fontcolor};
  margin-bottom: 12px;
`;
const BidTitle = styled.div`
  /* KOR/Kor R 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
const BidCount = styled.div`
  font-family: "Lemon/Milk", sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 66px */
  margin-bottom: 20px;
`;

const SecondSectionContainer = styled.div`
  width: 100%;
  padding: 58px 48px 40px 48px;
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

const ItemTitle = styled.div`
  color: #000;
  /* KOR/Kor B 20 */
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
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
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 48px;
  font-size: 16px;
  line-height: 150%; /* 24px */
  font-weight: 400;
  margin-top: 6px;
`;

const PopularAuctionCardContainer = styled.div<{ bgcolor: string; fontcolor: string; hovercolor: string }>`
  width: 368px;
  height: 100%;
  margin-bottom: 80px;
  cursor: pointer;
  overflow: hidden;
  &:hover ${SecondSectionContainer} {
    background-color: ${(props) => props.bgcolor};
  }

  &:hover ${ItemTitle} {
    color: ${(props) => props.fontcolor};
  }

  &:hover ${ItemContent} {
    color: ${(props) => props.fontcolor};
  }

  &:hover ${UserName} {
    color: ${(props) => props.hovercolor};
  }
`;

export default PopularAucionCard;
