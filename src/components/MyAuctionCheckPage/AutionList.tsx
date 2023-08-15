import React from "react";
import {
  ContentContainer,
  ImgContainer,
  ItemTitle,
  MyItemContainer,
  RequestContainer,
  RequestDate,
  StateContainer,
  TradeRequestItem,
  User,
} from "../TradeRequestPage/TradeRequestList";

const AutionList = () => {
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
        <StateContainer>{stateButton()}</StateContainer>
      </RequestContainer>
    </div>
  );
};

export default AutionList;
