import React from "react";
import { styled } from "styled-components";
import DaumPostcode from "react-daum-postcode";
import { StBasicButton } from "../../styles/BasicButton";
import { StBasicInput } from "../../styles/BasicInput";

const KakaoApi = (props: any) => {
  const { address, setAddress, openPostcode, setOpenPostcode } = props;

  const addressOnchange = (event: any) => {
    setAddress(event.target.value);
    console.log(event.target.value);
  };
  const handle = {
    // 버튼 클릭 이벤트
    clickButton: (event: any) => {
      event.preventDefault();
      setOpenPostcode((current: any) => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      setAddress(data.address);
      setOpenPostcode(false);
    },
  };
  return (
    <>
      <StBasicInput
        focusBorderColor="#ADADAD"
        borderColor="#ADADAD"
        type="text"
        placeholder="주소를 입력해주세요."
        value={address}
        onChange={addressOnchange}
      />

      <StButton buttonColor="#FDD988" onClick={handle.clickButton}>
        {openPostcode && (
          <DaumPostcode
            onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
            autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
          />
        )}
        주소찾기
      </StButton>
    </>
  );
};

const StButton = styled(StBasicButton)`
  margin-left: 20px;
  border: 1px solid black;
`;
export default KakaoApi;
