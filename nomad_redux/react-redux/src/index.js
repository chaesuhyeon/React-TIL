import React from 'react';
import ReactDOM  from 'react-dom/client';  // react version 18부터는 react-dom/client으로 ! 
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);


