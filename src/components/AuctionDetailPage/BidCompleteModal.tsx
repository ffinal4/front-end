import React, { useState } from 'react'
import remove from "../../assets/icon/remove.png";
import {
    ButtonContainer,
    CancelButtonContainer,
    CancelImg,
    Content,
    ContentsContainer,
    ModalBackground,
    ModalContainer,
    SubContent,
    Title,
  } from "../MyAuctionCheckPage/AuctionCompleteModal";
import { StCompleteBt } from "../TradeRequestPage/TradeCompleteModal";
import { useNavigate } from 'react-router-dom';

const BidCompleteModal = ({
  setBidCheck,
  setConditional,
  conditional,
  data,
  modals,
  wonBidChoice,
  setWonBidChoice,
  setSellerPicks,
  sellerPicks
} : any) => {

  const navigate = useNavigate();

  const [newModals, setNewModals] = useState(modals);

  const onClickCheckBtnHandler = () => {
    setBidCheck(false);
    setConditional({...conditional, bid: false});
    navigate(`/auctiondetail/${data.data.info.auctionResponseDto.auctionId}`);
  };
  const onClickSureBtnHandler = () => {
    setBidCheck(false);
    setConditional({...conditional, bid: false});
    navigate(`/auctiondetail/${data.data.info.auctionResponseDto.auctionId}`);
  };
  const onClickSuccessBidBtnHandler = () => {
    setBidCheck(false);
    setConditional({...conditional, bid: false});
    navigate(`/auctiondetail/${data.data.info.auctionResponseDto.auctionId}`);
  };

  const ModalComponent = () => {
    if (newModals === 1) {
      <div>
        <CancelButtonContainer>
            <CancelImg
              src={remove}
              onClick={() => {
                setBidCheck(false);
              }}
            />
          </CancelButtonContainer>
        <ContentsContainer>
          <Title>GAME ON!</Title>
            <Content>입찰을 완료했습니다.</Content>
            <SubContent>
              내 물건이 마음에 든다면 경매자가 Seller’s Pick으로 지정할 거예요!
            </SubContent>
            <ButtonContainer>
              <StCompleteBt
                buttonColor="#58ABF7"
                style={{color: "#FCFCFC"}}
                onClick={onClickCheckBtnHandler}
              >
                확인
              </StCompleteBt>
            </ButtonContainer>
          </ContentsContainer>
        </div>
    } else if (newModals === 2) {
      <div>
        <CancelButtonContainer>
            <CancelImg
              src={remove}
              onClick={() => {
                setBidCheck(false);
              }}
            />
          </CancelButtonContainer>
        <ContentsContainer>
          <Title>GAME ON!</Title>
            <Content>입찰을 완료했습니다.</Content>
            <SubContent>
              내 물건이 마음에 든다면 경매자가 Seller’s Pick으로 지정할 거예요!
            </SubContent>
            <ButtonContainer>
              <StCompleteBt
                buttonColor="#58ABF7"
                style={{color: "#FCFCFC"}}
                onClick={onClickSureBtnHandler}
              >
                확인
              </StCompleteBt>
            </ButtonContainer>
          </ContentsContainer>
        </div>
    } else {
      <div>
        <CancelButtonContainer>
            <CancelImg
              src={remove}
              onClick={() => {
                setBidCheck(false);
              }}
            />
          </CancelButtonContainer>
        <ContentsContainer>
          <Title>GAME ON!</Title>
            <Content>입찰을 완료했습니다.</Content>
            <SubContent>
              내 물건이 마음에 든다면 경매자가 Seller’s Pick으로 지정할 거예요!
            </SubContent>
            <ButtonContainer>
              <StCompleteBt
                buttonColor="#58ABF7"
                style={{color: "#FCFCFC"}}
                onClick={onClickSuccessBidBtnHandler}
              >
                확인
              </StCompleteBt>
            </ButtonContainer>
          </ContentsContainer>
        </div>
    };
  };

  return (
    <div>
      <ModalBackground />
      <ModalContainer>
        <CancelButtonContainer>
          <CancelImg
            src={remove}
            onClick={() => {
              setBidCheck(false);
            }}
          />
        </CancelButtonContainer>
        <ContentsContainer>
          <Title>GAME ON!</Title>
          <Content>입찰을 완료했습니다.</Content>
          <SubContent>
            내 물건이 마음에 든다면 경매자가 Seller’s Pick으로 지정할 거예요!
          </SubContent>
          <ButtonContainer>
            <StCompleteBt
              buttonColor="#58ABF7"
              style={{color: "#FCFCFC"}}
              onClick={onClickCheckBtnHandler}
            >
              확인
            </StCompleteBt>
          </ButtonContainer>
        </ContentsContainer>
      </ModalContainer>
    </div>
  )
};

export default BidCompleteModal;