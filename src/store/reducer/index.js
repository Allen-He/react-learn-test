import { combineReducers } from "redux";
import loginUser from "./loginUser";
import users from "./users";


// export default function reducer(state = {}, action) {
//   const newState = {
//     loginUser: loginUser(state.loginUser, action),
//     users: users(state.users, action)
//   }
//   return newState;
// }

export default combineReducers({
  loginUser,
  users
});
