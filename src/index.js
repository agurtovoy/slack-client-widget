import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import SlackClientWidget from './slack-client-widget';
import 'suitcss-base';
import './index.less';


//import * as reducers from './store/reducers';
//const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
const store = createStore( ( state ) => state );


ReactDOM.render(
    <Provider store={store}>
        <SlackClientWidget />
    </Provider>,
    document.getElementById('root')
);
