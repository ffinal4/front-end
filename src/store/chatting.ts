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
    title: "",
  },
});

// export const webSocketMessage = atom<any>({
//   key: "webSocketMessage",
//   default: [],
// });

export const makeChatAuctionGoodsId = atom({
  key: "makeChatAuctionGoodsId",
  default: null,
});

export const makeChatAuctionBuyerId = atom({
  key: "makeChatAuctionBuyerId",
  default: null,
});

export const myProfileImage = atom({
  key: "myProfileImage",
  default: null,
});

export const otherProfileImage = atom({
  key: "otherProfileImage",
  default: null,
});
