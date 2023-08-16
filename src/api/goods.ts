import instance from ".";

// 물물교환 전체 조회
export const getGoodsApi = async () => {
  const res = await instance.get(`/api/goods/page=${1}&size=${20}&sortBy=createdAt&isAsc=${false}`);
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
