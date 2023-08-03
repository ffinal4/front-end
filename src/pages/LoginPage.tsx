import React from "react";
import { styled } from "styled-components";
import eyeImage from "../assets/images/eye.svg";
import { StBasicButton } from "../styles/BasicButton";
const LoginPage = () => {
  return (
    <div>
      <LoginContainer>
        <LogInFormContainer>
          <FirstContainer>
            <LogoContainer>
              <Logo src={eyeImage} />
            </LogoContainer>
            <Title>로그인</Title>
            <SubTitle>주머니 핍핑, 시작해볼까요?</SubTitle>
          </FirstContainer>
          <InputContainer>
            <Input type="email" placeholder="아이디를 입력해주세요" />
            <Input type="password" placeholder="비밀번호를 입력해주세요" />
          </InputContainer>
          <SecondContainer>
            <SearchContainer>
              <SearchId>아이디찾기</SearchId>
              <SearchPw>비밀번호 찾기</SearchPw>
            </SearchContainer>
            <LoginStateContainer>
              <MaintainLogin>로그인 상태 유지</MaintainLogin>
              <CheckInput type="checkbox" />
            </LoginStateContainer>
          </SecondContainer>
          <ButtonContainer>
            <StBasicButton buttonColor="#D9D9D9;">로그인</StBasicButton>
          </ButtonContainer>
          <SignUpContainer>
            <Content>아직 핍포 회원이 아니신가요?</Content>
            <SignUpLink>회원가입</SignUpLink>
          </SignUpContainer>
        </LogInFormContainer>
      </LoginContainer>
      <FooterContainer>
        <FirstFooter>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="287"
            viewBox="0 0 1920 287"
            fill="none"
          >
            <path d="M0 0L960 68L1920 0V327H0V0Z" fill="#ADADAD" />
          </svg>
        </FirstFooter>
        {/* <SecondFooter>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="237"
            viewBox="0 0 1920 237"
            fill="none"
          >
        <SecondFooter>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="237" viewBox="0 0 1920 237" fill="none">
            <path
              d="M0.141313 3.005L-2 2.85332V5V14.8958H0V34.6875H-2V54.4792H0V74.2708H-2V94.0625H0V113.854H-2V133.646H0V153.438H-2V173.229H0V193.021H-2V212.813H0V232.604H-2V242.5V244.5H0H10V242.5H30V244.5H50V242.5H70V244.5H90V242.5H110V244.5H130V242.5H150V244.5H170V242.5H190V244.5H210V242.5H230V244.5H250V242.5H270V244.5H290V242.5H310V244.5H330V242.5H350V244.5H370V242.5H390V244.5H410V242.5H430V244.5H450V242.5H470V244.5H490V242.5H510V244.5H530V242.5H550V244.5H570V242.5H590V244.5H610V242.5H630V244.5H650V242.5H670V244.5H690V242.5H710V244.5H730V242.5H750V244.5H770V242.5H790V244.5H810V242.5H830V244.5H850V242.5H870V244.5H890V242.5H910V244.5H930V242.5H950V244.5H970V242.5H990V244.5H1010V242.5H1030V244.5H1050V242.5H1070V244.5H1090V242.5H1110V244.5H1130V242.5H1150V244.5H1170V242.5H1190V244.5H1210V242.5H1230V244.5H1250V242.5H1270V244.5H1290V242.5H1310V244.5H1330V242.5H1350V244.5H1370V242.5H1390V244.5H1410V242.5H1430V244.5H1450V242.5H1470V244.5H1490V242.5H1510V244.5H1530V242.5H1550V244.5H1570V242.5H1590V244.5H1610V242.5H1630V244.5H1650V242.5H1670V244.5H1690V242.5H1710V244.5H1730V242.5H1750V244.5H1770V242.5H1790V244.5H1810V242.5H1830V244.5H1850V242.5H1870V244.5H1890V242.5H1910V244.5H1920H1922V242.5V232.604H1920V212.812H1922V193.021H1920V173.229H1922V153.438H1920V133.646H1922V113.854H1920V94.0625H1922V74.2708H1920V54.4792H1922V34.6875H1920V14.8958H1922V5V2.85332L1919.86 3.005L1909.86 3.71333L1910 5.70833L1890 7.125L1889.86 5.13L1869.86 6.54667L1870 8.54167L1850 9.95833L1849.86 7.96333L1829.86 9.38L1830 11.375L1810 12.7917L1809.86 10.7967L1789.86 12.2133L1790 14.2083L1770 15.625L1769.86 13.63L1749.86 15.0467L1750 17.0417L1730 18.4583L1729.86 16.4633L1709.86 17.88L1710 19.875L1690 21.2917L1689.86 19.2967L1669.86 20.7133L1670 22.7083L1650 24.125L1649.86 22.13L1629.86 23.5467L1630 25.5417L1610 26.9583L1609.86 24.9633L1589.86 26.38L1590 28.375L1570 29.7917L1569.86 27.7967L1549.86 29.2133L1550 31.2083L1530 32.625L1529.86 30.63L1509.86 32.0467L1510 34.0417L1490 35.4583L1489.86 33.4633L1469.86 34.88L1470 36.875L1450 38.2917L1449.86 36.2967L1429.86 37.7133L1430 39.7083L1410 41.125L1409.86 39.13L1389.86 40.5467L1390 42.5417L1370 43.9583L1369.86 41.9633L1349.86 43.38L1350 45.375L1330 46.7917L1329.86 44.7967L1309.86 46.2133L1310 48.2083L1290 49.625L1289.86 47.63L1269.86 49.0467L1270 51.0417L1250 52.4583L1249.86 50.4633L1229.86 51.88L1230 53.875L1210 55.2917L1209.86 53.2967L1189.86 54.7133L1190 56.7083L1170 58.125L1169.86 56.13L1149.86 57.5467L1150 59.5417L1130 60.9583L1129.86 58.9633L1109.86 60.38L1110 62.375L1090 63.7917L1089.86 61.7967L1069.86 63.2133L1070 65.2083L1050 66.625L1049.86 64.63L1029.86 66.0467L1030 68.0417L1010 69.4583L1009.86 67.4633L989.859 68.88L990 70.875L970 72.2917L969.859 70.2967L960 70.995L950.141 70.2967L950 72.2917L930 70.875L930.141 68.88L910.141 67.4633L910 69.4583L890 68.0417L890.141 66.0467L870.141 64.63L870 66.625L850 65.2083L850.141 63.2133L830.141 61.7967L830 63.7917L810 62.375L810.141 60.38L790.141 58.9633L790 60.9583L770 59.5417L770.141 57.5467L750.141 56.13L750 58.125L730 56.7083L730.141 54.7133L710.141 53.2967L710 55.2917L690 53.875L690.141 51.88L670.141 50.4633L670 52.4583L650 51.0417L650.141 49.0467L630.141 47.63L630 49.625L610 48.2083L610.141 46.2133L590.141 44.7967L590 46.7917L570 45.375L570.141 43.38L550.141 41.9633L550 43.9583L530 42.5417L530.141 40.5467L510.141 39.13L510 41.125L490 39.7083L490.141 37.7133L470.141 36.2967L470 38.2917L450 36.875L450.141 34.88L430.141 33.4633L430 35.4583L410 34.0417L410.141 32.0467L390.141 30.63L390 32.625L370 31.2083L370.141 29.2133L350.141 27.7967L350 29.7917L330 28.375L330.141 26.38L310.141 24.9633L310 26.9583L290 25.5417L290.141 23.5467L270.141 22.13L270 24.125L250 22.7083L250.141 20.7133L230.141 19.2967L230 21.2917L210 19.875L210.141 17.88L190.141 16.4633L190 18.4583L170 17.0417L170.141 15.0467L150.141 13.63L150 15.625L130 14.2083L130.141 12.2133L110.141 10.7967L110 12.7917L90 11.375L90.1413 9.38L70.1413 7.96333L70 9.95833L50 8.54167L50.1413 6.54667L30.1413 5.13L30 7.125L10 5.70833L10.1413 3.71333L0.141313 3.005Z"
              fill="#ADADAD"
              stroke="black"
              stroke-width="4"
              stroke-dasharray="20 20"
            />
          </svg>
        </SecondFooter> */}
      </FooterContainer>
    </div>
  );
};

const LoginContainer = styled.div`
  max-width: 753px;
  height: 652px;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 120px;
  box-shadow: black 0px 0px 0px 2px inset,
    rgb(255, 255, 255) 10px -10px 0px -3px, rgb(0, 0, 0) 10px -10px,
    rgb(255, 255, 255) 20px -20px 0px -3px, rgb(0, 0, 0) 20px -20px;
`;
const LogInFormContainer = styled.div`
  /* border: 1px solid green; */
  padding: 56px 96px 56px 96px;
  margin: auto;
`;
const FirstContainer = styled.div`
  border: 1px solid blue;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
const LogoContainer = styled.div`
  height: 110px;
  border: 1px solid red;
  margin: 0 auto;
  margin-top: 60px;
`;

const Logo = styled.img`
  width: 100%;
  height: 100px;
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
`;
const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin-top: 20px;
`;
const Input = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const SearchId = styled.span`
  /* border: 1px solid black; */
`;
const SearchPw = styled.span`
  /* border: 1px solid black; */
  padding-left: 10px;
`;
const MaintainLogin = styled.span`
  /* border: 1px solid black; */
`;

const SecondContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: space-between;
`;
const SearchContainer = styled.div`
  /* border: 1px solid red; */
  width: 200px;
`;
const LoginStateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CheckInput = styled.input`
  border: 1px solid black;
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid red;
  padding: 20px 0px 20px 0px;
`;
const SignUpContainer = styled.div`
  border: 1px solid green;
  display: flex;
  justify-content: center;
  padding: 10px 0px 10px 0px;
`;

const Content = styled.span`
  border: 1px solid blue;
`;

const SignUpLink = styled.div`
  border: 1px solid red;
  cursor: pointer;
  font-size: 16px;
  font-weight: 1000;
`;

const FooterContainer = styled.div``;

const FirstFooter = styled.div`
  position: relative;
`;
const SecondFooter = styled.div`
  position: absolute;
`;
export default LoginPage;
