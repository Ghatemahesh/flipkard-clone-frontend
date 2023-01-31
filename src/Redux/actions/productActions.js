import axios from "axios";
import * as actionType from "../constants/ProductConstance";
export const getproduct = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`https://flipcart-backend-api-production.up.railway.app/products`);
    return dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    return dispatch({
      type: actionType.GET_PRODUCTS_FAILED,
      payload: error.message,
    });
  }
};

export const getProductById = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_PRODUCT_BY_ID_REQUESTED });
    let { data } = await axios.get(`https://flipcart-backend-api-production.up.railway.app/product/${id}`);
    dispatch({ type: actionType.GET_PRODUCT_BY_ID_SUCCESSFULL, payload: data });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCT_BY_ID_FAILED,
      payload: error.message,
    });
  }
};
