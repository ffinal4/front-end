import React, { useState } from 'react'
import { styled } from 'styled-components';
import { StBasicButton } from '../../styles/BasicButton';
import CardZzimBtn from '../common/CardZzimBtn';
import RequestsModal from './RequestsModal';

const AcceptBtn = ({ data } : any) => {

    const [conditional, setConditional] = useState(false);

    const onClickAcceptHandler = () => {
        setConditional(true);
    };
    
    const onClickChatting = () => {
        setConditional(false);
    };

  return (
    <ButtonWrapper>
        {data.data.info.checkSameUser ? (
          <StButton buttonColor="#D5D4D4" style={{ color: "#fff", cursor: "default" }}>
            교환신청
          </StButton>
        ) : (
          <StButton buttonColor="#FFCA64" onClick={onClickAcceptHandler}>
            교환신청
          </StButton>
        )}
        {data.data.info.checkSameUser ? (
          <StButton buttonColor="#D5D4D4" style={{ color: "#fff", cursor: "default" }}>
            찜하기
          </StButton>
        ) : (
          <CardZzimBtn
            checkZzim={data.data.info.checkDibs}
            goodsId={data.data.info.goodsId}
            isCard={false}
            buttonColor="#FFCA64"
            fontColor="#222020"
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
  width: 100%;
  gap: 16px;
  padding: 10px 0px 0px 0px;
`;



const StButton = styled(StBasicButton)`
  border: 1px solid #222020;
  color: #222020;
`;

export default AcceptBtn;