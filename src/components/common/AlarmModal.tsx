import React, { useEffect, useRef } from 'react'
import { styled } from 'styled-components';
import Default from '../../assets/images/defaultprofile.png'

const AlarmModal = ({ setAlarmModalOpen } : any) => {

  return (
      <ModalContainer>
        <TriangleWrapper>
          <Triangle />
        </TriangleWrapper>
        <ModalWrapper>
            <EmptyModalContainer
              style={{borderRadius: "5px",
                padding: "20px",
                display: "flex",
                justifyContent: "center"}}
            >
              <Content style={{color: "#ADADAD"}}>새로운 알림이 없어요.</Content>
            </EmptyModalContainer>
            {/* <ModalLineContainer style={{borderRadius: "5px 5px 0px 0px"}} >
              <ImageBox src={Default} />
              <TextLine>
                <Title
                  style={{color: "#EC8D49"}}
                >교환신청
                </Title>
                <Content>스타벅스 블랙퍼스트 500g 홀빈 원두커피 블렌더 코스트코</Content>
              </TextLine>
            </ModalLineContainer>
            <ModalLineContainer>
              <ImageBox src={Default} />
              <TextLine>
                <Title
                  style={{color: "#58ABF7"}}
                >교환신청
                </Title>
                <Content>스타벅스 블랙퍼스트 500g 홀빈 원두커피 블렌더 코스트코</Content>
              </TextLine>
            </ModalLineContainer>
            <ModalLineContainer>
              <ImageBox src={Default} />
              <TextLine>
                <Title
                  style={{color: "#39373A"}}
                >교환신청
                </Title>
                <Content>스타벅스 블랙퍼스트 500g 홀빈 원두커피 블렌더 코스트코</Content>
              </TextLine>
            </ModalLineContainer>
            <ModalLineContainer style={{borderRadius: "0px 0px 5px 5px"}}>
              <ImageBox src={Default} />
              <TextLine>
                <Title
                  style={{color: "#EC8D49"}}
                >교환신청
                </Title>
                <Content>스타벅스 블랙퍼스트 500g 홀빈 원두커피 블렌더 코스트코</Content>
              </TextLine>
            </ModalLineContainer> */}
        </ModalWrapper>
      </ModalContainer>
  )
};

const ModalContainer = styled.div`
  width: 396px;
  max-height: 446px;
  position: relative;
  box-shadow: 1px 1px 8px 0px #c7c7c7;
  border-radius: 5px;
`;

const TriangleWrapper = styled.div`
  width: 396px;
  height: 16px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -21px;
`;

const Triangle = styled.div`
  width: 24.249px;
  height: 21px;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 21px solid #FCFCFC;
`;

const ModalWrapper = styled.div`
  border-radius: 5px;
  width: 396px;
  max-height: 424px;
  background-color: #FCFCFC;
`;

const EmptyModalContainer = styled.div`
  width: 100%;
  height: 106px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ModalLineContainer = styled.div`
  width: 100%;
  height: 106px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  &:hover {
    background-color: #EFEFEF;
  }
`;

const ImageBox = styled.img`
  width: 56px;
  height: 56px;
  object-fit: contain;
  border-radius: 100%;
`;

const TextLine = styled.div`
  display: grid;
  gap: 4px;
`;

const Title = styled.div`
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  line-height: 140%;
`;

const Content = styled.div`
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  color: #222020;
`;

export default AlarmModal;