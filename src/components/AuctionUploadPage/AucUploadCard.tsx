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
    // console.log(checkBox, "checkBox");

  return (
    <CardContainer onClick={() => onClickCheckHandler(item)}>
        <CardImgContainer src={item?.images[0]} onClick={() => setCheckBox(!checkBox)}>
            {(checkBox === item.goodsId)
                ? <div>
                    <CheckOutContainer />
                    <CheckContainer>
                        <CheckBox>
                            <CheckImage src={Check}/>
                        </CheckBox>
                    </CheckContainer>
                </div>
                : <div>
                <GoodsConditionContainer />
                <GoodsCondition>
                    <Circle />
                    거래중
                </GoodsCondition>
                </div>}
            <CardLocationContainer />
            <LocatinoWrapper>
                <LocationIcon src={Location} alt=''/>
                <LocationText>{item?.location}</LocationText>
            </LocatinoWrapper>  
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
    height: 312px;
    cursor: pointer;
`;

const CardImgContainer = styled.div<{ src : string }>`
    width: 272px;
    height: 272px;
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
`;

const CheckImage = styled.img`
    width: 48px;
    height: 48px;
`;

const GoodsConditionContainer = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0;
    z-index: 1001;
    width: 100%;
    height: 48px;
    background-color: #FFFFFF;
    opacity: 0.8;
    border-radius: 0px 0px 10px 10px;
`;

const GoodsCondition = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0;
    z-index: 1003;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    gap: 10px;
    color: #222020;
    padding: 0px 0px 0px 15px;
`;

const Circle = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: #EC8D49;
`;

export default AucUploadCard;