import { setCookies, getCookies, removeCookies } from "./cookies";

export const setAuthentication = (token, user) => {
  setCookies("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

export const isAuthenticated = () => {
  if (getCookies("token") && localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};

export const logout = () => {
  removeCookies("token");
  localStorage.removeItem("user");
  localStorage.removeItem("KYC");
};
