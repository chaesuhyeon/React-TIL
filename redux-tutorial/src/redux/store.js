import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger' // 미들웨어
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// action
// reducer
// store

const middleware = [logger,thunk]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware))) ; // createStore(reducer) , 두번째 인자로 미들웨어 넣어줌

export default store;
