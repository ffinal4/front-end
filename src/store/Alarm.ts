import { atom } from "recoil";

export const alarmConnect = atom({
    key: "alarmConnect",
    default: false,
});

export const alarmData= atom({
    key: "alarmData",
    default: null,
});