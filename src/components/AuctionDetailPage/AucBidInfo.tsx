import React, { useState } from 'react'
import { styled } from 'styled-components';
import AucBidCard from './AucBidCard';
import { useQuery } from 'react-query';
import { getAuctionBidListApi } from '../../api/acution';
import EmptyPocket from '../common/EmptyPocket';
import Paging from '../common/Paging/Paging';
import { useRecoilValue } from 'recoil';
import { pagination } from '../../store/pagination';
import DetailGoodsModal from '../TradeRequestPage/DetailGoodsModal';
import { DoneContainer } from './BidModal';

const AucBidInfo = ({ productData } : any) => {

    const currentPage = useRecoilValue(pagination);

    const auctionId = productData.data.info.auctionResponseDto.auctionId;
    const { isLoading, error, data } : any = useQuery(["auctionBid", currentPage, auctionId], () => getAuctionBidListApi(currentPage, auctionId), {
        refetchOnWindowFocus: false,
    });
    const [detailData, setDetailData] = useState<any>();
    const [detailModalOpen, setDetailModalOpen] = useState(false);

  return (
    <InfoContainer>
        <InfoTextContainer>
            <CardListContainer>
                {(data?.data.content.length > 0)
                    ? data?.data.content.map((item : any) => {
                        return (
                            <div>
                                <AucBidCard 
                                    key={item.userId}
                                    item={item}
                                    choice={false}
                                    productData={productData}
                                    setDetailModalOpen={setDetailModalOpen}
                                    setDetailData={setDetailData}
                                />
                                
                            </div>
                        )}
                    )
                    : <EmptyPocket pocketStatus={3} />
                }
            </CardListContainer>
        </InfoTextContainer>
        <Paging />
        {(detailModalOpen)
            && <DetailGoodsModal
                    detailModalOpen={detailModalOpen}
                    setDetailModalOpen={setDetailModalOpen}
                    detailData={detailData}
                />}
    </InfoContainer>
    )
};

const InfoContainer = styled.div`
    width: 100%;
    border-top: 2px solid #000;
    border-bottom: 2px solid #D9D9D9;
    margin: 42px 0px 60px 0px;
    padding: 0px 0px 93px 0px;
    display: grid;
`;

const InfoTextContainer = styled.div`
    padding: 60px 0px 60px 0px;
    width: 100%;
`;

const CardListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;

// const PickBtn = styled.div`
//     display: flex;
//     width: 176px;
//     padding: 10px 0px;
//     justify-content: center;
//     align-items: center;
//     font-family: "Pretendard";
//     font-size: 16px;
//     font-weight: 400;
//     line-height: 150%;
//     color: #222020;
//     background-color: #CBE4FB;
//     border: 1px solid #222020;
//     border-bottom: 2px solid #222020;
//     position: absolute;
//     right: 0;
//     top: -47px;
//     border-radius: 5px 5px 0px 0px;
//     cursor: pointer;
// `;

export default AucBidInfo;