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
export const getAuctionBidListApi = async (page: number, auctionId: number | null) => {
  const res = await instance.get(`/api/auction/${auctionId}/bid/page/${page}`);
  return res;
};

// 입찰 상세 조회
export const getAuctionBidDetailApi = async (auctionId: number, userId: number) => {
  const res = await instance.get(`/api/auction/${auctionId}/bid/${userId}`);
  return res;
};

// 내 경매현황 전체조회
export const getMyAuctionCheckApi = async (page: number, status: string | null) => {
  const res = await instance.get(`/api/auction/users/trade?page=${page}&size=9&sortBy=createdAt&isAsc=false${status}`);
  return res;
};

// 입찰경매 전체조회
export const getBidAuctionApi = async (page: number, status: string | null) => {
  const res = await instance.get(`/api/bid/users/trade?page=${page}&size=9&sortBy=createdAt&isAsc=false&${status}`);
  return res;
};

// 경매 등록자가 관심있는 입찰품 선택
export const postSellerPicksApi = async (body: any, auctionId: number | null) => {
  const res = await instance.post(`/api/auction/${auctionId}/choice/bids`, body);
  return res;
};

// 경매 낙찰품 선택
export const postAucEndApi = async (body: any, auctionId: any) => {
  const res = await instance.post(`/api/auction/${auctionId}/pick/bid/list`, body);
  return res;
};

// 경매 강제 취소
export const deleteAuctionCancelApi = async (auctionId: number) => {
  const res = await instance.delete(`/api/auction/${auctionId}`);
  return res;
};

// 경매 교환 완료
interface AucDoneType {
  requestId: number[];
}

export const postAuctionDoneApi = async (body: AucDoneType, auctionId: number) => {
  const res = await instance.post(`api/auction/${auctionId}/users/accept/completed`, body);
  return res;
};
