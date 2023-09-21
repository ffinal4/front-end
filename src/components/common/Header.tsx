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
import mypage from "../../assets/icon/profile.png";
import peeppo from "../../assets/icon/peeppo.png";
import Navbar from "./Navbar";
import { postLogoutApi } from "../../api/users";
import AlarmButton from "./AlarmButton";
import { useResetRecoilState } from "recoil";
import {
  filterAsc,
  filterCategory,
  filterName,
} from "../../store/filterCategory";
import { pagination } from "../../store/pagination";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const insertedToken: string | null = localStorage.getItem("accessToken");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const resetCategory = useResetRecoilState(filterCategory);
  const resetCategoryName = useResetRecoilState(filterName);
  const restPage = useResetRecoilState(pagination);
  const resetAsc = useResetRecoilState(filterAsc);
  const [searchInput, setSearchInput] = useState("");
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
      navigate("/");
      const res = await postLogoutApi(logoutData);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("location");
      setIsLoggedIn(false);
    } catch (error) {
    }
  };

  const searchHandleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`search/${searchInput}`);
    setSearchInput("");
  };
  const getLogoImage = () => {
    if (location.pathname.includes("/auction")) {
      return (
        <LogoContainer>
          <Logo src={blueLogo} />
          <LogoTitle src={blueTitle} />
        </LogoContainer>
      );
    } else if (
      location.pathname.includes("/tradeList")
      || location.pathname.includes("/traderequest")
      || location.pathname.includes("/detail")
    ) {
      return (
        <LogoContainer>
          <Logo src={loginLogo} />
          <LogoTitle src={loginLTitle} />
        </LogoContainer>
      );
    } else {
      return (
        <LogoContainer>
          <Logo src={logo} />
          <LogoTitle src={title} />
        </LogoContainer>
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
              window.scrollTo(0, 0);
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
          <InputContainer typeof="onSubmit" onSubmit={searchHandleSubmit}>
            <SearchButton onClick={searchHandleSubmit}>
              <img src={search} alt="" />
            </SearchButton>
            <SearchInput
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
          </InputContainer>
          {isLoggedIn ? (
            <AllIconContainer>
              <IconContainer>
                <div>
                  <AlarmButton />
                </div>
                <Mypage
                  src={mypage}
                  onClick={() => {
                    navigate("/mypage");
                    resetCategory();
                    resetCategoryName();
                    restPage();
                    resetAsc();
                  }}
                />
                <MyPocketLink
                  onClick={() => {
                    navigate("/myPocket");
                    resetCategory();
                    resetCategoryName();
                    restPage();
                    resetAsc();
                  }}>
                  내 주머니
                </MyPocketLink>
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
              <SignupLink
                className="signup-link"
                onClick={() => navigate("/signup")}
              >
                회원가입
              </SignupLink>
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
  box-shadow: 1px 1px 8px 0px #c7c7c7;
`;

const HeaderoutContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #d5d4d4;

  @media screen and (max-width: 375px) {
    padding: 0px 16px;
  }
`;

const HeaderContainer = styled.div`
  width: 1136px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  margin: 0 auto;

  @media screen and (max-width: 1136px) {
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 48px;
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 174px;
  height: 41px;

  @media screen and (max-width: 375px) {
    max-width: 100px;
  }
`;

const Logo = styled.img`
  width: 38px;
  height: 38px;
  margin-right: 10px;

  @media screen and (max-width: 375px) {
    width: 24px;
    height: 24px;
  }
`;

const LogoTitle = styled.img`
  width: 120px;
  height: 24px;

  @media screen and (max-width: 375px) {
    width: 80px;
    height: 16px;
  }
`;

export const BoxContainer = styled.div`
  width: 2px;
  height: 16px;
  background-color: #f9b482;
  border-radius: 2px;
  margin-left: 20px;
  font-weight: 400;
`;

const InputContainer = styled.form`
  width: 600px;
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (max-width: 700px) {
    width: 300px;
  }
`;

const SearchButton = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  margin-left: 20px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  border: 1px solid #efefef;
  border-radius: 10px;
  background-color: #efefef;
  width: 100%;
  height: 44px;
  font-size: 16px;
  padding-left: 50px;
  @media screen and (max-width: 700px) {
    width: 300px;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LoginLink = styled.div`
  cursor: pointer;
  margin-left: 20px;
  font-size: 16px;
  width: 42px;
  height: 24px;
  display: flex;
  align-items: center;
  font-family: "Pretendard";
  transition: all 0.3s;

  &:hover {
    color: #f9b482;
  }
`;

const SignupLink = styled.div`
  cursor: pointer;
  margin-left: 20px;
  font-size: 16px;
  width: 56px;
  height: 24px;
  display: flex;
  align-items: center;
  font-family: "Pretendard";
  transition: all 0.3s;

  &:hover {
    color: #f9b482;
  }
`;

const AllIconContainer = styled.div`
  display: flex;
  font-family: "Pretendard";
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;

const Mypage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;

  @media screen and (max-width: 375px) {
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }
`;

const MyPocketLink = styled.div`
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  color: #39373A;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #f9b482;
  }

  @media screen and (max-width: 375px) {
    font-size: 10px;
    font-weight: 600;
    line-height: 140%;
    width: 100%;
  }
`;

const Logout = styled.div`
  cursor: pointer;
  display: flex;
  margin-left: 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  width: 56px;
  transition: all 0.3s;

  &:hover {
    color: #f9b482;
  }

  @media screen and (max-width: 375px) {
    margin-left: 10px;
    font-size: 10px;
    font-weight: 400;
    line-height: 140%;
    width: 70px;
    margin-left: 20px;
  }
`;
