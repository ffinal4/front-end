import React, { useState } from "react";
import { styled } from "styled-components";
import { StBasicButton } from "../styles/BasicButton";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StBasicInput } from "../styles/BasicInput";
import KakaoApi from "../components/common/KakaoApi";
import { postSignupApi } from "../api/users";

interface SignupForm {
  email: string;
  select: string;
  password: string;
  confirmPassword: string;
  nickname: string;
}

const SignupPage = () => {
  const navigate = useNavigate();

  const [address, setAddress] = useState(""); //주소
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);

  // const handleCheckNickname = async (
  //   nickname: string,
  //   e: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   e.preventDefault();
  // };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignupForm>({ mode: "onBlur" });

  const signupOnclick = async (data: any) => {
    const newForm = {
      email: `${data.email}${data.select}`,
      password: data.password,
      nickname: data.nickname,
    };
    console.log(data.password);
    console.log(data.nickname);
    // console.log(newForm);
    try {
      const res = await postSignupApi(newForm);
      if (res.status === 200) {
        console.log("회원가입성공", res);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignUpPageContainer>
      <TitleContainer>
        <Title>READY TO PEEPO</Title>
      </TitleContainer>
      <SignUpForm
        onSubmit={(data: any) => {
          signupOnclick(data);
        }}
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
                  message: "비밀번호는 8자 이상이어야 합니다.",
                },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/,
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
            입력한 주소는 나의 주거래 지역으로 표시됩니다.
          </AddressContent>
        </ContentContainer>

        <NickNameContainer>
          <SecondLabel>닉네임</SecondLabel>
          <NickNameInputContainer>
            <StBasicInput
              type="text"
              placeholder="한글, 영문, 숫자를 이용한 2~15자"
              {...register("nickname", {
                required: "필수입력 항목입니다.",
                minLength: { value: 2, message: "2자 이상 입력해주세요." },
                maxLength: { value: 15, message: "15자 이하로 입력해주세요." },
                pattern: {
                  value: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,15}$/,
                  message: "영문 대소문자, 글자 단위 한글, 숫자만 가능합니다.",
                },
              })}
            />
          </NickNameInputContainer>

          <StBasicButton
            buttonColor="#D9D9D9;"
            style={{ marginLeft: "20px" }}
            // onClick={((e) => handleCheckNickname(getValues("nickname")), e)}
          >
            중복 확인
          </StBasicButton>
        </NickNameContainer>
        <ValidateMessage>{errors?.nickname?.message}</ValidateMessage>
      </SignUpForm>
      <AssignButtonContainer>
        <StBasicButton
          type="submit"
          buttonColor="#D9D9D9;"
          onClick={handleSubmit(async (data) => {
            const newForm = {
              email: `${data.email}${data.select}`,
              password: data.password,
              nickname: data.nickname,
            };
            console.log(newForm);

            try {
              const res = await postSignupApi(newForm);
              if (res.status === 200) {
                console.log("회원가입성공", res);
                navigate("/login");
              }
            } catch (error) {
              console.log(error);
              // alert(JSON.stringify(error.response.data.data));
            }
          })}
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
  margin-top: 160px;
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
  max-width: 1136px;
  height: 626px;
  margin: auto;
`;
const EmailInputContainer = styled.div`
  /* border: 1px solid blue; */
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
const SelectContainer = styled.div`
  /* border: 1px solid blue; */
  width: 337px;
`;
const EmailSelect = styled.select`
  width: 100%;
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
  width: 656px;
  /* width: 100%; */
  /* border: 1px solid red; */
  display: flex;
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
const ContentContainer = styled.div`
  /* border: 1px solid blue; */
  /* width: 465px; */
  padding-left: 250px;
`;
const AddressContent = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  height: 24px;

  color: gray;
  margin-bottom: 30px;
  margin-top: 10px;
  /* padding-left: 250px; */
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
