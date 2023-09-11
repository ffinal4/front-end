import React, { useRef } from "react";
import { styled } from "styled-components";
import KakaoApi from "../common/KakaoApi";
import { ContentContainer, Label } from "../../pages/SignupPage";

interface AddressInputProps {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  openPostcode: boolean;
  setOpenPostcode: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddressInput: React.FC<AddressInputProps> = ({
  address,
  setAddress,
  openPostcode,
  setOpenPostcode,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <AddressContainer ref={divRef}>
        <Label>주소</Label>
        <AddressInputContainer>
          <KakaoApi
            address={address}
            setAddress={setAddress}
            openPostcode={openPostcode}
            setOpenPostcode={setOpenPostcode}
          />
        </AddressInputContainer>
      </AddressContainer>
      <ContentContainer>
        <AddressContent>
          - 입력된 주소는 나의 주거래 지역으로 표시됩니다.
        </AddressContent>
      </ContentContainer>
    </div>
  );
};

const AddressContainer = styled.div`
  border-top: 1px solid #adadad;
  padding-top: 30px;
  display: flex;
  align-items: center;
`;

const AddressInputContainer = styled.div`
  width: 656px;
  display: flex;
`;
const AddressContent = styled.div`
  width: 100%;
  height: 24px;
  font-family: Pretendard;
  color: #adadad;
  margin-top: 10px;
  margin-bottom: 30px;
`;
export default AddressInput;
