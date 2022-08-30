import React from 'react';
import ReactDOM from 'react-dom';
import IRouter from './router';
import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        < IRouter />
    </Provider>,
    document.getElementById('root')
);
