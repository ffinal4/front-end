import React, { useState } from 'react'
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
    MainContainer
} from './SellerPickModal'
import Paging from '../common/Paging/Paging'
import Close from '../../assets/icon/remove.png'
import { useMutation, useQuery } from 'react-query'
import { getAuctionBidListApi, getAuctionBidListChoiceApi } from '../../api/acution'
import EmptyPocket from '../common/EmptyPocket'
import AucBidCard from './AucBidCard'


const SuccessBIdModal = ({ productData, sellerPicks, setSellerPicks } : any) => {

    const auctionId = productData.data.info.auctionResponseDto.auctionId;
    const { isLoading, error, data } : any = useQuery(["auctionBid", auctionId], () => getAuctionBidListApi(auctionId), {
        refetchOnWindowFocus: false,
    });
    console.log("입찰품 목록(낙찰)", data);

    const [checkBox, setCheckBox] = useState<any[]>([]);
    const [bidSellerPick, setBidSellerPick] = useState<{bidId: number[]}>({
        bidId: []
    });

    // const mutation = useMutation(() => postSellerPicksApi(bidSellerPick, auctionId), {
    //     onSuccess: (res) => {
    //         console.log("선택완료!", res)
    //         setSellerPicks({...sellerPicks, SuccessBidModal: false});
    //     },
    // });

  return (
    <div>
        <ModalBackgroundBox onClick={() => setSellerPicks({...sellerPicks, SuccessBidModal: false})}/>
        <ModalContainer>
            <ModalTitle>
            WHO WON THE BID?
                <CloseBtn
                    src={Close}
                    onClick={() => setSellerPicks({...sellerPicks, SuccessBidModal: false})}
                />
            </ModalTitle>
            <ModalSubtitle>최종 낙찰품 선택하기</ModalSubtitle>
            <Wrapper>
                <TextWrapper>
                    <Text>- 최종 낙찰품을 선택하면 해당 물건을 입찰한 사용자와 물물교환을 진행할 수 있습니다.</Text>
                    <Text>- 최종 낙찰품은 한 번 선택하면 바꿀 수 없습니다.</Text>
                </TextWrapper>
                <ButtonWrapper style={{height: "48px"}} >
                    {(checkBox.length > 0)
                        ? <StButton
                            buttonColor='#58ABF7'
                            // onClick={() => mutation.mutate()}
                        >선택완료</StButton>
                        : <StButton
                            buttonColor='#D5D4D4'
                            style={{cursor: "default"}}
                        >선택완료</StButton>}
                </ButtonWrapper>
            </Wrapper>
            <MainContainer>
                {(data?.data.info.content.length > 0)
                    ? data?.data.info.content.map((item : any) => {
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
                        )}
                    )
                    : <EmptyPocket />
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
}

export default SuccessBIdModal