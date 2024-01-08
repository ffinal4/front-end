import React, { useState } from 'react'
import { styled } from 'styled-components';
import { StBasicButton } from '../../styles/BasicButton';
import CardZzimBtn from '../common/CardZzimBtn';
import RequestsModal from './RequestsModal';
import { useResetRecoilState } from 'recoil';
import { pagination } from '../../store/pagination';

const AcceptBtn = ({ data, dibsCount, setDibsCount } : any) => {

  const resetPage = useResetRecoilState(pagination);

    const [conditional, setConditional] = useState(false);

    const onClickAcceptHandler = () => {
        setConditional(true);
        resetPage();
    };
    
    const onClickChatting = () => {
        setConditional(false);
    };

    const acceptButton = () => {
      if (
        data.data.info.goodsResponseDtoList.checkSameUser ||
        data.data.info.goodsResponseDtoList.goodsStatus === "ONAUCTION"||
        data.data.info.goodsResponseDtoList.goodsStatus === "TRADING"||
        data.data.info.goodsResponseDtoList.goodsStatus === "BIDDING"
      ) {
        return (
          <StButton buttonColor="#D5D4D4" style={{ color: "#fff", cursor: "default" }}>
            교환신청
          </StButton>
        )
      } else {
        return (
          <StButton buttonColor="#FFCA64" onClick={onClickAcceptHandler}>
            교환신청
          </StButton>
        )
      };
    };

  return (
    <ButtonWrapper>
        {acceptButton()}
        {data.data.info.goodsResponseDtoList.checkSameUser ? (
          <StButton buttonColor="#D5D4D4" style={{ color: "#fff", cursor: "default" }}>
            찜하기
          </StButton>
        ) : (
          <CardZzimBtn
            checkZzim={data.data.info.goodsResponseDtoList.checkDibs}
            goodsId={data.data.info.goodsResponseDtoList.goodsId}
            isCard={false}
            buttonColor="#FFCA64"
            fontColor="#222020"
            dibsCount={dibsCount}
            setDibsCount={setDibsCount}
          />
        )}
        {conditional ? (
          <StButton buttonColor="#FFCA64" onClick={onClickChatting}>
            채팅하기
          </StButton>
        ) : (
          <StButton buttonColor="#D5D4D4" style={{ color: "#fff", cursor: "default" }}>
            채팅하기
          </StButton>
        )}
        {conditional && <RequestsModal productData={data} conditional={conditional} setConditional={setConditional}/>}
      </ButtonWrapper>
  )
};

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
  padding: 10px 0px 0px 0px;
`;

const StButton = styled(StBasicButton)`
  border: 1px solid #222020;
  color: #222020;

  @media screen and (max-width: 836px) {
    width: 100%;
  }
`;

export default AcceptBtn;