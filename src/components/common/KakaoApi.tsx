import React from "react";
import { styled } from "styled-components";
import DaumPostcode from "react-daum-postcode";
import { StBasicButton } from "../../styles/BasicButton";
import { StBasicInput } from "../../styles/BasicInput";

const KakaoApi = (props: any) => {
  const { address, setAddress, openPostcode, setOpenPostcode } = props;

  const themeObj = {
    bgColor: "#FCF6E9", //바탕 배경색
    searchBgColor: "#FFFFFF", //검색창 배경색
    contentBgColor: "#FFFFFF", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
    pageBgColor: "#FFFFFF", //페이지 배경색
    textColor: "#444444", //기본 글자색
    queryTextColor: "#222222", //검색창 글자색
    postcodeTextColor: "red", //우편번호 글자색
    emphTextColor: "#EC8D49", //강조 글자색
    outlineColor: "#F6EFFF", //테두리 };
  };

  const postCodeStyle = {
    display: "block",
    top: "0%",
    width: "100%",
    minHeight: "500px",
    height: "100px",
    padding: "7px",
  };

  const addressOnchange = (event: any) => {
    setAddress(event.target.value);
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
      <AddressContainer>
        <StBasicInput
          focusBorderColor="#46A75B"
          borderColor="#ADADAD"
          type="text"
          placeholder="주소를 입력해주세요."
          value={address}
          onChange={addressOnchange}
        />
      </AddressContainer>
      <StButton buttonColor="#FDD988" onClick={handle.clickButton}>
        {openPostcode && (
          <DaumPostcode
            style={postCodeStyle}
            theme={themeObj}
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
const AddressContainer = styled.div`
  width: 464px;
`;
export default KakaoApi;
