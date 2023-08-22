import React from "react";
import { styled } from "styled-components";
import remove from "../../assets/icon/remove.png";
import { StBasicButton } from "../../styles/BasicButton";

interface RequestRejectModalProps {
  rejectModalOpen: boolean;
  setRejectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RequestRejectModal: React.FC<RequestRejectModalProps> = ({
  rejectModalOpen,
  setRejectModalOpen,
}) => {
  return (
    <ModalContent>
      <CancelButtonContainer>
        <CancelImg
          src={remove}
          onClick={() => {
            setRejectModalOpen(false);
          }}
        />
      </CancelButtonContainer>

      <Title>ARE YOU SURE?</Title>
      <Content>정말 이 교환을 거절하시겠어요?</Content>

      <SubContent>한 번 거절한 물건은 다시 교환 신청 할 수 없어요.</SubContent>
      <ButtonContainer>
        <StRejectButton buttonColor="#FFCA64">거절하기</StRejectButton>
      </ButtonContainer>
    </ModalContent>
  );
};

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 656px;
  height: 312px;
  background-color: rgb(255, 255, 255);
  padding: 24px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const CancelButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;
export const Title = styled.div`
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 110%;
  text-align: center;
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

export const StRejectButton = styled(StBasicButton)`
  cursor: pointer;
  border: 2px solid black;
  border-radius: 5px;
  font-family: "Pretendard";
  font-weight: 700;
`;

export const CancelImg = styled.img`
  cursor: pointer;
`;

export default RequestRejectModal;
