import instance from ".";

interface upLoadBody {
  formdata: {
    images: string;
    data: {
      title: string;
      content: string;
      images: string;
      category: string;
      goodsCondition: string;
      location: string;
    };
    wanted: {
      title: string;
      content: string;
      category: string;
    };
  };
}
export const postUploadApi = async (body: upLoadBody) => {
  const res = await instance.post("/api/users/signup", body);
  return res;
};
