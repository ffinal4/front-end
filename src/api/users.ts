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

// 개인정보수정
interface profileEditBody {
  nickname: string;
  password: string;
  location: string;
  userImg: string;
}
export const patchProfileEditApi = async (
  userId: string,
  body: profileEditBody
) => {
  const res = await instance.patch(`/api/users/${userId}`, body);
  return res;
};

// 마이페이지
export const getMypageApi = async (userId : any) => {
  const res = await instance.get(`/api/users/${userId}`);
  return res;
};
