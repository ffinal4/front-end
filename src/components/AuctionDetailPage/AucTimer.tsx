import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import RedTimer from '../../assets/icon/redtimer.png'
import defalut from '../../assets/icon/timer.png'

const AucTimer = ({ data } : any) => {

    const newLeftTime = data.data.info.auctionResponseDto.leftTime;

    const [bidTimeSeconds, setBidTimeSeconds] = useState<number>(newLeftTime.seconds);
    const [bidTimeMinutes, setBidTimeMinutes] = useState<number>(newLeftTime.minutes);
    const [bidTimeHours, setBidTimeHours] = useState<number>(newLeftTime.hours);

    useEffect(() => {
    const interVal = setInterval(() => {
      if (newLeftTime.days > 0 || bidTimeHours > 0 || bidTimeMinutes > 0 || bidTimeSeconds > 0) {
        if (bidTimeSeconds > 0) {
          setBidTimeSeconds((seconds) => (seconds - 1));
        } else {
          setBidTimeMinutes((minutes) => (minutes - 1));
          setBidTimeSeconds((seconds) => (seconds + 59));
        };
        if (bidTimeSeconds === 0 && bidTimeMinutes === 0) {
          setBidTimeMinutes((minutes) => (minutes + 59));
          setBidTimeSeconds((seconds) => (seconds + 59));
          setBidTimeHours((hours) => (hours - 1));
        };
      };
    }, 1000);
    if (newLeftTime.days <= 0 && newLeftTime.hours <= 0 && bidTimeMinutes <= 0 && bidTimeSeconds <= 0) {
      clearInterval(interVal);
    };
    return () => clearInterval(interVal);
  }, [bidTimeSeconds]);

  return (
    <div>
    {(newLeftTime.days <= 0
        && bidTimeHours <= 0
        && bidTimeMinutes <= 0
        && bidTimeSeconds <= 0)
        ? <FinishContainer>
          <FinishText>경매종료</FinishText>
        </FinishContainer>
        : (bidTimeHours <= 0 && bidTimeMinutes <= 14)
            ? <TimerContainer>
                <BidTimer src={RedTimer}/>
                <TimerText>
                마감까지 {(bidTimeHours < 10) && "0"}{bidTimeHours} : {(bidTimeMinutes < 10) && "0"}{bidTimeMinutes} : {(bidTimeSeconds < 10) && "0"}{bidTimeSeconds}
                </TimerText>
            </TimerContainer>
            : <TimerContainer>
                <BidTimer src={defalut}/>
                <TimerText style={{color: "#222020"}}>
                마감까지 {(bidTimeHours < 10) && "0"}{bidTimeHours} : {(bidTimeMinutes < 10) && "0"}{bidTimeMinutes} : {(bidTimeSeconds < 10) && "0"}{bidTimeSeconds}
                </TimerText>
            </TimerContainer>
        
      }
      </div>
  )
};

const TimerContainer = styled.div`
  width: 100%;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.80);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 12px 10px 12px 10px;
  display: flex;
  gap: 10px;
`;

const BidTimer = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const TimerText = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  color: #E32E2E;
`;

const FinishContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 464px;
  height: 464px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.70) 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  @media screen and (max-width: 375px) {
    min-width: 343px;
    height: 343px;
    border-radius: 10px;
  }
`;

const FinishText = styled.div`
  color: #FFF;
  font-family: "Pretendard";
  font-size: 32px;
  font-weight: 800;
  line-height: 150%;
`;

export default AucTimer;