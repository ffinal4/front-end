import React, { useState } from "react";
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
import { StCompleteBt } from "../TradeRequestPage/TradeCompleteModal";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { postAucEndApi } from "../../api/acution";
import { useRecoilValue } from "recoil";
import { makeChatAuctionBuyerId, makeChatAuctionGoodsId } from "../../store/chatting";
import { postMakeChatApi } from "../../api/chat";

const BidCompleteModal = ({
  setBidCheck,
  setConditional,
  conditional,
  data,
  modals,
  wonBidChoice,
  setWonBidChoice,
  setSellerPicks,
  sellerPicks,
  auctionId,
  bidSellerPick,
}: any) => {
  const queryClient = useQueryClient();
  const aucBuyerId = useRecoilValue(makeChatAuctionBuyerId);
  const aucGoodsId = useRecoilValue(makeChatAuctionGoodsId);
  console.log("aucBuyerId", aucBuyerId);
  console.log("aucGoodsId", aucGoodsId);

  const navigate = useNavigate();
  const postChat = async () => {
    const postChatBody = {
      buyerId: aucBuyerId,
    };
    try {
      const res = await postMakeChatApi(
        aucGoodsId, // 내물품goodsid값
        postChatBody
      );
      if (res.status == 200) {
      }
    } catch (error) {
    }
  };

  const mutation = useMutation(() => postAucEndApi(bidSellerPick, auctionId), {
    onSuccess: (res) => {
      setWonBidChoice({ ...wonBidChoice, sureModal: false });
      setWonBidChoice({ ...wonBidChoice, chatModal: true });
      postChat();
    },
  });

  const onClickCheckBtnHandler = () => {
    setBidCheck(false);
    setConditional({ ...conditional, bid: false });
    navigate(`/auctiondetail/${data?.data.info.auctionResponseDto.auctionId}`);
  };
  const onClickSureBtnHandler = () => {
    mutation.mutate();
  };
  const onClickSuccessBidBtnHandler = () => {
    setWonBidChoice({ ...wonBidChoice, chatModal: false });
    navigate("/chat");
  };

  const modalComponent = () => {
    if (modals === 1) {
      return (
        <div>
          <CancelButtonContainer>
            <CancelImg
              src={remove}
              onClick={() => {
                setBidCheck(false);
              }}
            />
          </CancelButtonContainer>
          <ContentsContainer>
            <Title>GAME ON!</Title>
            <Content>입찰을 완료했습니다.</Content>
            <SubContent>내 물건이 마음에 든다면 경매자가 Seller’s Pick으로 지정할 거예요!</SubContent>
            <ButtonContainer>
              <StCompleteBt buttonColor="#58ABF7" style={{ color: "#FCFCFC" }} onClick={onClickCheckBtnHandler}>
                확인
              </StCompleteBt>
            </ButtonContainer>
          </ContentsContainer>
        </div>
      );
    } else if (modals === 2) {
      return (
        <div>
          <CancelButtonContainer>
            <CancelImg
              src={remove}
              onClick={() => {
                setWonBidChoice({ ...wonBidChoice, sureModal: false });
              }}
            />
          </CancelButtonContainer>
          <ContentsContainer>
            <Title>ARE YOU SURE?</Title>
            <Content>선택한 물건을 최종 낙찰하시겠어요?</Content>
            <SubContent>한 번 낙찰한 경매는 다시 되돌릴 수 없어요.</SubContent>
            <ButtonContainer>
              <StCompleteBt buttonColor="#58ABF7" style={{ color: "#FCFCFC" }} onClick={onClickSureBtnHandler}>
                낙찰하기
              </StCompleteBt>
            </ButtonContainer>
          </ContentsContainer>
        </div>
      );
    } else {
      return (
        <div>
          <CancelButtonContainer>
            <CancelImg
              src={remove}
              onClick={() => {
                setWonBidChoice({ ...wonBidChoice, chatModal: false });
                setSellerPicks({ ...sellerPicks, successBidModal: false });
                navigate("/auctioncheck");
                queryClient.invalidateQueries("getMyAuctionCheckData");
              }}
            />
          </CancelButtonContainer>
          <ContentsContainer>
            <Title>SUCCESSFUL BID!</Title>
            <Content>최종 낙찰되었습니다.</Content>
            <SubContent>지금 바로 상대방과 채팅을 시작해 보세요!</SubContent>
            <ButtonContainer>
              <StCompleteBt buttonColor="#58ABF7" style={{ color: "#FCFCFC" }} onClick={onClickSuccessBidBtnHandler}>
                채팅하기
              </StCompleteBt>
            </ButtonContainer>
          </ContentsContainer>
        </div>
      );
    }
  };

  return (
    <div>
      <ModalBackground />
      <ModalContainer>{modalComponent()}</ModalContainer>
    </div>
  );
};

export default BidCompleteModal;
