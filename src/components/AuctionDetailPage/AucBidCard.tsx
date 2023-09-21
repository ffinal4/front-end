import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Location from "../../assets/icon/location.png";
import Check from "../../assets/icon/check.png";
import { useMutation } from "react-query";
import { getAuctionBidDetailApi } from "../../api/acution";
import { DoneContainer } from "./BidModal";
import { makeChatAuctionBuyerId } from "../../store/chatting";
import { useRecoilState } from "recoil";

const AucBidCard = ({
  item,
  productData,
  setCheckBox,
  checkBox,
  choice,
  seller,
  setBidSellerPick,
  bidSellerPick,
  setDetailModalOpen,
  setDetailData,
}: any) => {
  const auctionId = productData?.data.info.auctionResponseDto.auctionId;
  const userId = item?.userId;
  const index = checkBox?.indexOf(item?.bidId);
  const [buyerId, setBuyerId] = useRecoilState(makeChatAuctionBuyerId);

  const onClickCheckHandler = (item: any) => {
    if (seller) {
      if (index !== -1) {
        setCheckBox(checkBox.filter((value: number) => value !== item?.bidId));
      } else {
        setCheckBox([...checkBox, item?.bidId]);
      }
    } else {
      if (checkBox === item?.bidId) {
        setCheckBox([]);
      } else {
        setCheckBox(item?.bidId);
      }
      if (buyerId === item?.userId) {
        setBuyerId(null);
      } else {
        setBuyerId(item?.userId);
      }
    }
  };

  const mutation = useMutation(() => getAuctionBidDetailApi(auctionId, userId), {
    onSuccess: (res) => {
      setDetailModalOpen(true);
      setDetailData(res);
    },
  });

  const onClickDetailHandler = () => {
    mutation.mutate();
  };

  useEffect(() => {
    if (choice) {
      if (checkBox) {
        if (seller) {
          let emptyArray = [];
          for (let i = 0; i < checkBox.length; i++) {
            for (let j = 0; j < checkBox[i].length; j++) {
              emptyArray.push(checkBox[i][j]);
            }
          }
          setBidSellerPick({ ...bidSellerPick, bidId: emptyArray });
        } else {
          setBidSellerPick({ ...bidSellerPick, bidId: checkBox });
        }
      }
    }
  }, [checkBox]);

  const cardCondition = () => {
    if (choice) {
      return (
        <div style={{ position: "relative" }}>
          {checkBox.length >= 4 && <NotRatingProduct />}
          <CardContainer onClick={() => onClickCheckHandler(item)}>
            <CardImg src={item?.image}>
              {seller
                ? index !== -1 && (
                    <div>
                      <CheckOutContainer />
                      <CheckContainer>
                        <CheckBox>
                          <CheckImage src={Check} />
                        </CheckBox>
                      </CheckContainer>
                    </div>
                  )
                : checkBox === item?.bidId && (
                    <div>
                      <CheckOutContainer />
                      <CheckContainer>
                        <CheckBox>
                          <CheckImage src={Check} />
                        </CheckBox>
                      </CheckContainer>
                    </div>
                  )}
            </CardImg>
            <TitleContainer>{item?.title}</TitleContainer>
            <ContentContainer>{item?.location}</ContentContainer>
          </CardContainer>
        </div>
      );
    } else {
      return (
        <CardContainer onClick={onClickDetailHandler}>
          <CardImg src={item?.image}>
            {item?.sellersPick && <SellerChoice>SELLER'S PICK</SellerChoice>}
            {item?.bidId.length > 1 && <Done>{item?.bidId.length}개의 물건</Done>}
          </CardImg>
          <TitleContainer>
            {item?.bidId.length > 1 ? `${item?.title} 외 ${item?.bidId.length - 1}개` : item?.title}
          </TitleContainer>
          <ContentContainer>{item?.location}</ContentContainer>
        </CardContainer>
      );
    }
  };

  return <div>{cardCondition()}</div>;
};

const CardContainer = styled.div`
  width: 272px;
  height: 333px;
  cursor: pointer;
`;

const CardImg = styled.div<{ src: string }>`
  width: 272px;
  height: 272px;
  border-radius: 10px;
  background-image: ${(props) => `url(${props.src})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const TitleContainer = styled.div`
  width: 100%;
  font-family: "Pretendard";
  font-size: 20px;
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
  color: #adadad;
  word-break: break-word;
  display: -webkit-box;
`;

const SellerChoice = styled.div`
  background-color: #58abf7;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  font-family: "Lemon/Milk", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  color: #fcfcfc;
  bottom: 0;
  position: absolute;
  border-radius: 0px 0px 10px 10px;
  z-index: 999;
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
  z-index: 1005;
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
  background-color: #fcfcfc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckImage = styled.img`
  width: 48px;
  height: 48px;
`;

const NotRatingProduct = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 272px;
  height: 333px;
  border-radius: 10px;
  background-color: #fcfcfc;
  opacity: 0.4;
  cursor: default;
`;

const Done = styled(DoneContainer)`
  width: 272px;
  height: 272px;
`;

export default AucBidCard;
