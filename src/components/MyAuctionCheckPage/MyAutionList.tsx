import React, { useState } from "react";
import {
  ButtonContainer,
  ContentContainer,
  Image,
  ImgContainer,
  ItemTitle,
  MyItemContainer,
  RejectButton,
  RequestContainer,
  RequestDate,
  RequestState,
  StAcceptButton,
  StButton,
  StateContainer,
  TradeRequestItem,
  User,
} from "../TradeRequestPage/TradeRequestList";
import image from "../../assets/images/kangaroowhy.png";
import RequestRejectModal from "../TradeRequestPage/RequestRejectModal";
import { StBasicButton } from "../../styles/BasicButton";
import { useNavigate } from "react-router-dom";

const MyAutionList = () => {
  const navigate = useNavigate();
  const [rejectModalOpen, setRejectModalOpen] = useState<boolean>(false);
  const [requestState, setRequestState] = useState({
    request: "교환요청",
  });

  const { request } = requestState;

  const requestAcceptOnclick = () => {
    setRequestState({ ...requestState, request: "경매진행중" });
  };

  const completeOnclick = () => {
    setRequestState({ ...requestState, request: "경매완료" });
  };

  const stateButton = () => {
    if (request === "교환요청") {
      return (
        <ButtonContainer>
          <StAcceptButton buttonColor="#39373A" onClick={requestAcceptOnclick}>
            수락
          </StAcceptButton>
          <StButton buttonColor="white" onClick={rejectModalClick}>
            거절
          </StButton>
          {rejectModalOpen && (
            <RequestRejectModal
              rejectModalOpen={rejectModalOpen}
              setRejectModalOpen={setRejectModalOpen}
            />
          )}
        </ButtonContainer>
      );
    }

    if (request === "경매진행중") {
      return (
        <ButtonContainer>
          <StButton
            buttonColor="#58ABF7"
            onClick={() => {
              navigate("/chat");
            }}
          >
            채팅
          </StButton>
          <RejectButton onClick={completeOnclick}>완료</RejectButton>
        </ButtonContainer>
      );
    }

    if (request === "경매취소") {
      return (
        <ButtonContainer>
          <StBasicButton buttonColor="">삭제</StBasicButton>
        </ButtonContainer>
      );
    }

    if (request === "경매완료") {
      return (
        <ButtonContainer>
          <StBasicButton buttonColor="">자세히보기</StBasicButton>
        </ButtonContainer>
      );
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
        <RequestState>경매전</RequestState>
        <StateContainer>{stateButton()}</StateContainer>
      </RequestContainer>
    </div>
  );
};

export default MyAutionList;
