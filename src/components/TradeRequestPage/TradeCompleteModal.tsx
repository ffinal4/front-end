import React, { useState } from "react";
import { styled } from "styled-components";
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
import { StBasicButton } from "../../styles/BasicButton";
import { useMutation, useQueryClient } from "react-query";
import { completeTradeApi } from "../../api/goods";

interface TradeCompleteModalProps {
  completeModalOpen: boolean;
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  setCompleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  requestGoods: any;
  item: any;
}

const TradeCompleteModal: React.FC<TradeCompleteModalProps> = ({
  completeModalOpen,
  requestState,
  requestGoods,
  setCompleteModalOpen,
  setRequestState,
  item,
}) => {
  const queryClient = useQueryClient();
  const newGoodsData = item?.goodsListResponseDtos.map((item: any) => {
    return item.goodsId;
  });

  const [completeGoods, setCompleteGoods] = useState<{
    requestId: string | number[];
  }>({
    requestId: newGoodsData,
  });

  // 교환완료 api
  const completeMutation = useMutation(() => completeTradeApi(completeGoods), {
    onSuccess: (res) => {
      console.log("교환완료 성공", res);
      queryClient.invalidateQueries("getTradeReceiveRequestData");
    },
  });
  console.log(newGoodsData, "교환완료goodsId들");
  console.log(completeGoods, "교환완료requestId");

  return (
    <div>
      <ModalBackground />
      <ModalContainer>
        <CancelButtonContainer>
          <CancelImg
            src={remove}
            onClick={() => {
              setCompleteModalOpen(false);
            }}
          />
        </CancelButtonContainer>
        <ContentsContainer>
          <Title>ARE YOU SURE?</Title>
          <Content>거래가 완료되었나요?</Content>
          <SubContent>
            한 번 완료한 교환은 교환 완료 상태가 되며 다시 되돌릴 수 없어요.
          </SubContent>
          <ButtonContainer>
            <StCompleteBt
              buttonColor="#FFCA64"
              onClick={() => {
                completeMutation.mutate();
              }}
            >
              교환 완료하기
            </StCompleteBt>
          </ButtonContainer>
        </ContentsContainer>
      </ModalContainer>
    </div>
  );
};
export const StCompleteBt = styled(StBasicButton)`
  cursor: pointer;
  border: 2px solid black;
  border-radius: 5px;
  font-family: "Pretendard";
  font-weight: 700;
  color: black;
`;
export default TradeCompleteModal;
