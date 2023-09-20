import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import Image from '../../assets/images/pocket.png'

const MyPippo = ({ data } : any) => {

  const [point, setPoint] = useState(0);

  useEffect(() => {
    const interVal = setInterval(() => {
      if (point < (data.data.info.userPoint)) {
        setPoint(point + 1);
      }
    }, (data.data.info.userPoint < 150) ? 10 : 1);
    return () => clearInterval(interVal);
  }, [point])

  return (
    <RightContentContainer>
      <InContainer>
        <PointCount>{point}P</PointCount>
        <PointText>나의 포인트</PointText>
      </InContainer>
    </RightContentContainer>
  )
};

const RightContentContainer = styled.div`
  min-width: 272px;
  height: 204px;
  padding: 16px 15px 0px 15px;
  border-top: 2px solid #222020;
  border-left: 2px solid #222020;
  border-right: 2px solid #222020;
  background-color: #FCFCFC;
  border-radius: 5px 5px 0px 0px;
  position: relative;

  @media screen and (max-width: 1136px) {
    width: 100%;
  }
  @media screen and (max-width: 1144px) {
    display: none;
  }
`;

const InContainer = styled.div`
  min-width: 100%;
  height: 100%;
  border-top: 4px solid #EFEFEF;
  border-left: 4px solid #EFEFEF;
  border-right: 4px solid #EFEFEF;
  border-radius: 5px 5px 0px 0px;
  padding: 43px 56px 56px 42px;
`;

const PointText = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
`;

const PointCount = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 110%;
`;

export default MyPippo;