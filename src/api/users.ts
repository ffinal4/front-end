import instance from ".";

// 회원가입
interface signUpBody {
  nickname: string;
  email: string;
  password: string;
}

export const postSignupApi = async (body: signUpBody) => {
  const res = await instance.post("/api/users/signup", body);
  return res;
};

// 로그인
interface loginBody {
  email: string;
  password: string;
}
export const postLoginApi = async (body: loginBody) => {
  const res = await instance.post("/api/users/login", body);
  return res;
};

// 로그아웃
interface logoutBody {
  accessToken: null | string;
  refreshToken: null | string;
}

export const postLogoutApi = async (body: logoutBody) => {
  const res = await instance.post("/api/users/logout", body);
  return res;
};

// 닉네임 중복 확인
interface checkNicknameBody {
  nickname: string;
}

export const postNicknameApi = async (body: checkNicknameBody) => {
  const res = await instance.post("/api/users/nickname", body);
  return res;
};

// 개인정보수정
// interface profileEditBody {
//   nickname: string;
//   password: string;
//   location: string;
//   userImg: string;
// }
export const patchProfileEditApi = async (body: any) => {
  const res = await instance.patch("/api/users/mypage", body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res;
};

// 마이페이지
export const getMypageApi = async () => {
  const res = await instance.get(`/api/users/mypage`);
  return res;
};

// 찜한 상품 전체 조회
export const getZzimPageApi = async () => {
  const res = await instance.get("/api/users/wishlist");
  return res;
};

// 채팅 목록 조회
export const getChattingListApi = async () => {
  const res = await instance.get(`/api/users/2/chats`);
  return res;
};
