import React from "react";
import { styled } from "styled-components";
import image from "../../assets/images/ppapparo.jpg";

const TradeRequestList = () => {
  return (
    <div>
      <RequestContainer>
        <RequestDate>2023.07.30</RequestDate>
        <TradeRequestItem>
          <ImgContainer>
            <Image src={image} />
            <ContentContainer>
              <ItemTitle>스파이더맨 어크로스 더 유니버스 IMAX 포스터</ItemTitle>
              <User>바꾼사람이핍포</User>
            </ContentContainer>
          </ImgContainer>
        </TradeRequestItem>
        <MyItemContainer>
          <ImgContainer>
            <Image src={image} />
          </ImgContainer>
        </MyItemContainer>
        <StateContainer>교환진행중</StateContainer>
        <button>채팅</button>
        <button>완료</button>
      </RequestContainer>
    </div>
  );
};
const RequestContainer = styled.div`
  border-bottom: 1px solid #e1e1e1;
  height: 112px;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  /* border: 1px solid blue; */
  width: 80px;
  height: 80px;
  display: flex;
`;

const Image = styled.img`
  border: 1px solid black;
  width: 80px;
  height: 80px;
`;

const ContentContainer = styled.div`
  width: 346px;
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 16px;
`;
const RequestDate = styled.div`
  border-right: 1px solid #e1e1e1;
  width: 174px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TradeRequestItem = styled.div`
  border-right: 1px solid #e1e1e1;
  width: 478px;
  padding: 16px;
`;

const ItemTitle = styled.div`
  width: 346px;
  height: 24px;
  display: flex;
  /* border: 1px solid blue; */
`;

const User = styled.div`
  /* border: 1px solid blue; */
  width: 346px;
  margin-top: 4px;
`;

const MyItemContainer = styled.div`
  border-right: 1px solid #e1e1e1;
  width: 112px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StateContainer = styled.div`
  border-right: 1px solid #e1e1e1;
  width: 172px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default TradeRequestList;
