import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../../assets/logo/logo.png";
import title from "../../assets/logo/logo_title.png";
import loginLogo from "../../assets/logo/loginlogo.png";
import loginLTitle from "../../assets/logo/login_title.png";
import blueLogo from "../../assets/logo/bluepeeppo.png";
import blueTitle from "../../assets/logo/bluetitle.png";
import search from "../../assets/icon/search.png";
import alarm from "../../assets/icon/alarm.png";
import mypage from "../../assets/icon/profile.png";
import peeppo from "../../assets/icon/peeppo.png";
import Navbar from "./Navbar";
import { postLogoutApi } from "../../api/users";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const insertedToken: string | null = localStorage.getItem("accessToken");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsLoggedIn(!!insertedToken);
  }, [insertedToken]);

  const logoutOnclick = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    const logoutData = {
      accessToken,
      refreshToken,
    };

    try {
      const res = await postLogoutApi(logoutData);
      console.log(res);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("location");
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.log("로그아웃실패", error);
    }
  };

  const getLogoImage = () => {
    if (location.pathname.includes("/auction")) {
      return (
        <>
          <Logo src={blueLogo} />
          <LogoTitle src={blueTitle} />
        </>
      );
    } else if (location.pathname.includes("/" || "/tradeList" || "/traderequest" || "/detail")) {
      return (
        <>
          <Logo src={loginLogo} />
          <LogoTitle src={loginLTitle} />
        </>
      );
    } else {
      return (
        <>
          <Logo src={logo} />
          <LogoTitle src={title} />
        </>
      );
    }
  };

  return (
    <HeaderLayout>
      <HeaderoutContainer>
        <HeaderContainer>
          <LogoContainer
            onClick={() => {
              navigate("/");
            }}
          >
            {isLoggedIn ? (
              getLogoImage()
            ) : (
              <>
                <Logo src={logo} />
                <LogoTitle src={title} />
              </>
            )}
          </LogoContainer>
          <InputContainer>
            <SearchButton>
              <img src={search} />
            </SearchButton>
            <SearchInput type="search" placeholder="Search" />
          </InputContainer>
          {isLoggedIn ? (
            <AllIconContainer>
              <IconContainer>
                <Alarm src={alarm} />
                <Mypage
                  src={mypage}
                  onClick={() => {
                    navigate("/mypage");
                  }}
                />
                <Peeppo
                  src={peeppo}
                  onClick={() => {
                    navigate("/myPocket");
                  }}
                />
              </IconContainer>
              <Logout onClick={logoutOnclick}>로그아웃</Logout>
            </AllIconContainer>
          ) : (
            <LinkContainer>
              <LoginLink
                onClick={() => {
                  navigate("/login");
                }}
              >
                로그인
              </LoginLink>
              <BoxContainer />
              <SignupLink onClick={() => navigate("/signup")}>회원가입</SignupLink>
            </LinkContainer>
          )}
        </HeaderContainer>
      </HeaderoutContainer>
      <Navbar />
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  border-bottom: 1px solid #222020;
`;

const HeaderoutContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #d5d4d4;
`;

const HeaderContainer = styled.div`
  width: 1136px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  margin: 0 auto;
  @media screen and (max-width: 1136px) {
    width: 100%;
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 174px;
  height: 41px;
`;

const Logo = styled.img`
  width: 38px;
  height: 38px;
  margin-right: 10px;
`;

const LogoTitle = styled.img`
  width: 120px;
  height: 24px;
`;

export const BoxContainer = styled.div`
  width: 2px;
  height: 16px;
  background-color: #f9b482;
  border-radius: 2px;
  margin-left: 20px;
  font-weight: 400;
`;

const InputContainer = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchButton = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  margin-left: 20px;
`;
const SearchInput = styled.input`
  border: 1px solid #efefef;
  border-radius: 10px;
  background-color: #efefef;
  width: 100%;
  height: 44px;
  font-size: 16px;
  padding-left: 50px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LoginLink = styled.div`
  cursor: pointer;
  margin-left: 20px;
  font-size: 16px;
  height: 24px;
  display: flex;
  align-items: center;
  font-family: Pretendard;
`;

const SignupLink = styled.div`
  cursor: pointer;
  margin-left: 20px;
  font-size: 16px;
  height: 24px;
  display: flex;
  align-items: center;
  font-family: Pretendard;
`;

const AllIconContainer = styled.div`
  display: flex;
  font-family: Pretendard;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Alarm = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
`;

const Mypage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
`;

const Peeppo = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Logout = styled.div`
  cursor: pointer;
  display: flex;
  margin-left: 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
`;
