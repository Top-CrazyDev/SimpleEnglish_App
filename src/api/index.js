import axios from "axios";
import { useDispatch } from "react-redux";
import {
  API_REQUEST,
  ERROR_RESPONSE,
  LOGIN_FALIED,
  SET_COMMON_STATUS,
  SUCCESS_RESPONSE,
} from "../redux/actionTypes";
import { storage } from "../utils/storage";
import { store } from "../redux/store";

// export const SERVER_URL = "https://dev.api.fitnest.app"
export const SERVER_URL = "http://localhost:5000";

const jwtInterceoptor = axios.create({});

jwtInterceoptor.interceptors.request.use(async (config) => {
  store.dispatch({ type: API_REQUEST });

  let tokens = await storage.getItem("tokens");
  if (tokens && tokens.accessToken)
    config.headers.set("Authorization", `bearer ${tokens.accessToken}`);
  return config;
});

jwtInterceoptor.interceptors.response.use(
  (response) => {
    store.dispatch({ type: SUCCESS_RESPONSE, payload: "success" });
    return response;
  },
  async (error) => {
    console.log("error-------", error.response.status);
    console.log(error.response.data.message);
    store.dispatch({ type: ERROR_RESPONSE, payload: "error" });
    try {
      if (error.response.status === 401) {
        const tokens = await storage.getItem("tokens");

        if (tokens && tokens.accessToken && tokens.refreshToken) {
          const payload = {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
          };
          let apiResponse = await axios.post(
            `${SERVER_URL}/api/auth/refreshtoken`,
            payload
          );
          await storage.setItem("tokens", apiResponse.data.tokens);
          error.config.headers.set(
            "Authorization",
            `bearer ${apiResponse.data.tokens.accessToken}`
          );
        }
        return axios(error.config);
      } else {
        // await storage.removeItem("tokens");
        return Promise.reject(error);
      }
    } catch (e) {
      if (error.response.status == 401) store.dispatch({ type: LOGIN_FALIED });
      console.log(e);
    }
  }
);

const signup = (data) => axios.post(`${SERVER_URL}/api/auth/register`, data);

const login = (data) =>
  jwtInterceoptor.post(`${SERVER_URL}/api/auth/login`, data);

const verifyOtp = (otpCode) =>
  jwtInterceoptor.put(`${SERVER_URL}/api/auth/verify-otp/${otpCode}`);

const resendOtpEmail = (email) =>
  axios.put(`${SERVER_URL}/api/auth/resend-otp-email/${email}`);

const updateUser = (id, data) =>
  jwtInterceoptor.post(`${SERVER_URL}/api/user/${id}`, data);

const updateProfile = (id, data) =>
  jwtInterceoptor.post(`${SERVER_URL}/api/profile/${id}`, data);

const createProfile = (data) =>
  jwtInterceoptor.post(`${SERVER_URL}/api/profile/`, data);

const getQuestions = () => jwtInterceoptor.get(`${SERVER_URL}/api/question`);

const getUser = (id) => jwtInterceoptor.get(`${SERVER_URL}/api/user/${id}`);

const getProfile = (id) =>
  jwtInterceoptor.get(`${SERVER_URL}/api/profile/${id}`);

export const api = {
  login,
  signup,
  verifyOtp,
  resendOtpEmail,
  updateProfile,
  updateUser,
  getQuestions,
  getUser,
  getProfile,
  createProfile,
};
