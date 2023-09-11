import React from "react";
import { styled } from "styled-components";
import { Label } from "../../pages/SignupPage";
import { StBasicInput } from "../../styles/BasicInput";

interface EmailInputProps {
  register: any;
  errors: any;
  getValues: any;
}
const EmailInput: React.FC<EmailInputProps> = ({
  register,
  errors,
  getValues,
}) => {
  return (
    <div>
      <EmailContainer>
        <Label>이메일(아이디)</Label>
        <EmailInputContainer>
          <StBasicInput
            borderColor={errors.email ? "red" : "#ADADAD"}
            focusBorderColor="#46A75B"
            type="email"
            placeholder="이메일을 입력해주세요"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z\d]{3,}$/,
                message: "3자 이상 입력해주세요. ",
              },
            })}
          />
        </EmailInputContainer>
        <AtContainer>@</AtContainer>
        <SelectContainer>
          <EmailSelect
            {...register("select", { required: "필수입력 항목입니다." })}
          >
            <option value="">선택해주세요</option>
            <option value="@naver.com">naver.com</option>
            <option value="@hanmail.net">hanmail.net</option>
            <option value="@daum.net">daum.net</option>
            <option value="@gmail.com">gmail.com</option>
            <option value="@nate.com">nate.com</option>
            <option value="@hotmail.com">hotmail.com</option>
            <option value="@outlook.com">outlook.com</option>
            <option value="@icloud.com">icloud.com</option>
          </EmailSelect>
        </SelectContainer>
      </EmailContainer>
      <ValidateMessage>{errors?.email?.message}</ValidateMessage>
    </div>
  );
};

const EmailInputContainer = styled.div`
  width: 272px;
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 44px;
`;

const AtContainer = styled.div`
  padding: 0px 16px 0px 16px;
`;

const SelectContainer = styled.div`
  width: 337px;
`;

const EmailSelect = styled.select`
  width: 100%;
  height: 44px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #adadad;
  font-family: Pretendard;
`;

const ValidateMessage = styled.div`
  width: 465px;
  height: 24px;
  margin-left: 250px;
  color: red;
  font-family: Pretendard;
  font-size: 16px;
`;
export default EmailInput;
