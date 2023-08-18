import React, { useState } from 'react'
import { styled } from 'styled-components';
import PocketRight from '../assets/images/smallPocketright.png'
import RatingInfo from '../components/RatingPage/RatingInfo';
import { StBasicButton } from '../styles/BasicButton';
import PocketLeft from '../assets/images/smallPocket.svg'
import EyesIcon from '../assets/images/eye.svg';
import CloseEyes from '../assets/images/closedEyes.png';
import RatingDetailInfo from '../components/RatingPage/RatingDetailInfo';
import SuccessRating from '../components/RatingPage/SuccessRating';
import FailedModal from '../components/RatingPage/FailedModal';
import { useQuery } from 'react-query';
import { getRatingStartApi, postRatingSubmitApi } from '../api/rating';
import Remove from '../assets/icon/remove.png'

const RatingPage = () => {

    const { isLoading, data, error } : any = useQuery("ratingStart", getRatingStartApi, {
        refetchOnWindowFocus: false,
    });
    
    console.log(data, "data");

    type Game = {
        price: any,
        detailInfo: boolean,
        gameover: boolean,
        success: boolean,
    }

    const [addPrice, setAddPrice] = useState<Game>({
        price: 0,
        detailInfo: false,
        gameover: false,
        success: false,
    });
    const { price, detailInfo, gameover, success } = addPrice;

    const [resData, setResData] = useState();

    const ratingPrice: number[] = [1000, 5000, 10000, 50000];

    const onClickAddRatingHandler = (item : number) => {
        const addData = (price + item)
        setAddPrice({...addPrice, price: addData});
    };

    const onClickDetailInfoHandler = () => {
        setAddPrice({...addPrice, detailInfo: !detailInfo});
    };

    // const onClickFailedHandler = () => {
    //     setAddPrice({...addPrice, gameover: !gameover});
    // };

    const onClickSubmitHandler = async () => {
        try {
            const priceData = {
                goodsId: data.data.info.goodsId,
                ratingPrice: price,
            };
            const res = await postRatingSubmitApi(priceData);
            if (res.status === 200) {
                const info = res.data.info;
                if (res.data.info.currentPoint === 2) {
                    setAddPrice({...addPrice, gameover: true});
                } else {
                    setAddPrice({...addPrice, success: true});
                };
                setResData(info);
                console.log("결과는", res.data.info);
            };
        } catch {
            if (error) {
                alert("에러가 발생했습니다.");
            }
        };
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <MainLayoutContainer>
        <MainLayout>
            <RatingContainer>
                <PocketTopIconContainer>
                    <PocketImage src={PocketRight}/>
                </PocketTopIconContainer>
                <DetailInfoWrapper>
                    <ImageContainer src={data.data.info.imageUrl}>
                        <AnswerCountContainer>
                            정답횟수
                            <AnswerCount>{data.data.info.score}</AnswerCount>
                        </AnswerCountContainer>
                        <LikeBtn>♡</LikeBtn>
                    </ImageContainer>
                    {(detailInfo)
                        ? <RatingDetailInfo data={data} />
                        : <RatingInfo data={data} />
                    }
                        {(detailInfo)
                            ? <DetailBtnWrapper onClick={onClickDetailInfoHandler}>
                                <Text style={{color: "#ADADAD"}}>간략히보기</Text>
                                <Eyes src={CloseEyes}/>
                            </DetailBtnWrapper>
                            : <DetailBtnWrapper onClick={onClickDetailInfoHandler}>
                                <Text style={{color: "#222020"}}>상세설명보기</Text>
                                <Eyes src={EyesIcon}/>
                            </DetailBtnWrapper>
                        }
                </DetailInfoWrapper>
                {(success)
                    && <SuccessContainer>
                        <TitleContainer>
                            <Title>AMAZING</Title>
                        </TitleContainer>
                        <SuccessRating resData={resData} />
                    </SuccessContainer>
                }
                <PriceInputWrapper>
                    <PriceInput
                        type='text'
                        value={(price !== 0) ? price.toLocaleString() : ""}
                        placeholder='주머니의 주인은 이 물건이 얼마 정도의 가치가 있다고 생각했을까요?'
                        // onChange={}
                    >
                    </PriceInput>
                    {(price !== 0)
                        && <RemovePriceWrapper onClick={() => setAddPrice({
                            ...addPrice,
                            price: 0,
                        })} >
                            <RemoveBtn src={Remove} />  
                        </RemovePriceWrapper>
                    }
                </PriceInputWrapper>
                <ButtonWrapper>
                    {ratingPrice.map((item) => {
                        return (
                            <div key={item}>
                                <PriceButton
                                    buttonColor='#FDEAC2'
                                    onClick={() => onClickAddRatingHandler(item)}
                                >+ {item.toLocaleString()}</PriceButton>
                            </div>
                        )
                    })}
                </ButtonWrapper>
                <BottomBtnWrapper>
                    <StBasicButton
                        buttonColor='#FFCA64'
                        style={{color: "#39373A", border: "2px solid #39373A", fontWeight: "700"}}
                        onClick={onClickSubmitHandler}
                    >제출</StBasicButton>
                </BottomBtnWrapper>
                <PocketBottomIconContainer>
                    <PocketImage src={PocketLeft} style={{transform: "rotate(-10.208deg)"}}/>
                </PocketBottomIconContainer>
                {(gameover)
                && <FaildContainer>
                    <FailedModal resData={resData} setAddPrice={setAddPrice} addPrice={addPrice}/>
                </FaildContainer>
                }
            </RatingContainer>
            <PointInfo>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16ZM9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="#EC8D49"/>
                    <path d="M8.375 10.1465C8.37012 8.99902 8.65332 8.64258 9.17578 8.30078C9.61035 8.01758 9.94238 7.77344 9.94727 7.37305C9.94238 7.01172 9.6543 6.76758 9.29297 6.76758C8.90723 6.76758 8.58008 7.05078 8.57031 7.4707H6.85156C6.87109 5.97168 7.97461 5.33203 9.30273 5.33203C10.7676 5.33203 11.8418 5.98633 11.8418 7.27539C11.8418 8.11035 11.3877 8.60352 10.7188 8.99414C10.2158 9.29688 9.95703 9.5752 9.95703 10.1465V10.3027H8.375V10.1465ZM8.23828 11.6602C8.2334 11.1426 8.66309 10.7227 9.18555 10.7227C9.68359 10.7227 10.1279 11.1426 10.1328 11.6602C10.1279 12.1875 9.68359 12.6074 9.18555 12.6074C8.66309 12.6074 8.2334 12.1875 8.23828 11.6602Z" fill="#EC8D49"/>
                </svg>
                <BottomText>포인트는 어디에 쓰나요?</BottomText>
            </PointInfo>
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
    padding: 220px 0 50px 0;
    display: grid;
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
    padding: 60px 96px 64px 96px;
`;

const PocketTopIconContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    position: absolute;
    top: -20px;
    right: -30px;
`;

const PocketBottomIconContainer = styled.div`
    display: flex;
    justify-content: start;
    position: absolute;
    z-index: 888;
    bottom: -20px;
    left: -30px;
`;

const DetailInfoWrapper = styled.div`
    display: flex;
    gap: 36px;
    padding: 0px 0px 40px 0px;
    position: relative;
`;

const PocketImage = styled.img`
    width: 66.364px;
    height: 53.092px;
    object-fit: contain;
`;

const ImageContainer = styled.div<{ src : string }>`
    min-width: 368px;
    height: 368px;
    background-image: ${(props) => `url(${props.src})`};
    background-size: cover;
    border-radius: 10px;
    position: relative;
`;

const LikeBtn = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 0px 10px;
    background-color: #FCFCFC;
    color: #D5D4D4;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    cursor: pointer;
`;

const AnswerCountContainer = styled.div`
    width: 174px;
    height: 64px;
    border: 2px solid #FBD8BF;
    background-color: #FCFCFC;
    display: inline-flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -20px;
    left: -56px;
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    border-radius: 10px;
    gap: 16px;
`;

const AnswerCount = styled.div`
    font-family: "Lemon/Milk", sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 110%;
    color: #EC8D49;
`;

const PriceInputWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 44px;
    padding: 0px 20px;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #ADADAD;
    background-color: #FCFCFC;
    position: relative;
`;

const PriceInput = styled.input`
    width: 100%;
    background-color: #FCFCFC;
`;

const RemovePriceWrapper = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
`;

const RemoveBtn = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 0px 0px 0px;
`;

const PriceButton = styled(StBasicButton)`
    color: #39373A;
    border: 1px solid #39373A;

    &:active {
        border: 2px solid #39373A;
        background-color: #FFCA64;
    };
`;

const BottomBtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0px;
    bottom: -22px;
    z-index: 999;
`;

const DetailBtnWrapper = styled.div`
    display: flex;
    gap: 7px;
    justify-content: end;
    align-items: center;
    position: absolute;
    padding: 0px 0px 36px 0px;
    right: 0;
    bottom: 0;
    cursor: pointer;
`;

const Eyes = styled.img`
    width: 18px;
    height: 15px;
`;

const Text = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

const SuccessContainer = styled.div`
    position: absolute;
    z-index: 888;
    left: 0;
    bottom: 20px;
    width: 100%;
    height: 190px;
    padding: 0px 96px 0px 96px;
    background-color: #FCFCFC;
`;

const PointInfo = styled.div`
    padding: 20px 0px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 7px;
    cursor: pointer;
`;

const BottomText = styled.div`
    font-family: "Pretendard";
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: #39373A;
`;

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: -51px;
    left: 0;
`;

const Title = styled.div`
    width: 314px;
    height: 53px;
    padding: 14px 40px 14px 40px;
    border-radius: 40px 40px 0px 0px;
    border-top: 2px solid #EC8D49;
    border-right: 2px solid #EC8D49;
    border-left: 2px solid #EC8D49;
    font-family: "Lemon/Milk", sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 110%;
    background-color: #FCFCFC;
    position: relative;
    color: #EC8D49;
`;

const FaildContainer = styled.div`
    width: 560px;
    height: 294px;
    top: 195px;
    left: 192px;
    position: absolute;
    z-index: 1000;
`;

export default RatingPage;