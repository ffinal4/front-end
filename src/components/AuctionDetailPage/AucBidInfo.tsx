import React from 'react'
import { styled } from 'styled-components';
import AucBidCard from './AucBidCard';
import { useQuery } from 'react-query';
import { getAuctionBidListApi } from '../../api/acution';
import { useParams } from 'react-router-dom';

const AucBidInfo = ({ productData } : any) => {

    const auctionId = productData.data.info.auctionId;
    const { isLoading, error, data } : any = useQuery(["auctionBid", auctionId], () => getAuctionBidListApi(auctionId), {
        refetchOnWindowFocus: false,
    });
    console.log("입찰품 목록", data);

  return (
    <InfoContainer>
        <InfoTextContainer>
            <CardListContainer>
                {data?.data.info.content.map((item : any) => {
                    return (
                        <AucBidCard 
                            key={item.bidId}
                            item={item}
                        />
                    )}
                )}
                {/* <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard /> */}
            </CardListContainer>
        </InfoTextContainer>
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
    padding: 60px 0px 0px 0px;
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