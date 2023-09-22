import React from "react";
import { styled } from "styled-components";
import mascotImage from "../../assets/images/howtomascot.png";
import { StTitle } from "../../styles/TitleFont";

const HowToTrade = () => {
  return (
    <HowToTradeContainer>
      <MascotImage src={mascotImage} />
      <TitleContainer>
        <Title>HOW TO TRADE SAFELY?</Title>
        <SubTitleContainer>
          <SubTitle>안전한 물물교환을 위한 4단계!</SubTitle>
        </SubTitleContainer>
      </TitleContainer>
      <CardListContainer>
        <CardContainer>
          <StTitle marginbottom="10px" textalign="" style={{ color: "#EC8D49" }}>
            01
          </StTitle>
          <ContentTitle>신뢰할 수 있는 사람인지 확인하기</ContentTitle>
          <Content>
            물물교환을 할 때는 신뢰할 수 있는 사람과 거래하는 것이 중요해요. 온라인에서 거래하는 경우 안전 조치가 확립된
            플랫폼을 이용하고, 유저 평가를 통해 최근 거래 내역을 확인해요. 이를 통해 사기나 부정직한 거래의 위험을 줄일
            수 있어요.
          </Content>
        </CardContainer>
        <CardContainer>
          <StTitle marginbottom="10px" textalign="" style={{ color: "#EC8D49" }}>
            02
          </StTitle>
          <ContentTitle>명확한 용어를 사용하기</ContentTitle>
          <Content>
            거래를 완료하기 전에 거래 조건에 대해 양 당사자가 명확하게 이해했는지 확인하세요. 여기에는 거래 대상, 상태
            및 관련된 추가 품목 또는 서비스에 대한 세부 정보가 포함됩니다. 조건에 대한 서면 합의 또는 기록을 가지고
            있으면 나중에 오해를 방지하는 데 도움이 될 수 있습니다.
          </Content>
        </CardContainer>{" "}
        <CardContainer>
          <StTitle marginbottom="10px" textalign="" style={{ color: "#EC8D49" }}>
            03
          </StTitle>
          <ContentTitle>물건을 꼼꼼하게 확인하기</ContentTitle>
          <Content>
            거래를 완료하기 전에 교환한 물건을 철저히 검사하고 상대방이 제공한 설명과 일치하는지 확인하세요. 직거래의
            경우 만났을 때 세부적인 부분을 꼼꼼하게 확인하고, 온라인으로 거래하는 경우 명확한 사진과 필요한 문서를
            요청하세요.
          </Content>
        </CardContainer>{" "}
        <CardContainer>
          <StTitle marginbottom="10px" textalign="" style={{ color: "#EC8D49" }}>
            04
          </StTitle>
          <ContentTitle>안전하게 교환하기</ContentTitle>
          <Content>
            직접 만나서 교환할 때는 안전하고 공개적인 위치를 선택하는게 좋아요. 귀중품의 경우 친구와 함께 가거나, 주변
            사람에게 교환에 대해 알리는 것도 좋은 방법이에요. 온라인으로 거래하는 경우 안전한 지불 방법을 사용하고, 모든
            통신 및 거래 세부 정보를 기록하도록 해요.
          </Content>
        </CardContainer>
      </CardListContainer>
      <LastContent>
        * 핍포(PEEPPO)는 물물교환을 위한 중개 플랫폼이며 개인 간의 물물교환으로 발생하는 민, 형사상의 문제에 대해서는
        어떠한 책임도 지지 않습니다.
      </LastContent>
    </HowToTradeContainer>
  );
};

const HowToTradeContainer = styled.div`
  width: 100%;
  height: 855px;
  background: var(--orange-orange-100, #ec8d49);
  padding-top: 60px;
  margin-bottom: 200px;
  position: relative;
  z-index: 0;

  @media screen and (max-width: 375px) {
    height: 2000px;
    padding: 60px 10px 0px 10px;
  }
`;

const MascotImage = styled.img`
  height: 703px;
  position: absolute;
  right: 0;
  top: 73px;
  z-index: -1;
`;

const TitleContainer = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  margin-bottom: 40px;
`;
const Title = styled.div`
  color: var(--black-white-white, #fcfcfc);
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 44px */
  margin-bottom: 16px;
`;

const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SubTitle = styled.div`
  color: var(--black-white-gray-10, #efefef);
  /* KOR/Kor R 18 */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
`;

const CardListContainer = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (max-width: 375px) {
    height: 1600px;
  }
`;

const CardContainer = styled.div`
  padding: 40px 60px;
  width: 560px;
  height: 284px;
  border-radius: 10px;
  border: 1px solid var(--orange-orange-30, #fbd8bf);
  background: var(--black-white-white, #fcfcfc);

  /* Shadow */
  box-shadow: 1px 2px 5px 0px rgba(34, 32, 32, 0.1);

  @media screen and (max-width: 375px) {
    height: 375px;
  }
`;

const ContentTitle = styled.div`
  color: var(--black-white-black, #222020);

  /* KOR/Kor B 20 */
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  margin-bottom: 24px;
`;

const Content = styled.div`
  color: var(--black-white-gray-100, #39373a);
  text-align: justify;

  /* KOR/Kor R 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const LastContent = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  color: var(--black-white-white, #fcfcfc);
  text-align: right;

  /* KOR/Kor R 16 */
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */

  @media screen and (max-width: 375px) {
    max-width: 360px;
  }
`;
export default HowToTrade;
