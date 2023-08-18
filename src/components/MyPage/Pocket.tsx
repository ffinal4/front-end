import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Pocket = () => {

    const navigate = useNavigate();

  return (
    <LayoutContainer>
        <PocketContainer>
        <svg xmlns="http://www.w3.org/2000/svg" width="1915" height="2" viewBox="0 0 1915 2" fill="none">
            <path d="M0 1H1915" stroke="black" strokeWidth="2" strokeDasharray="40 40"/>
        </svg>
            <PocketInline>
                <BoxContainer>
                    <OutBox>
                        <Wrapper>
                            <InBoxWrapper>
                                <InBox />
                            </InBoxWrapper>
                            <Text>교환 요청</Text>
                        </Wrapper>
                    </OutBox>
                    <OutBox>
                        <Wrapper>
                            <InBoxWrapper>
                                <InBox />
                            </InBoxWrapper>
                            <Text>경매 현황</Text>
                        </Wrapper>
                    </OutBox>
                    <OutBox>
                        <Wrapper>
                            <InBoxWrapper>
                                <InBox />
                            </InBoxWrapper>
                            <Text>내 주머니</Text>
                        </Wrapper>
                    </OutBox>
                    <OutBox>
                        <Wrapper>
                            <InBoxWrapper>
                                <InBox />
                            </InBoxWrapper>
                            <Text>찜한 목록</Text>
                        </Wrapper>
                    </OutBox>
                    <OutBox onClick={() => {navigate("/chat")}}>
                        <Wrapper>
                            <InBoxWrapper>
                                <InBox />
                            </InBoxWrapper>
                            <Text>내 채팅</Text>
                        </Wrapper>
                    </OutBox>
                </BoxContainer>
            </PocketInline>
            <ResignWrapper>
                <Resign>핍포 탈퇴하기</Resign>
            </ResignWrapper>
        </PocketContainer>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    height: 445px;
    width: 100%;
`;

const PocketContainer = styled.div`
    width: 100%;
    border-top: 4px solid #000;
    background-color: #fff;
    overflow: hidden;
    padding: 20px 0px 0px 0px;
`;

const PocketInline = styled.div`
    width: 100%;
    padding: 60px 0px 100px 0px;
    display: grid;
    justify-content: center;
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
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
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

const InBox = styled.div`
    width: 48px;
    height: 48px;
    background-color: #D9D9D9;
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
    padding: 0px 392px;
`;

const Resign = styled.div`
    width: 110px;
    display: flex;
    justify-content: center;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #7A7A7A;
    border-bottom: 1px solid #7A7A7A;
    cursor: pointer;
`;

export default Pocket;