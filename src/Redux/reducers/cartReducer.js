import * as actionType from "../constants/cartConstants";

export const cartReducer = (state = { cartitems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = action.payload;
      const exist = state.cartitems.find((product) => product.id === item.id);

      if (exist) {
        return {
          ...state,
          cartitems: state.cartitems.map((data) =>
            data.product === exist.product ? item : data
          ),
        };
      } else {
        return { ...state, cartitems: [...state.cartitems, item] };
      }

    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartitems: state.cartitems.filter(
          (product) => product.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
