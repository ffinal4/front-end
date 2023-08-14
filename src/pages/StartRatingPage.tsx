import React from 'react'
import { styled } from 'styled-components';
import { StBasicButton } from '../styles/BasicButton';
import Kangaroo from '../assets/images/kangaroowhy.png'
import { useNavigate } from 'react-router-dom';

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16ZM9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#EC8D49"/>
                        <path d="M8.375 10.1465C8.37012 8.99902 8.65332 8.64258 9.17578 8.30078C9.61035 8.01758 9.94238 7.77344 9.94727 7.37305C9.94238 7.01172 9.6543 6.76758 9.29297 6.76758C8.90723 6.76758 8.58008 7.05078 8.57031 7.4707H6.85156C6.87109 5.97168 7.97461 5.33203 9.30273 5.33203C10.7676 5.33203 11.8418 5.98633 11.8418 7.27539C11.8418 8.11035 11.3877 8.60352 10.7188 8.99414C10.2158 9.29688 9.95703 9.5752 9.95703 10.1465V10.3027H8.375V10.1465ZM8.23828 11.6602C8.2334 11.1426 8.66309 10.7227 9.18555 10.7227C9.68359 10.7227 10.1279 11.1426 10.1328 11.6602C10.1279 12.1875 9.68359 12.6074 9.18555 12.6074C8.66309 12.6074 8.2334 12.1875 8.23828 11.6602Z" fill="#EC8D49"/>
                    </svg>
                    <BottomText>포인트는 어디에 쓰나요?</BottomText>
                </BottomWrapper>
                <ImageContainer src={Kangaroo}/>
            </RatingReadyContainer>
        </MainLayout>
    </MainLayoutContainer>
  )
};

const MainLayoutContainer = styled.div`
    width: 100%;
    height: 963px;
    background-color: #F8F3EF;
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
    border: 1px solid #222020;
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
    padding: 86px 0px 0px 0px;
    cursor: pointer;
`;

const BottomText = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #39373A;
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