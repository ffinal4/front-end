import instance from ".";

// 경매 전체 조회 ( 모든 사람이 조회 가능)
export const getAuctionListApi = async (page: number, category: string | null, asc: boolean) => {
  const res = await instance.get(`/api/auction?page=${page}&size=${20}&sortBy=createdAt&isAsc=${asc}${category}`);
  return res;
};

// 경매 등록 페이지
export const postAuctionUploadApi = async (body: any, goodsId: any) => {
  const res = await instance.post(`/api/auction/${goodsId}`, body);
  return res;
};

// 경매 물품 상세 페이지
export const getAuctionDetailApi = async (auctionId: any) => {
  const res = await instance.get(`/api/auction/${auctionId}`);
  return res;
};

// 경매 입찰 등록
interface BidPick {
  goodsId: string | number[];
}

export const postAuctionBidApi = async (body: BidPick, auctionId: number) => {
  const res = await instance.post(`/api/auction/${auctionId}/bid`, body);
  return res;
};

// 입찰 전체 조회
export const getAuctionBidListApi = async (auctionId: number) => {
  const res = await instance.get(`/api/auction/${auctionId}/bid/1`);
  return res;
};

export const getAuctionBidListChoiceApi = async (auctionId: number) => {
  const res = await instance.get(`/api/auction/${auctionId}/bid?page=1&size=5&sortBy=createdAt&isAsc=false`);
  return res;
};

// 내 경매현황 전체조회
export const getMyAuctionCheckApi = async () => {
  const res = await instance.get("/api/auction/users/trade?page=1&size=5&sortBy=createdAt&isAsc=false&status=REQUEST");
  return res;
};

// 입찰경매 전체조회
export const getBidAuctionApi = async () => {
  const res = await instance.get(
    "/api/auction/bid/users/trade?page=1&size=5&sortBy=createdAt&isAsc=false&status=SUCCESS"
  );
  return res;
};
