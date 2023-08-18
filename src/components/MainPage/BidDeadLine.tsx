import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const BidDeadLine = ({ deadline }: any) => {
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
        <TimeContent>마감되었습니다.</TimeContent>
      ) : (
        <TimeContent>
          입찰 마감까지 {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </TimeContent>
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

export default BidDeadLine;
