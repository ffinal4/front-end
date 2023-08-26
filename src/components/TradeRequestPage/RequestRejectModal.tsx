import React from "react";
import { styled } from "styled-components";
import remove from "../../assets/icon/remove.png";
import { StBasicButton } from "../../styles/BasicButton";
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

// const ModalBackgroundBox = styled.div`
//   background-color: gray;
//   width: 100%;
//   height: 100%;
//   top: 0px;
//   left: 0px;

//   opacity: 50%;
// `;
// export const ModalContent = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 656px;
//   height: 312px;
//   background-color: rgb(255, 255, 255);
//   padding: 24px;
//   border: 2px solid black;
//   border-radius: 10px;
//   z-index: 9999;
// `;

// export const CancelButtonContainer = styled.div`
//   display: flex;
//   justify-content: end;
// `;
// export const Title = styled.div`
//   font-family: "Lemon/Milk", sans-serif;
//   font-size: 40px;
//   font-weight: 700;
//   line-height: 110%;
//   text-align: center;
//   border-bottom: 2px solid #d5d4d4;

//   padding-bottom: 20px;
// `;

// export const Content = styled.div`
//   color: #000;
//   text-align: center;
//   font-family: "Pretendard";
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 150%;
//   padding-top: 30px;
// `;

// export const SubContent = styled.div`
//   color: #595959;
//   text-align: center;
//   font-family: "Pretendard";
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 150%;
//   margin-top: 6px;
// `;

// export const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 30px;
// `;

// export const StRejectButton = styled(StBasicButton)`
//   cursor: pointer;
//   border: 2px solid black;
//   border-radius: 5px;
//   font-family: "Pretendard";
//   font-weight: 700;
// `;

// export const CancelImg = styled.img`
//   cursor: pointer;
// `;

export default RequestRejectModal;
