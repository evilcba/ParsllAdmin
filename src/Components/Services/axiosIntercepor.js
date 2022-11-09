import axios, { AxiosError, AxiosRequestConfig } from "axios";
import {
  getAccessTokenFromLocalStorage,
  getRefreshTokenFromLocalStorage,
  setAccessTokenToLocalStorage,
  getAdminAccessTokenFromLocalStorage,
  getAdminRefreshTokenFromLocalStorage,
  setAdminRefreshTokenToLocalStorage,
  setAdminAccessTokenToLocalStorage,
  setRefreshTokenToLocalStorage,
  getEmployeeAccessTokenFromLocalStorage,
  getEmployeeRefreshTokenFromLocalStorage,
  setEmployeeAccessTokenToLocalStorage,
  setEmployeeRefreshTokenToLocalStorage,
  adminlogOut,
  logOut,
  employeeLogOut,
} from "./helpers";

const responses = {
  USERACCESS: "User AccessToken Expired",
  ADMINACCESS: "Admin AccessToken Expired",
  EMPLOYEEACCESS: "Employee AccessToken Expired",
  USERREFRESH: "User RefreshToken Expired",
  EMPLOYEEREFRESH: "Employee RefreshToken Expired",
  ADMINREFRESH: "Admin RefreshToken Expired",
};

Object.freeze(responses);

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
    const adminToken = getAdminAccessTokenFromLocalStorage();

    config.headers["Authorization"] = `Bearer ${adminToken}`;

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

    if (originalResponse.data.message === responses.ADMINREFRESH) {
      return adminlogOut();
    }
    if (originalResponse.data.message === responses.USERREFRESH) {
      logOut();
    }
    if (originalResponse.data.message === responses.EMPLOYEEREFRESH) {
      employeeLogOut();
    }
    // if (
    //   originalResponse.status === 401 &&
    //   !originalRequest._retry &&
    //   originalResponse.data.message === responses.USERACCESS
    // ) {
    //   originalRequest._retry = true;
    //   const refreshToken = getRefreshTokenFromLocalStorage();
    //   return new Promise(function (resolve, reject) {
    //     instance
    //       .post("/api/v1/user/refreshToken", {
    //         refreshToken: refreshToken,
    //       })
    //       .then((res) => {
    //         if (res.status === 201) {
    //           setAccessTokenToLocalStorage(res.data.accessToken);
    //           setRefreshTokenToLocalStorage(res.data.refreshToken);
    //           instance.defaults.headers.common["Authorization"] =
    //             "Bearer " + getAccessTokenFromLocalStorage();
    //           originalRequest.headers["Authorization"] =
    //             "Bearer " + getAccessTokenFromLocalStorage();
    //           resolve(axios(originalRequest));
    //         }
    //       })
    //       .catch((err) => {
    //         reject(err);
    //       });
    //   });
    // }
    if (
      originalResponse.status === 402 &&
      !originalRequest._retry &&
      originalResponse.data.message === responses.ADMINACCESS
    ) {
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

    // if (
    //   originalResponse.status === 403 &&
    //   !originalRequest._retry &&
    //   originalResponse.data.message === responses.EMPLOYEEACCESS
    // ) {
    //   originalRequest._retry = true;
    //   const refreshToken = getEmployeeRefreshTokenFromLocalStorage();
    //   return new Promise(function (resolve, reject) {
    //     instance
    //       .post("/api/v1/employee/refreshToken", {
    //         refreshToken: refreshToken,
    //       })
    //       .then((res) => {
    //         if (res.status === 201) {
    //           setEmployeeAccessTokenToLocalStorage(res.data.accessToken);
    //           setEmployeeRefreshTokenToLocalStorage(res.data.refreshToken);
    //           instance.defaults.headers.common["Authorization"] =
    //             "Bearer " + getAccessTokenFromLocalStorage();
    //           originalRequest.headers["Authorization"] =
    //             "Bearer " + getAccessTokenFromLocalStorage();
    //           resolve(axios(originalRequest));
    //         }
    //       })
    //       .catch((err) => {
    //         reject(err);
    //       });
    //   });
    // }
    if (!originalRequest._retry) {
      originalRequest._retry = true;
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export const axiosGet = (uri, params) => instance.get(uri, params);
export const axiosPost = (uri, params) => instance.post(uri, params);
export const axiosDelete = (uri, params) => instance.delete(uri, params);
export const axiosPut = (uri, params) => instance.put(uri, params);
