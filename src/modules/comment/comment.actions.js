import { createAction } from "redux-act";


// initialize

export const getAllCommentsSaga = createAction("get all comments saga");
export const setAllComments = createAction("get all comments saga");

export const saveCommentSage = createAction("save component saga", (name, text) => ({ name, text }));
export const saveComments = createAction("save component");
