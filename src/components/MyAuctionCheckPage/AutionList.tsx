import React, { useState } from "react";
import {
  AcceptButton,
  ButtonContainer,
  ContentContainer,
  Image,
  ImgContainer,
  ItemTitle,
  MyItemContainer,
  RejectButton,
  RequestContainer,
  RequestDate,
  StateContainer,
  TradeRequestItem,
  User,
} from "../TradeRequestPage/TradeRequestList";
import image from "../../assets/images/arrowleft.png";
import RequestRejectModal from "../TradeRequestPage/RequestRejectModal";
import { StBasicButton } from "../../styles/BasicButton";

const AutionList = () => {
  const [rejectModalOpen, setRejectModalOpen] = useState<boolean>(false);

  const [a, setA] = useState({
    request: "교환요청",
  });

  const { request } = a;

  const stateButton = () => {
    if (request === "교환요청") {
      <ButtonContainer>
        <AcceptButton>수락</AcceptButton>
        <RejectButton onClick={rejectModalClick}>거절</RejectButton>
        {rejectModalOpen && (
          <RequestRejectModal
            rejectModalOpen={rejectModalOpen}
            setRejectModalOpen={setRejectModalOpen}
          />
        )}
      </ButtonContainer>;
    }

    if (request === "교환진행중") {
      <ButtonContainer>
        <AcceptButton>채팅</AcceptButton>
        <RejectButton onClick={rejectModalClick}>완료</RejectButton>
      </ButtonContainer>;
    }

    if (request === "교환취소") {
      <ButtonContainer>
        <StBasicButton buttonColor="">삭제</StBasicButton>
      </ButtonContainer>;
    }

    if (request === "교환완료") {
      <ButtonContainer>
        <StBasicButton buttonColor="">자세히보기</StBasicButton>
      </ButtonContainer>;
    }
    return null;
  };
  const rejectModalClick = () => {
    setRejectModalOpen(!rejectModalOpen);
  };
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
