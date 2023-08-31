import React from "react";
import { styled } from "styled-components";
import remove from "../../assets/icon/remove.png";
import { StBasicButton } from "../../styles/BasicButton";

interface AuctionCompleteModalProps {
  completeModalOpen: boolean;
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  setCompleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuctionCompleteModal: React.FC<AuctionCompleteModalProps> = ({
  completeModalOpen,
  requestState,
  setRequestState,
  setCompleteModalOpen,
}) => {
  const requestCompleteOnclick = () => {
    setRequestState({ ...requestState, request: "" });
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
            <StRejectButton
              buttonColor="#58ABF7"
              onClick={requestCompleteOnclick}
            >
              교환 완료하기
            </StRejectButton>
          </ButtonContainer>
        </ContentsContainer>
      </ModalContainer>
    </div>
  );
};

export const ModalBackground = styled.div`
  position: fixed;
  background-color: #000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.25;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 656px;
  height: 310px;
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  border: 2px solid black;
  border-radius: 10px;
`;

export const CancelButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
  margin-right: 20px;
`;

export const CancelImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 110%;
  text-align: center;
  width: 576px;

  border-bottom: 2px solid #d5d4d4;
  padding-bottom: 20px;
`;

export const Content = styled.div`
  color: #000;
  text-align: center;
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  padding-top: 30px;
`;

export const SubContent = styled.div`
  color: #595959;
  text-align: center;
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: 6px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const StRejectButton = styled(StBasicButton)`
  cursor: pointer;
  border: 2px solid black;
  border-radius: 5px;
  font-family: "Pretendard";
  font-weight: 700;
  color: white;
`;
export default AuctionCompleteModal;
