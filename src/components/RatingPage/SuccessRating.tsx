import React, { useEffect, useRef } from 'react'
import { styled } from 'styled-components';

const SuccessRating = ({ resData } : any) => {

    const pointRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (pointRef.current) {
            pointRef.current.style.transition = `opacity 0.6s ease-in-out`;
            pointRef.current.style.opacity = `1`;
        };
    }, []);

  return (
    <SuccessContainer>
        <LeftWrapper>
            <LeftLineContainer>
                <Text style={{color: "#39373A"}}>예측가</Text>
                <Text style={{color: "#EC8D49"}}>{resData.ratingPrice}</Text>
            </LeftLineContainer>
            <LeftLineContainer>
                <Text style={{color: "#39373A"}}>정답</Text>
                <Text style={{color: "#EC8D49"}}>{resData.sellerPrice}</Text>
            </LeftLineContainer>
        </LeftWrapper>
        <PointContainer>
            <PointText>누적 포인트</PointText>
            <LemonText ref={pointRef}>+{resData.currentPoint}</LemonText>
        </PointContainer>
    </SuccessContainer>
  )
};

const SuccessContainer = styled.div`
    width: 100%;
    height: 100%;
    border-top: 2px solid #EC8D49;
    background-color: #FCFCFC;
    display: flex;
    justify-content: center;
    padding: 60px 0px 86px 0px;
    gap: 112px;
`;

const LeftWrapper = styled.div`
    width: 176px;
    display: grid;
    gap: 10px;
`;

const LeftLineContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;
`;

const PointContainer = styled.div`
    display: grid;
    justify-content: center;
`;

const PointText = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #39373A;
`;

const LemonText = styled.div`
    font-family: "Lemon/Milk", sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 110%;
    color: #EC8D49;
    opacity: 0;
`;

export default SuccessRating;