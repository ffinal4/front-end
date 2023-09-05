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
