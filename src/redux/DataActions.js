import {
  SET_BACKGROUND_PICTURE,
  SET_PROJECTS,
  SET_EDUCATION,
  SET_EXPERIENCE,
  SET_USER_DETAIL,
  SET_SKILLS,
  SET_HANDLES,
  LOADING_DATA,
  SET_ERRORS,
  CLEAR_ERRORS,
  FORM_SUBMITTED,
} from "./types.js";
import axios from "axios";

export const getBackgroundPicture = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`${process.env.REACT_APP_API_URL}/background-image`)
    .then((res) => {
      dispatch({
        type: SET_BACKGROUND_PICTURE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProjects = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`${process.env.REACT_APP_API_URL}/projects`)
    .then((res) => {
      dispatch({
        type: SET_PROJECTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getEducation = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`${process.env.REACT_APP_API_URL}/education`)
    .then((res) => {
      dispatch({
        type: SET_EDUCATION,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getExperience = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`${process.env.REACT_APP_API_URL}/experience`)
    .then((res) => {
      dispatch({
        type: SET_EXPERIENCE,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserDetails = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`${process.env.REACT_APP_API_URL}/user-detail`)
    .then((res) => {
      dispatch({
        type: SET_USER_DETAIL,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSkills = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`${process.env.REACT_APP_API_URL}/skills`)
    .then((res) => {
      dispatch({
        type: SET_SKILLS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getHandles = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`${process.env.REACT_APP_API_URL}/handles`)
    .then((res) => {
      dispatch({
        type: SET_HANDLES,
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
    .post(`${process.env.REACT_APP_API_URL}/get-in-touch/`, inputValues)
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
