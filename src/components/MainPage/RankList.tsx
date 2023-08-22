import React from "react";
import { styled } from "styled-components";
import { StTitle } from "../../styles/TitleFont";
import { StSubTitle } from "../../styles/TitleFont";
import { StBasicButton } from "../../styles/BasicButton";
import { useNavigate } from "react-router-dom";

const RankList = () => {
  const navigate = useNavigate();
  return (
    <RankListContainer>
      <SectionContainer>
        <TitleSection>
          <StTitle marginbottom="16px" textalign="">
            WHO’s<br></br>the best?
          </StTitle>
          <StSubTitle marginbottom="40px" textalign="">
            정답을 연속으로 가장 많이 맞췄어요!
          </StSubTitle>
          <MoreBtn
            buttonColor="var(--yellow-yellow-100, #FFCA64)"
            onClick={() => {
              navigate("/ratingstart");
            }}
          >
            랭킹 도전하기
          </MoreBtn>
        </TitleSection>
        <RankSection>
          <RankContainer
            style={{
              background: "var(--yellow-yellow-100, #FFCA64)",
              width: "560px",
              color: " var(--black-white-black, #222020)",
            }}
          >
            <UserContainer>
              <p>1</p>
              <UserImage />
              <p>구스구스덕게임을하고싶은지원님</p>
            </UserContainer>
            <Count>23</Count>
          </RankContainer>
          <RankContainer>
            <UserContainer>
              <p>2</p>
              <UserImage />
              <p>밥먹으러가는준영님</p>
            </UserContainer>
            <Count>18</Count>
          </RankContainer>
          <RankContainer>
            <UserContainer>
              <p>3</p>
              <UserImage />
              <p>자다깬명진님</p>
            </UserContainer>
            <Count>10</Count>
          </RankContainer>
        </RankSection>
      </SectionContainer>
    </RankListContainer>
  );
};

const RankListContainer = styled.div`
  margin-top: 320px;
  width: 100%;
  height: 488px;
  padding: 60px 0;
  background: var(--black-white-gray-10, #efefef);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionContainer = styled.div`
  width: 944px;
  height: 368px;
  display: flex;
  justify-content: space-between;
`;

const TitleSection = styled.div`
  margin-top: 20px;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Count = styled.div`
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 44px */
`;
const RankSection = styled.div`
  color: var(--black-white-gray-60, #adadad);
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
`;

const RankContainer = styled.div`
  width: 464px;
  height: 112px;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--black-white-white, #fcfcfc);
  box-shadow: 1px 2px 5px 0px rgba(34, 32, 32, 0.1);
  border-radius: 56px;
  margin-bottom: 16px;
  margin-left: auto;
`;

const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  margin: 0 20px;
`;
const MoreBtn = styled(StBasicButton)`
  border: 2px solid var(--black-white-black, #222020);
  padding: 10px 0px;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 1px 2px 5px 0px rgba(34, 32, 32, 0.1);
`;

export default RankList;
