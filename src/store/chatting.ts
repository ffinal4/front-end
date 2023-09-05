import { atom } from "recoil";

export const chatOtherUserData = atom({
  key: "chatOtherUserData",
  default: {
    id: 1,
    imageUrl: "",
    nickname: "",
    recentMessage: "",
    recentMessageTime: "",
    roomId: "",
  },
});

// export const webSocketMessage = atom<any>({
//   key: "webSocketMessage",
//   default: [],
// });
