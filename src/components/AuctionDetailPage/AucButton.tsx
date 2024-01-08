import React, { useState } from 'react'
import { styled } from 'styled-components';
import { StBasicButton } from '../../styles/BasicButton';
import BidModal from './BidModal';
import CardZzimBtn from '../common/CardZzimBtn';
import { useResetRecoilState } from 'recoil';
import { pagination } from '../../store/pagination';

const AucButton = ({ data, bid, setConditional, conditional, sellerPicks, setSellerPicks } : any) => {

  const resetPage = useResetRecoilState(pagination);

    const [expired, setExpired] = useState(data?.data.info.auctionResponseDto.leftTime.expired);
    const onClickBidHandler = () => {
      setConditional({ ...conditional, bid: true });
      resetPage();
    };
    const onClickSuccessBiddHandler = () => {
      setConditional({ ...conditional, bid: true });
    }; 
    const onClickChatting = () => {
      setConditional({ ...conditional, bid: false });
      resetPage();
    };

  return (
    <div>
    <ButtonWrapper>
        {(data.data.info.auctionResponseDto.checkSameUser || data.data.info.auctionResponseDto.leftTime.expired) ? (
          <StButton buttonColor="#D5D4D4" style={{ color: "#fff", cursor: "default" }}>
            입찰하기
          </StButton>
        ) : (
          <StButton buttonColor="#58ABF7" style={{ border: "1px solid #222020" }} onClick={onClickBidHandler}>
            입찰하기
          </StButton>
        )}
        {data?.data.info.auctionResponseDto.checkSameUser ? (
          (expired) ? (
          <StButton
            buttonColor="#58ABF7"
            style={{ color: "#FCFCFC", border: "2px solid #222020" }}
            onClick={() => setSellerPicks({...sellerPicks, successBidModal: true})}
          >
            낙찰품 선택
          </StButton>
          ) : ( 
            <StButton
            buttonColor="#58ABF7"
            style={{ color: "#222020", border: "1px solid #222020" }}
            onClick={() => setSellerPicks({...sellerPicks, pickModal: true})}
          >
            Seller's Pick
          </StButton>)
        ) : (
          <CardZzimBtn
            checkZzim={data.data.info.auctionResponseDto.goodsResponseDto.checkDibs}
            goodsId={data.data.info.auctionResponseDto.goodsResponseDto.goodsId}
            isCard={false}
            buttonColor="#58ABF7"
            fontColor="#ffff"
          />
        )}
        {bid ? (
          <StButton buttonColor="#58ABF7" style={{ border: "1px solid #222020" }} onClick={onClickChatting}>
            채팅하기
          </StButton>
        ) : (
          <StButton buttonColor="#D5D4D4" style={{ color: "#fff", cursor: "default" }}>
            채팅하기
          </StButton>
        )}
      </ButtonWrapper>
      {bid && <BidModal
        productData={data}
        conditional={conditional}
        setConditional={setConditional}
        />}
    </div>
  )
};

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  padding: 10px 0px 0px 0px;
`;

const StButton = styled(StBasicButton)`
  color: #fcfcfc;

  @media screen and (max-width: 836px) {
    width: 100%;
  }
`;

export default AucButton;