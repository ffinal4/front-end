import React from 'react'
import { styled } from 'styled-components';
import PocketRight from '../assets/images/smallPocketright.png'

const RatingPage = () => {
  return (
    <MainLayoutContainer>
        <MainLayout>
            <RatingContainer>
                <PocketIconContainer>
                    <PocketImage src={PocketRight}/>
                </PocketIconContainer>
            </RatingContainer>
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

const RatingContainer = styled.div`
    width: 944px;
    height: 640px;
    background-color: #FCFCFC;
    padding: 192px 93px 109px 93px;
    border: 2px solid #39373A;
    position: relative;
`;

const PocketIconContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    position: absolute;
    top: -20px;
    right: -30px;
`;

const PocketImage = styled.img`
    width: 66.364px;
    height: 53.092px;
    object-fit: contain;
`;

const ImageContainer = styled.div`
    width: 368px;
    height: 368px;
`;

export default RatingPage;