import React, { useState } from "react";
import { styled } from "styled-components";
import { StBasicButton } from "../../styles/BasicButton";
import chat from "../../assets/icon/Chatting.png";
import { useNavigate } from "react-router-dom";
import RequestRejectModal from "./RequestRejectModal";
import TradeCompleteModal from "./TradeCompleteModal";
import { useMutation } from "react-query";
import TradeAcceptButton from "./TradeAcceptButton";
import { postAcceptTradeApi } from "../../api/goods";

interface RequestStateButtonProps {
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  item: any;
  data: any;
}

const RequestStateButton: React.FC<RequestStateButtonProps> = ({
  requestState,
  setRequestState,
  item,
  data,
}) => {
  const navigate = useNavigate();
  const newGoodsData = item?.goodsListResponseDtos[0].goodsId;
  const [rejectModalOpen, setRejectModalOpen] = useState<boolean>(false);
  const [completeModalOpen, setCompleteModalOpen] = useState<boolean>(false);
  const { request } = requestState;
  const [requestGoods, setRequestGoods] = useState<{
    requestId: string | number[];
  }>({
    requestId: [],
  });
  // 교환요청 수락api
  const mutation = useMutation(() => postAcceptTradeApi(requestGoods), {
    onSuccess: (res) => {
      console.log("교환요청수락성공!", res);
      setRequestState({ ...requestState, request: "TRADING" });
    },
  });
  console.log(newGoodsData, "id");
  console.log(requestGoods, "요청수락물건아이디");

  const rejectModalClick = () => {
    setRejectModalOpen(!rejectModalOpen);
  };

  const completeModalClick = () => {
    setCompleteModalOpen(!completeModalOpen);
  };

  const receiveStateButton = () => {
    if (item?.requestStatus === "REQUEST") {
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
                item={item}
                data={data}
                requestGoods={requestGoods}
                setRequestGoods={setRequestGoods}
              />
            </ModalContainer>
          )}
          <TradeAcceptButton
            data={data}
            requestState={requestState}
            setRequestState={setRequestState}
            requestGoods={requestGoods}
            setRequestGoods={setRequestGoods}
            item={item}
          />
          <StAssureBt buttonColor="black" onClick={() => mutation.mutate()}>
            수락
          </StAssureBt>
        </RequestBtContainer>
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
                completeModalOpen={completeModalOpen}
                setCompleteModalOpen={setCompleteModalOpen}
                requestState={requestState}
                setRequestState={setRequestState}
                requestGoods={requestGoods}
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
  justify-content: center;
  align-items: center;
  margin-top: 40px;
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
