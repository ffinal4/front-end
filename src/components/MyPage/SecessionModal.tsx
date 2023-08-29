import React from 'react'
import remove from "../../assets/icon/remove.png";
import Cry from '../../assets/icon/crypeeppo.png'
import {
    ButtonContainer,
    CancelButtonContainer,
    CancelImg,
    Content,
    ContentsContainer,
    ModalBackground,
    ModalContainer,
    SubContent,
    Title,
} from "../MyAuctionCheckPage/AuctionCompleteModal";
import { StCompleteBt } from "../TradeRequestPage/TradeCompleteModal";
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const SecessionModal = ({ setSecessionModal } : any) => {
      
    const navigate = useNavigate();

    return (
        <div>
          <ModalBackground />
          <ModalContainer>
            <CancelButtonContainer>
              <CancelImg
                src={remove}
                onClick={() => {
                    setSecessionModal(false);
                }}
              />
            </CancelButtonContainer>
            <ContentsContainer>
                <Title style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "4px"}}>
                    <PocketImg src={Cry} />NOOOO...
                </Title>
              <Content>정말 핍포를 떠나실 건가요?</Content>
              <SubContent>
                한 번 삭제한 계정은 다시 복구할 수 없어요.
              </SubContent>
              <ButtonContainer style={{gap: "16px"}}>
                <StCompleteBt
                  buttonColor="#EFEFEF"
                  style={{color: "#222020", fontWeight: "400", border: "1px solid #222020"}}
                  onClick={() => navigate('/')}
                >
                  핍포 탈퇴하기
                </StCompleteBt>
                <StCompleteBt
                  buttonColor="#FFCA64"
                  style={{color: "#222020"}}
                  onClick={() => setSecessionModal(false)}
                >
                  계정 유지하기
                </StCompleteBt>
              </ButtonContainer>
            </ContentsContainer>
          </ModalContainer>
        </div>
    )
};

const PocketImg = styled.img`
    width: 48px;
    height: 48px;
    object-fit: contain;
`;

export default SecessionModal;