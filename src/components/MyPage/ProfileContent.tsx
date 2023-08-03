import React, { useState } from 'react'
import { styled } from 'styled-components';
import ppapparo from '../../assets/images/ppapparo.jpg'
import Pocket from './Pocket';

const ProfileContent = () => {

    const [pocket, setPocket] = useState(false);

    const onClickPocketHandler = () => {
        setPocket(!pocket)
    };
    
    return (
        <LeftContainer>
            <TitleContainer>PROFILE</TitleContainer>
            <LeftContentContainer>
                <ImageContainer src={ppapparo} />
                <ContentInBox>
                    <ContentLine>
                        <TypeContainer>이메일(아이디)</TypeContainer>
                        <TextContainer>peeppo@gmail.com</TextContainer>
                    </ContentLine>
                    <ContentLine>
                        <TypeContainer>닉네임</TypeContainer>
                        <TextContainer>핍포</TextContainer>
                    </ContentLine>
                    <ContentLine>
                        <TypeContainer>비밀번호</TypeContainer>
                        <TextContainer>**********</TextContainer>
                    </ContentLine>
                    <ContentLine>
                        <TypeContainer>주거래지역</TypeContainer>
                        <TextContainer>경기도 수원시 영통구</TextContainer>
                    </ContentLine>
                </ContentInBox>
                <ButtonBox>
                    <Button onClick={onClickPocketHandler}/>
                </ButtonBox>
            </LeftContentContainer>
            {(pocket) && <Pocket onClickPocketHandler={onClickPocketHandler}/>}
        </LeftContainer>
    )
};

const LeftContainer = styled.div`
    width: 752px;

    @media screen and (max-width: 1144px) {
        height: 100%;
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    font-family: "Lemon/Milk", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    padding: 0px 0px 10px 0px;
`;

const LeftContentContainer = styled.div`
    display: flex;
    height: 204px;
    align-items: center;
    padding: 30px 20px 30px 40px;
    border: 1px solid #000;
`;

const ImageContainer = styled.div<{ src: string }>`
    width: 113px;
    height: 113px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-size: cover;
    background-image: ${(props) => `url(${props.src})`};
`;

const ContentInBox = styled.div`
    display: grid;
    gap: 16px;
    padding: 0px 0px 0px 40px;
    width: 80%;
`;

const ContentLine = styled.div`
    display: flex;
    align-items: center;
`;

const TypeContainer = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    width: 192px;

    @media screen and (max-width: 1144px) {
        width: 150px;
    }
`;

const TextContainer = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

const ButtonBox = styled.div`
    padding: 10px 0px 148px 0px;
`;

const Button = styled.div`
    width: 36px;
    height: 36px;
    background-color: #D9D9D9;
    cursor: pointer;
`;

export default ProfileContent;