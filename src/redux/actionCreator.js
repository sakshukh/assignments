/** @format */

import {
  FETCH_API_FAIL,
  FETCH_API_REQUEST,
  FETCH_API_SUCCESS,
} from "./constant";
import axios from "axios";

// fetch data from the API - https://randomuser.me/api
export const fetchData = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_API_REQUEST,
    });
    const { data } = await axios.get("https://randomuser.me/api");
    console.log("type of: ", typeof data);
    // const { results } = await data;

    dispatch({
      type: FETCH_API_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_API_FAIL,
      payload: error.message,
    });
  }
};
