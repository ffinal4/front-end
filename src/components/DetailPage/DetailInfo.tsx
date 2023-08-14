<<<<<<< HEAD
import React, { useState } from "react";
import { StBasicButton } from "../../styles/BasicButton";
import { styled } from "styled-components";
=======
import React, { useState } from 'react'
import { StBasicButton } from '../../styles/BasicButton';
import { styled } from 'styled-components';
import Like from '../../assets/icon/like.png'
import Time from '../../assets/icon/time.png'
import Layer from '../../assets/icon/layer_6.png'
import Siren from '../../assets/icon/siren.png'
import Group from '../../assets/icon/group.png'
>>>>>>> 1f2d893df0334c6e73af46534f088a77fae78932

const DetailInfo = () => {
  const [chatting, setChatting] = useState(false);

<<<<<<< HEAD
  const onClickAcceptHandler = () => {
    setChatting(true);
  };

  const onClickChatting = () => {
    setChatting(false);
  };

  return (
    <InfoContainer>
      <InfoTitle>스타벅스 교환권 30,000원</InfoTitle>
      <UserNameContainer>
        <ColorText>핍포님의 주머니</ColorText>
        <BoxWrapper>
          <ColorText>핍포님의 주머니</ColorText>
          <SmallBox />
        </BoxWrapper>
      </UserNameContainer>
      <UserNameContainer style={{ border: "none", paddingTop: "16px" }}>
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
          <ColorText style={{ paddingRight: "40px" }}>카테고리</ColorText>
          <Text>기프티콘</Text>
        </TextLine>
        <TextLine>
          <ColorText style={{ paddingRight: "40px" }}>상품상태</ColorText>
          <Text>최상</Text>
        </TextLine>
        <TextLine>
          <ColorText style={{ paddingRight: "40px" }}>거래지역</ColorText>
          <Text></Text>
        </TextLine>
        <TextLine>
          <ColorText style={{ paddingRight: "40px" }}>거래방법</ColorText>
          <Text>직거래</Text>
        </TextLine>
        <TextLine>
          <ColorText style={{ paddingRight: "40px" }}>상품태그</ColorText>
          <Text>#스타벅스 #기프티콘 #교환권</Text>
        </TextLine>
      </TextContainer>
      <ColorText>*상대방이 교환신청을 수락하여 채팅이 가능해요!</ColorText>
      <ButtonWrapper>
        <StBasicButton
          color="white"
          borderColor="#717171"
          buttonColor="#717171"
          fontWeight="400"
          style={{ color: "white" }}
          onClick={onClickAcceptHandler}
        >
          교환신청
        </StBasicButton>
        <StBasicButton
          color="white"
          borderColor="#717171"
          buttonColor="#717171"
          fontWeight="400"
          style={{ color: "white" }}
        >
          찜하기
        </StBasicButton>
        {chatting ? (
          <StBasicButton
            color="white"
            borderColor="#717171"
            buttonColor="#717171"
            fontWeight="400"
            style={{ color: "white" }}
            onClick={onClickChatting}
          >
            채팅하기
          </StBasicButton>
        ) : (
          <StBasicButton
            color="white"
            borderColor="#E2E2E2"
            buttonColor="#E2E2E2"
            fontWeight="400"
            style={{ color: "#999999" }}
            onClick={onClickChatting}
          >
            채팅하기
          </StBasicButton>
        )}
      </ButtonWrapper>
    </InfoContainer>
  );
=======
    const [conditional, setConditional] = useState({
      chatting: false,
      users: true,
      modal: false,
      auction: false
    });
    const { chatting, users, modal, auction } = conditional;

    const onClickAcceptHandler = () => {
      setConditional({...conditional, chatting: true});
    };

    const onClickChatting = () => {
      setConditional({...conditional, chatting: false});
    };

    const onClickMenuOpenHandler = () => {
      setConditional({...conditional, modal: !modal});
    };

  return (
    <InfoContainer>
        <InfoTitle>스타벅스 블랙퍼스트 500g 홀빈 원두커피 블렌더 코스트코</InfoTitle>
        <UserNameContainer>
          <ColorText color='#ADADAD'>10,000PP</ColorText>
          <BoxWrapper>
            <TextWrapper>
              <SmallBox src={Like}/>
              <ColorText color='#ADADAD'>12</ColorText>
            </TextWrapper>
            <TextWrapper>
              <SmallBox src={Time}/>
              <ColorText color='#ADADAD'>10일 전</ColorText>
            </TextWrapper>
          </BoxWrapper>
        </UserNameContainer>
        <UserNameContainer style={{ border: "none", paddingTop: "16px", position: "relative" }}>
          <TextWrapper>
            <ColorText color='#39373A'>사용자김핍포</ColorText>
            <SmallBox src={Layer} style={{cursor: "pointer"}}/>
          </TextWrapper>
          <TextWrapper>
            {(users)
              ? <TextWrapper
                style={{cursor: "pointer"}}
                onClick={onClickMenuOpenHandler}
              >
                <SmallBox src={Group}/>
              </TextWrapper>
              : <TextWrapper style={{cursor: "pointer"}}>
                <SmallBox src={Siren}/>
                <ColorText color='#ADADAD'>신고하기</ColorText>
              </TextWrapper>}
              {(modal)
                && <ModalBtnWrapper>
                  <ModalBtn
                    style={{borderTop: "1px solid #D5D4D4", borderRadius: "5px 5px 0px 0px"}}>
                  예약중</ModalBtn>
                  <ModalBtn>거래완료</ModalBtn>
                  <ModalBtn>게시글 수정</ModalBtn>
                  {(auction)
                    ? <ModalBtn>레이팅 요청</ModalBtn>
                    : <ModalBtnDisabled>레이팅 요청</ModalBtnDisabled>
                  }
                  <ModalBtn 
                    style={{borderRadius: "0px 0px 5px 5px"}}
                  >삭제</ModalBtn>
              </ModalBtnWrapper>}
          </TextWrapper>
        </UserNameContainer>
        <TextContainer>
          <TextLine>
            <ColorText color='#717171'>카테고리</ColorText>
            <ColorText color='#222020'>기프티콘</ColorText>
          </TextLine>
          <TextLine>
            <ColorText color='#717171'>상품상태</ColorText>
            <ColorText color='#222020'>상</ColorText>
          </TextLine>
          <TextLine>
            <ColorText color='#717171'>거래지역</ColorText>
            <ColorText color='#222020'>수원시 영통구 매탄3동</ColorText>
          </TextLine>
          <TextLine>
            <ColorText color='#717171'>거래방법</ColorText>
            <ColorText color='#222020'>직거래</ColorText>
          </TextLine>
          <TextLine>
            <ColorText color='#717171'>상품태그</ColorText>
            <ColorText color='#222020'>#스타벅스   #기프티콘   #교환권</ColorText>
          </TextLine>
        </TextContainer>
        <ColorText color='#717171'>*상대방이 교환신청을 수락하여 채팅이 가능해요!</ColorText>
        <ButtonWrapper>
          <StBasicButton
            buttonColor='#FFCA64'
            onClick={onClickAcceptHandler}
            >교환신청</StBasicButton>
          <StBasicButton
            buttonColor='#FFCA64'
            >찜하기</StBasicButton>
            {(chatting)
            ? <StBasicButton
                buttonColor='#FFCA64'
                onClick={onClickChatting}
                >채팅하기</StBasicButton>
            : <StBasicButton
                buttonColor='#D5D4D4'
                style={{color: "#fff", cursor: "default"}}
                >채팅하기</StBasicButton>
            }
        </ButtonWrapper>
      </InfoContainer>
  )
>>>>>>> 1f2d893df0334c6e73af46534f088a77fae78932
};

const InfoContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 834px) {
    width: 100%;
    display: grid;
  }
`;

const InfoTitle = styled.div`
<<<<<<< HEAD
  font-family: "Pretendard";
  font-size: 32px;
  font-weight: 800;
  line-height: 150%;
=======
    font-family: "Pretendard";
    font-size: 32px;
    font-weight: 800;
    line-height: 150%;
    padding: 0px 0px 10px 0px;
>>>>>>> 1f2d893df0334c6e73af46534f088a77fae78932
`;

const UserNameContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0px 0px 16px 0px;
  border-bottom: 2px solid #d9d9d9;
`;

<<<<<<< HEAD
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
  background-color: #d9d9d9;
`;

const BigBox = styled.div`
  width: 32px;
  height: 32px;
  background-color: #d9d9d9;
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
  padding: 2px 0px 52px 0px;
`;

const TextLine = styled.div`
  padding: 12px 0px 0px 0px;
  display: flex;
  width: 100%;
=======
const ColorText = styled.div<{ color : string }>`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: ${(props) => props.color};
`;

const BoxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

const SmallBox = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
`;

const TextContainer = styled.div`
    display: grid;
    padding: 24px 0px 40px 0px;
    gap: 10px;
`;

const TextLine = styled.div`
    display: flex;
    width: 100%;
    gap: 40px;
>>>>>>> 1f2d893df0334c6e73af46534f088a77fae78932
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  padding: 10px 0px 0px 0px;
`;

<<<<<<< HEAD
export default DetailInfo;
=======
const ModalBtnWrapper = styled.div`
  width: 176px;
  position: absolute;
  top: 40px;
  right: 0;
`;

const ModalBtn = styled.div`
  display: flex;
  width: 176px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  background-color: #FCFCFC;
  border-bottom: 1px solid #D5D4D4;
  border-left: 1px solid #D5D4D4;
  border-right: 1px solid #D5D4D4;
  cursor: pointer;

  &:hover {
    background-color: #e9e9e9;
  };
`;

const ModalBtnDisabled = styled.div`
  display: flex;
  width: 176px;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #D5D4D4;
  background-color: #FCFCFC;
  border-bottom: 1px solid #D5D4D4;
  border-left: 1px solid #D5D4D4;
  border-right: 1px solid #D5D4D4;
`;

export default DetailInfo;
>>>>>>> 1f2d893df0334c6e73af46534f088a77fae78932
