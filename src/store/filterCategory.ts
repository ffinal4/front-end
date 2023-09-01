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
