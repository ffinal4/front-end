import React from 'react'
import { styled } from "styled-components";

const DetailContainer = () => {
  return (
    <LayoutContainer>
      <ImageBox>사진등록</ImageBox>
      <InfoContainer>
        <InfoTitle>스타벅스 교환권 30,000원</InfoTitle>
        <UserNameContainer>
          <ColorText>핍포님의 주머니</ColorText>
          <BoxWrapper>
            <ColorText>핍포님의 주머니</ColorText><SmallBox />
          </BoxWrapper>
        </UserNameContainer>
        <UserNameContainer style={{border: "none", paddingTop: "30px"}}>
          <LeftWrapper>
            <Wrapper>
              <BigBox></BigBox>
              <ColorText>00</ColorText>
            </Wrapper>
            <Wrapper>
              <BigBox></BigBox>
              <ColorText>00일 전</ColorText>
            </Wrapper>
          </LeftWrapper>
          <LeftWrapper>
            <Wrapper>
              <BigBox></BigBox>
              <ColorText>신고하기</ColorText>
            </Wrapper>
          </LeftWrapper>
        </UserNameContainer>
        <TextContainer>
          <TextLine>
            <ColorText style={{paddingRight: "40px"}}>카테고리</ColorText>
            <Text>기프티콘</Text>
          </TextLine>
          <TextLine>
            <ColorText style={{paddingRight: "40px"}}>상품상태</ColorText>
            <Text>최상</Text>
          </TextLine>
          <TextLine>
            <ColorText style={{paddingRight: "40px"}}>거래지역</ColorText>
            <Text>대구광역시 북구 매전로4길 9 매천센트럴파크 205동 401호</Text>
          </TextLine>
          <TextLine>
            <ColorText style={{paddingRight: "40px"}}>카테고리</ColorText>
            <Text>기프티콘</Text>
          </TextLine>
        </TextContainer>
        <ColorText>*상대방이 교환신청을 수락하여 채팅이 가능해요!</ColorText>
        <div>
          {/* <S.Button></S.Button> */}
        </div>
      </InfoContainer>
    </LayoutContainer>
  )
};

const LayoutContainer = styled.div`
    padding: 60px 0px 87px 0px;
    display: flex;
    width: 100%;
`;

const ImageBox = styled.div`
    width: 466px;
    height: 466px;
    border: 4px solid;
    background-color: #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 112px 0px 0px;
`;

const InfoContainer = styled.div`
    width: 48%;
`;

const InfoTitle = styled.div`
    font-family: "Pretendard";
    font-size: 32px;
    font-weight: 800;
    line-height: 150%;
`;

const UserNameContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0px 0px 16px 0px;
    border-bottom: 2px solid #D9D9D9;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`; 

const ColorText = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #717171;
`;

const BoxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const SmallBox = styled.div`
    width: 24px;
    height: 24px;
    background-color: #D9D9D9;
`;

const BigBox = styled.div`
    width: 32px;
    height: 32px;
    background-color: #D9D9D9;
`;

const LeftWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const TextContainer = styled.div`
    display: grid;
    padding: 14px 0px 52px 0px;
`;

const TextLine = styled.div`
    padding: 12px 0px 0px 0px;
    max-height: 48px;
    display: flex;
    width: 100%;
`;

export default DetailContainer;