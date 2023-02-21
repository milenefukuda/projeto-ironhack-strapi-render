import axios from "axios";

const apiURLs = {
  development: "https://projetoviagemapi.onrender.com/api",
  production: "https://projetoviagemapi.onrender.com/api",
};

const api = axios.create({
  baseURL: apiURLs[process.env.NODE_ENV],
});

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer eff3bca192b39d66a0c1efb6be233f5eacd520e7aca5b92569edf7b7f2a087f6d7332074a07705c37b5fd474340c50a4f482011110d691fb2aaee3368ef138609ba43bfd09d17d2e49b8349aa6b1458e178dc09c9598408db5e534e25b372984960b18d0b1f80e0a7ace2f9d90023352ffbb5fb07d5075ef362fd181af3819ea
    `,
  };
  return config;
});

export default api;
