import React, { useState } from "react";
import { styled } from "styled-components";
import { StBasicButton } from "../../styles/BasicButton";
import chat from "../../assets/icon/Chatting.png";
import { useNavigate } from "react-router-dom";
import RequestRejectModal from "./RequestRejectModal";
import TradeCompleteModal from "./TradeCompleteModal";

interface RequestStateButtonProps {
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  item: any;
}

const RequestStateButton: React.FC<RequestStateButtonProps> = ({
  requestState,
  setRequestState,
  item,
}) => {
  const navigate = useNavigate();
  const [rejectModalOpen, setRejectModalOpen] = useState<boolean>(false);
  const [completeModalOpen, setCompleteModalOpen] = useState<boolean>(false);
  const { request } = requestState;

  const rejectModalClick = () => {
    setRejectModalOpen(!rejectModalOpen);
  };

  const requestAcceptOnclick = () => {
    setRequestState({ ...requestState, request: "TRADING" });
  };

  const completeModalClick = () => {
    setCompleteModalOpen(!completeModalOpen);
    // setRequestState({ ...requestState, request: "교환완료" });
  };

  const receiveStateButton = () => {
    if (request === "REQUEST") {
      return (
        <RequestBtContainer>
          <StRejectBt buttonColor="white" onClick={rejectModalClick}>
            거절
          </StRejectBt>
          {rejectModalOpen && (
            <ModalContainer>
              <RequestRejectModal
                requestState={requestState}
                setRequestState={setRequestState}
                rejectModalOpen={rejectModalOpen}
                setRejectModalOpen={setRejectModalOpen}
              />
            </ModalContainer>
          )}
          <StAssureBt buttonColor="black" onClick={requestAcceptOnclick}>
            수락
          </StAssureBt>
        </RequestBtContainer>
      );
    }
    if (request === "TRADING") {
      return (
        <ButtonContainer>
          <StCompleteBt buttonColor="#EC8D49" onClick={completeModalClick}>
            완료
          </StCompleteBt>
          {completeModalOpen && (
            <ModalContainer>
              <TradeCompleteModal
                completeModalOpen={completeModalOpen}
                setCompleteModalOpen={setCompleteModalOpen}
                requestState={requestState}
                setRequestState={setRequestState}
              />
            </ModalContainer>
          )}
          <StChatBt
            buttonColor="white"
            onClick={() => {
              navigate("/chat");
            }}
          >
            채팅하기
            <Img src={chat} />
          </StChatBt>
        </ButtonContainer>
      );
    }
  };
  return <div>{receiveStateButton()}</div>;
};
const RequestBtContainer = styled.div`
  display: flex;
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const WaitingStateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 136px;
`;
export const StCompleteBt = styled(StBasicButton)`
  width: 80px;
  height: 44px;
  color: white;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
`;

const ModalContainer = styled.div`
  position: absolute;
`;

export const StChatBt = styled(StBasicButton)`
  width: 112px;
  height: 44px;
  border: 1px solid #d5d4d4;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
`;

const StDetailBt = styled(StBasicButton)`
  width: 176px;
  border: 1px solid #d5d4d4;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
`;

// const StDeleteBt = styled(StBasicButton)`
//   width: 176px;
//   border: 1px solid #d5d4d4;
//   font-family: "Pretendard";
//   font-size: 16px;
//   font-weight: 400;
//   margin-top: 70px;
// `;

const StAssureBt = styled(StBasicButton)`
  width: 80px;
  height: 44px;
  border-radius: 5px;
  border: 1px solid black;
  color: white;
`;

const StRejectBt = styled(StBasicButton)`
  width: 80px;
  height: 44px;
  border-radius: 5px;
  border: 1px solid #adadad;
`;
export default RequestStateButton;
