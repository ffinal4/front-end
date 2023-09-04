import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components';
import { StBasicButton } from '../../styles/BasicButton';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

const FailedModal = ({ addPrice, setAddPrice, resData } : any) => {

    const queryClient = useQueryClient();

    const navigate = useNavigate();

    const [getPoint, setGetPoint] = useState(0);

    useEffect(() => {
        const interVal = setInterval(() => {
            if (getPoint < resData.totalPoint) {
                setGetPoint(getPoint + 1);
            };
        }, 50);
        return () => clearInterval(interVal);
    }, [getPoint]);

  return (
    <div>
        <ModalBackground />
        <ModalContainer>
            <ModalTitleContainer>
                OPPS! GAME OVER
            </ModalTitleContainer>
            <ContentContainer>
                <LeftContainer>
                    <LineContainer>
                        <SmallText>예측가</SmallText>
                        <SmallText>{resData.ratingPrice}</SmallText>
                    </LineContainer>
                    <LineContainer>
                        <BigText>정답</BigText>
                        <BigText style={{color: "#EC8D49"}}>{resData.sellerPrice}</BigText>
                    </LineContainer>
                </LeftContainer>
                <RightContainer>
                    <SmallText style={{color: "#39373A"}}>얻은 포인트</SmallText>
                    <Point>+{getPoint}</Point>
                </RightContainer>
            </ContentContainer>
            <BtnWrapper>
                <StopButton
                    buttonColor='#FCFCFC'
                    onClick={() => {
                        navigate('/')
                    }}
                >그만하기</StopButton>
                <OnemoreBtn
                    buttonColor='#FBD8BF'
                    onClick={() => {
                        queryClient.invalidateQueries('ratingStart')
                        setAddPrice({ ...addPrice, gameover: false, price: 0 })
                        // setAddPrice({ ...addPrice, price: 0 })
                    }}
                >다시하기</OnemoreBtn>
            </BtnWrapper>
        </ModalContainer>
    </div>
  )
};

const ModalBackground = styled.div`
  position: fixed;
  background-color: #000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.25;
  z-index: 999;
`;

const ModalContainer = styled.div`
    width: 100%;
    background-color: #FCFCFC;
    height: 243px;
    border: 2px solid #39373A;
    border-radius: 20px;
    padding: 54px 96px 40px 96px;
    position: relative;
    z-index: 999;
`;

const ModalTitleContainer = styled.div`
    width: 463px;
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
    left: 48px;
    background-color: #FCFCFC;
    color: #EC8D49;
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 112px;
`;

const LeftContainer = styled.div`
    display: grid;
    gap: 11.5px;
    width: 176px;
`;

const LineContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SmallText = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #ADADAD;
`;

const BigText = styled.div`
    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;
    color: #39373A;
`;

const RightContainer = styled.div`
    display: grid;
    justify-content: center;
`;

const Point = styled.div`
    font-family: "Lemon/Milk", sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 110%;
    color: #EC8D49;
    margin: 0px auto;
`;

const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 40px 0px 0px 0px; 
`;

const StopButton = styled(StBasicButton)`
    border: 1px solid #ADADAD;
    color: #39373A;
`;

const OnemoreBtn = styled(StBasicButton)`
    border: 1px solid #39373A;
    color: #39373A;
`;

export default FailedModal;