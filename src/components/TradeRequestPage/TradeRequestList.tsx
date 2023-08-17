import React, { useState } from "react";
import { styled } from "styled-components";
import image from "../../assets/images/ppapparo.jpg";
import { useNavigate } from "react-router-dom";
import RequestRejectModal from "./RequestRejectModal";
import { StBasicButton } from "../../styles/BasicButton";

const TradeRequestList = () => {
  const navigate = useNavigate();
  const [rejectModalOpen, setRejectModalOpen] = useState<boolean>(false);

  const [requestState, setRequestState] = useState({
    request: "교환요청",
  });

  const { request } = requestState;

  const requestAcceptOnclick = () => {
    setRequestState({ ...requestState, request: "교환진행중" });
  };

  const completeOnclick = () => {
    setRequestState({ ...requestState, request: "교환완료" });
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

    if (request === "교환진행중") {
      return (
        <ButtonContainer>
          <StButton
            buttonColor="#FFCA64"
            onClick={() => {
              navigate("/chat");
            }}
          >
            채팅
          </StButton>
          <StButton buttonColor="#FCF6E9" onClick={completeOnclick}>
            완료
          </StButton>
        </ButtonContainer>
      );
    }

    if (request === "교환취소") {
      return (
        <ButtonContainer>
          <StBasicButton buttonColor="">삭제</StBasicButton>
        </ButtonContainer>
      );
    }

    if (request === "교환완료") {
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
        <RequestState>교환요청</RequestState>
        <StateContainer>{stateButton()}</StateContainer>
      </RequestContainer>
    </div>
  );
};

const StAcceptButton = styled(StBasicButton)`
  border: 1px solid #222020;
  width: 80px;
  color: white;
`;

const StButton = styled(StBasicButton)`
  border: 1px solid #222020;
  width: 80px;
  color: #222020;
`;

export const RequestContainer = styled.div`
  border-bottom: 1px solid #222020;
  height: 113px;
  display: flex;
  align-items: center;
`;

export const ImgContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
`;

export const ContentContainer = styled.div`
  width: 346px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 16px;
`;
export const RequestDate = styled.div`
  border-right: 2px solid #efefef;
  width: 174px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 16px;
`;

export const TradeRequestItem = styled.div`
  border-right: 2px solid #efefef;
  width: 478px;
  padding: 16px;
`;

export const ItemTitle = styled.div`
  width: 346px;
  height: 24px;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  font-family: Pretendard;
`;

export const User = styled.div`
  width: 346px;
  margin-top: 4px;
  font-weight: 400;
  font-family: Pretendard;
  color: #767676;
`;

export const MyItemContainer = styled.div`
  border-right: 2px solid #efefef;
  width: 112px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 400;
  width: 192px;
  margin: auto;
`;

const RequestState = styled.div`
  border-right: 2px solid #efefef;
  width: 172px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: auto;
  gap: 16px;
`;
export const AcceptButton = styled.button`
  background-color: #39373a;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  width: 80px;
  padding: 10px 0px;
  margin-right: 16px;
`;

export const RejectButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  width: 80px;
  padding: 10px 0px;
`;

export default TradeRequestList;
