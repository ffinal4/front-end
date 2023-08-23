import React, { useState } from 'react'
import { styled } from 'styled-components';
import { StBasicButton } from '../../styles/BasicButton';
import JoinBidCard from '../AuctionDetailPage/JoinBidCard';
import Paging from '../common/Paging/Paging';
import Close from '../../assets/icon/remove.png'
import { useQuery } from 'react-query';
import { getMyPocketApi } from '../../api/goods';

const BidModal = ({ conditional, setConditional } : any) => {

    const { isLoading, data, error } : any = useQuery("bidPickData", getMyPocketApi, {
        refetchOnWindowFocus: false,
    });
    // const newData = data.data.info.goodsListResponseDto;

    console.log("내주머니입찰데이터", data);

    const [myPocketGoods, setMyPocketGoods] = useState<{goodsId: string | number[]}>({
        goodsId: [],
      });
    const [checkBox, setCheckBox] = useState<number | null>(null);

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
                        <Text style={{color: "#222020"}}>선택된 총 레이팅 점수</Text>
                        20,000
                    </RatingPoint>
                    <StButton buttonColor='#D5D4D4'>입찰하기</StButton>
                </ButtonWrapper>
            </Wrapper>
            <PocketListContainer>
                {(data?.data.info.goodsListResponseDto.map((item : any) => {
                    return (
                        <JoinBidCard
                            key={item.goodsId}
                            checkBox={checkBox}
                            setCheckBox={setCheckBox}
                            setMyPocketGoods={setMyPocketGoods}
                            myPocketGoods={myPocketGoods}
                            item={item}
                        />
                    )
                }))}
            </PocketListContainer>
            <Paging />
        </ModalContainer>
    </div>
  )
};

const ModalBackgroundBox = styled.div`
    position: fixed;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.25;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    width: 812px;
    height: 940px;
    border: 1px solid #222020;
    background-color: #FCFCFC;
    position: absolute;
    top: 220px;
    left: 25%;
    z-index: 1003;
    padding: 40px 30px;
`;

const ModalTitle = styled.div`
    font-family: "Lemon/Milk", sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 110%;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const ModalSubtitle = styled.div`
    font-family: "Pretendard";
    font-size: 32px;
    font-weight: 800;
    line-height: 150%;
    padding: 16px 0px 20px 0px;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const TextWrapper = styled.div`
    display: grid;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #808080;
`;

const ButtonWrapper = styled.div`
    display: grid;
    gap: 10px;
`;

const RatingPoint = styled.div`
    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;
    display: grid;
    justify-content: end;
`;

const StButton = styled(StBasicButton)`
    color: #FCFCFC;
    cursor: default;
`;

const PocketListContainer = styled.div`
    width: 100%;
    padding: 20px 0px 20px 20px;
    border-top: 4px solid #222020;
    border-bottom: 4px solid #222020;
    margin: 30px 0px 40px 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;

const CloseBtn = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
`;

export default BidModal;