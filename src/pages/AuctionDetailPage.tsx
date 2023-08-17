import React, { useState } from 'react'
import { styled } from 'styled-components';
import RecommendCard from '../components/DetailPage/RecommendCard';
import MyPickBar from '../components/common/MyPickBar';
import AucDetailImage from '../components/AuctionDetailPage/AucDetailImage';
import AucGiveInfo from '../components/AuctionDetailPage/AucGiveInfo';
import AucWantedInfo from '../components/AuctionDetailPage/AucWantedInfo';
import AucBidInfo from '../components/AuctionDetailPage/AucBidInfo';

const AuctionDetailPage = () => {
    // const { goodsId } : any = useParams();
    // const { data, isLoading, error } : any = useQuery(["DetailData", goodsId], () => getDetailPageApi(goodsId), {
    //     refetchOnWindowFocus: false,
    //   });
    // console.log("data", data);

    const [detailTap, setDetailTap] = useState({
        bid: true,
        giveTap: false,
        wantTap: false,
    });

    const { bid, giveTap, wantTap} = detailTap;

    const onClickBidHandler = () => {
        setDetailTap({
            bid: true,
            giveTap: false,
            wantTap: false,
        });
    };
    
    const onClickGiveHandler = () => {
        setDetailTap({
            bid: false,
            giveTap: true,
            wantTap: false, 
        });
    };

    const onClickWantHandler = () => {
        setDetailTap({
            bid: false,
            giveTap: false,
            wantTap: true,
        });
    };

    // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;

  return (
    <PageLayout>
        <PageContainer>
            <AucDetailImage />
            <InfoContainer>
            {
            (bid === true && giveTap === false && wantTap === false)
            && <LayoutContainer>
                    <TapContainer>
                        <TapClickButton>입찰 현황</TapClickButton>
                        <TapDefaultButton onClick={onClickGiveHandler}>드려요</TapDefaultButton>
                        <TapDefaultButton onClick={onClickWantHandler}>받아요</TapDefaultButton>
                    </TapContainer>
                    <AucBidInfo />
                </LayoutContainer> 
            }
            {
            (bid === false && giveTap === true && wantTap === false)
            && <LayoutContainer>
                    <TapContainer>
                        <TapDefaultButton onClick={onClickBidHandler}>입찰 현황</TapDefaultButton>
                        <TapClickButton>드려요</TapClickButton>
                        <TapDefaultButton onClick={onClickWantHandler}>받아요</TapDefaultButton>
                    </TapContainer>
                    <AucGiveInfo />
                </LayoutContainer> 
            }
            {
            (bid === false && giveTap === false && wantTap === true)
            && <LayoutContainer>
                    <TapContainer>
                        <TapDefaultButton onClick={onClickBidHandler}>입찰 현황</TapDefaultButton>
                        <TapDefaultButton onClick={onClickGiveHandler}>드려요</TapDefaultButton>
                        <TapClickButton>받아요</TapClickButton>
                    </TapContainer>
                    <AucWantedInfo />
                </LayoutContainer> 
            }
            </InfoContainer>
        </PageContainer>
        <RecommendCard />
        <MyPickBar />
    </PageLayout>
  )
}

const PageLayout = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px 0px 60px 0px;
`;

const FilterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    align-items: center;
    margin: 0px 0px 20px 0px;
    gap: 20px;
    width: 100%;
`;

const FilterLeftWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const FilterWrapper = styled.div`
    display: inline-flex;
    padding: 10px 60px 10px 10px;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid;
`;

const ChoiceBox = styled.div`
    width: 24px;
    height: 24px;
    background-color: #D9D9D9;
    cursor: pointer;
`;

const ModifyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

const PageContainer = styled.div`
    width: 100%;

    @media screen and (max-width: 1136px) {
        padding: 0px 20px 0px 20px;        
    }
`;

const TapContainer = styled.div`
    display: flex;
    gap: 0px;
    position: absolute;
`;

const TapClickButton = styled.div`
    display: flex;
    padding: 10px auto;
    font-family: "Pretendard";
    font-weight: 700;
    justify-content: center;
    align-items: center;
    width: 177px;
    height: 44px;
    border: 2px solid #000;
    border-bottom: 4px solid #fff;
    border-radius: 5px 5px 0px 0px;
`;

const TapDefaultButton = styled.div`
    display: flex;
    padding: 10px auto;
    font-family: "Pretendard";
    justify-content: center;
    align-items: center;
    background-color: #EFEFEF;
    width: 177px;
    height: 44px;
    border: 1px solid #000;
    border-bottom: 2px solid #000;
    border-radius: 5px 5px 0px 0px;
    cursor: pointer;
`;

const LayoutContainer = styled.div`
    padding: 60px 0px 87px 0px;
    display: grid;
    width: 100%;
`;

const InfoContainer = styled.div`
    width: 100%;
`;

export default AuctionDetailPage;