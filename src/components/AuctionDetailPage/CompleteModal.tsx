import React from 'react'
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
import { StCompleteBt } from "../../components/TradeRequestPage/TradeCompleteModal";

const CompleteModal = () => {
  return (
    <div>
      <ModalBackground />
      <ModalContainer>
        <CancelButtonContainer>
          <CancelImg
            src={remove}
            // onClick={() => {
            //   setCompleteModalOpen(false);
            // }}
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
            //   onClick={requestCompleteOnclick}
            >
              확인
            </StCompleteBt>
          </ButtonContainer>
        </ContentsContainer>
      </ModalContainer>
    </div>
  )
};

export default CompleteModal;