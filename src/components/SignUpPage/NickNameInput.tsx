import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { StBasicInput } from "../../styles/BasicInput";
import { postNicknameApi } from "../../api/users";
import { StBasicButton } from "../../styles/BasicButton";

interface NicknameForm {
  nickname: string;
}

interface NickNameInputProps {
  isAvailable: boolean;
  setIsAvailable: React.Dispatch<React.SetStateAction<boolean>>;
  nicknameError: string | null;
  setNicknameError: React.Dispatch<React.SetStateAction<string | null>>;
  setNicknameChecked: React.Dispatch<React.SetStateAction<boolean>>;
  register: any;
  errors: any;
}

const NickNameInput: React.FC<NickNameInputProps> = ({
  isAvailable,
  setIsAvailable,
  nicknameError,
  setNicknameError,
  setNicknameChecked,
  register,
  errors,
}) => {
  //닉네임 중복 확인 통신
  const checkNicknameAvailability = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const formData = getValues();
    const newNick = formData.nickname;
    const nickData = { nickname: newNick };
    try {
      const res = await postNicknameApi(nickData);
      console.log(res);
      if (res.status === 200) {
        setNicknameChecked(true);
        setIsAvailable(true);
        setNicknameError(null);
      }
    } catch (error) {
      setIsAvailable(false);
      setNicknameError("중복된 닉네임 입니다.");
    }
  };

  const { getValues } = useForm<NicknameForm>({ mode: "onBlur" });
  return (
    <div>
      <NickNameContainer>
        <SecondLabel>닉네임</SecondLabel>
        <NickNameInputContainer>
          <StBasicInput
            borderColor={errors.nickname ? "red" : "#ADADAD"}
            focusBorderColor="#46A75B"
            type="text"
            placeholder="한글, 영문, 숫자를 이용한 2~15자"
            {...register("nickname", {
              minLength: {
                value: 2,
                message: "2자 이상 15자 이하로 입력해주세요.",
              },
              maxLength: {
                value: 15,
                message: "2자 이상 15자 이하로 입력해주세요.",
              },
              pattern: {
                value: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,15}$/,
                message: "영문 대소문자, 글자 단위 한글, 숫자만 가능합니다.",
              },
            })}
          />
        </NickNameInputContainer>
        <StButton buttonColor="#FDD988;" onClick={checkNicknameAvailability}>
          중복 확인
        </StButton>
      </NickNameContainer>
      {/* <NickNameError>{errors?.nickname?.message}</NickNameError> */}
      {nicknameError && <Content color="red">* 중복된 닉네임입니다.</Content>}
      {isAvailable && (
        <Content color="#46A75B">* 사용 가능한 닉네임입니다.</Content>
      )}
    </div>
  );
};

const SecondLabel = styled.div`
  font-size: 20px;
  width: 200px;
  font-weight: 700;
  margin-right: 50px;
  font-family: Pretendard;
`;

const NickNameInputContainer = styled.div`
  width: 464px;
`;

const StButton = styled(StBasicButton)`
  margin-left: 20px;
  border: 1px solid #222020;
`;
const NickNameContainer = styled.div`
  border-top: 1px solid #adadad;
  padding-top: 30px;
  display: flex;
  align-items: center;
`;

// const NickNameError = styled.div`
//   font-family: Pretendard;
//   font-size: 16px;
//   padding-left: 250px;
//   color: red;
//   margin-top: 10px;
// `;

const Content = styled.div<{ color: string }>`
  font-family: Pretendard;
  font-size: 16px;
  color: ${(props) => props.color};
  margin-top: 10px;
  margin-bottom: 40px;
  padding-left: 250px;
`;

export default NickNameInput;
