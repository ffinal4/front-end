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

interface TradeCompleteModalProps {
  completeModalOpen: boolean;
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  setCompleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TradeCompleteModal: React.FC<TradeCompleteModalProps> = ({
  completeModalOpen,
  requestState,
  setCompleteModalOpen,
  setRequestState,
}) => {
  const requestCompleteOnclick = () => {
    setRequestState({ ...requestState, request: "교환완료" });
  };
  return (
    <ModalContent>
      <CancelButtonContainer>
        <CancelImg
          src={remove}
          onClick={() => {
            setCompleteModalOpen(false);
          }}
        />
      </CancelButtonContainer>

      <Title>ARE YOU SURE?</Title>
      <Content>거래가 완료되었나요?</Content>

      <SubContent>
        한 번 완료한 교환은 교환 완료 상태가 되며 다시 되돌릴 수 없어요.
      </SubContent>
      <ButtonContainer>
        <StRejectButton buttonColor="#FFCA64" onClick={requestCompleteOnclick}>
          교환 완료하기
        </StRejectButton>
      </ButtonContainer>
    </ModalContent>
  );
};

export default TradeCompleteModal;
