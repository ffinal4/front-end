import instance from ".";

// 레이팅 문제요청
export const getRatingStartApi = async () => {
    const res = await instance.get("/api/ratings");
    return res;
};

// 레이팅 가격제출
interface RatingPrice {
    goodsId: any;
    ratingPrice: any;
};

export const postRatingSubmitApi = async (body : RatingPrice) => {
    const res = await instance.post("/api/ratings");
    return res;
};