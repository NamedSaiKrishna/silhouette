import {
  SET_PROFILE,
  LOADING_DATA,
  SET_ERRORS,
  CLEAR_ERRORS,
  FORM_SUBMITTED,
} from "./types.js";
import axios from "axios";

export const getProfile = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`${process.env.REACT_APP_API_URL}/profile`)
    .then((res) => {
      dispatch({
        type: SET_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postResponses = (inputValues) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post(`${process.env.REACT_APP_API_URL}/contact/`, inputValues)
    .then((res) => {
      dispatch({
        type: CLEAR_ERRORS,
        payload: null,
      });
      dispatch({
        type: FORM_SUBMITTED,
        payload: true,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const closeForm = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  dispatch({
    type: FORM_SUBMITTED,
    payload: false,
  });
};
