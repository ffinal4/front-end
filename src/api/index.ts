import axios from "axios";

// 서버 Url instance 세팅
const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// // 인터셉터 리스폰스 토큰 담기
instance.interceptors.response.use(
  (response) => {
    if (response.headers.accesstoken) {
      localStorage.setItem("accessToken", response.headers.accesstoken);
    }

    if (response.headers.refreshtoken) {
      localStorage.setItem("refreshToken", response.headers.refreshtoken);
    }

    return response;
  },
  // accessToken 만료시 refreshToke으로 재발급 처리
  // refreshToken api 나오면 수정될수도 있음
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 403) {
      if (error.response.status === 403) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("location");
        alert("로그인이 필요한 서비스입니다.");
        window.location.replace("/login");
      } else if (error.response.data.accessValidationError === true) {
        delete config.headers.accesstoken;
        try {
          const res = await axios(config);
          if (res.status === 200) {
            localStorage.setItem("accessToken", res.headers.accesstoken);
            console.log("accesstoken갱신성공!!");
            return res;
          }
        } catch (error) {
          console.log("토큰리프레시에러", error);
        }
      }
    }
    return Promise.reject(error);
  }
);

// // 인터셉터 리퀘스트 토큰 헤더에싣기
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken) {
      config.headers["accessToken"] = accessToken;
    }
    if (refreshToken) {
      config.headers["refreshToken"] = refreshToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
