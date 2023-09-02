import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import SecessionModal from "./SecessionModal";
import RequestBtn from "./RequestBtn";
import AuctionStatus from "./AuctionStatus";
import MyPocketBtn from "./MyPocketBtn";
import ZzimListBtn from "./ZzimListBtn";
import MyChatBtn from "./MyChatBtn";
import Line from "../../assets/images/vector.png"

const Pocket = () => {
  const navigate = useNavigate();

  const [secessionModal, setSecessionModal] = useState(false);

  return (
    <LayoutContainer>
      <PocketContainer>
        <DashLine src={Line} />
        <PocketInline>
          <BoxContainer>
            <RequestBtn navigate={navigate} />
            <AuctionStatus navigate={navigate} />
            <MyPocketBtn navigate={navigate} />
            <ZzimListBtn navigate={navigate} />
            <MyChatBtn navigate={navigate} />
          </BoxContainer>  
        </PocketInline>
        <ResignWrapper>
          <Resign onClick={() => setSecessionModal(true)}>핍포 탈퇴하기</Resign>
        </ResignWrapper>
        {(secessionModal) && <SecessionModal setSecessionModal={setSecessionModal} />}
      </PocketContainer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  /* position: absolute; */
  height: 425px;
  width: 100%;
  background-color: #ffca64;

  @media screen and (max-width: 1144px) {
    height: 100vh;
  }
`;

const PocketContainer = styled.div`
  width: 100%;
  border-top: 4px solid #000;
  background-color: #fff;
  overflow: hidden;
  padding: 10px 0px 0px 0px;
  background-color: #ffca64;
  
  @media screen and (max-width: 1144px) {
    height: 100vh;
  }
`;

const PocketInline = styled.div`
  width: 100%;
  padding: 60px 0px 100px 0px;
  display: grid;
  justify-content: center;
  background-color: #ffca64;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 16px;
`;

export const OutBox = styled.div`
  width: 176px;
  height: 176px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfcfc;
  cursor: pointer;

  &:hover {
    border: 2px solid #D5D4D4;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const InBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 10px 0px;
`;

export const InBox = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;

export const Text = styled.div`
  width: 100%;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
`;

const ResignWrapper = styled.div`
  width: 100vh;
  padding: 0px 392px 0px 392px;
`;

const Resign = styled.div`
  width: 87px;
  display: flex;
  justify-content: center;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #39373a;
  border-bottom: 1px solid #7a7a7a;
  cursor: pointer;
`;

const DashLine = styled.img`
  width: 100%;
  height: 2px;
  object-fit: contain;
`;

export default Pocket;
