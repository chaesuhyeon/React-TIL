import {createStore} from 'redux';
import rootReducer from './rootReducer';

// action
// reducer
// store
const store = createStore(rootReducer); // createStore(reducer)

export default store;
