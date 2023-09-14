import React from "react";
import { styled } from "styled-components";
import openeye from "../../assets/icon/openeye.png";
import closeeye from "../../assets/icon/closeeye.png";
import {
  ContentContainer,
  Label,
  PwImg,
  PwVisibleButton,
} from "../../pages/SignupPage";
import { StBasicInput } from "../../styles/BasicInput";

interface PasswordInputProps {
  pwType: any;
  setpwType: any;
  register: any;
  errors: any;
  getValues: any;
}
const PasswordInput: React.FC<PasswordInputProps> = ({
  pwType,
  setpwType,
  register,
  errors,
  getValues,
}) => {
  const onClickPasswordType = (event: any) => {
    event.preventDefault();
    setpwType(() => {
      if (!pwType.visible) {
        return { type: "text", visible: true };
      } else {
        return { type: "password", visible: false };
      }
    });
  };

  return (
    <div>
      <PwContainer>
        <Label>비밀번호</Label>
        <PwInputContainer>
          <PwVisibleButton onClick={onClickPasswordType}>
            {pwType.visible ? (
              <PwImg src={closeeye} />
            ) : (
              <PwImg src={openeye} />
            )}
          </PwVisibleButton>
          <StBasicInput
            borderColor={errors.password ? "red" : "#ADADAD"}
            focusBorderColor="#46A75B"
            type={pwType.type}
            placeholder="비밀번호를 입력해주세요."
            {...register("password", {
              minLength: {
                value: 8,
                message: "비밀번호는 8자 이상이어야 합니다.",
              },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,15}$/,
                message:
                  "- 영문, 숫자, 특수문자 각 1개 이상을 포함한 8자리 이상의 비밀번호를 작성해주세요.",
              },
            })}
          />
        </PwInputContainer>
      </PwContainer>
      <ContentContainer>
        <PwContent>
          - 영문, 숫자, 특수문자 각 1개 이상을 포함한 8자리 이상의 비밀번호를
          작성해주세요.
        </PwContent>
      </ContentContainer>
      <PwValidateMessage>{errors?.password?.message}</PwValidateMessage>
      <CheckPwContainer>
        <Label>비밀번호 확인</Label>
        <CheckPwInputContainer>
          <StBasicInput
            borderColor={errors.password ? "red" : "#ADADAD"}
            focusBorderColor="#46A75B"
            type={pwType.type}
            placeholder="비밀번호를 입력해주세요."
            {...register("confirmPassword", {
              validate: {
                check: (value: string) => {
                  if (getValues("password") !== value) {
                    return "비밀번호가 일치하지 않습니다.";
                  }
                },
              },
            })}
          />
        </CheckPwInputContainer>
      </CheckPwContainer>
      <CheckPwValidateMessage>
        {errors?.confirmPassword?.message}
      </CheckPwValidateMessage>
    </div>
  );
};

const PwContainer = styled.div`
  border-top: 1px solid #adadad;
  display: flex;
  align-items: center;
  padding-top: 30px;
  margin-top: 30px;
  margin-bottom: 10px;
  @media screen and (max-width: 376px) {
    flex-direction: column;
  }
`;

const PwInputContainer = styled.div`
  width: 656px;
  position: relative;
  @media screen and (max-width: 376px) {
    width: 343px;
  }
`;

const PwValidateMessage = styled.div`
  width: 656px;
  height: 24px;
  margin-left: 250px;
  color: red;
  margin-top: 10px;
  margin-bottom: 30px;
  font-family: Pretendard;
  font-size: 16px;
`;

const PwContent = styled.div`
  font-family: Pretendard;
  color: #adadad;
`;

const CheckPwInputContainer = styled.div`
  width: 656px;
  position: relative;
  @media screen and (max-width: 376px) {
    width: 343px;
  }
`;

const CheckPwContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media screen and (max-width: 376px) {
    flex-direction: column;
  }
`;

const CheckPwValidateMessage = styled.div`
  width: 656px;
  height: 24px;
  margin-left: 250px;
  color: red;
  margin-bottom: 30px;
  font-family: Pretendard;
  font-size: 16px;
`;
export default PasswordInput;
