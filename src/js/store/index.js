import { createStore, applyMiddleware, compose } from 'redux';
import rootRedice from '../reducers/index';
import thunk from 'redux-thunk';
import rootReducer from "../reducers/index";
import logginMiddleware from "../midleware/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
    composeEnhancers(
        applyMiddleware(logginMiddleware,thunk)
    ));

export default store;