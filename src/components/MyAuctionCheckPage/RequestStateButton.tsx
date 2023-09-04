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
import SellerPickModal from "../AuctionDetailPage/SellerPickModal";

interface RequestStateButtonProps {
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  item: any;
  setDto: React.Dispatch<React.SetStateAction<any>>;
  setSellerPicks: React.Dispatch<React.SetStateAction<{ pickModal: boolean, successBidModal: boolean }>>;
  sellerPicks: { pickModal: boolean, successBidModal: boolean };
}

const RequestStateButton: React.FC<RequestStateButtonProps> = ({
  requestState,
  setRequestState,
  item,
  setDto,
  setSellerPicks,
  sellerPicks
}) => {
  const navigate = useNavigate();
  const [completeModalOpen, setCompleteModalOpen] = useState<boolean>(false);
  const [bidSelectModal, setBidSelectModal] = useState<boolean>(false);
  const { request } = requestState;
  const testListResponseDto = item?.testListResponseDto;

  const completeModalClick = () => {
    setCompleteModalOpen(!completeModalOpen);
  };

  const sellerPickOnclick = () => {
    setDto(item?.testListResponseDto.auctionId);
    setSellerPicks({...sellerPicks, pickModal: true});
    // setRequestState({ ...requestState, request: "경매중" });
  };

  const bidGoodsSelectOnclick = () => {
    setDto(item?.testListResponseDto.auctionId);
    setSellerPicks({...sellerPicks, successBidModal: true});
  };

  const stateButton = () => {
    // 경매중

    if (testListResponseDto.auctionStatus === "AUCTION") {
      return (
        <div>
          <StAuctionIngBt buttonColor="#CBE4FB" onClick={sellerPickOnclick}>
            Seller's Pick
          </StAuctionIngBt>
        </div>
      );
    }

    if (testListResponseDto.auctionStatus === "END") {
      if (item?.bidListResponseDtos.length > 0) {
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
      } else {
        if (testListResponseDto.bidCount === 0) {
          return
        } else {
          return (
            <div>
              <StAuctionGoodsSelectBt
                buttonColor="#58ABF7"
                onClick={bidGoodsSelectOnclick}
              >
                입찰품 선택
              </StAuctionGoodsSelectBt>
            </div>
          );
        };
      };
    }

    // if (request === "DONE") {
    //   return (
    //     <ButtonContainer>
    //       <StAuctionCompleteBt
    //         buttonColor="#58ABF7"
    //         onClick={completeModalClick}
    //       >
    //         완료
    //       </StAuctionCompleteBt>
    //       {completeModalOpen && (
    //         <ModalContainer>
    //           <AuctionCompleteModal
    //             completeModalOpen={completeModalOpen}
    //             setCompleteModalOpen={setCompleteModalOpen}
    //             requestState={requestState}
    //             setRequestState={setRequestState}
    //           />
    //         </ModalContainer>
    //       )}
    //       <StChatBt
    //         buttonColor="white"
    //         onClick={() => {
    //           navigate("/chat");
    //         }}
    //       >
    //         채팅하기
    //         <Img src={chat} />
    //       </StChatBt>
    //     </ButtonContainer>
    //   );
    // }
    // 교환완료
    if (testListResponseDto.auctionStatus === "DONE") {
      return (
        <StAuctionTradeCompleteBt buttonColor="white">
          자세히보기
        </StAuctionTradeCompleteBt>
      );
    }
  };

  return <div>{stateButton()}</div>;
};

export const StAuctionIngBt = styled(StBasicButton)`
  border: 1px solid black;
`;

export const StAuctionCompleteBt = styled(StBasicButton)`
  color: white;
  width: 80px;
`;

export const StAuctionGoodsSelectBt = styled(StBasicButton)`
  color: white;
`;
export const StAuctionTradeCompleteBt = styled(StBasicButton)`
  border: 1px solid #d5d4d4;
`;

// const StAuctionfailBt = styled(StBasicButton)`
//   border: 1px solid #d5d4d4;
//   margin-top: 80px;
// `;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export default RequestStateButton;
