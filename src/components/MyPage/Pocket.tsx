import React, { FC, useEffect, useState } from 'react'
import { styled } from 'styled-components';
// import { PocketProps } from './ProfileContent';

interface Props {
    onClickPocketHandler(): void
}                                 // props의 타입을 interface로 지정

const Pocket: FC<Props> = ({ onClickPocketHandler }) => {  // 지정한 타입을 FC를 이용해 불러옴

    const [height, setHeight] = useState(0);

    useEffect (() => {
        const interval = setInterval (() => {
            if (height < 610) {
                setHeight((prevHeight) => prevHeight + 20);
            }
        }, 10);
        return () => {
            clearInterval(interval);
        };
    }, [height]);

  return (
    <LayoutContainer height={height}>
        <CloseBtnContainer>
            <CloseButton onClick={onClickPocketHandler}>X</CloseButton>
        </CloseBtnContainer>
        <PocketContainer>
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
                            <Text>교환 히스토리</Text>
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
                    <OutBox>
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

const LayoutContainer = styled.div<{ height: number }>`
    position: absolute;
    left: 0;
    bottom: 0;
    height: ${(props) => props.height}px;
    width: 100%;
`;

const CloseBtnContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    padding: 0px 0px 10px 0px;
`;

const CloseButton = styled.div`
    border-radius: 100%;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #b8b8b8;
    font-weight: 700;
    opacity: 0.3;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
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
    border-top: 1px dashed #000;
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