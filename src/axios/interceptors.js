import axios from "axios";

export default function interceptors() {
  axios.interceptors.request.use(
    (config) => config,
    (err) => Promise.reject(err)
  );
  axios.interceptors.response.use(
    (res) => res,
    (err) => Promise.reject(err)
  );
}
