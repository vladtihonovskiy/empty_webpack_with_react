import createSagaMiddleware from 'redux-saga';
import { compose, createStore, combineReducers, applyMiddleware } from "redux";

import product from "./product/product.reducer";
import comment from "./comment/comment.reducer";
import basket from "./basket/basket.reducer";

import { watchProduct } from "./product/product.saga";
import { watchComments } from "./comment/comment.saga";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ product, comment, basket });

const store = createStore(rootReducer, compose(
	applyMiddleware(sagaMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

sagaMiddleware.run(watchProduct);
sagaMiddleware.run(watchComments);
// store.dispatch(initializeSaga());


export default store;
