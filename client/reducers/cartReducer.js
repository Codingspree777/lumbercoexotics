import * as types from '../constants/actionTypes';

const initialState = {
  wood: {type: 'ash', price: 20},
  stain: {type: 'purple', price: 30},
  base: 50,
  total: 100
};

function calcTotal(base, woodPrice, stainPrice) {
  return base + woodPrice + stainPrice;
}

const cartReducer = (state = initialState, action) => {
  console.log('action.payload', action.payload);
  switch(action.type) {
    case types.SELECT_WOOD:
      return {
        ...state,
        wood: {type: action.payload, price: action.payload.price},
        total: calcTotal(state.base, action.payload.price, state.stain.price)
      };
    case types.SELECT_STAIN:
      return {
        ...state,
        stain: {type: action.payload.stain, price: action.payload.price},
        total: calcTotal(state.base, state.wood.price,action.payload.price)
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;