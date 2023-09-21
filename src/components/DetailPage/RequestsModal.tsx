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
  PocketListContainer,
  NotRatingProductWrapper,
  GoodsConditionContainer,
  GoodsCondition,
  Circle,
  NotRatingProduct,
  DoneContainer,
} from "../AuctionDetailPage/BidModal";
import JoinBidCard from "../AuctionDetailPage/JoinBidCard";
import Paging from "../common/Paging/Paging";
import { useRecoilValue } from "recoil";
import { pagination } from "../../store/pagination";
import { useMutation, useQuery } from "react-query";
import { getMyPocketApi, postRequestsApi } from "../../api/goods";
import Close from "../../assets/icon/remove.png";
import EmptyPocket from "../common/EmptyPocket";
import { styled } from "styled-components";

const RequestsModal = ({ productData, conditional, setConditional }: any) => {
  const currentPage = useRecoilValue(pagination);

  const { isError, isLoading, data, error }: any = useQuery(
    ["bidPickData", currentPage],
    () => getMyPocketApi(currentPage, false),
    {
      refetchOnWindowFocus: false,
    }
  );

  const newProductData = productData.data.info.goodsResponseDtoList.goodsId;
  const newData = data?.data.info.goodsListResponseDto;

  const [checkBox, setCheckBox] = useState<any[]>([]);
  const [ratingPrice, setRatingPrice] = useState<number>(0);
  const [myPocketGoods, setMyPocketGoods] = useState<{
    goodsId: string | number[];
  }>({
    goodsId: [],
  });

  const mutation = useMutation(() => postRequestsApi(myPocketGoods, newProductData), {
    onSuccess: (res) => {
      setConditional({ ...conditional, bid: false });
      window.location.replace("/traderequest");
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ModalBackgroundBox onClick={() => setConditional(false)} />
      <ModalContainer style={{ maxHeight: "868px" }}>
        <ModalTitle>
          PICK YOURS
          <CloseBtn src={Close} onClick={() => setConditional(false)} />
        </ModalTitle>
        <ModalSubtitle>교환 신청할 물건 선택</ModalSubtitle>
        <Wrapper>
          <TextWrapper>
            <Text>- 1개 또는 2개 이상의 물건을 주머니로 묶어서 교환 신청할 수 있습니다.</Text>
            <Text>- 현재 경매 중이거나 거래 중인 물건은 선택할 수 없습니다.</Text>
          </TextWrapper>
          <ButtonWrapper>
            {checkBox.length > 0 ? (
              <StButton
                buttonColor="#FFCA64"
                style={{
                  cursor: "pointer",
                  border: "2px solid #222020",
                  color: "#222020",
                  fontWeight: "700",
                }}
                onClick={() => mutation.mutate()}
              >
                교환요청
              </StButton>
            ) : (
              <StButton buttonColor="#D5D4D4">교환요청</StButton>
            )}
          </ButtonWrapper>
        </Wrapper>
        <PocketListContainer>
          {newData.content.length > 0 ? (
            newData.content.map((item: any) => {
              return (
                <NotRatingProductWrapper>
                  <JoinBidCard
                    key={item.goodsId}
                    checkBox={checkBox}
                    setCheckBox={setCheckBox}
                    setMyPocketGoods={setMyPocketGoods}
                    myPocketGoods={myPocketGoods}
                    ratingPrice={ratingPrice}
                    setRatingPrice={setRatingPrice}
                    item={item}
                  />
                  {item?.goodsStatus !== "ONSALE" &&
                    item?.goodsStatus !== "REQUEST" &&
                    item?.goodsStatus !== "CANCEL" &&
                    (item?.goodsStatus === "BIDDING" ||
                    item?.goodsStatus === "ONAUCTION" ||
                    item?.goodsStatus === "END" ||
                    item?.goodsStatus === "AUCTION" ? (
                      <div>
                        <NotRatingProduct />
                        <GoodsConditionContainer />
                        <GoodsCondition>
                          <Circle />
                          경매중
                        </GoodsCondition>
                      </div>
                    ) : item?.goodsStatus === "END"
                      || item?.goodsStatus === "DONE"
                      || item?.goodsStatus === "SOLDOUT"
                        ? (
                          <DoneContainer>거래완료</DoneContainer>
                        ) : (
                          <div>
                            <NotRatingProduct />
                            <GoodsConditionContainer />
                            <GoodsCondition>
                              <Circle style={{ backgroundColor: "#EC8D49" }} />
                              거래중
                            </GoodsCondition>
                          </div>
                        ))}
                </NotRatingProductWrapper>
              );
            })
          ) : (
            <EmptyPocket pocketStatus={0} />
          )}
        </PocketListContainer>
        <Paging />
      </ModalContainer>
    </div>
  );
};

export default RequestsModal;
