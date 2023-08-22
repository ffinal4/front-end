import React from 'react'
import { styled } from 'styled-components';
import { StBasicButton } from '../styles/BasicButton';
import Kangaroo from '../assets/images/kangaroowhy.png'
import { useNavigate } from 'react-router-dom';
import Manual from '../components/RatingPage/Manual';
import RakingSystem from '../components/StartRationPage/RakingSystem';

const StartRatingPage = () => {

    const navigate = useNavigate();

  return (
    <MainLayoutContainer>
        <MainLayout>
            <RatingReadyContainer>
                <TextWrapper>
                    <TitleContainer>
                        HOW MUCH?
                    </TitleContainer>
                    <SubtitleContainer>
                        버튼을 눌러 물건을 등록한 사람이 생각하는 가격을 맞춰보세요!
                    </SubtitleContainer>
                    <ContentContainer>
                        <Text>정답에 근접할 수록 더 많은 포인트를 얻을 수 있어요.</Text>
                        <Text>게임에서 얻은 포인트로 더 다양한 핍포 생활을 즐겨보세요!</Text>
                    </ContentContainer>
                </TextWrapper>
                <StBasicButton
                    buttonColor='#FDD988'
                    style={{fontWeight: "700", border: "2px solid #39373A"}}
                    onClick={() => navigate('/rating')}
                >시작하기</StBasicButton>
                <BottomWrapper>
                    <Manual />
                </BottomWrapper>
                <ImageContainer src={Kangaroo}/>
            </RatingReadyContainer>
        </MainLayout>
        <RakingSystem />
    </MainLayoutContainer>
  )
};

const MainLayoutContainer = styled.div`
    width: 100%;
    height: 963px;
    background-color: #FCFCFC;
`;

const MainLayout = styled.div`
    width: 100%;
    max-width: 1136px;
    margin: 0 auto;
    padding: 220px 0 100px 0;
    display: flex;
    justify-content: center;

    /* @media screen and (max-width: 1136px) {
        padding: 80px 200px 100px 200px;
    } */

    @media screen and (max-width: 834px) {
        padding: 80px 0 100px 0;
    }
    @media screen and (max-width: 375px) {
        padding: 80px 0 100px 0;
    }
`;

const RatingReadyContainer = styled.div`
    width: 944px;
    height: 640px;
    background-color: #FCFCFC;
    padding: 192px 93px 109px 93px;
    border-radius: 20px;
    position: relative;
`;

const TextWrapper = styled.div`
    width: 100%;
    position: relative;
    z-index: 999;
`;

const TitleContainer = styled.div`
    font-family: "Lemon/Milk", sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 110%;
    color: #FFCA64;
    padding: 0px 0px 16px 0px;
`;

const SubtitleContainer = styled.div`
    font-family: "Pretendard";
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;
    color: #39373A;
`;

const ContentContainer = styled.div`
    padding: 20px 0px 30px 0px;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #39373A;
`;

const BottomWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 66px 0px 0px 0px;
    width: 200px;
`;

const ImageContainer = styled.div<{ src : string }>`
    width: 412px;
    height: 425px;
    background-image: ${(props) =>`url(${props.src})`};
    background-size: cover;
    position: absolute;
    right: 68px;
    bottom: 108px;
    z-index: 0;
`;

export default StartRatingPage;