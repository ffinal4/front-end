import instance from ".";

// 물품 등록
interface upLoadBody {
  formdata: {
    images: string[];
    sellerPrice: {
      sellerPrice: string
    };
    data: {
      title: string;
      content: string;
      tradeType: string;
      category: string;
      goodsCondition: string;
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
    headers: { "Content-Type": "multipart/form-data" }
  });
  return res;
};
