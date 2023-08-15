import React, { useState } from "react";
import { styled } from "styled-components";
import image from "../../assets/images/ppapparo.jpg";
import { useNavigate } from "react-router-dom";
import RequestRejectModal from "./RequestRejectModal";

const TradeRequestList = () => {
  const navigate = useNavigate();
  const [rejectModalOpen, setRejectModalOpen] = useState<boolean>(false);

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
        <StateContainer>교환요청</StateContainer>
        <ButtonContainer>
          <AcceptButton>수락</AcceptButton>
          <RejectButton onClick={rejectModalClick}>거절</RejectButton>
          {rejectModalOpen && (
            <RequestRejectModal
              rejectModalOpen={rejectModalOpen}
              setRejectModalOpen={setRejectModalOpen}
            />
          )}
        </ButtonContainer>
      </RequestContainer>
    </div>
  );
};
const RequestContainer = styled.div`
  border-bottom: 2px solid #e1e1e1;
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
  /* border: 1px solid black; */
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
  border-right: 2px solid #e1e1e1;
  width: 174px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 16px;
`;

const TradeRequestItem = styled.div`
  border-right: 2px solid #e1e1e1;
  width: 478px;
  padding: 16px;
`;

const ItemTitle = styled.div`
  width: 346px;
  height: 24px;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  font-family: Pretendard;
  /* border: 1px solid blue; */
`;

const User = styled.div`
  /* border: 1px solid blue; */

  width: 346px;
  margin-top: 4px;
  font-weight: 400;
  font-family: Pretendard;
  color: #767676;
`;

const MyItemContainer = styled.div`
  border-right: 2px solid #e1e1e1;
  width: 112px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StateContainer = styled.div`
  border-right: 2px solid #e1e1e1;
  width: 172px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 400;
`;

const ButtonContainer = styled.div`
  /* border: 1px solid red; */

  margin: auto;
`;
const AcceptButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  width: 80px;
  padding: 10px 0px;
  margin-right: 16px;
`;

const RejectButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  width: 80px;
  padding: 10px 0px;
`;
export default TradeRequestList;
