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

const initialState = {
  loading: false,
  bacground_picture: {},
  projects: [],
  education: [],
  experience: [],
  user_detail: {},
  skills: [],
  handles: [],
  errors: null,
  form_submitted: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_BACKGROUND_PICTURE:
      return {
        ...state,
        bacground_picture: action.payload,
        loading: false,
      };
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
      };
    case SET_EDUCATION:
      return {
        ...state,
        education: action.payload,
        loading: false,
      };
    case SET_EXPERIENCE:
      return {
        ...state,
        experience: action.payload,
        loading: false,
      };
    case SET_USER_DETAIL:
      return {
        ...state,
        user_detail: action.payload,
        loading: false,
      };
    case SET_SKILLS:
      return {
        ...state,
        skills: action.payload,
        loading: false,
      };
    case SET_HANDLES:
      return {
        ...state,
        handles: action.payload,
        loading: false,
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };
    case FORM_SUBMITTED:
      return {
        ...state,
        form_submitted: action.payload,
      };
    default:
      return state;
  }
}
