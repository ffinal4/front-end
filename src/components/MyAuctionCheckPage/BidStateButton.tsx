import React, { useState } from "react";
import { styled } from "styled-components";
import { StAuctionCompleteBt } from "./RequestStateButton";
import { Img, StChatBt } from "../TradeRequestPage/RequestStateButton";
import eye from "../../assets/icon/openeye.png";
import AuctionCompleteModal, {
  ButtonContainer,
  ModalContainer,
} from "./AuctionCompleteModal";
import chat from "../../assets/icon/Chatting.png";
import { useNavigate } from "react-router-dom";

interface BidStateButtonProps {
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  item: any;
}

const BidStateButton: React.FC<BidStateButtonProps> = ({
  requestState,
  setRequestState,
  item,
}) => {
  const navigate = useNavigate();
  const [completeModalOpen, setCompleteModalOpen] = useState<boolean>(false);
  const { request } = requestState;

  const completeModalClick = () => {
    setCompleteModalOpen(!completeModalOpen);
  };

  const stateButton = () => {
    // 입찰중
    if (request === "BIDDING") {
      return (
        <WaitingStateContainer>
          <Img src={eye} />
          낙찰을 기다리는 중...
        </WaitingStateContainer>
      );
    }

    // 입찰성공
    if (request === "DONE") {
      return (
        <ButtonContainer>
          <StAuctionCompleteBt
            buttonColor="#58ABF7"
            onClick={completeModalClick}
          >
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
  };

  return <div>{stateButton()}</div>;
};

const WaitingStateContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  margin-top: 20px;
`;

export default BidStateButton;
