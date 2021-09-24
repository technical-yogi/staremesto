import * as action from "../constants";
import { fork, all, takeLatest } from "redux-saga/effects";
import Imanager  from "./Imanager";

function* imanagerBind() {
  yield takeLatest(action.API_REQUEST, Imanager);
}
export default function* rootSaga() {
  yield all([fork(imanagerBind)]);
}
