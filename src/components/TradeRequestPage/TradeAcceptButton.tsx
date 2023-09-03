import React, { useEffect } from "react";

interface TradeAcceptButtonProps {
  requestState: { request: string };
  setRequestState: React.Dispatch<React.SetStateAction<{ request: string }>>;
  item: any;
  data: any;
  requestGoods: any;
  setRequestGoods: any;
}

const TradeAcceptButton: React.FC<TradeAcceptButtonProps> = ({
  requestState,
  setRequestState,
  requestGoods,
  setRequestGoods,
  item,
  data,
}) => {
  useEffect(() => {
    const goodsData = item?.goodsListResponseDtos.map(
      (item: any) => item?.goodsId
    );
    setRequestGoods({ ...requestGoods, requestId: goodsData });
  }, [data]);

  console.log(requestGoods, "ddd");
  return <div></div>;
};

export default TradeAcceptButton;
