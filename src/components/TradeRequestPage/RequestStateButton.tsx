import React, { useState } from "react";
import { styled } from "styled-components";
import { StBasicButton } from "../../styles/BasicButton";
import chat from "../../assets/icon/Chatting.png";
import { useNavigate } from "react-router-dom";
import RequestRejectModal from "./RequestRejectModal";
import TradeCompleteModal from "./TradeCompleteModal";
import { useMutation, useQueryClient } from "react-query";
import TradeAcceptButton from "./TradeAcceptButton";
import { postAcceptTradeApi } from "../../api/goods";
import { postMakeChatApi } from "../../api/chat";

interface RequestStateButtonProps {
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  item: any;
  data: any;
}

const RequestStateButton: React.FC<RequestStateButtonProps> = ({ requestState, setRequestState, item, data }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const newGoodsData = item?.goodsListResponseDtos[0].goodsId;
  const [rejectModalOpen, setRejectModalOpen] = useState<boolean>(false);
  const [completeModalOpen, setCompleteModalOpen] = useState<boolean>(false);
  const [requestGoods, setRequestGoods] = useState<{
    requestId: string | number[];
  }>({
    requestId: [],
  });
  const postChat = async () => {
    const postChatBody = {
      buyerId: item.goodsListResponseDtos[0].userId,
    };

    try {
      const res = await postMakeChatApi(item.goodsListResponseDto.goodsId, postChatBody);
      if (res.status == 200) {
        const res = await postMakeChatApi(item.goodsListResponseDto.goodsId, postChatBody);
        console.log("채팅 생성 성공", res);
      }
    } catch (error) {
      console.log("채팅 생성에러", error);
    }
  };

  // 교환요청 수락api
  const mutation = useMutation(() => postAcceptTradeApi(item.goodsListResponseDto.goodsId, requestGoods), {
    onSuccess: (res) => {
      console.log("교환요청수락성공!", res);
      queryClient.invalidateQueries("getTradeReceiveRequestData");
      postChat();
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
        <ButtonContainer style={{ marginTop: "40px" }}>
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
