import { createReducer } from "redux-act";

import * as actions from "./product.actions";


const initialState = {
	products:[],
	productGetStatus: "",
};

const reducer = {
	[actions.getAllProductSaga]: (state) => ({
		...state,
		productGetStatus: "pending"
	}),
	[actions.setAllProduct]: (state, products) => ({
		...state,
		productGetStatus: "pending",
		products: products
	}),
};


export default createReducer(reducer, initialState);
