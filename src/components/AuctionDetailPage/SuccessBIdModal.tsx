import React, { useState } from "react";
import {
  ModalBackgroundBox,
  ModalContainer,
  ModalTitle,
  CloseBtn,
  ModalSubtitle,
  Wrapper,
  TextWrapper,
  Text,
  ButtonWrapper,
  StButton,
  MainContainer,
} from "./SellerPickModal";
import Paging from "../common/Paging/Paging";
import Close from "../../assets/icon/remove.png";
import { useMutation, useQuery } from "react-query";
import { getAuctionBidListApi, postAucEndApi, postSellerPicksApi } from "../../api/acution";
import EmptyPocket from "../common/EmptyPocket";
import AucBidCard from "./AucBidCard";
import BidCompleteModal from "./BidCompleteModal";
import { useRecoilValue } from "recoil";
import { pagination } from "../../store/pagination";
import LoadingSpinner from "../common/LoadingSpinner";
import { postMakeChatApi } from "../../api/chat";
import { goodsAuctionId } from "../../store/Auction";

const SuccessBIdModal = ({ sellerPicks, setSellerPicks, auctionId }: any) => {

  const currentPage = useRecoilValue(pagination);
  const { isLoading, error, data }: any = useQuery(
    ["auctionBid", currentPage, auctionId],
    () => getAuctionBidListApi(currentPage, auctionId),
    {
      refetchOnWindowFocus: false,
    }
  );
  console.log("입찰품 목록(낙찰)", data);

  const [wonBidChoice, setWonBidChoice] = useState({
    sureModal: false,
    chatModal: false,
  });
  const { sureModal, chatModal } = wonBidChoice;
  const [checkBox, setCheckBox] = useState<any[]>([]);
  const [bidSellerPick, setBidSellerPick] = useState<{ bidId: number[] }>({
    bidId: [],
  });
  console.log("확인", bidSellerPick);

  const onClickChoiceHandler = () => {
    setSellerPicks({ ...sellerPicks, SuccessBidModal: false });
    setWonBidChoice({ ...wonBidChoice, sureModal: true });
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ModalBackgroundBox onClick={() => setSellerPicks({ ...sellerPicks, successBidModal: false })} />
      <ModalContainer>
        <ModalTitle>
          WHO WON THE BID?
          <CloseBtn src={Close} onClick={() => setSellerPicks({ ...sellerPicks, successBidModal: false })} />
        </ModalTitle>
        <ModalSubtitle>최종 낙찰품 선택하기</ModalSubtitle>
        <Wrapper>
          <TextWrapper>
            <Text>- 최종 낙찰품을 선택하면 해당 물건을 입찰한 사용자와 물물교환을 진행할 수 있습니다.</Text>
            <Text>- 최종 낙찰품은 한 번 선택하면 바꿀 수 없습니다.</Text>
          </TextWrapper>
          <ButtonWrapper style={{ height: "48px" }}>
            {checkBox.length > 0 ? (
              <StButton buttonColor="#58ABF7" onClick={onClickChoiceHandler}>
                선택완료
              </StButton>
            ) : (
              <StButton buttonColor="#D5D4D4" style={{ cursor: "default", border: "none" }}>
                선택완료
              </StButton>
            )}
          </ButtonWrapper>
        </Wrapper>
        <MainContainer>
          {data?.data.content.length > 0 ? (
            data?.data.content.map((item: any) => {
              return (
                <AucBidCard
                  key={item.bidId}
                  item={item}
                  choice={true}
                  setCheckBox={setCheckBox}
                  checkBox={checkBox}
                  bidSellerPick={bidSellerPick}
                  setBidSellerPick={setBidSellerPick}
                />
              );
            })
          ) : (
            <EmptyPocket pocketStatus={3} />
          )}
        </MainContainer>
        {sureModal && (
          <BidCompleteModal
            wonBidChoice={wonBidChoice}
            setWonBidChoice={setWonBidChoice}
            sellerPicks={sellerPicks}
            setSellerPicks={setSellerPicks}
            modals={2}
            bidSellerPick={bidSellerPick}
            auctionId={auctionId}
          />
        )}
        {chatModal && (
          <BidCompleteModal
            wonBidChoice={wonBidChoice}
            setWonBidChoice={setWonBidChoice}
            sellerPicks={sellerPicks}
            setSellerPicks={setSellerPicks}
            modals={3}
          />
        )}
        <Paging />
      </ModalContainer>
    </div>
  );
};

export default SuccessBIdModal;
