// import { ResultType } from "@remix-run/router/dist/utils";
import axios from "axios";
//connect frontend to backend
export const signup = async (user) => {
  await console.log(user);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axios.post(
    "http://localhost:3000/api/auth/signup",
    user,
    config
  );
};

export const signin = async (login_info) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axios.post(
    "http://localhost:3000/api/auth/signin",
    login_info,
    config
  );
};
export const addData = async (user_info) => {
  const config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axios.post(
    "http://localhost:3000/api/addData",
    user_info,
    config
  );
};
export const getData = async () => {
  const config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axios.get(
    "http://localhost:3000/api/getData",
    config
  );
};

export const getDataById = async (account_no) => {
  console.log(account_no);
  const config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  };

  // await axios.get(
  //   `http://localhost:3000/api/getData/${account_no}`,
  //   config
  // ).then((res) => {
  //   console.log(res);
  // }).catch((err) => {
  //   if (err.response.status === 400) {
  //     console.error('Bad Request:', err.response.data);
  //   } else {
  //     console.error(err);
  //   }
  // });

  return await axios.get(
    `http://localhost:3000/api/getData/${account_no}`,
    config
  )



};

