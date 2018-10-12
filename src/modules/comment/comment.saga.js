/* eslint-disable no-unused-vars,import/no-duplicates */
import axios from "axios/index";
import * as componentAction from "./comment.actions";
import { takeEvery, put, select } from "redux-saga/effects";

import customToastify from "../../customFunction/customToastify";
import { postRequest } from "../../api";

function *saveComment(data) {
	try {
		const result = yield postRequest("commentSave", { name: data.payload.name, text: data.payload.text});
		debugger;
		yield put(componentAction.saveComments(result.status));

		customToastify("Коментарий отправлен на обработку", "success");
	} catch (error) {
		customToastify(error.message, "error");
	}
}

function *getComments() {
	try {
		const result = yield postRequest("getAllComments", {});

		yield put(componentAction.setAllComments(result.comments));

	} catch (error) {
		customToastify(error.message, "error");

	}
}



export function* watchComments() {
	yield takeEvery(componentAction.saveCommentSage, saveComment);
	yield takeEvery(componentAction.getAllCommentsSaga, getComments);
}


