import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import timer from "../../assets/icon/timer.png";
const BidDeadLine = ({ deadline, isMainPage }: any) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const timeLeft = new Date(deadline).getTime() - now;

    if (timeLeft <= 0) {
      return { expired: true };
    } else {
      const totalHours = Math.floor(timeLeft / (1000 * 60 * 60));
      const days = Math.floor(totalHours / 24);
      const hours = String((totalHours % 24) + days * 24).padStart(2, "0");
      const minutes = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const seconds = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, "0");

      return { hours, minutes, seconds, expired: false };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {timeLeft.expired ? (
        <div>{isMainPage ? <TimeContent>마감되었습니다.</TimeContent> : <EndContainer>경매종료</EndContainer>}</div>
      ) : (
        <div>
          {isMainPage ? (
            <TimeContent>
              입찰 마감까지 {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
            </TimeContent>
          ) : (
            <TimerContainer>
              <TimerImage src={timer} />
              <AuctionCardContent>
                마감까지 {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
              </AuctionCardContent>
            </TimerContainer>
          )}
        </div>
      )}
    </div>
  );
};
const TimeContent = styled.div`
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
`;

const AuctionCardContent = styled.div`
  color: var(--black-white-black, #222020);
  /* KOR/Kor B 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
  margin-left: 4px;
`;

const TimerImage = styled.img`
  width: 24px;
  height: 24px;
`;

const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 10px;
  width: 272px;
  height: 48px;
  border-radius: 0px 0px 10px 10px;
  background: rgba(255, 255, 255, 0.8);
`;
const EndContainer = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 272px;
  height: 272px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black-white-white, #fcfcfc);
  text-align: center;
  /* KOR/Kor B 20 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`;
export default BidDeadLine;
