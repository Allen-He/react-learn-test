import { actionTypes } from "../../action/counter";

const initialState = 10;

const counterReducer = (state = initialState, { type }) => {
  switch (type) {
    case actionTypes.increase:
      return state + 1;
    case  actionTypes.decrease:
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;
