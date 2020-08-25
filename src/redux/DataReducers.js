import {
  LOADING_DATA,
  SET_ERRORS,
  CLEAR_ERRORS,
  FORM_SUBMITTED,
  SET_PROFILE,
} from "./types.js";

const initialState = {
  loading: false,
  errors: null,
  profile: {
    background_picture: { image: "" },
    user_detail: {
      name: "",
      email: "",
      address: "",
      description: "",
      image: "",
    },
    education: [
      {
        location: "",
        college_name: "",
        college_link: "",
        degree: {
          name: "",
        },
      },
    ],
    experiences: [
      {
        location: "",
        company_name: "",
        company_link: "",
        designation: {
          name: "",
        },
      },
    ],
    projects: [
      {
        title: "",
        used_languages: "",
        description: "",
        site_link: "",
        github_repo: "",
      },
    ],
    skills: [{ name: "", image: "" }],
    handles: [
      {
        name: "",
        site_link: "",
      },
    ],
  },
  form_submitted: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload,
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
