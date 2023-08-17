import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components';
import DetailContainer from '../components/DetailPage/DetailContainer';
import GiveInfo from '../components/DetailPage/GiveInfo';
import WantedInfo from '../components/DetailPage/WantedInfo';
import RecommendCard from '../components/DetailPage/RecommendCard';
import MyPickBar from '../components/common/MyPickBar';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getDetailPageApi } from '../api/goods';

const DetailPage = () => {

    const { goodsId } : any = useParams();
    const { data, isLoading, error } : any = useQuery(["DetailData", goodsId], () => getDetailPageApi(goodsId), {
        refetchOnWindowFocus: false,
      });
    console.log("data", data);

    const [detailTap, setDetailTap] = useState({
        giveTap: true,
        wantTap: false,
    });
    const { giveTap, wantTap } = detailTap;

    const onClickGiveHandler = () => {
        setDetailTap({
            giveTap: true,
            wantTap: false, 
        });
    };

    const onClickWantHandler = () => {
        setDetailTap({
            giveTap: false,
            wantTap: true,
        });
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <PageLayout>
        <PageContainer>
            <DetailContainer data={data} />
            <InfoContainer>
            {
            (giveTap === true && wantTap === false)
            && <LayoutContainer>
                    <TapContainer>
                        <TapClickButton>드려요</TapClickButton>
                        <TapDefaultButton onClick={onClickWantHandler}>받아요</TapDefaultButton>
                    </TapContainer>
                    <GiveInfo data={data} />
                </LayoutContainer> 
            }
            {
            (giveTap === false && wantTap === true)
            && <LayoutContainer>
                    <TapContainer>
                        <TapDefaultButton onClick={onClickGiveHandler}>드려요</TapDefaultButton>
                        <TapClickButton>받아요</TapClickButton>
                    </TapContainer>
                    <WantedInfo data={data} />
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

export default DetailPage