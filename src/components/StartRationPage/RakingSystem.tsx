import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import Image from "../../assets/images/defaultprofile.png";

const RakingSystem = ({ data }: any) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [refCurrent, setRefCurrent] = useState(0);
  const numberOfSlides = 210;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRefCurrent((index) => (index + 0.2) % numberOfSlides);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (divRef.current) {
      if (refCurrent === 0) {
        divRef.current.style.transition = "none";
        divRef.current.style.opacity = "0";
      } else {
        divRef.current.style.opacity = "1";
        divRef.current.style.transition = "transform 0.1s ease-in-out";
        divRef.current.style.transform = `translateX(-${
          refCurrent * (210 / numberOfSlides)
        }%)`;
      }
    }
  }, [refCurrent, numberOfSlides]);

  const rankingSystem = (item: any) => {
    if (data?.indexOf(item) === 0) {
      return (
        <RakingContainer style={{ border: "4px solid #EC8D49" }}>
          <RakingNumber>{data?.indexOf(item) + 1}</RakingNumber>
          {item.userImage === null ? (
            <ProfileImg src={Image} />
          ) : (
            <ProfileImg src={item.userImage} />
          )}
          <Nickname>{item.nickName}</Nickname>
          <SuccessPoint style={{ color: "#EC8D49" }}>
            {item.maxRatingCount}
          </SuccessPoint>
        </RakingContainer>
      );
    }
    if (data?.indexOf(item) === 1 || data?.indexOf(item) === 2) {
      return (
        <RakingContainer>
          <RakingNumber>{data?.indexOf(item) + 1}</RakingNumber>
          {item.userImage === null ? (
            <ProfileImg src={Image} />
          ) : (
            <ProfileImg src={item.userImage} />
          )}
          <Nickname>{item.nickName}</Nickname>
          <SuccessPoint>{item.maxRatingCount}</SuccessPoint>
        </RakingContainer>
      );
    } else {
      return (
        <RakingContainer>
          <RakingNumber style={{ color: "#ADADAD" }}>
            {data?.indexOf(item) + 1}
          </RakingNumber>
          {item.userImage === null ? (
            <ProfileImg src={Image} />
          ) : (
            <ProfileImg src={item.userImage} />
          )}
          <Nickname style={{ color: "#ADADAD" }}>{item.nickName}</Nickname>
          <SuccessPoint style={{ color: "#ADADAD" }}>
            {item.maxRatingCount}
          </SuccessPoint>
        </RakingContainer>
      );
    }
  };

  return (
    <AllContainer>
      <RakingWrapper ref={divRef}>
        <EmptyContainer />
        {data?.map((item: any) => {
          return rankingSystem(item);
        })}
      </RakingWrapper>
    </AllContainer>
  );
};

const AllContainer = styled.div`
  width: screen;
  height: 140px;
  background-color: #efefef;
  position: relative;
  overflow: hidden;
`;

const RakingWrapper = styled.div`
  height: 100%;
  padding: 30px;
  display: flex;
  gap: 16px;
`;

const EmptyContainer = styled.div`
  min-width: 1920px;
`;

const RakingContainer = styled.div`
  display: flex;
  align-items: center;
  width: 368px;
  padding: 16px 30px;
  height: 80px;
  gap: 16px;
  border-radius: 56px;
  background-color: #fcfcfc;
`;

const RakingNumber = styled.div`
  font-family: "Lemon/Milk", "sans-serif";
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  color: #39373a;
`;

const ProfileImg = styled.div<{ src: string }>`
  min-width: 48px;
  height: 48px;
  background-size: cover;
  background-image: ${(props) => `url(${props.src})`};
  border-radius: 100%;
`;

const Nickname = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  color: #222020;
  width: 175px;
`;

const SuccessPoint = styled.div`
  font-family: "Lemon/Milk", "sans-serif";
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;

export default RakingSystem;
