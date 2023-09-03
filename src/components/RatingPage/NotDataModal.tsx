import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components';
import { StBasicButton } from '../../styles/BasicButton';
import { useNavigate } from 'react-router-dom';

const NotDataModal = () => {

    const navigate = useNavigate();

    const [getPoint, setGetPoint] = useState(0);

  return (
    <div>
        <Background>     
            <ModalContainer>
                <ModalTitleContainer>
                    LIST RUNS OUT!
                </ModalTitleContainer>
                <ContentContainer>
                    <SubTitleContainer>리스트의 모든 물건들을 레이팅했어요.</SubTitleContainer>
                    <ContentTextWrapper>
                        <ContentText>물건들이 추가되면 게임을 이어서 진행할 수 있어요.</ContentText>
                        <ContentText>걱정 마세요! 지금까지 얻은 포인트는 마이페이지에 적립됐답니다!</ContentText>
                    </ContentTextWrapper>
                </ContentContainer>
                <BtnWrapper>
                    <OnemoreBtn
                        buttonColor='#FBD8BF'
                        onClick={() => {navigate('/mypage')}}
                    >포인트 확인</OnemoreBtn>
                </BtnWrapper>
            </ModalContainer>
            <BackgroundContainer />
        </Background>
    </div>
  )
};

const BackgroundContainer = styled.div`
    width: 100%;
    height: 860px;
    background-color: #000;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const Background = styled.div`
    width: 100%;
    max-width: 1136px;
    height: 860px;
    margin: 0 auto;
    display: grid;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    width: 562px;
    background-color: #FCFCFC;
    height: 253px;
    border: 2px solid #39373A;
    border-radius: 20px;
    padding: 54px 74px 40px 74px;
    position: relative;
`;

const ModalTitleContainer = styled.div`
    width: 420px;
    height: 51px;
    border-top: 2px solid #39373A;
    border-left: 2px solid #39373A;
    border-right: 2px solid #39373A;
    position: absolute;
    z-index: 999;
    font-family: "Lemon/Milk", sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 110%;
    padding: 14px 25px 0px 25px;
    border-radius: 40px 40px 0px 0px;
    top: -51px;
    left: 71px;
    background-color: #FCFCFC;
    color: #EC8D49;
    display: flex;
    justify-content: center;
`;

const ContentContainer = styled.div`
    width: 100%;
    display: grid;
    gap: 10px;
`;

const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 0px 40px 0px; 
`;

const StopButton = styled(StBasicButton)`
    border: 1px solid #ADADAD;
    color: #39373A;
`;

const OnemoreBtn = styled(StBasicButton)`
    border: 1px solid #39373A;
    color: #39373A;
`;

const SubTitleContainer = styled.div`
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    color: #222020;
    display: flex;
    justify-content: center;
`;

const ContentTextWrapper = styled.div`
    width: 100%;
    display: grid;
    gap: 4px;
`;

const ContentText = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #222020;
    display: flex;
    justify-content: center;
`;

export default NotDataModal;