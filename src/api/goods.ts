import instance from ".";

// 메인페이지(랜딩페이지) 전체조회
export const getMainPageApi = async () => {
  const res = await instance.get(`/api/home`);
  return res;
};
// 물물교환 전체 조회
export const getGoodsApi = async (page: number, category: string | null, asc: boolean) => {
  const res = await instance.get(`/api/goods?page=${page}&size=20&sortBy=createdAt&isAsc=${asc}${category}`);
  return res;
};

// 내주머니 전체조회
export const getMyPocketApi = async (page: number) => {
  const res = await instance.get(`/api/goods/pocket?page=${page}&size=8&sortBy=createdAt&isAsc=false`);
  return res;
};

// 다른유저 주머니 전체조회
export const getUserPocketApi = async (nickname: any) => {
  const res = await instance.get(`/api/goods/pocket/${nickname}?page=1&size=5&sortBy=createdAt&isAsc=false`);
  return res;
};

// 물품교환요청받은 페이지 전체조회
export const getTradeReceiveRequestApi = async () => {
  const res = await instance.get(
    "/api/goods/users/trade/requested?page=1&size=5&sortBy=createdAt&isAsc=false&status=REQUESTED"
  );
  return res;
};

// 물물교환요청한 페이지 전체조회
export const getTradeRequestApi = async () => {
  const res = await instance.get(
    "/api/goods/users/trade/request?page=1&size=5&sortBy=createdAt&isAsc=false&status=REQUEST"
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

export const postRequestsApi = async (body: any, goodsId: number) => {
  const res = await instance.post(`/api/goods/users/${goodsId}/request`, body);
  return res;
};
