import React, { useState } from "react";
import { styled } from "styled-components";
import {
  ButtonContainer,
  Img,
  StChatBt,
  StCompleteBt,
} from "./RequestStateButton";
import TradeCompleteModal from "./TradeCompleteModal";
import { ModalContainer } from "../MyAuctionCheckPage/AuctionCompleteModal";
import { useNavigate } from "react-router-dom";
import chat from "../../assets/icon/Chatting.png";
import eye from "../../assets/icon/openeye.png";

interface SendRequestButtonProps {
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  item: any;
  data: any;
}

const SendRequestButton: React.FC<SendRequestButtonProps> = ({
  requestState,
  setRequestState,
  item,
  data,
}) => {
  const navigate = useNavigate();
  const [rejectModalOpen, setRejectModalOpen] = useState<boolean>(false);
  const [completeModalOpen, setCompleteModalOpen] = useState<boolean>(false);
  const { request } = requestState;
  const [requestGoods, setRequestGoods] = useState<{
    requestId: string | number[];
  }>({
    requestId: [],
  });

  const rejectModalClick = () => {
    setRejectModalOpen(!rejectModalOpen);
  };

  const completeModalClick = () => {
    setCompleteModalOpen(!completeModalOpen);
    // setRequestState({ ...requestState, request: "교환완료" });
  };

  const sendStateButton = () => {
    if (item?.requestStatus === "REQUEST") {
      return (
        <WaitingStateContainer>
          <Img src={eye} />
          상대방의 응답 기다리는 중...
        </WaitingStateContainer>
      );
    }
    if (item?.requestStatus === "TRADING") {
      return (
        <ButtonContainer>
          <StCompleteBt buttonColor="#EC8D49" onClick={completeModalClick}>
            완료
          </StCompleteBt>
          {completeModalOpen && (
            <ModalContainer>
              <TradeCompleteModal
                item={item}
                requestGoods={requestGoods}
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
  return <div>{sendStateButton()}</div>;
};

const WaitingStateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 52px;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`;
export default SendRequestButton;
