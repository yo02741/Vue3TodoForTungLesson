import axios from "axios";

axios.defaults.baseURL = "/api";

export function get(url, param) {
  return new Promise((resolve) => {
    axios
      .get(url, {
        params: param,
      })
      .then(
        (res) => {
          resolve(res);
        },
        (err) => {
          resolve(err.response);
        }
      );
  });
}

export function post(url, param) {
  return new Promise((resolve) => {
    axios.post(url, param).then(
      (res) => {
        resolve(res);
      },
      (err) => {
        resolve(err.response);
      }
    );
  });
}

export const login = (param) => post("/accounts/login", param);
