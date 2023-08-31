import React from 'react'
import { styled } from 'styled-components';
import { StBasicButton } from '../../styles/BasicButton';
import Paging from '../common/Paging/Paging';
import AucBidCard from './AucBidCard';
import Close from '../../assets/icon/remove.png'

const SellerPickModal = ({ sellerPicks, setSellerPicks } : any) => {
  return (
    <div>
        <ModalBackgroundBox onClick={() => setSellerPicks({...sellerPicks, pickModal: false})}/>
        <ModalContainer>
            <ModalTitle>
                SELLER's PICK!
                <CloseBtn
                    src={Close}
                    onClick={() => setSellerPicks({...sellerPicks, pickModal: false})}
                />
            </ModalTitle>
            <ModalSubtitle>현재 가장 마음에 드는 입찰품 선택하기</ModalSubtitle>
            <Wrapper>
                <TextWrapper>
                    <Text>- Seller’s Pick은 최대 4개까지 선택할 수 있습니다.</Text>
                    <Text>- 선택한 상품은 경매자가 현재 입찰할 가능성이 가장 높은 상품으로 다른 사용자들에게 표시됩니다.</Text>
                    <Text>- Seller’s Pick은 언제든지 수정할 수 있습니다.</Text>
                </TextWrapper>
                <ButtonWrapper>
                    <StButton
                        buttonColor='#FCFCFC'
                        onClick={() => setSellerPicks({...sellerPicks, pickModal: false})}
                    >선택완료</StButton>
                </ButtonWrapper>
            </Wrapper>
            <MainContainer>
                {/* <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard />
                <AucBidCard /> */}
            </MainContainer>
            <Paging />
        </ModalContainer>
    </div>
  )
};

const ModalBackgroundBox = styled.div`
    position: fixed;
    background-color: #000;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    opacity: 0.25;
    z-index: 888;
`;

const ModalContainer = styled.div`
    width: 1196px;
    max-height: 1186px;
    border: 1px solid #222020;
    border-radius: 10px;
    background-color: #FCFCFC;
    position: absolute;
    top: 220px;
    left: 392px;
    z-index: 999;
    padding: 40px 30px;
`;
const ModalTitle = styled.div`
    font-family: "Lemon/Milk", sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 110%;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const ModalSubtitle = styled.div`
    font-family: "Pretendard";
    font-size: 32px;
    font-weight: 800;
    line-height: 150%;
    padding: 16px 0px 20px 0px;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const TextWrapper = styled.div`
    display: grid;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #808080;
`;

const StButton = styled(StBasicButton)`
    border: 1px solid #222020;
    color: #222020;
`;

const ButtonWrapper = styled.div`
    height: 72px;
    display: flex;
    align-items: end;
`;

const MainContainer = styled.div`
    border-top: 4px solid #222020;
    border-bottom: 4px solid #222020;
    padding: 40px 0px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 26px 0px 40px 0px;
    width: 100%;
    max-height: 788px;
    overflow: auto;
`;

const CloseBtn = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
`;

export default SellerPickModal;