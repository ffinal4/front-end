import React, { useState } from 'react'
import { styled } from 'styled-components';
import { StBasicButton } from '../../styles/BasicButton';
import JoinBidCard from '../AuctionDetailPage/JoinBidCard';
import Paging from '../common/Paging/Paging';
import Close from '../../assets/icon/remove.png'
import { useMutation, useQuery } from 'react-query';
import { getMyPocketApi } from '../../api/goods';
import { postAuctionBidApi } from '../../api/acution';
import { useRecoilValue } from 'recoil';
import { pagination } from '../../store/pagination';
import BidCompleteModal from './BidCompleteModal';

const BidModal = ({ conditional, setConditional, productData }: any) => {
  const currentPage = useRecoilValue(pagination);

    const { isError, isLoading, data, error } : any = useQuery(["bidPickData", currentPage], () => getMyPocketApi(currentPage), {
        refetchOnWindowFocus: false,
    });
    const newAuctionId = productData.data.info.auctionResponseDto.auctionId
    const newData = data?.data.info.goodsListResponseDto.content;

  console.log("내주머니입찰데이터", newAuctionId);
  console.log("내주머니입찰데이터", data);

    const [bidCheck, setBidCheck] = useState(false);
    const [checkBox, setCheckBox] = useState<any[]>([]);
    const [ratingPrice, setRatingPrice] = useState<number>(0);
    const [myPocketGoods, setMyPocketGoods] = useState<{ goodsId: string | number[] }>({
        goodsId: [],
    });

    const mutation = useMutation(() => postAuctionBidApi(myPocketGoods, newAuctionId), {
        onSuccess: (res) => {
            console.log("입찰성공!", res);
        },
    });

    const onClickBidHandler = () => {
      mutation.mutate();
      setBidCheck(true);
    };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
        <ModalBackgroundBox onClick={() => setConditional({ ...conditional, bid: false })}/>
        <ModalContainer>
            <ModalTitle>
                JOIN BID!
                <CloseBtn
                    src={Close}
                    onClick={() => setConditional({...conditional, bid: false})}
                />
            </ModalTitle>
            <ModalSubtitle>입찰하기</ModalSubtitle>
            <Wrapper>
                <TextWrapper>
                    <Text>- 1개 또는 2개 이상의 물건을 주머니로 묶어서 입찰 할 수 있습니다.</Text>
                    <Text>- 2개 이상의 물건을 주머니로 묶어서 입찰 할 경우, 경매에서</Text>
                    <Text>- 경매자가 정해놓은 입찰 제한 레이팅 이상의 물건만 선택 할 수 있습니다.</Text>
                    <Text>- 현재 거래중이거나 다른 경매의 입찰품인 물건은 선택 할 수 없습니다.</Text>
                </TextWrapper>
                <ButtonWrapper>
                    <RatingPoint>
                        <Text style={{color: "#222020"}}>선택
                        된 총 레이팅 점수</Text>
                        {ratingPrice.toLocaleString()}
                    </RatingPoint>
                    {(ratingPrice >= productData.data.info.auctionResponseDto.lowPrice)
                        ? <StButton
                            buttonColor='#58ABF7'
                            style={{cursor: "pointer", border: "2px solid #222020"}}
                            onClick={onClickBidHandler}
                        >입찰하기</StButton>
                        : <StButton buttonColor='#D5D4D4'>입찰하기</StButton>}
                </ButtonWrapper>
            </Wrapper>
            <PocketListContainer>
                {(newData?.map((item : any) => {
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
                            {(item.ratingPrice === 0 || item.goodsStatus === "BIDDING" || item.rationCheck === false) && <NotRatingProduct />}
                            {(item.goodsStatus === "BIDDING")
                            && <div>
                            <GoodsConditionContainer />
                            <GoodsCondition>
                                <Circle />
                                경매중
                            </GoodsCondition>
                            </div>}
                        </NotRatingProductWrapper>
                    )
                }))}
            </PocketListContainer>
            <Paging />
        </ModalContainer>
    </div>
  );
};

export const ModalBackgroundBox = styled.div`
  position: fixed;
  background-color: #000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.25;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
    width: 814px;
    height: 940px;
    border: 1px solid #222020;
    background-color: #FCFCFC;
    border-radius: 10px;
    position: absolute;
    top: 220px;
    left: 25%;
    z-index: 1003;
    padding: 40px 30px;

  @media screen and (max-width: 1136px) {
    width: 100%;
    left: 0;
  }
`;

export const ModalTitle = styled.div`
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 110%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ModalSubtitle = styled.div`
  font-family: "Pretendard";
  font-size: 32px;
  font-weight: 800;
  line-height: 150%;
  padding: 16px 0px 20px 0px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TextWrapper = styled.div`
  display: grid;
`;

export const Text = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #808080;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  gap: 10px;
`;

export const RatingPoint = styled.div`
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  display: grid;
  justify-content: end;
`;

export const StButton = styled(StBasicButton)`
  color: #fcfcfc;
  cursor: default;
`;

export const PocketListContainer = styled.div`
    width: 100%;
    padding: 20px 0px 20px 0px;
    border-top: 4px solid #222020;
    border-bottom: 4px solid #222020;
    margin: 30px 0px 40px 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;

export const CloseBtn = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
`;

export const NotRatingProductWrapper = styled.div`
  position: relative;
`;

export const GoodsConditionContainer = styled.div`
    position: absolute;
    bottom: 39px;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 48px;
    background-color: #FFFFFF;
    opacity: 0.8;
    border-radius: 0px 0px 10px 10px;
`;

export const GoodsCondition = styled.div`
    position: absolute;
    bottom: 45px;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    gap: 10px;
    color: #222020;
    padding: 0px 0px 0px 15px;
`;

export const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: #58abf7;
`;

export const NotRatingProduct = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 176px;
  height: 229px;
  border-radius: 10px;
  background-color: #fcfcfc;
  opacity: 0.4;
`;

export default BidModal;
