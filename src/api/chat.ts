import instance from ".";

// 채팅 목록 조회
export const getChatApi = async () => {
  const res = await instance.get("/api/chat/");
  return res;
};
