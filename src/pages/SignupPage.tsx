import React, { useState } from "react";
import { styled } from "styled-components";
import { StBasicButton } from "../styles/BasicButton";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StBasicInput } from "../styles/BasicInput";

interface SignupForm {
  email: string;
  select: string;
  password: string;
  confirmPassword: string;
  nickname: string;
}

const SignupPage = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const addressOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<SignupForm>({ mode: "onBlur" });
  return (
    <SignUpPageContainer>
      <TitleContainer>
        <Title>READY TO PEEPO</Title>
      </TitleContainer>
      <SignUpForm
      // onSubmit={handleSubmit(async (data) => {
      //   const newForm = {
      //     email: `${data.email}${data.select}`,
      //     password: data.password,
      //     nickname: data.nickname,
      //   };
      //   try {
      //     const res = await postSignupApi(newForm);
      //     if(res.status === 201) {
      //       console.log("회원가입성공", res);
      //       navigate("/login")
      //     }
      //   } catch(error){
      //     console.log(error);
      //     alert(JSON.stringify(error.response.data.data))
      //   }
      // })}
      >
        <EmailContainer>
          <Label>이메일(아이디)</Label>
          <EmailInputContainer>
            <StBasicInput
              type="email"
              placeholder="이메일을 입력해주세요"
              {...register("email", {
                required: "필수입력 항목입니다.",
                pattern: {
                  value: /^[a-zA-Z\d]{2,}$/,
                  message: "이미 사용중인 이메일입니다.",
                },
              })}
            />
          </EmailInputContainer>

          <AtContainer>@</AtContainer>
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
        </EmailContainer>
        <ValidateMessage>{errors?.email?.message}</ValidateMessage>
        <PwContainer>
          <Label>비밀번호</Label>
          <PwInputContainer>
            <StBasicInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              {...register("password", {
                required: "필수입력 항목입니다.",
                minLength: {
                  value: 8,
                  message:
                    "영문, 숫자, 특수문자 각 1개 이상을 포함한 8자리 이상",
                },
                pattern: {
                  value:
                    /"^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$"/,
                  message:
                    "영문, 숫자, 특수문자 각 1개 이상을 포함한 8자리 이상의 비밀번호를 작성해주세요.",
                },
              })}
            />
          </PwInputContainer>
        </PwContainer>
        <PwValidateMessage>{errors?.password?.message}</PwValidateMessage>
        <CheckPwContainer>
          <Label>비밀번호 확인</Label>
          <CheckPwInputContainer>
            <StBasicInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              {...register("confirmPassword", {
                required: "필수입력 항목입니다.",
                validate: {
                  check: (value) => {
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
        <AddressContainer>
          <Label>주소</Label>
          <AddressInputContainer>
            <StBasicInput
              type="text"
              placeholder="주소를 입력해주세요."
              value={address}
              onChange={addressOnchange}
            />
          </AddressInputContainer>

          <StBasicButton buttonColor="#D9D9D9;" style={{ marginLeft: "20px" }}>
            주소찾기
          </StBasicButton>
        </AddressContainer>
        <AddressContent>
          입력한 주소는 나의 주거래 지역으로 표시됩니다.
        </AddressContent>
        <NickNameContainer>
          <SecondLabel>닉네임</SecondLabel>
          <NickNameInputContainer>
            <StBasicInput
              type="text"
              placeholder="닉네임을 입력해주세요."
              {...register("nickname", {
                required: "필수입력 항목입니다.",
                minLength: { value: 2, message: "2자 이상 입력해주세요." },
                maxLength: { value: 15, message: "15자 이하로 입력해주세요." },
                pattern: {
                  value: /^[A-za-z0-9가-힣]{3,10}$/,
                  message: "영문 대소문자, 글자 단위 한글, 숫자만 가능합니다.",
                },
              })}
            />
          </NickNameInputContainer>

          <StBasicButton buttonColor="#D9D9D9;" style={{ marginLeft: "20px" }}>
            중복 확인
          </StBasicButton>
        </NickNameContainer>
        <ValidateMessage>{errors?.nickname?.message}</ValidateMessage>
      </SignUpForm>
      <AssignButtonContainer>
        <StBasicButton
          // type="submit"
          buttonColor="#D9D9D9;"
          onClick={() => {
            navigate("/login");
          }}
        >
          회원가입
        </StBasicButton>
      </AssignButtonContainer>
    </SignUpPageContainer>
  );
};
const SignUpPageContainer = styled.div`
  /* border: 1px solid blue; */
  /* width: 100%; */
`;
const TitleContainer = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  margin: auto;
  margin-top: 80px;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 30px;
`;
const SignUpForm = styled.form`
  /* border: 5px solid yellow; */
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  width: 1136px;
  height: 626px;
  margin: auto;
`;
const EmailInputContainer = styled.div`
  width: 272px;
`;

const EmailContainer = styled.div`
  /* border: 3px solid green; */
  display: flex;
  align-items: center;
  margin-top: 44px;
`;
const Label = styled.div`
  /* border: 1px solid red; */
  font-size: 20px;
  width: 180px;
  font-weight: 700;

  display: flex;
  margin-right: 70px;
`;

const AtContainer = styled.div`
  /* border: 1px solid red; */
  padding: 0px 16px 0px 16px;
`;
const EmailSelect = styled.select`
  width: 337px;
  height: 44px;
  padding: 10px;
  font-size: 16px;
`;

const ValidateMessage = styled.div`
  /* border: 1px solid blue; */
  width: 465px;
  height: 24px;
  margin-left: 250px;
  color: red;
  margin-top: 10px;
`;

const PwContainer = styled.div`
  /* border: 3px solid green; */
  border-top: 1px solid gray;
  display: flex;
  align-items: center;
  padding-top: 30px;
  margin-top: 30px;
  margin-bottom: 10px;
`;
const PwInputContainer = styled.div`
  /* border: 1px solid red; */
  width: 656px;
`;
const PwValidateMessage = styled.div`
  width: 656px;
  height: 24px;
  margin-left: 250px;
  color: red;
  margin-bottom: 10px;
`;
const CheckPwInputContainer = styled.div`
  width: 656px;
`;

const CheckPwContainer = styled.div`
  /* border: 3px solid green; */
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const CheckPwValidateMessage = styled.div`
  width: 656px;
  height: 24px;
  margin-left: 250px;
  color: red;
  margin-bottom: 10px;
`;
const AddressContainer = styled.div`
  /* border: 3px solid green; */
  border-top: 1px solid gray;
  padding-top: 30px;
  display: flex;
  align-items: center;
`;
const AddressInputContainer = styled.div`
  width: 464px;
`;
const SecondLabel = styled.div`
  font-size: 20px;
  width: 200px;
  font-weight: 700;
  /* border: 1px solid red; */
  margin-right: 50px;
`;
const NickNameInputContainer = styled.div`
  width: 464px;
`;
const AddressContent = styled.div`
  /* border: 1px solid blue; */
  width: 465px;
  height: 24px;
  margin-left: 250px;
  color: gray;
  margin-bottom: 30px;
  margin-top: 10px;
`;

const NickNameContainer = styled.div`
  /* border: 3px solid green; */
  border-top: 1px solid gray;
  padding-top: 30px;
  display: flex;
  align-items: center;
`;
const AssignButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
  padding: 20px 0px 20px 0px;
`;

export default SignupPage;
