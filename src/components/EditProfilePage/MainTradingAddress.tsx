import React from "react";
import { styled } from "styled-components";
import KakaoApi from "../common/KakaoApi";

const MainTradingAddress = (props: any) => {
  const { openPostcode, setOpenPostcode, address, setAddress, data } = props;
  return (
    <div>
      <AddressLabelContainer>
        <AddressLabel>주거래지역</AddressLabel>
        <CurrentAddress>{data.data.info.location}</CurrentAddress>
      </AddressLabelContainer>
      <AddressContainer>
        <KakaoApi
          address={address}
          setAddress={setAddress}
          openPostcode={openPostcode}
          setOpenPostcode={setOpenPostcode}
          data={data}
        />
      </AddressContainer>
      <AddContent>- 입력된 주소는 나의 주거래 지역으로 표시됩니다.</AddContent>
    </div>
  );
};

const CurrentAddress = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
`;
const AddressLabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  border-top: 1px solid gray;
  padding-top: 30px;
`;

const AddressLabel = styled.label`
  width: 150px;
  height: 33px;
  font-size: 20px;
  font-family: "Pretendard";
  font-weight: bold;
  margin-right: 70px;
`;

const AddressContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding-left: 220px;
  padding-right: 250px;
`;

const AddContent = styled.div`
  font-family: "Pretendard";
  margin: 10px 0px 0px 220px;
  margin-bottom: 40px;
  color: #39373a;
  margin-bottom: 40px;
`;

export default MainTradingAddress;
