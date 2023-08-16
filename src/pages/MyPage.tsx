import React from 'react'
import { styled } from 'styled-components';
import ProfileContent from '../components/MyPage/ProfileContent';
import MyPippo from '../components/MyPage/MyPippo';
import { useQueries } from 'react-query';
import { getMypageApi } from '../api/users';

const MyPage = () => {

    // const { isLoading, error, data } = useQueries("myPageData", getMypageApi);

  return (
    <AllLayoutContainer>
        <LayoutContainer>
            <MyPageTitle>MY PAGE</MyPageTitle>
            <MyPageContentContainer>
                <ProfileContent />
                <MyPippo />
            </MyPageContentContainer>
        </LayoutContainer>
    </AllLayoutContainer>
  )
};

const AllLayoutContainer = styled.div`
    width: 100%;
    height: 1010px;
    position: relative;
`;

const LayoutContainer = styled.div`
    width: 1144px;
    height: 1010px;
    margin: 0 auto;
    padding: 220px 0px 100px 0px;

    @media screen and (max-width: 1144px) {
        width: 100%;
        height: 800px;
    }
`;

const MyPageTitle = styled.div`
    font-family: "Lemon/Milk", sans-serif;
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-weight: 700;
    line-height: 110%;
    padding: 0px 0px 60px 0px;
`;

const MyPageContentContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 1144px) {
        display: grid;
        justify-content: center;
    }
`;



export default MyPage;