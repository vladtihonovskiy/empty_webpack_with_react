import { createReducer } from "redux-act";

import * as actions from "./comment.actions";


const initialState = {
	comments:[],
	commentGetStatus: "",
	commentSaveStatus: "",
};

const reducer = {
	[actions.getAllCommentsSaga]: (state) => ({
		...state,
		commentGetStatus: "pending"
	}),
	[actions.setAllComments]: (state, comments) => ({
		...state,
		commentGetStatus: "success",
		comments: comments
	}),
	[actions.saveCommentSage]: (state) => ({
		...state,
		commentSaveStatus: "pending",
	}),
	[actions.saveComments]: (state) => ({
		...state,
		commentSaveStatus: "success",
	}),
};


export default createReducer(reducer, initialState);
