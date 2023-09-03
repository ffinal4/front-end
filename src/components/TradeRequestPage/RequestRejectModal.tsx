import React, { useEffect } from "react";
import remove from "../../assets/icon/remove.png";
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
import { useMutation } from "react-query";
import { deleteRefuseTradeApi } from "../../api/goods";

interface RequestRejectModalProps {
  rejectModalOpen: boolean;
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  setRejectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  item: any;
  requestGoods: any;
  setRequestGoods: any;
  data: any;
}

const RequestRejectModal: React.FC<RequestRejectModalProps> = ({
  rejectModalOpen,
  requestState,
  setRejectModalOpen,
  setRequestState,
  item,
  data,
  requestGoods,
  setRequestGoods,
}) => {
  useEffect(() => {
    const goodsData = item?.goodsListResponseDtos.map(
      (item: any) => item?.goodsId
    );
    setRequestGoods({ ...requestGoods, requestId: goodsData });
  }, [data]);
  // 교환거절 통신

  const refuseGoodsData = item?.goodsListResponseDtos[0].goodsId;

  console.log(refuseGoodsData, "거절");
  const deleteMutate = useMutation(() => deleteRefuseTradeApi(requestGoods), {
    onSuccess: (res) => {
      console.log("교환거절성공!", res);
      setRequestState({ ...requestState, request: "CANCEL" });
    },
  });

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
            <StCompleteBt
              buttonColor="#FFCA64"
              onClick={() => {
                deleteMutate.mutate();
              }}
            >
              거절하기
            </StCompleteBt>
          </ButtonContainer>
        </ContentsContainer>
      </ModalContainer>
    </div>
  );
};

export default RequestRejectModal;
