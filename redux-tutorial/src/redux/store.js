import {createStore} from 'redux';
import subcribersReducer from './subscribers/reducer';

// action
// reducer
// store
const store = createStore(subcribersReducer); // createStore(reducer)

export default store;
