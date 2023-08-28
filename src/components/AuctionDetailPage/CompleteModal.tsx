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
          <Title>ARE YOU SURE?</Title>
          <Content>거래가 완료되었나요?</Content>
          <SubContent>
            한 번 완료한 교환은 교환 완료 상태가 되며 다시 되돌릴 수 없어요.
          </SubContent>
          <ButtonContainer>
            <StCompleteBt
              buttonColor="#FFCA64"
            //   onClick={requestCompleteOnclick}
            >
              교환 완료하기
            </StCompleteBt>
          </ButtonContainer>
        </ContentsContainer>
      </ModalContainer>
    </div>
  )
};

export default CompleteModal;