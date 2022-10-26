import axios, { AxiosRequestConfig } from "axios";
import {
  getAccessTokenFromLocalStorage,
  getRefreshTokenFromLocalStorage,
  setAccessTokenToLocalStorage,
  getAdminAccessTokenFromLocalStorage,
  getAdminRefreshTokenFromLocalStorage,
  setAdminRefreshTokenToLocalStorage,
  setAdminAccessTokenToLocalStorage,
  setRefreshTokenToLocalStorage,
} from "./helpers";
const instance = axios.create({
  baseURL: "http://localhost:9494",
});
instance.interceptors.request.use(
  async (config) => {

    if (config.url !== undefined) {
      if (
        config.url?.indexOf("register") > -1 ||
        config.url?.indexOf("login") > -1 ||
        config.url?.indexOf("public") > -1
      ) {
        return config;
      }
      if (config.headers !== undefined) {
        if (config.url?.indexOf("user/refreshToken") > -1) {
          config.headers[
            "Authorization"
          ] = `Bearer ${getRefreshTokenFromLocalStorage()}`;
          return config;
        }
        if (config.url?.indexOf("admin/refreshToken") > -1) {
          config.headers[
            "Authorization"
          ] = `Bearer ${getAdminRefreshTokenFromLocalStorage()}`;
          return config;
        }
      }
    }
    const token = getAccessTokenFromLocalStorage();
    const adminToken = getAdminAccessTokenFromLocalStorage();

    if (token) {
      if (config.headers !== undefined) {
        config.headers["Authorization"] = "Bearer " + token;
      }
    }
    if (adminToken) {
      if (config.headers !== undefined) {
        if (config.url?.includes("/api/v1/admin")) {
          config.headers["Authorization"] = "Bearer " + adminToken;
        }
      }
    }
    return config;
  },

  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    const originalResponse = error.response;
    if (originalResponse.status === 402 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getAdminRefreshTokenFromLocalStorage();
      return new Promise(function (resolve, reject) {
        instance
          .post("/api/v1/admin/refreshToken", {
            refreshToken: refreshToken,
          })
          .then((res) => {
            if (res.status === 201) {
              setAdminAccessTokenToLocalStorage(res.data.accessToken);
              setAdminRefreshTokenToLocalStorage(res.data.refreshToken);

              instance.defaults.headers.common["Authorization"] =
                "Bearer " + getAccessTokenFromLocalStorage();
              originalRequest.headers["Authorization"] =
                "Bearer " + getAccessTokenFromLocalStorage();
              resolve(axios(originalRequest));
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
    if (originalResponse.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getRefreshTokenFromLocalStorage();
      return new Promise(function (resolve, reject) {
        instance
          .post("/api/v1/user/refreshToken", {
            refreshToken: refreshToken,
          })
          .then((res) => {
            if (res.status === 201) {
              setAccessTokenToLocalStorage(res.data.accessToken);
              setRefreshTokenToLocalStorage(res.data.refreshToken);
              instance.defaults.headers.common["Authorization"] =
                "Bearer " + getAccessTokenFromLocalStorage();
              originalRequest.headers["Authorization"] =
                "Bearer " + getAccessTokenFromLocalStorage();
              resolve(axios(originalRequest));
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
    if (!originalRequest._retry) {
      originalRequest._retry = true;
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export const axiosGet = (uri, params ) =>
  instance.get(uri, params);
export const axiosPost = (uri, params) =>
  instance.post(uri, params);
export const axiosDelete = (uri, params) =>
  instance.delete(uri, params);
export const axiosPut = (uri, params) =>
  instance.put(uri, params);
