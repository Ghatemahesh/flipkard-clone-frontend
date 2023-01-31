import * as actionType from "../constants/ProductConstance";

export const getProductReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCTS_SUCCESS:
      return { product: action.payload };

    case actionType.GET_PRODUCTS_FAILED:
      return { error: action.payload };

    default:
      return state;
  }
};

export const getProductByIdReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_BY_ID_REQUESTED:
      return { loading: true };
    case actionType.GET_PRODUCT_BY_ID_SUCCESSFULL:
      return { loading: false, product: action.payload };
    case actionType.GET_PRODUCT_BY_ID_FAILED:
      return { loading: false, error: action.payload };
    case actionType.GET_PRODUCT_BY_ID_RESET:
      return { product: {} };
    default:
      return state;
  }
};

