import { createAction } from "redux-actions";
import * as constant from "../constants";

export const apiRequest = createAction(constant.API_REQUEST);
export const apiSuccess = createAction(constant.API_SUCCESS);
export const apiError = createAction(constant.API_ERROR);