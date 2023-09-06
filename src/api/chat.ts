import instance from ".";

// 채팅 목록 조회
export const getChatApi = async () => {
  const res = await instance.get("/api/chat");
  return res;
};

// 채팅상세(채팅내역)
export const getChatDetailApi = async (roomId: string) => {
  const res = await instance.get(`/api/chat/room/${roomId}`);
  return res;
};

// 채팅방 생성(교환요청 수락시 post)
export const postMakeChatApi = async (goodsId: any, body: any) => {
  const res = await instance.post(`/api/chat/room/${goodsId}`, body);
  return res;
};
