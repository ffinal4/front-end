import React from 'react'
import { styled } from 'styled-components';
import Location from '../../assets/icon/location.png'
import Check from '../../assets/icon/check.png'

const AucUploadCard = (props : any) => {

    const { checkBox, setCheckBox, item, myPocketGoods, setMyPocketGoods } = props;

    const onClickCheckHandler = (item : any) => {
        if (checkBox === item.goodsId) {
            setCheckBox(null);
        } else {
            setCheckBox(item.goodsId);
        };
        return setMyPocketGoods({...myPocketGoods, goodsId: item.goodsId});
    };

  return (
    <CardContainer onClick={() => onClickCheckHandler(item)}>
        <CardImgContainer src={item?.images[0]} onClick={() => setCheckBox(!checkBox)}>
            {(checkBox === item.goodsId)
                && <div>
                    <CheckOutContainer />
                    <CheckContainer>
                        <CheckBox>
                            <CheckImage src={Check}/>
                        </CheckBox>
                    </CheckContainer>
                </div>} 
        </CardImgContainer>
        <TitleContainer>{item?.title}</TitleContainer>
        <ContentContainer>
            {(item?.ratingCheck)
                ?  (item?.avgRatingPrice > 0)
                    ? item?.avgRatingPrice
                    : "레이팅 되는 중..."
                : "레이팅이 필요해요"}
        </ContentContainer>
    </CardContainer>
  )
};

const CardContainer = styled.div`
    width: 272px;
    height: 333px;
    margin-bottom: 40px;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        max-width: 140px;
        height: 260px;
    }
`;

const CardImgContainer = styled.div<{ src : string }>`
    width: 272px;
    height: 272px;
    border-radius: 10px;
    background-image: ${(props) => `url(${props.src})`};
    background-size: cover;
    position: relative;

    @media screen and (max-width: 500px) {
        max-width: 140px;
        height: 140px;
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    padding: 10px 0px 0px 0px;
`;

const ContentContainer = styled.div`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    color: #ADADAD;
`;

const CheckOutContainer = styled.div`
    width: 272px;
    height: 272px;
    border-radius: 10px;
    background-color: #000;
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 888;

    @media screen and (max-width: 500px) {
        max-width: 140px;
        height: 140px;
    }
`;

const CheckContainer = styled.div`
    width: 272px;
    height: 272px;
    border-radius: 10px;
    border: 6px solid #222020;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    @media screen and (max-width: 500px) {
        max-width: 140px;
        height: 140px;
    }
`;

const CheckBox = styled.div`
    width: 98px;
    height: 98px;
    border-radius: 100%;
    border: 5px solid #222020;
    background-color: #FCFCFC;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        max-width: 60px;
        height: 60px;
    }
`;

const CheckImage = styled.img`
    width: 48px;
    height: 48px;

    @media screen and (max-width: 500px) {
        max-width: 32px;
        height: 32px;
    }
`;

export default AucUploadCard;