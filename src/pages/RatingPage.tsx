import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { styled } from "styled-components";
import PocketRight from "../assets/images/smallPocketright.png";
import RatingInfo from "../components/RatingPage/RatingInfo";
import { StBasicButton } from "../styles/BasicButton";
import PocketLeft from "../assets/images/smallPocket.svg";
import EyesIcon from "../assets/images/eye.svg";
import CloseEyes from "../assets/images/closedEyes.png";
import RatingDetailInfo from "../components/RatingPage/RatingDetailInfo";
import SuccessRating from "../components/RatingPage/SuccessRating";
import FailedModal from "../components/RatingPage/FailedModal";
import { useQuery, useQueryClient } from "react-query";
import { getRatingStartApi, postRatingSubmitApi } from "../api/rating";
import Remove from "../assets/icon/remove.png";
import Manual from "../components/RatingPage/Manual";
import NotDataModal from "../components/RatingPage/NotDataModal";
import LoadingSpinner from "../components/common/LoadingSpinner";

const RatingPage = () => {

  const queryClient = useQueryClient();
  const { isLoading, data, error, isError }: any = useQuery("ratingStart", getRatingStartApi, {
    refetchOnWindowFocus: false,
  });

  type Game = {
    price: any;
    detailInfo: boolean;
    gameover: boolean;
    success: boolean;
  };

  const [addPrice, setAddPrice] = useState<Game>({
    price: 0,
    detailInfo: false,
    gameover: false,
    success: false,
  });
  const { price, detailInfo, gameover, success } = addPrice;

  const [resData, setResData] = useState();

  const ratingPrice: number[] = [1000, 5000, 10000, 50000];

  const onClickAddRatingHandler = (item: number) => {
    const addData = price + item;
    setAddPrice({ ...addPrice, price: addData });
  };

  const onClickDetailInfoHandler = () => {
    setAddPrice({ ...addPrice, detailInfo: !detailInfo });
  };

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
          setAddPrice({ ...addPrice, gameover: true });
        } else {
          setAddPrice({ ...addPrice, success: true });
        }
        setResData(info);
        console.log("결과는", res.data.info);
      }
    } catch {
      if (error) {
        Swal.fire({
          icon: "warning",
          text: `${error}`,
          confirmButtonColor: "#ffca64",
        });
      }
    }
  };
  // if (data === undefined) return <p>평가 가능한 상품이 없습니다.</p>;
  if (isLoading)
    return (
      <MainLayout>
        <LoadingSpinner />
      </MainLayout>
    );
  if (isError) return <NotDataModal />;

  return (
    <MainLayoutContainer>
      <MainLayout>
        <RatingContainer>
          <PocketTopIconContainer>
            <PocketImage src={PocketRight} />
          </PocketTopIconContainer>
          <DetailInfoWrapper>
            <ImageContainer src={data.data.info.imageUrl}>
              <AnswerCountContainer>
                정답횟수
                <AnswerCount>{data.data.info.score}</AnswerCount>
              </AnswerCountContainer>
              <LikeBtn>♡</LikeBtn>
            </ImageContainer>
            {detailInfo ? <RatingDetailInfo data={data} /> : <RatingInfo data={data} />}
            {detailInfo ? (
              <DetailBtnWrapper onClick={onClickDetailInfoHandler}>
                <Text style={{ color: "#ADADAD" }}>간략히보기</Text>
                <Eyes src={CloseEyes} />
              </DetailBtnWrapper>
            ) : (
              <DetailBtnWrapper onClick={onClickDetailInfoHandler}>
                <Text style={{ color: "#222020" }}>상세설명보기</Text>
                <Eyes src={EyesIcon} />
              </DetailBtnWrapper>
            )}
          </DetailInfoWrapper>
          {success && (
            <SuccessContainer>
              <TitleContainer>
                <Title>AMAZING</Title>
              </TitleContainer>
              <SuccessRating resData={resData} />
            </SuccessContainer>
          )}
          <PriceInputWrapper>
            <PriceInput
              type="text"
              value={price !== 0 ? price.toLocaleString() : ""}
              placeholder="주머니의 주인은 이 물건이 얼마 정도의 가치가 있다고 생각했을까요?"
              // onChange={}
            ></PriceInput>
            {price !== 0 && (
              <RemovePriceWrapper
                onClick={() =>
                  setAddPrice({
                    ...addPrice,
                    price: 0,
                  })
                }
              >
                <RemoveBtn src={Remove} />
              </RemovePriceWrapper>
            )}
          </PriceInputWrapper>
          <ButtonWrapper>
            {ratingPrice.map((item) => {
              return (
                <div key={item}>
                  <PriceButton buttonColor="#FDEAC2" onClick={() => onClickAddRatingHandler(item)}>
                    + {item.toLocaleString()}
                  </PriceButton>
                </div>
              );
            })}
          </ButtonWrapper>
          <BottomBtnWrapper>
            {success ? (
              <StBasicButton
                buttonColor="#FFCA64"
                style={{
                  color: "#39373A",
                  border: "2px solid #39373A",
                  fontWeight: "700",
                }}
                onClick={() => {
                  queryClient.invalidateQueries('ratingStart')
                  setAddPrice({ ...addPrice, success: false });
                }}
              >
                이어하기
              </StBasicButton>
            ) : (
              <StBasicButton
                buttonColor="#FFCA64"
                style={{
                  color: "#39373A",
                  border: "2px solid #39373A",
                  fontWeight: "700",
                }}
                onClick={onClickSubmitHandler}
              >
                제출
              </StBasicButton>
            )}
          </BottomBtnWrapper>
          <PocketBottomIconContainer>
            <PocketImage src={PocketLeft} style={{ transform: "rotate(-10.208deg)" }} />
          </PocketBottomIconContainer>
          {gameover && (
            <FaildContainer>
              <FailedModal resData={resData} setAddPrice={setAddPrice} addPrice={addPrice} />
            </FaildContainer>
          )}
        </RatingContainer>
        <ModalContainer>
          <Manual />
        </ModalContainer>
      </MainLayout>
    </MainLayoutContainer>
  );
};

const MainLayoutContainer = styled.div`
  width: 100%;
  height: 963px;
  background-color: #f8f3ef;
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
  background-color: #fcfcfc;
  padding: 192px 93px 109px 93px;
  border: 2px solid #39373a;
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

const ImageContainer = styled.div<{ src: string }>`
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
  background-color: #fcfcfc;
  color: #d5d4d4;
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
  border: 2px solid #fbd8bf;
  background-color: #fcfcfc;
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
  color: #ec8d49;
`;

const PriceInputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  padding: 0px 20px;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #adadad;
  background-color: #fcfcfc;
  position: relative;
`;

const PriceInput = styled.input`
  width: 100%;
  background-color: #fcfcfc;
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
  color: #39373a;
  border: 1px solid #39373a;

  &:active {
    border: 2px solid #39373a;
    background-color: #ffca64;
  }
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
  background-color: #fcfcfc;
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
  border-top: 2px solid #ec8d49;
  border-right: 2px solid #ec8d49;
  border-left: 2px solid #ec8d49;
  font-family: "Lemon/Milk", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 110%;
  background-color: #fcfcfc;
  position: relative;
  color: #ec8d49;
`;

const FaildContainer = styled.div`
  width: 560px;
  height: 294px;
  top: 195px;
  left: 192px;
  position: absolute;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export default RatingPage;
