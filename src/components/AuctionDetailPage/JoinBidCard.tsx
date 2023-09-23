import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import Location from '../../assets/icon/location.png'
import Check from '../../assets/icon/check.png'

const JoinBidCard = ({
    checkBox,
    setCheckBox,
    item,
    myPocketGoods,
    setMyPocketGoods,
    ratingPrice,
    setRatingPrice
 } : any) => {
    
    const index = checkBox.indexOf(item.goodsId);

    const onClickCheckHandler = (item : any) => {
        if (index !== -1) {
            setCheckBox(checkBox.filter((value : number) => value !== item.goodsId));
            setRatingPrice(ratingPrice - item.ratingPrice);
        } else {
            setCheckBox([...checkBox, item.goodsId]);
            setRatingPrice(ratingPrice + item.ratingPrice);
        };
    };

    useEffect(() => {
        setMyPocketGoods({...myPocketGoods, goodsId: checkBox});
    }, [checkBox]);

    return (
        <CardContainer onClick={() => onClickCheckHandler(item)}>
            <CardImgContainer src={item?.image}>
                {(index !== -1)
                    && <div>
                        <CheckOutContainer />
                        <CheckContainer>
                            <CheckBox>
                                <CheckImage src={Check} />
                            </CheckBox>
                        </CheckContainer>
                    </div>}
            </CardImgContainer>
            <TitleContainer>{item?.title}</TitleContainer>
            <ContentContainer >
                {(item?.ratingCheck)
                    ? (item?.ratingPrice > 0) ? item?.ratingPrice.toLocaleString() : "레이팅 되는 중..."
                    : "레이팅이 필요해요"}
            </ContentContainer>
        </CardContainer>
    )
};

const CardContainer = styled.div`
    width: 176px;
    height: 229px;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        width: 164px;
        height: 221px; 
    }
`;

const CardImgContainer = styled.div<{ src: string }>`
    width: 176px;
    height: 176px;
    border-radius: 10px;
    background-image: ${(props) => `url(${props.src})`};
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;

    @media screen and (max-width: 500px) {
        width: 164px;
        height: 164px; 
    }
`;

const TitleContainer = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    padding: 10px 0px 0px 0px;
    text-overflow: ellipsis;
    word-break: break-word;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;

const ContentContainer = styled.div`
    font-family: "Pretendard";
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    color: #ADADAD;
`;

const CheckOutContainer = styled.div`
    width: 176px;
    height: 176px;
    border-radius: 10px;
    background-color: #000;
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1005;

    @media screen and (max-width: 500px) {
        width: 164px;
        height: 164px; 
    }
`;

const CheckContainer = styled.div`
    width: 176px;
    height: 176px;
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
        width: 164px;
        height: 164px; 
    }
`;

const CheckBox = styled.div`
    width: 68px;
    height: 68px;
    border-radius: 100%;
    border: 5px solid #222020;
    background-color: #FCFCFC;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CheckImage = styled.img`
    width: 36px;
    height: 36px;
`;

export default JoinBidCard;