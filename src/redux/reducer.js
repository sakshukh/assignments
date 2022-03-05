/** @format */

import {
  FETCH_API_FAIL,
  FETCH_API_REQUEST,
  FETCH_API_SUCCESS,
} from "./constant";

// will take action according to the type of the action
export const reducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case FETCH_API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_API_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_API_FAIL:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
