import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Exchange from "../../assets/icon/exchange.png";
import Auction from "../../assets/icon/auction.png";
import MyPocket from "../../assets/icon/layer_6.png";
import Like from "../../assets/icon/blacklike.png";
import MyChat from "../../assets/icon/profile.png";

const Pocket = () => {
  const navigate = useNavigate();

  return (
    <LayoutContainer>
      <PocketContainer>
        <svg xmlns="http://www.w3.org/2000/svg" width="1917" height="2" viewBox="0 0 1917 2" fill="none">
          <path d="M1 1H1916" stroke="#39373A" strokeWidth="2" strokeLinecap="round" strokeDasharray="20 20" />
        </svg>
        <PocketInline>
          <BoxContainer>
            <OutBox>
              <Wrapper>
                <InBoxWrapper>
                  <InBox src={Exchange} />
                </InBoxWrapper>
                <Text>교환 요청</Text>
              </Wrapper>
            </OutBox>
            <OutBox>
              <Wrapper>
                <InBoxWrapper>
                  <InBox src={Auction} />
                </InBoxWrapper>
                <Text>경매 현황</Text>
              </Wrapper>
            </OutBox>
            <OutBox>
              <Wrapper
                onClick={() => {
                  navigate("/mypocket");
                }}
              >
                <InBoxWrapper>
                  <InBox src={MyPocket} />
                </InBoxWrapper>
                <Text>내 주머니</Text>
              </Wrapper>
            </OutBox>
            <OutBox>
              <Wrapper
                onClick={() => {
                  navigate("/zzimlist");
                }}
              >
                <InBoxWrapper>
                  <InBox src={Like} />
                </InBoxWrapper>
                <Text>찜한 목록</Text>
              </Wrapper>
            </OutBox>
            <OutBox
              onClick={() => {
                navigate("/chat");
              }}
            >
              <Wrapper>
                <InBoxWrapper>
                  <InBox src={MyChat} />
                </InBoxWrapper>
                <Text>내 채팅</Text>
              </Wrapper>
            </OutBox>
          </BoxContainer>
          <ResignWrapper>
            <Resign>핍포 탈퇴하기</Resign>
          </ResignWrapper>
        </PocketInline>
      </PocketContainer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0px;
  height: 565px;
  width: 100%;
  background-color: #ffca64;
`;

const PocketContainer = styled.div`
  width: 100%;
  border-top: 4px solid #000;
  background-color: #fff;
  overflow: hidden;
  padding: 20px 0px 0px 0px;
  background-color: #ffca64;
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
  gap: 16px;
`;

const OutBox = styled.div`
  width: 176px;
  height: 176px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfcfc;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const InBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 10px 0px;
`;

const InBox = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;

const Text = styled.div`
  width: 100%;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
`;

const ResignWrapper = styled.div`
  width: 100%;
  padding: 80px 0px 0px 0px;
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

export default Pocket;
