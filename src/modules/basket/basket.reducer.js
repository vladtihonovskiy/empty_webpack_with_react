import { createReducer } from "redux-act";

import * as actions from "./basket.actions";
import customToastify from "../../customFunction/customToastify";
import _ from 'lodash';



const initialState = {
	basket:[],
};

const reducer = {
	[actions.addProduct]: (state, addProductData) => {
		let { basket } = state;

		return {
			...state,
			basket: addProduct()
		};

		function addProduct() {

			if(!addProductData.increment) {
				customToastify("Товар добавленн в корзину", "success");
			}

			const index = basket.findIndex(product => {
				return product._id === addProductData._id
			});

			if (index > -1) {
				const basketData = _.cloneDeep(state.basket);
				basketData[index].count ++;
				return basketData;
			}

			else {
				const basketData = _.cloneDeep(state.basket);
				basketData.push({_id: addProductData._id, count: 1});
				return basketData;
			}
		}
	},

	[actions.decrementProduct]: (state, _id) => {
		let { basket } = state;

		return {
			...state,
			basket: decrementProduct()
		};

		function decrementProduct() {

			const index = basket.findIndex(product => {
				return product._id === _id
			});

			const basketData = _.cloneDeep(state.basket);
			basketData[index].count--;
			return basketData;
		}
	},

	[actions.deleteProduct]: (state, _id) => {
		let { basket } = state;

		return {
			...state,
			basket: deleteProduct()
		};

		function deleteProduct() {

			const index = basket.findIndex(product => {
				return product._id === _id
			});

			let basketData = _.cloneDeep(state.basket);

			basketData.splice(index, 1);
			return basketData;
		}
	},
};


export default createReducer(reducer, initialState);
