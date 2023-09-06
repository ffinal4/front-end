import React from "react";
import { styled } from "styled-components";
import Swal from "sweetalert2";
import {
  AssignButtonContainer,
  Label,
  StButton,
  SubTitle,
  Title,
  TitleContainer,
} from "./EditProfilePage";
import { StBasicInput } from "../styles/BasicInput";
import { useForm } from "react-hook-form";
import { postPasswordChangeApi } from "../api/users";
import { useNavigate } from "react-router-dom";

interface PwChangeForm {
  newPassword: string;
  originPassword: string;
  confirmPassword: string;
}

const PasswordChangePage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<PwChangeForm>({ mode: "onBlur" });

  // 비밀번호 통신
  const editPasswordOnclick = handleSubmit(async (data) => {
    const body = {
      originPassword: data.originPassword,
      password: data.newPassword,
    };
    console.log(body, "데이터");
    try {
      const res = await postPasswordChangeApi(body);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          text: "개인정보가 수정되었습니다.",
          confirmButtonColor: "#ffca64",
        });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  });

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
          <Label style={{ marginTop: "10px" }}>현재 비밀번호</Label>
          <CurrentPwInputContainer>
            <StBasicInput
              focusBorderColor="#46A75B"
              borderColor={errors.originPassword ? "red" : "#ADADAD"}
              type="password"
              placeholder="현재 비밀번호를 입력해주세요."
              {...register("originPassword")}
            />
            <Content>{errors?.originPassword?.message}</Content>
          </CurrentPwInputContainer>
        </CurrentPwContainer>
        <ResetPwContainer>
          <Label>비밀번호 재설정</Label>
          <ResetPwInputContainer>
            <StBasicInput
              focusBorderColor="#46A75B"
              borderColor={errors.newPassword ? "red" : "#ADADAD"}
              type="password"
              placeholder="새 비밀번호를 입력해주세요."
              {...register("newPassword", {
                minLength: {
                  value: 8,
                  message: "* 비밀번호는 8자 이상 15자 이하여야 합니다.",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/,
                  message:
                    "영문, 숫자, 특수문자 각 1개 이상을 포함한 8자리 이상의 비밀번호를 작성해주세요.",
                },
              })}
            />
            <PwValidation>{errors?.newPassword?.message}</PwValidation>
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
                focusBorderColor="#46A75B"
                borderColor={errors.newPassword ? "red" : "#ADADAD"}
                type="password"
                placeholder="비밀번호를 확인해주세요."
                {...register("confirmPassword", {
                  validate: {
                    check: (value) => {
                      if (getValues("newPassword") !== value) {
                        return "* 비밀번호가 일치하지 않습니다.";
                      }
                    },
                  },
                })}
              />
              <PwValidation>{errors?.confirmPassword?.message}</PwValidation>
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
          onClick={editPasswordOnclick}
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
  margin: auto;
`;

const CurrentPwContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

const CurrentPwInputContainer = styled.div`
  width: 656px;
`;

const ResetPwContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
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
  margin-bottom: 40px;
`;

const ConfirmPwContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  width: 465px;
  height: 24px;
  color: black;
  margin-bottom: 30px;
`;
export default PasswordChangePage;
