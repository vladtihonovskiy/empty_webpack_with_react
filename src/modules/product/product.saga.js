/* eslint-disable no-unused-vars,import/no-duplicates */
import axios from "axios/index";
import * as productAction from "./product.actions";
import { takeEvery, put, select } from "redux-saga/effects";

import customToastify from "../../customFunction/customToastify";
import { postRequest } from "../../api";
import { loader } from "../../components/Loader/Loader";

function *getAllProduct() {
	loader.show()
	try {
		const result = yield postRequest("getAllProducts", {
		});

		yield put(productAction.setAllProduct(result.products));
	} catch (error) {
		if (!error) {
			console.log(error);
			customToastify(error.message, "error");
		} else {
			customToastify(error, "error");
		}
		loader.hide();
	}
}



export function* watchProduct() {
	yield takeEvery(productAction.getAllProductSaga, getAllProduct);
}


