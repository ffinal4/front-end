import React from 'react'
import { styled } from 'styled-components';
import { StBasicButton } from '../../styles/BasicButton';
import BidModal from './BidModal';
import CardZzimBtn from '../common/CardZzimBtn';

const AucButton = ({ data, bid, setConditional, conditional, sellerPicks, setSellerPicks } : any) => {

    const onClickBidHandler = () => {
        setConditional({ ...conditional, bid: true });
      };
    
      const onClickChatting = () => {
        setConditional({ ...conditional, bid: false });
      };

  return (
    <div>
    <ButtonWrapper>
        {data.data.info.checkSameUser ? (
          <StButton buttonColor="#D5D4D4" style={{ color: "#fff", cursor: "default" }}>
            입찰하기
          </StButton>
        ) : (
          <StButton buttonColor="#58ABF7" onClick={onClickBidHandler}>
            입찰하기
          </StButton>
        )}
        {data.data.info.checkSameUser ? (
          <StButton
            buttonColor="#58ABF7"
            style={{ color: "#222020" }}
            onClick={() => setSellerPicks({...sellerPicks, pickModal: true})}
          >
            Seller's Pick
          </StButton>
        ) : (
          <CardZzimBtn
            checkZzim={data.data.info.goodsResponseDto.checkDibs}
            goodsId={data.data.info.goodsResponseDto.goodsId}
            isCard={false}
            buttonColor="#58ABF7"
            fontColor="#ffff"
          />
        )}
        {bid ? (
          <StButton buttonColor="#58ABF7" onClick={onClickChatting}>
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
  border: 1px solid #222020;
  color: #fcfcfc;
`;

export default AucButton;