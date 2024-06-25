import { api } from "../../api";
import jwtDecode from "jwt-decode";
import {
  LOGIN_FALIED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SET_COMMON_STATUS,
  UPDATE_PROFILE,
  UPDATE_USER,
} from "../actionTypes";
import { storage } from "../../utils/storage";
import Toast from "react-native-toast-message";

export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const res = await api.login(data);
    const user = jwtDecode(res.data.tokens.accessToken);
    await storage.setItem("tokens", res.data.tokens);
    dispatch({ type: LOGIN_SUCCESS, payload: user });
    
  } catch (err) {
    dispatch({ type: LOGIN_FALIED });
    dispatch({
      type: SET_COMMON_STATUS,
      payload: [false, true, err.response.data.message],
    });
  }
};

export const verifyOtp = (otp, setVisible) => async (dispatch) => {
  try {
    const res = await api.verifyOtp(otp);
    const user = jwtDecode(res.data.tokens.accessToken);
    await storage.setItem("tokens", res.data.tokens);
    dispatch({ type: LOGIN_SUCCESS, payload: user });
    setVisible(true);
  } catch (err) {
    Toast.show({
      type: "error",
      text1: "OTP is incorrect",
      text2: "Please provide correct 4 digits.",
    });
    dispatch({
      type: SET_COMMON_STATUS,
      payload: [false, true, err.response.data.message],
    });
  }
};

export const updateProfile = (id, data, navigation) => async (dispatch) => {
  try {
    const res = await api.updateProfile(id, data);
    dispatch({ type: UPDATE_PROFILE, payload: res.data.profile });
    navigation.navigate("Home");
  } catch (err) {
    Toast.show({
      type: "error",
      text1: "Server error",
      text2: "Please check your internet connection.",
    });
    dispatch({
      type: SET_COMMON_STATUS,
      payload: [false, true, err.response.data.message],
    });
  }
};

export const createProfile = (data) => async (dispatch) => {
  try {
    const res = await api.createProfile(data);
    dispatch({ type: UPDATE_PROFILE, payload: res.data.profile });
  } catch (err) {
    dispatch({
      type: SET_COMMON_STATUS,
      payload: [false, true, err.response.data.message],
    });
  }
};

export const updateUser = (id, data) => async (dispatch) => {
  try {
    const res = await api.updateUser(id, data);
    dispatch({ type: UPDATE_USER, payload: res.data.user });
  } catch (err) {
    Toast.show({
      type: "error",
      text1: "Server error",
      text2: err.response.data.message,
    });
    dispatch({
      type: SET_COMMON_STATUS,
      payload: [false, true, err.response.data.message],
    });
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const res = await api.getUser(id);
    console.log("123123123-----", res.data.user)
    dispatch({ type: UPDATE_USER, payload: res.data.user });
  } catch (err) {
    dispatch({
      type: SET_COMMON_STATUS,
      payload: [false, true, err.response.data.message],
    });
  }
};

export const getProfile = (id) => async (dispatch) => {
  try {
    const res = await api.getProfile(id);
    dispatch({ type: UPDATE_PROFILE, payload: res.data.profile });
  } catch (err) {
    dispatch({
      type: SET_COMMON_STATUS,
      payload: [false, true, err.response.data.message],
    });
  }
};
