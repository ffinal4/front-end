import { atom } from "recoil";

export const filterCategory = atom({
  key: "filterCategory",
  default: "",
});

export const filterName = atom({
  key: "filterName",
  default: "전체",
});

// filterAsc값이 false이면 최신순, true이면 오래된순
export const filterAsc = atom({
  key: "filterAsc",
  default: false,
});

// 교환요청페이지 - 받은요청 filter
export const requestCategory = atom({ key: "requestCategory", default: "" });
export const getRequestFilter = atom({
  key: "getRequestFilter",
  default: "",
});

// 교환요청페이지 - 보낸요청 filter
export const sendRequestFilter = atom({
  key: "sendRequestFilter",
  default: "",
});

//경매현황페이지 - 내경매 filter
export const myAuctionFilter = atom({
  key: "AuctionFilterName",
  default: "전체",
});
