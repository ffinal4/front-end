import React from "react";
import { styled } from "styled-components";
import ItemCard from "./ItemCard";
import EmptyPocket from "./EmptyPocket";
import EmptyList from "./EmptyList";
import { DoneContainer, NotRatingProductWrapper } from '../AuctionDetailPage/BidModal';

const ItemCardList = ({ data, allList, isPocket }: any) => {

  const myLocation = localStorage.getItem("location");

  return (
    <ItemCardContainer>
      {(data?.length > 0)
        ? data?.map((item: any) => {
          return (
            <NotRatingProductWrapper>
              <ItemCard key={item?.goodsId} item={item} isPocket={isPocket} />
                {(item?.goodsStatus !== "ONSALE"
                  && item?.goodsStatus !== "REQUEST"
                  && item?.goodsStatus !== "CANCEL")
                    && ((item?.goodsStatus === "BIDDING"
                      || item?.goodsStatus === "ONAUCTION"
                      || item?.goodsStatus === "AUCTION")
                        ? <div>
                          <GoodsConditionContainer />
                          <GoodsCondition>
                            <Circle />
                              경매중
                          </GoodsCondition>
                        </div>
                        : ((item?.goodsStatus === "END"
                          || item?.goodsStatus === "DONE"
                          || item?.goodsStatus === "SOLDOUT")
                          ? <Done>거래완료</Done>
                          : <div>
                            <GoodsConditionContainer />
                            <GoodsCondition>
                              <Circle style={{backgroundColor: "#EC8D49"}} />
                                거래중
                            </GoodsCondition>
                          </div>))}
            </NotRatingProductWrapper>
          );
        })
        : ((allList)
          ? <EmptyList />
          : <EmptyPocket pocketStatus={0} />)}
    </ItemCardContainer>
  );
};

const ItemCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 16px;
  margin-bottom: 100px;
`;

const GoodsConditionContainer = styled.div`
  position: absolute;
  bottom: 113px;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 48px;
  background-color: #ffffff;
  opacity: 0.8;
  border-radius: 0px 0px 10px 10px;
`;

const GoodsCondition = styled.div`
  position: absolute;
  bottom: 113px;
  left: 0;
  z-index: 2;
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
  background-color: #58abf7;
`;

const Done = styled(DoneContainer)`
  width: 272px;
  height: 272px;
`;

export default ItemCardList;
