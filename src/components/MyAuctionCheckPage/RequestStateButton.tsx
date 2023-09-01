import React, { useState } from "react";
import { StBasicButton } from "../../styles/BasicButton";
import { styled } from "styled-components";
import {
  ButtonContainer,
  Img,
  StChatBt,
  WaitingStateContainer,
} from "../TradeRequestPage/RequestStateButton";
import chat from "../../assets/icon/Chatting.png";
import eye from "../../assets/icon/openeye.png";
import { useNavigate } from "react-router-dom";
import AuctionCompleteModal from "./AuctionCompleteModal";
import SuccessBIdModal from "../AuctionDetailPage/SuccessBIdModal";

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
  const [completeModalOpen, setCompleteModalOpen] = useState<boolean>(false);
  const [bidSelectModal, setBidSelectModal] = useState<boolean>(false);
  const [sellerPickModal, setSellerPickModal] = useState<boolean>(false);
  const { request } = requestState;
  const testListResponseDto = item?.testListResponseDto;

  const completeModalClick = () => {
    setCompleteModalOpen(!completeModalOpen);
  };

  const sellerPickOnclick = () => {
    setSellerPickModal(!sellerPickModal);
    // setRequestState({ ...requestState, request: "경매중" });
  };

  const bidGoodsSelectOnclick = () => {
    setBidSelectModal(!bidSelectModal);
  };

  const stateButton = () => {
    // 경매중

    if (request === "AUCTION") {
      return (
        <div>
          <StAuctionIngBt buttonColor="#CBE4FB" onClick={sellerPickOnclick}>
            Seller's Pick
          </StAuctionIngBt>
          {sellerPickModal && <SuccessBIdModal />}
        </div>
      );
    }

    // 경맴중 - 입찰부분

    // if (request === testListResponseDto.auctionStatus) {
    //   return (
    //     <WaitingStateContainer>
    //       <Img src={eye} />
    //       낙찰을 기다리는 중...
    //     </WaitingStateContainer>
    //   );
    // }

    // 경매종료

    if (request === "END") {
      return (
        <div>
          <StAuctionGoodsSelectBt
            buttonColor="#58ABF7"
            onClick={bidGoodsSelectOnclick}
          >
            입찰품 선택
          </StAuctionGoodsSelectBt>
          {bidSelectModal && <SuccessBIdModal />}
        </div>
      );
    }

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
    // 교환완료
    if (request === "DONE") {
      return (
        <StAuctionTradeCompleteBt buttonColor="white">
          자세히보기
        </StAuctionTradeCompleteBt>
      );
    }
  };

  return <div>{stateButton()}</div>;
};

const StAuctionIngBt = styled(StBasicButton)`
  border: 1px solid black;
`;

const StAuctionCompleteBt = styled(StBasicButton)`
  color: white;
  width: 80px;
`;

const StAuctionGoodsSelectBt = styled(StBasicButton)`
  color: white;
`;
const StAuctionTradeCompleteBt = styled(StBasicButton)`
  border: 1px solid #d5d4d4;
`;

// const StAuctionfailBt = styled(StBasicButton)`
//   border: 1px solid #d5d4d4;
//   margin-top: 80px;
// `;

const ModalContainer = styled.div`
  position: absolute;
`;
export default RequestStateButton;
