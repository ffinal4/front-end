import React from "react";
import { styled } from "styled-components";
import Mascot from "../../assets/logo/logo.png";
import Logo from "../../assets/logo/logo_title.png";

const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <LogoContainer>
          <LogoMascot src={Mascot} />
          <LogoTitle src={Logo} />
        </LogoContainer>
        <MemberContainer>
          <Position>FRONTEND</Position>
          <Name>박준영</Name>
          <Name>서명진</Name>
          <Name>이승재</Name>
        </MemberContainer>
        <MemberContainer>
          <Position>BACKEND</Position>
          <Name>이지원 ♀</Name>
          <Name>김지훈</Name>
          <Name>이지원 ♂</Name>
        </MemberContainer>
        <MemberContainer>
          <Position>DESIGN</Position>
          <Name>윤지숙</Name>
        </MemberContainer>
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
`;
export default Footer;
