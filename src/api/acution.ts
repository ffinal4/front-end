import instance from ".";

// 경매 전체 조회 ( 모든 사람이 조회 가능)
export const getAuctionListApi = async () => {
  const res = await instance.get(`/api/auction?page=${1}&size=${20}&sortBy=createdAt&isAsc=${false}`);
  return res;
};
