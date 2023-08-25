import React, { useState } from "react";
import { StBasicButton } from "../../styles/BasicButton";
import { styled } from "styled-components";
import {
  ButtonContainer,
  Img,
  StChatBt,
} from "../TradeRequestPage/RequestStateButton";
import chat from "../../assets/icon/Chatting.png";
import { useNavigate } from "react-router-dom";
import AuctionCompleteModal from "./AuctionCompleteModal";

interface RequestStateButtonProps {
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
}

const RequestStateButton: React.FC<RequestStateButtonProps> = ({
  requestState,
  setRequestState,
}) => {
  const navigate = useNavigate();
  const [completeModalOpen, setCompleteModalOpen] = useState<boolean>(false);
  const { request } = requestState;

  const completeModalClick = () => {
    setCompleteModalOpen(!completeModalOpen);
  };
  const stateButton = () => {
    if (request === "경매중") {
      return (
        <StAuctionIngBt buttonColor="#CBE4FB">Seller's Pick</StAuctionIngBt>
      );
    }
    if (request === "경매종료") {
      return (
        <ButtonContainer>
          <StAuctionCompleteBt buttonColor="black" onClick={completeModalClick}>
            완료
          </StAuctionCompleteBt>
          {completeModalOpen && (
            <ModalContainer>
              <AuctionCompleteModal
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
    if (request === "교환완료") {
      return (
        <StAuctionTradeCompleteBt buttonColor="white">
          자세히보기
        </StAuctionTradeCompleteBt>
      );
    }
    if (request === "입찰실패") {
      return <StAuctionfailBt buttonColor="white">기록 삭제</StAuctionfailBt>;
    }
  };
  return <div>{stateButton()}</div>;
};

const StAuctionIngBt = styled(StBasicButton)`
  border: 1px solid black;
`;

const StAuctionCompleteBt = styled(StBasicButton)`
  color: white;
  border: 2px solid black;

  width: 80px;
`;

const StAuctionTradeCompleteBt = styled(StBasicButton)`
  border: 1px solid #d5d4d4;
`;

const StAuctionfailBt = styled(StBasicButton)`
  border: 1px solid #d5d4d4;
  margin-top: 80px;
`;

const ModalContainer = styled.div`
  position: absolute;
`;
export default RequestStateButton;
