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
    console.log(myPocketGoods, "myPocketGoods");
    console.log(checkBox, "checkBox");

    return (
        <CardContainer onClick={() => onClickCheckHandler(item)}>
            <CardImgContainer src={item?.image} onClick={() => setCheckBox(!checkBox)}>
                {(index !== -1)
                    && <div>
                        <CheckOutContainer />
                        <CheckContainer>
                            <CheckBox>
                                <CheckImage src={Check} />
                            </CheckBox>
                        </CheckContainer>
                    </div>}
                {/* <CardLocationContainer />
                <LocatinoWrapper>
                    <LocationIcon src={Location} alt='' />
                    <LocationText>{item?.location}</LocationText>
                </LocatinoWrapper> */}
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
`;

const CardImgContainer = styled.div<{ src: string }>`
    width: 176px;
    height: 176px;
    border-radius: 10px;
    background-image: ${(props) => `url(${props.src})`};
    background-size: cover;
    position: relative;
`;

const CardLocationContainer = styled.div`
    width: 100%;
    height: 44px;
    border-radius: 10px 10px 0px 0px;
    color: #fff;
    background-color: #222020;
    opacity: 0.2;
    display: flex;
    align-items: center;
    
`;

const LocatinoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    top: 10px;
    left: 20px;
    position: absolute;
    z-index: 20;
`;

const LocationText = styled.div`
    color: #fff;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

const LocationIcon = styled.img`
    width: 18px;
    height: 18px;
`;

const TitleContainer = styled.div`
    width: 100%;
    font-family: "Pretendard";
    font-size: 16px;
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
    width: 176px;
    height: 176px;
    border-radius: 10px;
    background-color: #000;
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1005;
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