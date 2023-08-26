import React from "react";
import { styled } from "styled-components";
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
import { StBasicButton } from "../../styles/BasicButton";

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
    <div>
      <ModalBackground />
      <ModalContainer>
        <CancelButtonContainer>
          <CancelImg
            src={remove}
            onClick={() => {
              setCompleteModalOpen(false);
            }}
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
              onClick={requestCompleteOnclick}
            >
              교환 완료하기
            </StCompleteBt>
          </ButtonContainer>
        </ContentsContainer>
      </ModalContainer>
    </div>
  );
};
export const StCompleteBt = styled(StBasicButton)`
  cursor: pointer;
  border: 2px solid black;
  border-radius: 5px;
  font-family: "Pretendard";
  font-weight: 700;
  color: black;
`;
export default TradeCompleteModal;
