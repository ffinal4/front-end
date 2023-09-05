import React from "react";
import { styled } from "styled-components";
import {
  AssignButtonContainer,
  Content,
  Label,
  StButton,
  SubTitle,
  Title,
  TitleContainer,
} from "./EditProfilePage";
import { StBasicInput } from "../styles/BasicInput";
import { useForm } from "react-hook-form";

const PasswordChange = () => {
  return (
    <div>
      <TitleContainer>
        <Title>
          PASSWORD
          <SubTitle>비밀번호 변경</SubTitle>
        </Title>
      </TitleContainer>
      <PasswordContainer>
        <CurrentPwContainer>
          <Label>현재 비밀번호</Label>
          <CurrentPwInputContainer>
            <StBasicInput
              focusBorderColor="#EC0000"
              borderColor="#ADADAD"
              type="password"
              placeholder="현재 비밀번호를 입력해주세요."
              //   {...register("currentPassword")}
            />
            {/* <Content>{errors?.currentPassword?.message}</Content> */}
          </CurrentPwInputContainer>
        </CurrentPwContainer>
        <ResetPwContainer>
          <Label>비밀번호 재설정</Label>
          <ResetPwInputContainer>
            <StBasicInput
              focusBorderColor="#EC0000"
              borderColor="#ADADAD"
              type="password"
              placeholder="새 비밀번호를 입력해주세요."
              // {...register("newPassword", {
              //   minLength: {
              //     value: 8,
              //     message: "* 비밀번호는 8자 이상 15자 이하여야 합니다.",
              //   },
              //   pattern: {
              //     value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/,
              //     message:
              //       "영문, 숫자, 특수문자 각 1개 이상을 포함한 8자리 이상의 비밀번호를 작성해주세요.",
              //   },
              // })}
            />
            {/* <PwValidation>{errors?.newPassword?.message}</PwValidation> */}
            <PwContent>
              - 영문, 숫자, 특수문자 각 1개 이상을 포함한 8자리 이상
            </PwContent>
          </ResetPwInputContainer>
        </ResetPwContainer>
        <ConfirmPwContainer>
          <Label>비밀번호 확인</Label>
          <SetPwInputContainer>
            <CheckPwInputContainer>
              <StBasicInput
                focusBorderColor="#EC0000"
                borderColor="#ADADAD"
                type="password"
                placeholder="비밀번호를 확인해주세요."
                //   {...register("confirmPassword", {
                //     validate: {
                //       check: (value) => {
                //         if (getValues("newPassword") !== value) {
                //           return "* 비밀번호가 일치하지 않습니다.";
                //         }
                //       },
                //     },
                //   })}
              />
              {/* <PwValidation>{errors?.confirmPassword?.message}</PwValidation> */}
            </CheckPwInputContainer>
          </SetPwInputContainer>
        </ConfirmPwContainer>
      </PasswordContainer>
      <AssignButtonContainer>
        <StButton
          buttonColor="#FFCA64"
          style={{
            color: "black",
            border: "2px solid black",
            fontWeight: "700",
          }}
        >
          변경사항 저장
        </StButton>
      </AssignButtonContainer>
    </div>
  );
};
const PasswordContainer = styled.div`
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  width: 100%;
  height: 306px;
  margin: auto;
`;

const CurrentPwContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const CurrentPwInputContainer = styled.div`
  width: 656px;
`;

const ResetPwContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
`;
const ResetPwInputContainer = styled.div`
  width: 656px;
`;

const PwContent = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 30px;
  color: #39373a;
  margin-top: 10px;
`;

const PwValidation = styled.div`
  color: red;
  margin-top: 10px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const SetPwInputContainer = styled.div`
  width: 656px;
`;

const CheckPwInputContainer = styled.div`
  margin-bottom: 30px;
`;

const ConfirmPwContainer = styled.div`
  width: 100%;
  display: flex;
`;

export default PasswordChange;
