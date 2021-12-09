import { createAddUserAction, fetchAndSetUsers } from './action/usersAction'
import store from './index'

// store.dispatch(createAddUserAction({
//   id: uuidv4(),
//   name: 'ahahah',
//   phone: 999999
// }));
store.dispatch(fetchAndSetUsers());
