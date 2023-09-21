import React from "react";
import { styled } from "styled-components";
import Mascot from "../../assets/logo/logo.png";
import Logo from "../../assets/logo/LOGO_Full.png";

const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <LogoContainer>
          <LogoTitle src={Logo} />
        </LogoContainer>
        <NameContainer>
          <MemberContainer>
            <Position>FRONTEND</Position>
            <Name onClick={() => window.open("https://github.com/LOCA525")}>박준영</Name>
            <Name onClick={() => window.open("https://github.com/myeongjin99")}>서명진</Name>
            <Name onClick={() => window.open("https://github.com/seungjaelee2684")}>이승재</Name>
          </MemberContainer>
          <MemberContainer>
            <Position>BACKEND</Position>
            <Name onClick={() => window.open("https://github.com/jiooong")}>이지원 ♀</Name>
            <Name onClick={() => window.open("https://github.com/K-IMjihun")}>김지훈</Name>
            <Name onClick={() => window.open("https://github.com/stoow1")}>이지원 ♂</Name>
          </MemberContainer>
          <MemberContainer>
            <Position>DESIGN</Position>
            <Name onClick={() => window.open("https://www.figma.com/file/aL874LElbs7lkXTpuuhARZ/항해99-4조?type=design&node-id=716%3A29&mode=design&t=iv4Sq7t46PMtYKlH-1")}>윤지숙</Name>
          </MemberContainer>
        </NameContainer>
      </ContentContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  height: 103px;
  background: var(--black-white-gray-10, #efefef);
`;

const ContentContainer = styled.div`
  max-width: 1136px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 375px) {
    display: grid;
    justify-content: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoMascot = styled.img`
  width: 31.5px;
  margin-right: 10px;
`;

const LogoTitle = styled.img`
  width: 120px;
`;

const MemberContainer = styled.div``;

const Position = styled.span`
  color: var(--black-white-black, #222020);
  font-family: "Lemon/Milk", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 10px;

  @media screen and (max-width: 375px) {
    display: none;
  }
`;

const Name = styled.span`
  margin-left: 20px;
  color: var(--black-white-black, #222020);
  /* KOR/Kor R 18 */
  font-family: "Pretendard";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  cursor: pointer;

  &:hover {
    color: #394772;
    border-bottom: 1px solid #394772;
  }

  @media screen and (max-width: 375px) {
    margin-left: 5px;
    font-size: 12px;
  }
`;

const NameContainer = styled.div`
  display: flex;
`;

export default Footer;
