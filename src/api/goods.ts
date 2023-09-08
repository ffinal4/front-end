import instance from ".";

// 메인페이지(랜딩페이지) 전체조회
export const getMainPageApi = async () => {
  const res = await instance.get(`/api/home`);
  return res;
};
// 물물교환 전체 조회
export const getGoodsApi = async (
  page: number,
  category: string | null,
  asc: boolean
) => {
  const res = await instance.get(
    `/api/goods?page=${page}&size=20&sortBy=createdAt&isAsc=${asc}${category}`
  );
  return res;
};

// 내주머니 전체조회
export const getMyPocketApi = async (page: number, asc: boolean) => {
  const res = await instance.get(
    `/api/goods/pocket?page=${page}&size=8&sortBy=createdAt&isAsc=${asc}`
  );
  return res;
};

// 다른유저 주머니 전체조회
export const getUserPocketApi = async (
  nickname: any,
  page: number,
  asc: boolean
) => {
  const res = await instance.get(
    `/api/goods/pocket/${nickname}?page=${page}&size=8&sortBy=createdAt&isAsc=${asc}`
  );
  return res;
};

// 물품교환요청받은 페이지 전체조회
export const getTradeReceiveRequestApi = async (
  page: number,
  tradeState: string | null
) => {
  const res = await instance.get(
    `/api/goods/users/trade/receive?page=${page}&size=9&sortBy=createdAt&isAsc=false${tradeState}`
  );
  return res;
};

// 물물교환요청한 페이지 전체조회
export const getTradeRequestApi = async (
  page: number,
  tradeState: string | null
) => {
  const res = await instance.get(
    `/api/goods/users/trade/request?page=${page}&size=9&sortBy=createdAt&isAsc=false${tradeState}`
  );
  return res;
};

// 물품 등록
interface upLoadBody {
  formdata: {
    images: string[];
    data: {
      title: string;
      content: string;

      tradeType: string;
      category: string;
      goodsCondition: string;
      sellerPrice: string;
      location: string;
    };
    wanted: {
      title: string;
      content: string;
      category: string;
    };
  };
}
export const postUploadApi = async (body: any) => {
  const res = await instance.post("/api/goods", body, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res;
};
// 물품 삭제
export const deleteGoodsApi = async (goodsId: number) => {
  const res = await instance.delete(`/api/goods/${goodsId}`);
  return res;
};

// 물품 상세 페이지
export const getDetailPageApi = async (goodsId: any) => {
  const res = await instance.get(`/api/goods/${goodsId}`);
  return res;
};

// 경매 물품 등록 내 주머니 물품조회
export const getAuctionUploadApi = async () => {
  const res = await instance.get("/api/goods/mypocket");
  return res;
};

// 물품 찜 추가, 삭제
interface zzimBody {
  goodsId: number;
}
export const postZzimApi = async (body: zzimBody) => {
  const res = await instance.post("/api/dibs", body);
  return res;
};

// 물품 교환신청
export const postRequestsApi = async (body: any, goodsId: number) => {
  const res = await instance.post(`/api/goods/users/${goodsId}/request`, body);
  return res;
};

// 교환요청 수락
interface acceptBody {
  requestId: string | number[];
}
export const postAcceptTradeApi = async (
  sellerGoods: any,
  body: acceptBody
) => {
  const res = await instance.post(
    `/api/goods/${sellerGoods}/users/accept`,
    body
  );
  return res;
};

// 교환요청 거절
interface refuseBody {
  requestId: string | number[];
}
export const deleteRefuseTradeApi = async (body: refuseBody) => {
  const res = await instance.post("/api/goods/users/refuse", body);
  return res;
};

//교환완료
interface completeBody {
  requestId: string | number[];
}
export const completeTradeApi = async (body: completeBody) => {
  const res = await instance.post("/api/goods/users/accept/completed", body);
  return res;
};

// 물품검색

export const searchApi = async (body: string) => {
  const res = await instance.get(`api/goods/search?keyword=${body}`);
  return res;
};
