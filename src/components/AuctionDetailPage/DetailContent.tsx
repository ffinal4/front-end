import React, { useState } from "react";
import { styled } from "styled-components";
import Like from "../../assets/icon/like.png";
import Time from "../../assets/icon/time.png";
import Layer from "../../assets/icon/layer_6.png";
import Group from "../../assets/icon/group.png";
import Siren from "../../assets/icon/siren.png";
import { StBasicButton } from "../../styles/BasicButton";
import BidModal from "./BidModal";
import CardZzimBtn from "../common/CardZzimBtn";
import { useNavigate } from "react-router-dom";
import { ValueToEnum } from "../../utils/EnumCategory";

const DetailContent = ({ data }: any) => {
  const navigate = useNavigate();
  const newData = data.data.info.goodsResponseDto;
  // console.log("newData", newData);

  const [conditional, setConditional] = useState({
    bid: false,
    modal: false,
    auction: false,
  });
  const { bid, modal, auction } = conditional;

  const onClickBidHandler = () => {
    setConditional({ ...conditional, bid: true });
  };

  const onClickChatting = () => {
    setConditional({ ...conditional, bid: false });
  };

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
          // onClick={() => {
          //   if (data.data.info.checkSameUser) {
          //     navigate("/mypocket");
          //   } else {
          //     navigate(`/userpocket/${newData.nickname}`);
          //   }
          // }}
          // 경매물품 올라오면 핸들러함수 달 예정
        >
          <ColorText color="#39373A">{newData.nickname}</ColorText>
          <SmallBox src={Layer} style={{ cursor: "pointer" }} />
        </TextWrapper>
        <BoxWrapper>
          <TextWrapper>
            <SmallBox src={Like} />
            <ColorText color="#ADADAD">12</ColorText>
          </TextWrapper>
          <TextWrapper>
            <SmallBox src={Time} />
            <ColorText color="#ADADAD">10일 전</ColorText>
          </TextWrapper>
          <TextWrapper>
          {data.data.info.checkSameUser ? (
            <TextWrapper style={{ cursor: "pointer" }} onClick={onClickMenuOpenHandler}>
              <SmallBox src={Group} />
            </TextWrapper>
          ) : (
            <TextWrapper style={{ cursor: "pointer" }}>
              <SmallBox src={Siren} />
              <ColorText color="#ADADAD">신고하기</ColorText>
            </TextWrapper>
          )}
          {modal && (
            <ModalBtnWrapper>
              <ModalBtn
                style={{
                  borderTop: "1px solid #D5D4D4",
                  borderRadius: "5px 5px 0px 0px",
                }}
              >
                예약중
              </ModalBtn>
              <ModalBtn>거래완료</ModalBtn>
              <ModalBtn>게시글 수정</ModalBtn>
              {auction ? <ModalBtn>레이팅 요청</ModalBtn> : <ModalBtnDisabled>레이팅 요청</ModalBtnDisabled>}
              <ModalBtn style={{ borderRadius: "0px 0px 5px 5px" }}>삭제</ModalBtn>
            </ModalBtnWrapper>
          )}
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
          <ColorText color="#222020">#스타벅스 #기프티콘 #교환권</ColorText>
        </TextLine>
        <TextLine style={{gap: "54px"}}>
          <ColorText color="#717171">하한가</ColorText>
          <ColorText color="#222020">{newData.tradeType}PP</ColorText>
        </TextLine>
      </TextContainer>
      <ColorText color="#717171">*상대방이 교환신청을 수락하여 채팅이 가능해요!</ColorText>
      <ButtonWrapper>
        {data.data.info.checkSameUser ? (
          <StButton buttonColor="#D5D4D4" style={{ color: "#fff", cursor: "default" }}>
            입찰하기
          </StButton>
        ) : (
          <StButton buttonColor="#58ABF7" onClick={onClickBidHandler}>
            입찰하기
          </StButton>
        )}
        {data.data.info.checkSameUser ? (
          <StButton buttonColor="#D5D4D4" style={{ color: "#fff", cursor: "default" }}>
            찜하기
          </StButton>
        ) : (
          <CardZzimBtn
            checkZzim={data.data.info.goodsResponseDto.checkDibs}
            goodsId={data.data.info.goodsResponseDto.goodsId}
            isCard={false}
            buttonColor="#58ABF7"
            fontColor="#ffff"
          />
        )}
        {bid ? (
          <StButton buttonColor="#58ABF7" onClick={onClickChatting}>
            채팅하기
          </StButton>
        ) : (
          <StButton buttonColor="#D5D4D4" style={{ color: "#fff", cursor: "default" }}>
            채팅하기
          </StButton>
        )}
      </ButtonWrapper>
      {bid && <BidModal conditional={conditional} setConditional={setConditional} />}
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 834px) {
    width: 100%;
    display: grid;
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

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  padding: 10px 0px 0px 0px;
`;

const ModalBtnWrapper = styled.div`
  width: 176px;
  position: absolute;
  top: 40px;
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

const StButton = styled(StBasicButton)`
  border: 1px solid #222020;
  color: #fcfcfc;
`;

export default DetailContent;
