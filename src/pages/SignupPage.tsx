import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { StBasicButton } from "../styles/BasicButton";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { postSignupApi } from "../api/users";
import PasswordInput from "../components/SignUpPage/PasswordInput";
import EmailInput from "../components/SignUpPage/EmailInput";
import AddressInput from "../components/SignUpPage/AddressInput";
import NickNameInput from "../components/SignUpPage/NickNameInput";

interface SignupForm {
  email: string;
  select: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  address: string;
}

const SignupPage = () => {
  const navigate = useNavigate();
  const divRef = useRef<HTMLDivElement>(null);
  const [address, setAddress] = useState(""); //주소
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);
  const [pwType, setpwType] = useState({ type: "password", visible: false });
  const [isAvailable, setIsAvailable] = useState(false);
  const [nicknameError, setNicknameError] = useState<string | null>(null);
  const [nicknameChecked, setNicknameChecked] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setOpenPostcode(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignupForm>({ mode: "onBlur" });

  const signupOnclick = handleSubmit(async (data) => {
    const newForm = {
      email: `${data.email}${data.select}`,
      password: data.password,
      nickname: data.nickname,
      location: address,
    };

    const allForm = {
      ...newForm,
      location: address,
    };

    try {
      const res = await postSignupApi(allForm);
      if (res.status === 200) {
        navigate("/login");
      }
    } catch (error) {
    }
  });

  return (
    <SignUpPageContainer>
      <TitleContainer>
        <Title>READY TO PEEPO?</Title>
      </TitleContainer>
      <SignUpContainer>
        <EmailInput register={register} errors={errors} getValues={getValues} />
        <PasswordInput
          pwType={pwType}
          setpwType={setpwType}
          register={register}
          errors={errors}
          getValues={getValues}
        />
        <AddressInput
          address={address}
          setAddress={setAddress}
          openPostcode={openPostcode}
          setOpenPostcode={setOpenPostcode}
        />
        <NickNameInput
          isAvailable={isAvailable}
          setIsAvailable={setIsAvailable}
          nicknameError={nicknameError}
          setNicknameError={setNicknameError}
          setNicknameChecked={setNicknameChecked}
          register={register}
          errors={errors}
        />
      </SignUpContainer>
      <AssignButtonContainer>
        <StBasicButton
          buttonColor={nicknameChecked ? "#FDD988" : "#D5D4D4"}
          style={{
            color: nicknameChecked ? "black" : "white",
            border: nicknameChecked ? "1px solid black" : "none",
            fontWeight: nicknameChecked ? "700" : "400",
          }}
          onClick={signupOnclick}
          disabled={!nicknameChecked}
        >
          회원가입
        </StBasicButton>
      </AssignButtonContainer>
    </SignUpPageContainer>
  );
};
const SignUpPageContainer = styled.div``;

const TitleContainer = styled.div`
  width: 100%;
  margin: auto;
`;

const Title = styled.div`
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 30px;
`;

const SignUpContainer = styled.div`
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  max-width: 1136px;
  height: 720px;
  margin: auto;
`;

export const Label = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  width: 180px;
  font-weight: 700;
  display: flex;
  margin-right: 70px;
`;

export const PwVisibleButton = styled.div`
  cursor: pointer;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 10px;
  right: 12px;
`;

export const PwImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const ContentContainer = styled.div`
  padding-left: 250px;
`;

const AssignButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export default SignupPage;
