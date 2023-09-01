import { atom } from "recoil";

export const filterCategory = atom({
  key: "filterCategory",
  default: "",
});

export const filterName = atom({
  key: "filterName",
  default: "전체",
});
