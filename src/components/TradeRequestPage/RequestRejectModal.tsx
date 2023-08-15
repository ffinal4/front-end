import React from "react";
import { styled } from "styled-components";

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
        <CancelButton
          onClick={() => {
            setRejectModalOpen(false);
          }}
        />
      </CancelButtonContainer>

      <Title>ARE YOU SURE?</Title>
      <Content>정말 이 교환을 거절하시겠어요?</Content>

      <SubContent>한 번 거절한 물건은 다시 교환 신청 할 수 없어요.</SubContent>
      <ButtonContainer>
        <RejectButton>거절하기</RejectButton>
      </ButtonContainer>
    </ModalContent>
  );
};

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 656px;
  height: 312px;
  background-color: rgb(255, 255, 255);
  padding: 24px;
  border: 1px solid black;
`;

const CancelButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;
const Title = styled.div`
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 110%;
  text-align: center;
  border-bottom: 4px solid black;

  padding-bottom: 20px;
`;

const Content = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  padding-top: 30px;
`;

const SubContent = styled.div`
  color: #595959;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: 6px;
`;

const ButtonContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const RejectButton = styled.div`
  cursor: pointer;
  border: 1px solid black;
  width: 176px;
  height: 44px;
  padding: 10px 0px;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const CancelButton = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: #d9d9d9;
  display: flex;
`;
export default RequestRejectModal;
