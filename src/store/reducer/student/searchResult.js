import { actionTypes } from "../../action/student/searchResult"

const initialState = {
  datas: [],
  total: 0,
  isLoading: false
}

/** 控制查询结果的reducer */
const searchResultReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.setStudentsAndTotal:
      return { ...state, ...payload };
    case actionTypes.setIsLoading:
      return { ...state, isLoading: payload};
    default:
      return state;
  }
}

export default searchResultReducer;
