import React, { useState } from 'react'
import { styled } from 'styled-components';
import { StBasicButton } from '../../styles/BasicButton';
import Paging from '../common/Paging/Paging';
import AucBidCard from './AucBidCard';
import Close from '../../assets/icon/remove.png'
import EmptyPocket from '../common/EmptyPocket';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getAuctionBidListApi, postSellerPicksApi } from '../../api/acution';
import { useRecoilValue } from 'recoil';
import { pagination } from '../../store/pagination';
import LoadingSpinner from '../common/LoadingSpinner';
import { goodsAuctionId } from '../../store/Auction';

const SellerPickModal = ({ sellerPicks, setSellerPicks } : any) => {

    const queryClient = useQueryClient();

    const auctionId = useRecoilValue(goodsAuctionId);
    const currentPage = useRecoilValue(pagination);
    const { isLoading, error, data } : any = useQuery(["auctionBid", currentPage, auctionId], () => getAuctionBidListApi(currentPage, auctionId), {
        refetchOnWindowFocus: false,
    });

    const [checkBox, setCheckBox] = useState<any[]>([]);
    const [bidSellerPick, setBidSellerPick] = useState<{bidId: number[]}>({
        bidId: []
    });

    const mutation = useMutation(() => postSellerPicksApi(bidSellerPick, auctionId), {
        onSuccess: (res) => {
            console.log("선택완료!", res)
            queryClient.invalidateQueries("auctionBid");
            setSellerPicks({...sellerPicks, pickModal: false});
        },
    });

    console.log("입찰품 목록(낙찰)", data);
    console.log("선택", checkBox);

    if (isLoading) return <LoadingSpinner />;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
        <ModalBackgroundBox onClick={() => setSellerPicks({...sellerPicks, pickModal: false})}/>
        <ModalContainer>
            <ModalTitle>
                SELLER's PICK!
                <CloseBtn
                    src={Close}
                    onClick={() => setSellerPicks({...sellerPicks, pickModal: false})}
                />
            </ModalTitle>
            <ModalSubtitle>현재 가장 마음에 드는 입찰품 선택하기</ModalSubtitle>
            <Wrapper>
                <TextWrapper>
                    <Text>- Seller’s Pick은 최대 4개까지 선택할 수 있습니다.</Text>
                    <Text>- 선택한 상품은 경매자가 현재 입찰할 가능성이 가장 높은 상품으로 다른 사용자들에게 표시됩니다.</Text>
                    <Text>- Seller’s Pick은 언제든지 수정할 수 있습니다.</Text>
                </TextWrapper>
                <ButtonWrapper>
                    {(checkBox.length > 0)
                        ? <StButton
                            buttonColor='#58ABF7'
                            onClick={() => mutation.mutate()}
                        >선택완료</StButton>
                        : <StButton
                            buttonColor='#D5D4D4'
                            style={{cursor: "default", border: "none"}}
                        >선택완료</StButton>}
                </ButtonWrapper>
            </Wrapper>
            <MainContainer>
                {(data?.data.content.length > 0)
                    ? data?.data.content.map((item : any) => {
                        return (
                            <AucBidCard 
                                key={item.userId}
                                item={item}
                                choice={true}
                                setCheckBox={setCheckBox}
                                checkBox={checkBox}
                                bidSellerPick={bidSellerPick}
                                setBidSellerPick={setBidSellerPick}
                                seller={true}
                            />
                        )}
                    )
                    : <EmptyPocket pocketStatus={3} />
                }
                {/* <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard /> */}
            </MainContainer>
            <Paging />
        </ModalContainer>
    </div>
  )
};

export const ModalBackgroundBox = styled.div`
    position: fixed;
    background-color: #00000025;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1000;
    @media screen and (max-width: 1196px) {
        width: 100%;
        height: 100%;
    }
`;

export const ModalContainer = styled.div`
    width: 62.85%;
    max-height: 1186px;
    border: 1px solid #222020;
    border-radius: 10px;
    background-color: #FCFCFC;
    position: absolute;
    top: 220px;
    left: 20%;
    z-index: 1000;
    padding: 40px 30px;

    @media screen and (max-width: 1196px) {
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

export const StButton = styled(StBasicButton)`
    border: 2px solid #222020;
    color: #FCFCFC;
`;

export const ButtonWrapper = styled.div`
    height: 72px;
    display: flex;
    align-items: end;
`;

export const MainContainer = styled.div`
    border-top: 4px solid #222020;
    border-bottom: 4px solid #222020;
    padding: 40px 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 26px 0px 40px 0px;
    width: 100%;
    max-height: 788px;
    overflow: auto;
`;

export const CloseBtn = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
`;

export default SellerPickModal;