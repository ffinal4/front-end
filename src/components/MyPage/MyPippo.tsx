import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import Image from '../../assets/images/pocket.png'

const MyPippo = ({ data } : any) => {

  const [point, setPoint] = useState(0);

  useEffect(() => {
    const interVal = setInterval(() => {
      if (point < (data.data.info.userPoint)) {
        setPoint(point + 10);
      }
    }, 10);
    return () => clearInterval(interVal);
  }, [point])

  return (
    <RightContainer>
      <TitleContainer>MY POCKET</TitleContainer>
      <RightContentContainer>
        <InContainer>
          <PointCount>{point}P</PointCount>
          <PointText>나의 포인트</PointText>
        </InContainer>
      </RightContentContainer>
    </RightContainer>
  )
};

const RightContainer = styled.div`
  min-width: 176px;
`;

const TitleContainer = styled.div`
  width: 100%;
  font-family: "Lemon/Milk", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  padding: 0px 0px 10px 0px;
`;

const RightContentContainer = styled.div`
  min-width: 176px;
  height: 204px;
  padding: 16px 15px 0px 15px;
  border: 1px solid #D5D4D4;
  background-color: #FCFCFC;
`;

const InContainer = styled.div`
  min-width: 146px;
  border: 1px solid #D5D4D4;
  padding: 44px 31px 42px 31px;
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

const ImageCard = styled.div<{ src: string }>`
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.src});
  background-color: #D9D9D9;
  background-size: cover;
  cursor: pointer;
`;

export default MyPippo;