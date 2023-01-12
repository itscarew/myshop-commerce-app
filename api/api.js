import axios from "axios";
// const accessToken = sessionStorage.getItem("accessToken");
//process.env.REACT_APP_BUSINESS_API

export const ShopApi = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    "content-type": "application/json",
  },
});

ShopApi.interceptors.request.use(
  async (config) => {
    // const accessToken = sessionStorage.getItem("accessToken");
    // config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
