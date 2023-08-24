import React from "react";
import { StBasicButton } from "../../styles/BasicButton";
import { styled } from "styled-components";

interface RequestStateButtonProps {
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
}

const RequestStateButton: React.FC<RequestStateButtonProps> = ({
  requestState,
  setRequestState,
}) => {
  const { request } = requestState;

  const stateButton = () => {
    if (request === "경매중") {
      return (
        <StAuctionIngBt buttonColor="#CBE4FB">Seller's Pick</StAuctionIngBt>
      );
    }
    if (request === "경매종료") {
      return (
        <StAuctionCompleteBt buttonColor="#58ABF7">
          입찰품 선택
        </StAuctionCompleteBt>
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
  font-weight: 700;
`;

const StAuctionTradeCompleteBt = styled(StBasicButton)`
  border: 1px solid #d5d4d4;
`;

const StAuctionfailBt = styled(StBasicButton)`
  border: 1px solid #d5d4d4;
  margin-top: 80px;
`;
export default RequestStateButton;
