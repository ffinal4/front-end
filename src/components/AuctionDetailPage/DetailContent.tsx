import React, { useState } from "react";
import { styled } from "styled-components";
import Like from "../../assets/icon/like.png";
import Time from "../../assets/icon/time.png";
import Layer from "../../assets/icon/layer_6.png";
import Group from "../../assets/icon/group.png";
import Siren from "../../assets/icon/siren.png";
import { useNavigate } from "react-router-dom";
import { ValueToEnum } from "../../utils/EnumCategory";
import SellerPickModal from "./SellerPickModal";
import AucButton from "./AucButton";
import AucModalBtn from "./AucModalBtn";
import SuccessBIdModal from "./SuccessBIdModal";

const DetailContent = ({ data }: any) => {
  const navigate = useNavigate();
  const newData = data?.data.info.auctionResponseDto.goodsResponseDto;
  const productData = data?.data.info.auctionResponseDto.auctionId;
  const splitDate = newData?.createdAt.split("T")[0];
  const targetDate : any = new Date(splitDate);
  const currentDate : any = new Date();
  const newDate = currentDate - targetDate;
  const result = Math.floor(newDate / (1000 * 60 * 60 * 24));
  console.log("며칠전", result);
  // console.log("newData", newData);

  const [conditional, setConditional] = useState({
    bid: false,
    modal: false,
  });
  const [sellerPicks, setSellerPicks] = useState({
    pickModal: false,
    successBidModal: false,
  });
  const { bid, modal } = conditional;
  const { pickModal, successBidModal } = sellerPicks;

  

  const onClickMenuOpenHandler = () => {
    setConditional({ ...conditional, modal: !modal });
  };

  return (
    <InfoContainer>
      <InfoTitle>{newData.title}</InfoTitle>
      <UserNameContainer></UserNameContainer>
      <UserNameContainer style={{ border: "none", paddingTop: "16px", position: "relative" }}>
        <TextWrapper
          style={{ gap: "8px" }}
          onClick={() => {
            if (data.data.info.auctionResponseDto.goodsResponseDto.checkSameUser) {
              navigate("/mypocket");
            } else {
              navigate(`/userpocket/${newData.nickname}`);
            }
          }}
        >
          <ColorText color="#39373A">{newData.nickname}</ColorText>
          <SmallBox src={Layer} style={{ cursor: "pointer" }} />
        </TextWrapper>
        <BoxWrapper>
          <TextWrapper>
            <SmallBox src={Like} />
            <ColorText color="#ADADAD">0</ColorText>
          </TextWrapper>
          <TextWrapper>
            <SmallBox src={Time} />
            <ColorText color="#ADADAD">{(result === -1) ? "0" : result}일 전</ColorText>
          </TextWrapper>
          <TextWrapper>
            <AucModalBtn data={data} navigate={navigate} />
          </TextWrapper>
        </BoxWrapper>
      </UserNameContainer>
      <TextContainer>
        <TextLine>
          <ColorText color="#717171">카테고리</ColorText>
          <ColorText color="#222020">{ValueToEnum(newData.category)}</ColorText>
        </TextLine>
        <TextLine>
          <ColorText color="#717171">상품상태</ColorText>
          <ColorText color="#222020">{newData.goodsCondition}</ColorText>
        </TextLine>
        <TextLine>
          <ColorText color="#717171">거래지역</ColorText>
          <ColorText color="#222020">{newData.location}</ColorText>
        </TextLine>
        <TextLine>
          <ColorText color="#717171">거래방법</ColorText>
          <ColorText color="#222020">{newData.tradeType}</ColorText>
        </TextLine>
        <TextLine>
          <ColorText color="#717171">상품태그</ColorText>
          <ColorText color="#222020">준비중입니다.</ColorText>
        </TextLine>
        <TextLine style={{ gap: "54px" }}>
          <ColorText color="#717171">하한가</ColorText>
          <ColorText color="#222020">{data.data.info.auctionResponseDto.lowPrice.toLocaleString()}</ColorText>
        </TextLine>
      </TextContainer>
      <ColorText color="#717171">*상대방이 교환신청을 수락해야 채팅이 가능해요!</ColorText>
      <AucButton
        bid={bid}
        conditional={conditional}
        setConditional={setConditional}
        data={data}
        sellerPicks={sellerPicks}
        setSellerPicks={setSellerPicks}
      />
      {(pickModal)
        && <SellerPickModal
            auctionId={productData}
            sellerPicks={sellerPicks}
            setSellerPicks={setSellerPicks} />
      }
      {(successBidModal)
        && <SuccessBIdModal
            auctionId={productData}
            sellerPicks={sellerPicks}
            setSellerPicks={setSellerPicks} />
      }
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  width: 100%;
  
  @media screen and (max-width: 834px) {
    max-width: 260px;
    display: grid;
    margin-left: 70px;
  }
`;

const InfoTitle = styled.div`
  font-family: "Pretendard";
  font-size: 32px;
  font-weight: 800;
  line-height: 150%;
  padding: 0px 0px 10px 0px;
`;

const UserNameContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 0px 16px 0px;
  border-bottom: 2px solid #d9d9d9;
`;

const ColorText = styled.div<{ color: string }>`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: ${(props) => props.color};
`;

const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const SmallBox = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const TextContainer = styled.div`
  display: grid;
  padding: 24px 0px 40px 0px;
  gap: 10px;
`;

const TextLine = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
`;

const ModalBtnWrapper = styled.div`
  width: 176px;
  position: absolute;
  top: 50px;
  right: 0;
`;

const ModalBtn = styled.div`
  display: flex;
  width: 176px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  background-color: #fcfcfc;
  border-bottom: 1px solid #d5d4d4;
  border-left: 1px solid #d5d4d4;
  border-right: 1px solid #d5d4d4;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
  }
`;

const ModalBtnDisabled = styled.div`
  display: flex;
  width: 176px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #d5d4d4;
  background-color: #fcfcfc;
  border-bottom: 1px solid #d5d4d4;
  border-left: 1px solid #d5d4d4;
  border-right: 1px solid #d5d4d4;
`;

export default DetailContent;
