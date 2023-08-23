import React from "react";
import {
  ButtonContainer,
  CancelButtonContainer,
  CancelImg,
  Content,
  ModalContent,
  StRejectButton,
  SubContent,
  Title,
} from "./RequestRejectModal";
import remove from "../../assets/icon/remove.png";

interface TradeDeleteModalProps {
  deleteModalOpen: boolean;
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  setDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const TradeDeleteModal: React.FC<TradeDeleteModalProps> = ({
  deleteModalOpen,
  requestState,
  setDeleteModalOpen,
  setRequestState,
}) => {
  return (
    <ModalContent>
      <CancelButtonContainer>
        <CancelImg
          src={remove}
          onClick={() => {
            setDeleteModalOpen(false);
          }}
        />
      </CancelButtonContainer>

      <Title>ARE YOU SURE?</Title>
      <Content>거래 내역을 삭제하시겠어요?</Content>

      <SubContent>한 번 삭제한 내역은 다시 복구할 수 없어요.</SubContent>
      <ButtonContainer>
        <StRejectButton buttonColor="#FFCA64">거래 내역 삭제</StRejectButton>
      </ButtonContainer>
    </ModalContent>
  );
};

export default TradeDeleteModal;
