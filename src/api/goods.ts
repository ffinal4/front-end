import instance from ".";

// 메인페이지(랜딩페이지) 전체조회
export const getMainPageApi = async () => {
  const res = await instance.get(`/api/home`);
  return res;
};
// 물물교환 전체 조회
export const getGoodsApi = async () => {
  const res = await instance.get(`/api/goods?page=1&size=20&sortBy=createdAt&isAsc=false`);
  return res;
};

// 내주머니 전체조회
export const getMyPocketApi = async () => {
  const res = await instance.get("/api/goods/1/pocket?page=1&size=8&sortBy=createdAt&isAsc=false");
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

// 물품 상세 페이지
export const getDetailPageApi = async (goodsId: any) => {
  const res = await instance.get(`/api/goods/${goodsId}`);
  return res;
};

// 경매물품등록 내 주머니 물품조회
export const getAuctionUploadApi = async () => {
  const res = await instance.get("/api/goods/mypocket");
  return res;
};

// 경매 등록 페이지
export const postAuctionUploadApi = async (body: any, goodsId: any) => {
  const res = await instance.post(`/api/auction/${goodsId}`, body);
  return res;
};
