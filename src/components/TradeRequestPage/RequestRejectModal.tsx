import React from "react";
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
import { StCompleteBt } from "./TradeCompleteModal";

interface RequestRejectModalProps {
  rejectModalOpen: boolean;
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  setRejectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RequestRejectModal: React.FC<RequestRejectModalProps> = ({
  rejectModalOpen,
  requestState,
  setRejectModalOpen,
  setRequestState,
}) => {
  const requestRejectOnclick = () => {
    setRequestState({ ...requestState, request: "교환취소" });
  };
  return (
    <div>
      <ModalBackground />
      <ModalContainer>
        <CancelButtonContainer>
          <CancelImg
            src={remove}
            onClick={() => {
              setRejectModalOpen(false);
            }}
          />
        </CancelButtonContainer>
        <ContentsContainer>
          <Title>ARE YOU SURE?</Title>
          <Content>정말 이 교환을 거절하시겠어요?</Content>
          <SubContent>
            한 번 거절한 물건은 다시 교환 신청할 수 없어요.
          </SubContent>
          <ButtonContainer>
            <StCompleteBt buttonColor="#FFCA64" onClick={requestRejectOnclick}>
              거절하기
            </StCompleteBt>
          </ButtonContainer>
        </ContentsContainer>
      </ModalContainer>
    </div>
  );
};

export default RequestRejectModal;
