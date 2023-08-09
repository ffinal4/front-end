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
