import { AxiosError, AxiosResponse } from "axios";
import { axiosPost } from "./axiosIntercepor";

export const getUserIdFromLocalStorage = () => {
  let details = JSON.parse(localStorage.getItem("userszpuolk1289") || "");
  return details?.id;
};
export const getAdminIdFromLocalStorage = () => {
  let details = JSON.parse(localStorage.getItem("adminszpuolk1289") || "");
  return details?.id;
};
export const getEmployeeIdFromLocalStorage = () => {
  let details = JSON.parse(localStorage.getItem("employeeszpuolk1289") || "");
  return details?.id;
};

export const setUserIdToLocalStorage = (userDetails) => {
  return localStorage.setItem("userszpuolk1289", JSON.stringify(userDetails));
};
export const adminlogIn = (token) => {
  return localStorage.setItem("adminszpuolk1289", token);
};
export const logIn = async ({ email, password }) => {
  try {
    const response = await axiosPost("api/v1/admin/login", {
      email: email,
      password: password,
    });
    setAdminAccessTokenToLocalStorage(response.data.accesstoken);
    console.log(response.data.response.accesstoken);
    // window.location.href = "/";
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const register = async (email, password, full_name, phone) => {
  try {
    const res = await axiosPost("user/register", {
      full_name: full_name,
      email: email,
      password: password,
      phone: phone,
    });
    return res;
  } catch (err) {
    return err.response.data[0].message;
  }
};
export const adminlogOut = () => {
  localStorage.removeItem("adminszpuolk1289a");
  localStorage.removeItem("adminszpuolk1289r");
  return (window.location.href = "/admin/login");
};
export const logOut = () => {
  localStorage.removeItem("userszpuolk1289a");
  localStorage.removeItem("userszpuolk1289r");
  return (window.location.href = "/login");
};
export const employeeLogOut = () => {
  localStorage.removeItem("employeeszpuolk1289a");
  localStorage.removeItem("employeeszpuolk1289r");
  return (window.location.href = "/employee/login");
};
export const getAccessTokenFromLocalStorage = () => {
  let accessToken = localStorage.getItem("userszpuolk1289a");
  return accessToken;
};
export const setAccessTokenToLocalStorage = (token) => {
  let accessToken = localStorage.setItem("userszpuolk1289a", token);
  return accessToken;
};
export const getRefreshTokenFromLocalStorage = () => {
  let refreshToken = localStorage.getItem("userszpuolk1289r");
  return refreshToken;
};
export const setRefreshTokenToLocalStorage = (token) => {
  let refreshToken = localStorage.setItem("userszpuolk1289r", token);
  return refreshToken;
};
export const setAdminAccessTokenToLocalStorage = (token) => {
  let accessToken = localStorage.setItem("adminszpuolk1289a", token);
  return accessToken;
};
export const getAdminAccessTokenFromLocalStorage = () => {
  let accessToken = localStorage.getItem("adminszpuolk1289a");
  return accessToken;
};
export const getAdminRefreshTokenFromLocalStorage = () => {
  let refreshToken = localStorage.getItem("adminszpuolk1289r");
  return refreshToken;
};
export const setAdminRefreshTokenToLocalStorage = (token) => {
  let refreshToken = localStorage.setItem("adminszpuolk1289r", token);
  return refreshToken;
};
export const setEmployeeAccessTokenToLocalStorage = (token) => {
  let accessToken = localStorage.setItem("employeeszpuolk1289a", token);
  return accessToken;
};
export const getEmployeeAccessTokenFromLocalStorage = () => {
  let accessToken = localStorage.getItem("employeeszpuolk1289a");
  return accessToken;
};
export const getEmployeeRefreshTokenFromLocalStorage = () => {
  let refreshToken = localStorage.getItem("employeeszpuolk1289r");
  return refreshToken;
};
export const setEmployeeRefreshTokenToLocalStorage = (token) => {
  let refreshToken = localStorage.setItem("employeeszpuolk1289r", token);
  return refreshToken;
};
