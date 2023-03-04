// import cookies from "js-cookie";
import Cookies from "universal-cookie";
const expires = new Date(Date.now).getTime() + 3600;
const cookies = new Cookies();
//sets the cookies using the token from jwt
export const setCookies = (key, value) => {
  cookies.set(key, value, {
    // domain: "http://localhost:5173/signin",
    expires: expires,
    maxAge: 3600, //1 hr in seconds ....browser banda garera kholda ne milxa
  });
};

//gets the cookies value
export const getCookies = (key) => {
  // const cookies = new Cookies();
  return cookies.get(key);
};

//removes the cookies
export const removeCookies = (key) => {
  // const cookies = new Cookies();

  cookies.remove(key);
};
