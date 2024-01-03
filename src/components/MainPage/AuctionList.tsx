import React from "react";
import ItemCard from "../common/ItemCard";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { StSubTitle, StTitle } from "../../styles/TitleFont";
import PopularAucionCard from "./PopularAuctionCard";
import { StBasicButton } from "../../styles/BasicButton";

const AuctionList = ({ data }: any) => {
  const navigate = useNavigate();

  return (
    <AuctionListContainer>
      <StTitle marginbottom="16px" textalign="left">
        ON FIRE!
      </StTitle>
      <StSubTitle marginbottom="60px" textalign="left">
        지금 가장 인기있는 경매
      </StSubTitle>
      <CardContainer>
        <MarginContainer>
          <PopularAucionCard data={data[0]} bgColor={"#EC8D49"} fontColor={"#fcfcfc"} hoverColor={"#FBD8BF"} />
        </MarginContainer>
        <MarginContainer>
          <PopularAucionCard data={data[1]} bgColor={"#39373A"} fontColor={"#fcfcfc"} hoverColor={"#ADADAD"} />
        </MarginContainer>
        <PopularAucionCard data={data[2]} bgColor={"#FFCA64"} fontColor={"#222020"} hoverColor={"#39373A"} />
        <MoreBtn
          buttonColor="var(--yellow-yellow-100, #FFCA64);"
          onClick={() => {
            navigate("/auctionlist");
          }}
        >
          포켓경매 바로가기
        </MoreBtn>
      </CardContainer>
      <LastText>포켓경매에서 더 많은 물건을 만나보세요!</LastText>
    </AuctionListContainer>
  );
};

const AuctionListContainer = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  margin-top: 320px;
  margin-bottom: 300px;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  border-bottom: 4px solid var(--black-white-gray-10, #efefef);
  position: relative;
`;

const MoreBtn = styled(StBasicButton)`
  border: 2px solid var(--black-white-black, #222020);
  padding: 10px 0px;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 1px 2px 5px 0px rgba(34, 32, 32, 0.1);
  position: absolute;
  bottom: -22px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const LastText = styled.div`
  text-align: center;
  color: var(--black-white-gray-100, #39373a);
  /* KOR/Kor R 20 */
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  margin-top: 36px;
`;

const MarginContainer = styled.div`
  margin-right: 16px;
`;
export default AuctionList;
